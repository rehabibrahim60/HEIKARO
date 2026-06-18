import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/ui/Icon";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import { LoadingGrid, EmptyState } from "../components/ui/LoadingGrid";
import { apiFetch, API, authHeaders } from "../utils/api";
import { primaryBtn, iconBtn, listCard } from "../styles/shared";

export default function ProjectsPage({ toast }) {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/projects/admin/all");
      setProjects(data.projects || data.data || data || []);
    } catch {
      toast.show("فشل تحميل المشاريع", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const deleteProject = async (id) => {
    try {
      await fetch(`${API}/projects/${id}`, { method: "DELETE", headers: authHeaders() });
      setProjects(p => p.filter(pr => pr._id !== id));
      toast.show("تم حذف المشروع");
    } catch {
      toast.show("فشل الحذف", "error");
    } finally {
      setConfirm(null);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>المشاريع</h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>{projects.length} مشروع</p>
        </div>
        <button onClick={() => navigate("/admin/project/new")} style={primaryBtn}>
          <Icon name="plus" size={16} /> مشروع جديد
        </button>
      </div>

      {loading ? <LoadingGrid /> : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
          {projects.length === 0 && <EmptyState icon="project" label="لا توجد مشاريع بعد" />}
          {projects.map(pr => (
            <div key={pr._id} style={{ ...listCard, flexDirection: "column", gap: 12, padding: 0, overflow: "hidden", alignItems: "stretch" }}>
              {pr.coverImage
                ? <img src={pr.coverImage} alt="" style={{ width: "100%", height: 160, objectFit: "cover" }} />
                : <div style={{ height: 160, background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#374151" }}>
                    <Icon name="project" size={40} />
                  </div>}
              <div style={{ padding: "12px 16px 16px" }}>
                <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 15, margin: "0 0 6px" }}>{pr.title}</p>
                {pr.tags?.length > 0 && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                    {pr.tags.slice(0, 3).map(t => (
                      <span key={t} style={{ fontSize: 11, padding: "2px 8px", background: "#083344", color: "#22d3ee", borderRadius: 20 }}>{t}</span>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => navigate(`/admin/project/edit/${pr._id}`)} style={{ ...iconBtn, flex: 1, justifyContent: "center" }}>
                    <Icon name="edit" size={15} /> تعديل
                  </button>
                  <button onClick={() => setConfirm(pr._id)} style={{ ...iconBtn, color: "#f87171" }}>
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
          message="هل أنت متأكد من حذف هذا المشروع؟"
          onConfirm={() => deleteProject(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}