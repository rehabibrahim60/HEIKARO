import { useState, useEffect } from "react";
import { API, authHeaders, apiFetch } from "../../utils/api";

/* =========================
   Styles
========================= */

const inputStyle = {
  background: "#111827",
  border: "1px solid #1f2937",
  borderRadius: 8,
  color: "#f1f5f9",
  padding: "10px 14px",
  fontSize: 13,
  width: "100%",
};

const labelStyle = {
  color: "#9ca3af",
  fontSize: 12,
  marginBottom: 6,
  display: "block",
};

const ghostBtn = {
  background: "transparent",
  border: "1px solid #374151",
  color: "#cbd5e1",
  padding: "10px 16px",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: 13,
  fontWeight: 600,
};

const primaryBtn = {
  background: "#0f33fe",
  border: "none",
  color: "#ffffff",
  padding: "10px 18px",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: 13,
  fontWeight: 700,
};

/* =========================
   Small UI Helpers
========================= */

function Icon({ name }) {
  const map = { image: "🖼️", video: "🎥", upload: "⬆️" };
  return <span>{map[name] || "•"}</span>;
}

function Toggle({ value, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      style={{
        width: 44,
        height: 24,
        borderRadius: 12,
        border: "none",
        cursor: "pointer",
        background: value ? "#0f33fe" : "#374151",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: value ? 22 : 3,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.2s",
        }}
      />
    </button>
  );
}

/* =========================
   Main Component
========================= */

export default function SlideForm({
  slide,
  toast,
  onClose,
  allVisible = false,
  selectedVisible = [],
}) {
  const isEdit = !!slide;

  /* ---------- State ---------- */

  const [type, setType] = useState(slide?.type || "image");
  const [order, setOrder] = useState(slide?.order ?? 0);

  // image-only options
  const [showLogo, setShowLogo] = useState(slide?.showLogo ?? true);
  const [showOverlay, setShowOverlay] = useState(slide?.showOverlay || false);

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(slide?.imageUrl || "");

  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(slide?.videoUrl || "");

  // overlay text source: "existing" | "new"
  const [overlaySource, setOverlaySource] = useState("existing");

  // existing content slide selection
  const [contentSlides, setContentSlides] = useState([]);
  const [selectedContentId, setSelectedContentId] = useState(
    slide?.overlayText?._id || slide?.overlayText || ""
  );

  // new content slide form
  const [newContent, setNewContent] = useState({
    label: "",
    heading: "",
    description: "",
    buttons: [{ text: "", href: "", variant: "primary" }],
  });

  const [loading, setLoading] = useState(false);

  /* ---------- Effects ---------- */

  useEffect(() => {
    apiFetch("/contentSlides")
      .then((res) => {
    console.log("contentSlides response:", res);
    setContentSlides(res.slides || []);
  })
      .catch(() => toast.show("Failed to load overlay texts", "error"));
  }, [toast]);

  /* ---------- New content button helpers ---------- */

  const addButton = () =>
    setNewContent((prev) => ({
      ...prev,
      buttons: [...prev.buttons, { text: "", href: "", variant: "primary" }],
    }));

  const removeButton = (idx) =>
    setNewContent((prev) => ({
      ...prev,
      buttons: prev.buttons.filter((_, i) => i !== idx),
    }));

  const updateButton = (idx, field, value) =>
    setNewContent((prev) => ({
      ...prev,
      buttons: prev.buttons.map((b, i) =>
        i === idx ? { ...b, [field]: value } : b
      ),
    }));

  /* ---------- Helpers ---------- */

  const uploadFile = async (file) => {
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch(`${API}/upload`, {
      method: "POST",
      headers: authHeaders(),
      body: fd,
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || "Upload failed");
    return data.url;
  };

  /* ---------- Submit ---------- */

  const handleSubmit = async () => {
    // validations
    if (type === "image" && !imagePreview && !imageFile)
      return toast.show("Please upload an image", "error");

    if (type === "video" && !videoPreview && !videoFile)
      return toast.show("Please upload a video", "error");

    if (type === "image" && showOverlay) {
      if (overlaySource === "existing" && !selectedContentId)
        return toast.show("Select overlay text", "error");

      if (overlaySource === "new" && !newContent.heading)
        return toast.show("Enter a heading for the new overlay", "error");
    }

    setLoading(true);

    try {
      const imageUrl = imageFile ? await uploadFile(imageFile) : imagePreview;
      const videoUrl = videoFile ? await uploadFile(videoFile) : videoPreview;

      // if adding new content slide, create it first
      let overlayTextId = null;

      if (type === "image" && showOverlay) {
        if (overlaySource === "existing") {
          overlayTextId = selectedContentId;
        } else {
          // create new contentSlide
          const csRes = await fetch(`${API}/contentSlides`, {
            method: "POST",
            headers: { ...authHeaders(), "Content-Type": "application/json" },
            body: JSON.stringify(newContent),
          });
          const csData = await csRes.json();
          if (!csRes.ok)
            throw new Error(csData?.message || "Failed to create overlay text");
          overlayTextId = csData.slide?._id || csData._id;
        }
      }

      const body = {
        type,
        order: Number(order) || 0,
        imageUrl: type === "image" ? imageUrl : undefined,
        videoUrl: type === "video" ? videoUrl : undefined,
        // image-only flags
        showLogo: type === "image" ? showLogo : false,
        showOverlay: type === "image" ? showOverlay : false,
        overlayTextId: type === "image" && showOverlay ? overlayTextId : null,
      };

      await fetch(
        isEdit ? `${API}/home/slides/${slide._id}` : `${API}/home/slides`,
        {
          method: isEdit ? "PATCH" : "POST",
          headers: { ...authHeaders(), "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      await fetch(`${API}/home/visible-slides`, {
        method: "PATCH",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({
          visibleContentSlides: allVisible ? [] : selectedVisible,
        }),
      });

      toast.show(isEdit ? "Slide updated" : "Slide created");
      onClose();
    } catch (err) {
      toast.show(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     Render
  ========================= */

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.7)", overflowY: "auto", zIndex: 9999 }}>
      <div
        style={{
          background: "#0f172a",
          maxWidth: 600,
          margin: "5vh auto",
          padding: 32,
          borderRadius: 20,
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: 20 }}>
          {isEdit ? "Edit Slide" : "Create Slide"}
        </h2>

        {/* ── Type ── */}
        <label style={labelStyle}>Slide Type</label>
        <div style={{ display: "flex", gap: 8 }}>
          {["image", "video"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 8,
                background: type === t ? "#0f33fe" : "transparent",
                color: type === t ? "#fff" : "#9ca3af",
                border: "1px solid #1f2937",
              }}
            >
              <Icon name={t} /> {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* ── Order ── */}
        <label style={{ ...labelStyle, marginTop: 16 }}>Order</label>
        <input
          type="number"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          style={inputStyle}
        />

        {/* ── IMAGE upload ── */}
        {type === "image" && (
          <div style={{ marginTop: 16 }}>
            <label style={labelStyle}>Image</label>
            <div
              style={{
                border: "2px dashed #1f2937",
                borderRadius: 12,
                padding: 24,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => document.getElementById("imageInput").click()}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxWidth: "100%", maxHeight: 160, borderRadius: 8 }}
                />
              ) : (
                <p style={{ color: "#6b7280", fontSize: 13 }}>
                  Click to upload image
                </p>
              )}
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setImageFile(file);
                    setImagePreview(URL.createObjectURL(file));
                  }
                }}
              />
            </div>
          </div>
        )}

        {/* ── VIDEO upload ── */}
        {type === "video" && (
          <div style={{ marginTop: 16 }}>
            <label style={labelStyle}>Video</label>
            <div
              style={{
                border: "2px dashed #1f2937",
                borderRadius: 12,
                padding: 24,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => document.getElementById("videoInput").click()}
            >
              {videoPreview ? (
                <video
                  src={videoPreview}
                  controls
                  style={{ maxWidth: "100%", maxHeight: 160, borderRadius: 8 }}
                />
              ) : (
                <p style={{ color: "#6b7280", fontSize: 13 }}>
                  Click to upload video
                </p>
              )}
              <input
                id="videoInput"
                type="file"
                accept="video/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setVideoFile(file);
                    setVideoPreview(URL.createObjectURL(file));
                  }
                }}
              />
            </div>
          </div>
        )}

        {/* ════ IMAGE-ONLY OPTIONS ════ */}
        {type === "image" && (
          <>
            {/* ── Show Logo toggle ── */}
            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span style={{ color: "#cbd5e1", fontSize: 13, fontWeight: 600 }}>
                  Show Logo (H)
                </span>
                <p style={{ color: "#6b7280", fontSize: 11, margin: "2px 0 0" }}>
                  Show the animated H logo card on this slide
                </p>
              </div>
              <Toggle value={showLogo} onChange={setShowLogo} />
            </div>

            {/* ── Show Overlay Text toggle ── */}
            <div
              style={{
                marginTop: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span style={{ color: "#cbd5e1", fontSize: 13, fontWeight: 600 }}>
                  Show Overlay Text
                </span>
                <p style={{ color: "#6b7280", fontSize: 11, margin: "2px 0 0" }}>
                  Display text content on top of the image
                </p>
              </div>
              <Toggle value={showOverlay} onChange={setShowOverlay} />
            </div>

            {/* ── Overlay content ── */}
            {showOverlay && (
              <div
                style={{
                  marginTop: 16,
                  background: "#0a1120",
                  border: "1px solid #1f2937",
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                {/* source selector */}
                <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                  {["existing", "new"].map((src) => (
                    <button
                      key={src}
                      onClick={() => setOverlaySource(src)}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: 8,
                        background: overlaySource === src ? "#0f33fe" : "transparent",
                        color: overlaySource === src ? "#fff" : "#9ca3af",
                        border: "1px solid #1f2937",
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {src === "existing" ? "📋 Choose Existing" : "✏️ Create New"}
                    </button>
                  ))}
                </div>

                {/* existing picker */}
                {overlaySource === "existing" && (
                  <div>
                    <label style={labelStyle}>Select Overlay Content</label>
                    <select
                      value={selectedContentId}
                      onChange={(e) => setSelectedContentId(e.target.value)}
                      style={inputStyle}
                    >
                      <option value="">Select overlay content</option>
                      {contentSlides.map((c) => (
                        <option key={c._id} value={c._id}>
                          {c.label ? `${c.label} — ` : ""}{c.heading || c._id}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* new content form */}
                {overlaySource === "new" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div>
                      <label style={labelStyle}>Label (badge)</label>
                      <input
                        style={inputStyle}
                        placeholder="e.g. Creative Powerhouse"
                        value={newContent.label}
                        onChange={(e) =>
                          setNewContent((p) => ({ ...p, label: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Heading *</label>
                      <input
                        style={inputStyle}
                        placeholder="e.g. We Build BRANDS That Move"
                        value={newContent.heading}
                        onChange={(e) =>
                          setNewContent((p) => ({ ...p, heading: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Description</label>
                      <textarea
                        style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
                        placeholder="Slide description..."
                        value={newContent.description}
                        onChange={(e) =>
                          setNewContent((p) => ({ ...p, description: e.target.value }))
                        }
                      />
                    </div>

                    {/* buttons */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <label style={{ ...labelStyle, marginBottom: 0 }}>Buttons</label>
                        <button
                          onClick={addButton}
                          style={{
                            background: "transparent",
                            border: "1px solid #374151",
                            color: "#9ca3af",
                            padding: "4px 10px",
                            borderRadius: 6,
                            fontSize: 11,
                            cursor: "pointer",
                          }}
                        >
                          + Add Button
                        </button>
                      </div>

                      {newContent.buttons.map((btn, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: "#111827",
                            border: "1px solid #1f2937",
                            borderRadius: 8,
                            padding: 12,
                            marginBottom: 8,
                          }}
                        >
                          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                            <div style={{ flex: 1 }}>
                              <label style={labelStyle}>Text</label>
                              <input
                                style={inputStyle}
                                placeholder="Button text"
                                value={btn.text}
                                onChange={(e) => updateButton(idx, "text", e.target.value)}
                              />
                            </div>
                            <div style={{ flex: 1 }}>
                              <label style={labelStyle}>Link (href)</label>
                              <input
                                style={inputStyle}
                                placeholder="e.g. contact"
                                value={btn.href}
                                onChange={(e) => updateButton(idx, "href", e.target.value)}
                              />
                            </div>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", gap: 6 }}>
                              {["primary", "secondary"].map((v) => (
                                <button
                                  key={v}
                                  onClick={() => updateButton(idx, "variant", v)}
                                  style={{
                                    padding: "4px 10px",
                                    borderRadius: 6,
                                    fontSize: 11,
                                    cursor: "pointer",
                                    background: btn.variant === v ? "#0f33fe" : "transparent",
                                    color: btn.variant === v ? "#fff" : "#9ca3af",
                                    border: "1px solid #1f2937",
                                  }}
                                >
                                  {v}
                                </button>
                              ))}
                            </div>
                            {newContent.buttons.length > 1 && (
                              <button
                                onClick={() => removeButton(idx)}
                                style={{
                                  background: "transparent",
                                  border: "none",
                                  color: "#ef4444",
                                  cursor: "pointer",
                                  fontSize: 12,
                                }}
                              >
                                ✕ Remove
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* ── Actions ── */}
        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          <button onClick={onClose} style={ghostBtn}>
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              ...primaryBtn,
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Saving..." : isEdit ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
