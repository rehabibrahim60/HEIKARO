import { useState, useEffect } from "react";
import Icon from "../../components/Admin/ui/Icon";
import ConfirmDialog from "../../components/Admin/ui/ConfirmDialog";
import { LoadingGrid, EmptyState } from "../../components/Admin/ui/LoadingGrid";
import SlideForm from "../components/hero/SlideForm";
import { apiFetch, API, authHeaders } from "../utils/api";
import { primaryBtn, iconBtn, listCard } from "../styles/shared";

export default function HeroPage({ toast }) {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editSlide, setEditSlide] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/home");
      setSlides(data.slides || data.data?.slides || []);
    } catch {
      toast.show("فشل تحميل السلايدز", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const toggleSlide = async (id, current) => {
    try {
      await fetch(`${API}/hero/slides/${id}/toggle`, { method: "PATCH", headers: authHeaders() });
      setSlides(p => p.map(s => s._id === id ? { ...s, isActive: !current } : s));
      toast.show(current ? "تم إخفاء السلايد" : "تم تفعيل السلايد");
    } catch {
      toast.show("فشل التغيير", "error");
    }
  };

  const deleteSlide = async (id) => {
    try {
      await fetch(`${API}/hero/slides/${id}`, { method: "DELETE", headers: authHeaders() });
      setSlides(p => p.filter(s => s._id !== id));
      toast.show("تم حذف السلايد");
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
          <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Hero Section</h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>إدارة السلايدر الرئيسي للموقع</p>
        </div>
        <button onClick={() => { setEditSlide(null); setShowAdd(true); }} style={primaryBtn}>
          <Icon name="plus" size={16} /> إضافة سلايد
        </button>
      </div>

      {loading ? <LoadingGrid /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {slides.length === 0 && <EmptyState icon="hero" label="لا توجد سلايدز" />}
          {slides.map((s, idx) => (
            <div key={s._id} style={{ ...listCard, alignItems: "flex-start", gap: 16 }}>
              {/* Preview */}
              <div style={{ width: 120, height: 72, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#1f2937", position: "relative" }}>
                {s.type === "image" && s.imageUrl
                  ? <img src={s.imageUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : s.type === "video" && s.videoUrl
                    ? <video src={s.videoUrl} style={{ width: "100%", height: "100%", objectFit: "cover" }} muted />
                    : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#374151" }}>
                        <Icon name={s.type === "video" ? "video" : "image"} size={28} />
                      </div>}
                <span style={{
                  position: "absolute", bottom: 4, left: 4, fontSize: 10, padding: "2px 6px",
                  borderRadius: 4, background: s.type === "video" ? "#3b1d8a" : "#083344",
                  color: s.type === "video" ? "#a78bfa" : "#22d3ee", fontWeight: 600
                }}>{s.type === "video" ? "فيديو" : "صورة"}</span>
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 14 }}>
                    {s.overlayText?.heading?.highlight || s.overlayText?.badge || `سلايد ${idx + 1}`}
                  </span>
                  <span style={{
                    fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 600,
                    background: s.isActive ? "#064e3b" : "#1f2937",
                    color: s.isActive ? "#34d399" : "#6b7280"
                  }}>{s.isActive ? "مفعّل" : "مخفي"}</span>
                </div>
                {s.type === "image" && (
                  <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>
                    الكلام: {s.showOverlay ? "يظهر" : "مخفي"}
                  </p>
                )}
                {s.overlayText?.description && (
                  <p style={{ color: "#4b5563", fontSize: 12, margin: "4px 0 0", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>
                    {s.overlayText.description}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
                <button onClick={() => toggleSlide(s._id, s.isActive)} style={{ ...iconBtn, color: s.isActive ? "#34d399" : "#6b7280" }}>
                  <Icon name={s.isActive ? "toggle-on" : "toggle-off"} size={18} />
                </button>
                <button onClick={() => { setEditSlide(s); setShowAdd(true); }} style={iconBtn}>
                  <Icon name="edit" size={16} />
                </button>
                <button onClick={() => setConfirm(s._id)} style={{ ...iconBtn, color: "#f87171" }}>
                  <Icon name="trash" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showAdd && (
        <SlideForm
          slide={editSlide}
          toast={toast}
          onClose={() => { setShowAdd(false); setEditSlide(null); load(); }}
        />
      )}

      {confirm && (
        <ConfirmDialog
          message="هل أنت متأكد من حذف هذا السلايد؟"
          onConfirm={() => deleteSlide(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}