import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/Admin/ui/Icon";
import ConfirmDialog from "../../components/Admin/ui/ConfirmDialog";
import { LoadingGrid, EmptyState } from "../../components/Admin/ui/LoadingGrid";
import { apiFetch, API, authHeaders } from "../../utils/api";
import { primaryBtn, iconBtn, listCard } from "../../pages/style/shared";

export default function ProjectsPage({ toast, openBuilder }) {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
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
      const data = await apiFetch("/projects/admin/all");
      setProjects(data.projects || data.data || data || []);
    } catch {
      toast.show("Failed to load projects", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const deleteProject = async (id) => {
    try {
      await fetch(`${API}/projects/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      setProjects((p) => p.filter((pr) => pr._id !== id));
      toast.show("Project deleted successfully");
    } catch {
      toast.show("Failed to delete project", "error");
    } finally {
      setConfirm(null);
    }
  };

  const handleNewProject = () => {
    openBuilder({
      titlePlaceholder: "Project Title...",
      publishLabel: "Publish Project",
      returnPage: "projects",
      showCategory: true,
      onPublish: async (data) => {
        try {
          // 1. Create project with cover image
          const formData = new FormData();
          formData.append("title", data.title);
          formData.append("category", data.category || "General");
          formData.append("description", data.description || "");
          formData.append("coverImage", data.coverImage);

          const createRes = await fetch(`${API}/projects`, {
            method: "POST",
            headers: authHeaders(),
            body: formData,
          });

          const createResult = await createRes.json();
          if (!createRes.ok)
            throw new Error(createResult.message || "Failed to create project");

          const project = createResult.data;

          // 2. Upload content blocks
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

            await fetch(`${API}/projects/${project._id}/content`, {
              method: "POST",
              headers: authHeaders(),
              body: blockFormData,
            });
          }

          toast.show("Project published successfully");
          load();
        } catch (error) {
          console.error(error);
          toast.show(error.message || "Failed to publish project", "error");
        }
      },
    });
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
            Projects
          </h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button onClick={handleNewProject} style={primaryBtn}>
          <Icon name="plus" size={16} /> New Project
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
          {projects.length === 0 && (
            <EmptyState icon="project" label="No projects yet" />
          )}
          {projects.map((pr) => (
            <div
              key={pr._id}
              style={{
                ...listCard,
                flexDirection: "column",
                gap: 12,
                padding: 0,
                overflow: "hidden",
                alignItems: "stretch",
              }}
            >
              {pr.coverImage ? (
                <img
                  src={getMediaUrl(pr.coverImage)}
                  alt={pr.title || ""}
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
                  <Icon name="project" size={40} />
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
                  {pr.title}
                </p>
                <p
                  style={{ color: "#6b7280", fontSize: 12, margin: "0 0 10px" }}
                >
                  {new Date(pr.createdAt).toLocaleDateString("en-US")}
                </p>
                {pr.tags?.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      flexWrap: "wrap",
                      marginBottom: 12,
                    }}
                  >
                    {pr.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 11,
                          padding: "2px 8px",
                          background: "#083344",
                          color: "#22d3ee",
                          borderRadius: 20,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => navigate(`/admin/project/edit/${pr._id}`)}
                    style={{ ...iconBtn, flex: 1, justifyContent: "center" }}
                  >
                    <Icon name="edit" size={15} /> Edit
                  </button>
                  <button
                    onClick={() => setConfirm(pr._id)}
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
          message="Are you sure you want to delete this project? This action cannot be undone."
          onConfirm={() => deleteProject(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}
