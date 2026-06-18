import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/ui/Icon";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import { LoadingGrid, EmptyState } from "../components/ui/LoadingGrid";
import { apiFetch, API, authHeaders } from "../utils/api";
import { primaryBtn, iconBtn, listCard } from "../styles/shared";

export default function BlogsPage({ toast }) {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/blogs/admin/all");
      setBlogs(data.blogs || data.data || data || []);
    } catch {
      toast.show("فشل تحميل المقالات", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const deleteBlog = async (id) => {
    try {
      await fetch(`${API}/blogs/${id}`, { method: "DELETE", headers: authHeaders() });
      setBlogs(p => p.filter(b => b._id !== id));
      toast.show("تم حذف المقال");
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
          <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>المقالات</h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>{blogs.length} مقال</p>
        </div>
        <button onClick={() => navigate("/admin/blog/new")} style={primaryBtn}>
          <Icon name="plus" size={16} /> مقال جديد
        </button>
      </div>

      {loading ? <LoadingGrid /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {blogs.length === 0 && <EmptyState icon="blog" label="لا توجد مقالات بعد" />}
          {blogs.map(b => (
            <div key={b._id} style={listCard}>
              {b.coverImage && (
                <img src={b.coverImage} alt="" style={{ width: 72, height: 52, objectFit: "cover", borderRadius: 8, flexShrink: 0 }} />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 15, margin: "0 0 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {b.title}
                </p>
                <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>
                  {new Date(b.createdAt).toLocaleDateString("ar-EG")}
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                <button onClick={() => navigate(`/admin/blog/edit/${b._id}`)} style={iconBtn}>
                  <Icon name="edit" size={16} />
                </button>
                <button onClick={() => setConfirm(b._id)} style={{ ...iconBtn, color: "#f87171" }}>
                  <Icon name="trash" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {confirm && (
        <ConfirmDialog
          message="هل أنت متأكد من حذف هذا المقال؟ لا يمكن التراجع."
          onConfirm={() => deleteBlog(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}