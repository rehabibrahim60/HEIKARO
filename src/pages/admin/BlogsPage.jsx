import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/Admin/ui/Icon";
import ConfirmDialog from "../../components/Admin/ui/ConfirmDialog";
import { LoadingGrid, EmptyState } from "../../components/Admin/ui/LoadingGrid";
import { apiFetch, API, authHeaders } from "../../utils/api";
import { primaryBtn, iconBtn, listCard } from "./../style/shared";

export default function BlogsPage({ toast, openBuilder }) {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(null);

  const getMediaUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${API}${url}`;
  };

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/blogs/admin/all");
      setBlogs(data.blogs || data.data || data || []);
    } catch {
      toast.show("Failed to load blogs", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const deleteBlog = async (id) => {
    try {
      await fetch(`${API}/blogs/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });

      setBlogs((p) => p.filter((b) => b._id !== id));
      toast.show("Blog deleted successfully");
    } catch {
      toast.show("Failed to delete blog", "error");
    } finally {
      setConfirm(null);
    }
  };

  return (
    <div>
      <div
        className="admin-page-header"
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
            Blogs
          </h1>

          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>
            {blogs.length} blog{blogs.length !== 1 ? "s" : ""}
          </p>
        </div>

        <button
          onClick={() =>
            openBuilder({
              titlePlaceholder: "Blog Title...",
              publishLabel: "Publish Blog",
              returnPage: "blogs",
              showCategory: true,
              onPublish: async (data) => {
                try {
                  const formData = new FormData();

                  formData.append("title", data.title);
                  formData.append("category", data.category || "General");
                  formData.append("description", data.description || "");
                  formData.append("coverImage", data.coverImage);

                  const createRes = await fetch(`${API}/blogs`, {
                    method: "POST",
                    headers: authHeaders(),
                    body: formData,
                  });

                  const createResult = await createRes.json();

                  if (!createRes.ok) {
                    throw new Error(
                      createResult.message || "Failed to create blog",
                    );
                  }

                  const blog = createResult.data;

                  for (const item of data.content) {
                    const blockFormData = new FormData();

                    if (item.type === "text") {
                      blockFormData.append("type", "text");
                      blockFormData.append("text", item.value || "");
                    }

                    if (item.type === "image" && item.file) {
                      blockFormData.append("type", "image");
                      blockFormData.append("file", item.file);
                    }

                    if (item.type === "video" && item.file) {
                      blockFormData.append("type", "video");
                      blockFormData.append("file", item.file);
                    }

                    await fetch(`${API}/blogs/${blog._id}/content`, {
                      method: "POST",
                      headers: authHeaders(),
                      body: blockFormData,
                    });
                  }

                  toast.show("Blog published successfully");
                  load();
                } catch (error) {
                  console.error(error);
                  toast.show(
                    error.message || "Failed to publish blog",
                    "error",
                  );
                }
              },
            })
          }
          style={primaryBtn}
        >
          <Icon name="plus" size={16} /> New Blog
        </button>
      </div>

      {loading ? (
        <LoadingGrid />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {blogs.length === 0 && (
            <EmptyState icon="blog" label="No blogs yet" />
          )}

          {blogs.map((b) => (
            <div
              key={b._id}
              style={{
                ...listCard,
                flexDirection: "column",
                gap: 12,
                padding: 0,
                overflow: "hidden",
                alignItems: "stretch",
              }}
            >
              {b.coverImage ? (
                <img
                  src={getMediaUrl(b.coverImage)}
                  alt={b.title || ""}
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    background: "#1f2937",
                  }}
                />
              ) : (
                <div
                  style={{
                    height: 160,
                    background: "#1f2937",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#374151",
                  }}
                >
                  <Icon name="blog" size={40} />
                </div>
              )}

              <div style={{ padding: "12px 16px 16px" }}>
                <p
                  style={{
                    color: "#f1f5f9",
                    fontWeight: 600,
                    fontSize: 15,
                    margin: "0 0 4px",
                  }}
                >
                  {b.title}
                </p>

                <p
                  style={{
                    color: "#6b7280",
                    fontSize: 12,
                    margin: "0 0 10px",
                  }}
                >
                  {new Date(b.createdAt).toLocaleDateString("en-US")}
                </p>

                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() =>
                      openBuilder({
                        titlePlaceholder: "Blog Title...",
                        publishLabel: "Update Blog",
                        returnPage: "blogs",
                        showCategory: true,
                        initialTitle: b.title || "",
                        initialCategory: b.category || "",
                        existingCoverImage: b.coverImage || "",

                        onPublish: async (data) => {
                          try {
                            const formData = new FormData();

                            formData.append("title", data.title);
                            formData.append(
                              "category",
                              data.category || "General",
                            );
                            formData.append(
                              "description",
                              data.description || "",
                            );

                            if (data.coverImage) {
                              formData.append("coverImage", data.coverImage);
                            }

                            const res = await fetch(`${API}/blogs/${b._id}`, {
                              method: "PATCH",
                              headers: authHeaders(),
                              body: formData,
                            });

                            const result = await res.json();

                            if (!res.ok) {
                              throw new Error(
                                result.message || "Failed to update blog",
                              );
                            }

                            toast.show("Blog updated successfully");
                            load();
                          } catch (error) {
                            console.error(error);
                            toast.show(
                              error.message || "Failed to update blog",
                              "error",
                            );
                          }
                        },
                      })
                    }
                    style={{ ...iconBtn, flex: 1, justifyContent: "center" }}
                  >
                    <Icon name="edit" size={15} /> Edit
                  </button>

                  <button
                    onClick={() => setConfirm(b._id)}
                    style={{ ...iconBtn, color: "#f87171" }}
                  >
                    <Icon name="trash" size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {confirm && (
        <ConfirmDialog
          message="Are you sure you want to delete this blog? This action cannot be undone."
          onConfirm={() => deleteBlog(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}
