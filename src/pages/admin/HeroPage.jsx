import { useState, useEffect } from "react";
import Icon from "../../components/Admin/ui/Icon";
import ConfirmDialog from "../../components/Admin/ui/ConfirmDialog";
import { LoadingGrid, EmptyState } from "../../components/Admin/ui/LoadingGrid";
import SlideForm from "../../components/Admin/SlideForm";
import { apiFetch, API, authHeaders } from "../../utils/api";
import { primaryBtn, iconBtn, listCard } from "./../style/shared";

export default function HeroPage({ toast }) {
  const [slides, setSlides] = useState([]);
  const [contentSlides, setContentSlides] = useState([]);
  const [visibleContentSlides, setVisibleContentSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editSlide, setEditSlide] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [editContentSlide, setEditContentSlide] = useState(null);

  const getId = (value) => value?._id || value?.id || value;

  const findContentSlide = (id) => {
    if (!id) return null;

    return contentSlides.find((item) => String(item._id) === String(id));
  };

  const getOverlayTitle = (slide, index) => {
    if (slide.overlayText && typeof slide.overlayText === "object") {
      return (
        slide.overlayText.heading ||
        slide.overlayText.label ||
        `Slide ${index + 1}`
      );
    }

    const contentSlide = findContentSlide(slide.overlayText);

    return contentSlide?.heading || contentSlide?.label || `Slide ${index + 1}`;
  };

  const getOverlayDescription = (slide) => {
    if (slide.overlayText && typeof slide.overlayText === "object") {
      return slide.overlayText.description;
    }

    const contentSlide = findContentSlide(slide.overlayText);

    return contentSlide?.description;
  };

  const isContentSlideVisible = (id) => {
    if (!visibleContentSlides || visibleContentSlides.length === 0) return true;

    return visibleContentSlides.some(
      (item) => String(getId(item)) === String(id),
    );
  };

  const load = async () => {
    setLoading(true);

    try {
      const [homeData, contentData] = await Promise.all([
        apiFetch("/home?admin=true"),
        apiFetch("/contentSlides").catch(() => null),
      ]);

      const heroSlides = homeData.slides || homeData.data?.slides || [];
      const baseContentSlides =
        homeData.contentSlides ||
        homeData.data?.contentSlides ||
        contentData?.slides ||
        contentData?.data?.slides ||
        [];

      const selectedContentSlides =
        homeData.visibleContentSlides ||
        homeData.data?.visibleContentSlides ||
        [];

      setSlides(heroSlides);
      setContentSlides(baseContentSlides);
      setVisibleContentSlides(selectedContentSlides);
    } catch {
      toast.show("Failed to load hero section", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const toggleSlide = async (id, current) => {
    try {
      const res = await fetch(`${API}/home/slides/${id}/toggle`, {
        method: "PATCH",
        headers: authHeaders(),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || "Failed to update slide");
      }

      setSlides((prev) =>
        prev.map((slide) =>
          slide._id === id ? { ...slide, isActive: data.isActive } : slide,
        ),
      );

      toast.show(data.isActive ? "Slide enabled" : "Slide disabled");
    } catch (err) {
      toast.show(err.message || "Failed to update slide", "error");
    }
  };

  const deleteSlide = async (id) => {
    try {
      await fetch(`${API}/home/slides/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });

      setSlides((prev) => prev.filter((slide) => slide._id !== id));
      toast.show("Slide deleted successfully");
    } catch {
      toast.show("Failed to delete slide", "error");
    } finally {
      setConfirm(null);
    }
  };
  const toggleContentSlide = async (id) => {
    try {
      const allContentIds = contentSlides.map((slide) => String(slide._id));

      const currentVisibleIds =
        visibleContentSlides.length === 0
          ? allContentIds
          : visibleContentSlides.map((item) => String(getId(item)));

      const isVisible = currentVisibleIds.includes(String(id));

      let nextVisibleIds = isVisible
        ? currentVisibleIds.filter((itemId) => itemId !== String(id))
        : [...currentVisibleIds, String(id)];

      nextVisibleIds = [...new Set(nextVisibleIds)];

      if (nextVisibleIds.length === 0) {
        toast.show(
          "At least one base content slide must remain visible",
          "error",
        );
        return;
      }

      const payloadIds =
        nextVisibleIds.length === allContentIds.length ? [] : nextVisibleIds;

      const res = await fetch(`${API}/home/visible-slides`, {
        method: "PATCH",
        headers: {
          ...authHeaders(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          visibleContentSlides: payloadIds,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          data?.message || "Failed to update content slide visibility",
        );
      }

      setVisibleContentSlides(payloadIds);
      toast.show(isVisible ? "Content slide hidden" : "Content slide visible");
    } catch (err) {
      toast.show(err.message || "Failed to update content slide", "error");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <div>
          <h1
            style={{
              color: "#f1f5f9",
              fontSize: 22,
              fontWeight: 700,
              margin: "0 0 4px",
            }}
          >
            Hero Section
          </h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>
            Manage the main website hero slider
          </p>
        </div>

        <button
          onClick={() => {
            setEditSlide(null);
            setShowAdd(true);
          }}
          style={primaryBtn}
        >
          <Icon name="plus" size={16} /> Add Slide
        </button>
      </div>

      {loading ? (
        <LoadingGrid />
      ) : (
        <>
          <section style={{ marginBottom: 28 }}>
            <div style={{ marginBottom: 12 }}>
              <h2
                style={{
                  color: "#f1f5f9",
                  fontSize: 16,
                  fontWeight: 700,
                  margin: "0 0 4px",
                }}
              >
                Hero Slides
              </h2>
              <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>
                Uploaded image and video slides displayed in the hero section
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {slides.length === 0 && (
                <EmptyState icon="hero" label="No hero slides found" />
              )}

              {slides.map((slide, index) => {
                const title = getOverlayTitle(slide, index);
                const description = getOverlayDescription(slide);

                return (
                  <div
                    key={slide._id}
                    style={{
                      ...listCard,
                      alignItems: "flex-start",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 120,
                        height: 72,
                        borderRadius: 8,
                        overflow: "hidden",
                        flexShrink: 0,
                        background: "#1f2937",
                        position: "relative",
                      }}
                    >
                      {slide.type === "image" && slide.imageUrl ? (
                        <img
                          src={slide.imageUrl}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : slide.type === "video" && slide.videoUrl ? (
                        <video
                          src={slide.videoUrl}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          muted
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#374151",
                          }}
                        >
                          <Icon
                            name={slide.type === "video" ? "video" : "image"}
                            size={28}
                          />
                        </div>
                      )}

                      <span
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: 4,
                          fontSize: 10,
                          padding: "2px 6px",
                          borderRadius: 4,
                          background:
                            slide.type === "video" ? "#3b1d8a" : "#083344",
                          color: slide.type === "video" ? "#a78bfa" : "#22d3ee",
                          fontWeight: 600,
                        }}
                      >
                        {slide.type === "video" ? "Video" : "Image"}
                      </span>
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            color: "#f1f5f9",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                        >
                          {title}
                        </span>

                        <span
                          style={{
                            fontSize: 11,
                            padding: "2px 8px",
                            borderRadius: 20,
                            fontWeight: 600,
                            background: slide.isActive ? "#064e3b" : "#1f2937",
                            color: slide.isActive ? "#34d399" : "#6b7280",
                          }}
                        >
                          {slide.isActive ? "Active" : "Hidden"}
                        </span>
                      </div>

                      {slide.type === "image" && (
                        <p
                          style={{
                            color: "#6b7280",
                            fontSize: 12,
                            margin: 0,
                          }}
                        >
                          Overlay text:{" "}
                          {slide.showOverlay ? "Visible" : "Hidden"} | Logo:{" "}
                          {slide.showLogo ? "Visible" : "Hidden"}
                        </p>
                      )}

                      <p
                        style={{
                          color: "#6b7280",
                          fontSize: 12,
                          margin: "4px 0 0",
                        }}
                      >
                        Duration: {slide.durationSeconds || 10}s
                      </p>

                      {description && (
                        <p
                          style={{
                            color: "#4b5563",
                            fontSize: 12,
                            margin: "4px 0 0",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {description}
                        </p>
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <button
                        onClick={() => toggleSlide(slide._id, slide.isActive)}
                        style={{
                          ...iconBtn,
                          color: slide.isActive ? "#34d399" : "#6b7280",
                        }}
                      >
                        <Icon
                          name={slide.isActive ? "toggle-on" : "toggle-off"}
                          size={18}
                        />
                      </button>

                      <button
                        onClick={() => {
                          setEditSlide(slide);
                          setShowAdd(true);
                        }}
                        style={iconBtn}
                      >
                        <Icon name="edit" size={16} />
                      </button>

                      <button
                        onClick={() => setConfirm(slide._id)}
                        style={{ ...iconBtn, color: "#f87171" }}
                      >
                        <Icon name="trash" size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div style={{ marginBottom: 12 }}>
              <h2
                style={{
                  color: "#f1f5f9",
                  fontSize: 16,
                  fontWeight: 700,
                  margin: "0 0 4px",
                }}
              >
                Base Content Slides
              </h2>
              <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>
                The 6 seeded content options used as overlay text for image
                slides
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contentSlides.length === 0 && (
                <EmptyState icon="hero" label="No base content slides found" />
              )}

              {contentSlides.map((contentSlide) => {
                const visible = isContentSlideVisible(contentSlide._id);

                return (
                  <div
                    key={contentSlide._id}
                    style={{
                      ...listCard,
                      alignItems: "flex-start",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 120,
                        height: 72,
                        borderRadius: 8,
                        overflow: "hidden",
                        flexShrink: 0,
                        background: "#1f2937",
                        position: "relative",
                      }}
                    >
                      {contentSlide.backgroundImage ? (
                        <img
                          src={contentSlide.backgroundImage}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#374151",
                            fontSize: 22,
                          }}
                        >
                          🖼️
                        </div>
                      )}

                      <span
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: 4,
                          fontSize: 10,
                          padding: "2px 6px",
                          borderRadius: 4,
                          background: "#083344",
                          color: "#22d3ee",
                          fontWeight: 700,
                        }}
                      >
                        #{contentSlide.order}
                      </span>
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            color: "#f1f5f9",
                            fontWeight: 700,
                            fontSize: 14,
                          }}
                        >
                          {contentSlide.heading}
                        </span>

                        <span
                          style={{
                            fontSize: 11,
                            padding: "2px 8px",
                            borderRadius: 20,
                            fontWeight: 600,
                            background: visible ? "#064e3b" : "#1f2937",
                            color: visible ? "#34d399" : "#6b7280",
                          }}
                        >
                          {visible ? "Visible" : "Hidden"}
                        </span>
                      </div>

                      <p
                        style={{
                          color: "#22d3ee",
                          fontSize: 12,
                          fontWeight: 600,
                          margin: "0 0 4px",
                        }}
                      >
                        {contentSlide.label}
                      </p>

                      <p
                        style={{
                          color: "#6b7280",
                          fontSize: 12,
                          margin: 0,
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {contentSlide.description}
                      </p>

                      {contentSlide.buttons?.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 6,
                            marginTop: 10,
                          }}
                        >
                          {contentSlide.buttons.map((button, index) => (
                            <span
                              key={`${button.text}-${index}`}
                              style={{
                                fontSize: 11,
                                padding: "4px 8px",
                                borderRadius: 999,
                                background:
                                  button.variant === "primary"
                                    ? "#083344"
                                    : "#111827",
                                color:
                                  button.variant === "primary"
                                    ? "#22d3ee"
                                    : "#9ca3af",
                                border: "1px solid #1f2937",
                              }}
                            >
                              {button.text}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <button
                        onClick={() => toggleContentSlide(contentSlide._id)}
                        style={{
                          ...iconBtn,
                          color: visible ? "#34d399" : "#6b7280",
                        }}
                      >
                        <Icon
                          name={visible ? "toggle-on" : "toggle-off"}
                          size={18}
                        />
                      </button>

                      <button
                        onClick={() => setEditContentSlide(contentSlide)}
                        style={iconBtn}
                      >
                        <Icon name="edit" size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}

      {showAdd && (
        <SlideForm
          mode="hero"
          slide={editSlide}
          toast={toast}
          onClose={() => {
            setShowAdd(false);
            setEditSlide(null);
            load();
          }}
        />
      )}

      {editContentSlide && (
        <SlideForm
          mode="content"
          slide={editContentSlide}
          toast={toast}
          onClose={() => {
            setEditContentSlide(null);
            load();
          }}
        />
      )}

      {confirm && (
        <ConfirmDialog
          message="Are you sure you want to delete this slide?"
          onConfirm={() => deleteSlide(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}
