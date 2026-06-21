import { useState, useEffect } from 'react';
import { API, authHeaders, apiFetch, } from '../../utils/api';

const inputStyle = {
  background: '#111827', border: '1px solid #1f2937', borderRadius: 8,
  color: '#f1f5f9', padding: '10px 14px', fontSize: 13, width: '100%',
  outline: 'none', boxSizing: 'border-box'
};
const labelStyle = { color: '#9ca3af', fontSize: 12, marginBottom: 6, display: 'block' };
const sectionTitle = {
  color: '#6b7280', fontSize: 11, fontWeight: 700,
  textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12
};

export default function SlideForm({ slide, toast, onClose }) {
  const isEdit = !!slide;

  const [type, setType] = useState(slide?.type || 'image');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(slide?.imageUrl || '');
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(slide?.videoUrl || '');
  const [showOverlay, setShowOverlay] = useState(slide?.showOverlay ?? false);
  const [selectedContentId, setSelectedContentId] = useState(
    slide?.overlayText?._id || slide?.overlayText || ''
  );
  const [order, setOrder] = useState(slide?.order ?? 0);
  const [loading, setLoading] = useState(false);

  // الـ 6 content slides من الباك
  const [contentSlides, setContentSlides] = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);

  // visibleContentSlides — كل الـ IDs اللي هتظهر في الهيرو
  const [allVisible, setAllVisible] = useState(true); // true = كل الـ 6
  const [selectedVisible, setSelectedVisible] = useState([]); // IDs لو مش كلها

  useEffect(() => {
    const fetchContent = async () => {
      setLoadingContent(true);
      try {
        const data = await apiFetch('/contentSlides');
        setContentSlides(data.slides || []);
      } catch {
        toast.show('فشل تحميل النصوص', 'error');
      } finally {
        setLoadingContent(false);
      }
    };

    // جيب visibleContentSlides الحالية
    const fetchHero = async () => {
      try {
        const data = await apiFetch('/home');
        const visible = data.visibleContentSlides || [];
        if (visible.length === 0) {
          setAllVisible(true);
          setSelectedVisible([]);
        } else {
          setAllVisible(false);
          setSelectedVisible(visible.map(v => v._id || v));
        }
      } catch { }
    };

    fetchContent();
    fetchHero();
  }, []);

  const toggleVisibleSlide = (id) => {
    setSelectedVisible(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch(`${API}/upload`, {
      method: 'POST',
      headers: authHeaders(), // بدون Content-Type — fetch بيحطها تلقائي مع FormData
      body: formData,
    });
    const data = await res.json();
    return data.url;
  };

  const handleSubmit = async () => {
    if (type === 'image' && !imagePreview && !imageFile)
      return toast.show('ارفع صورة', 'error');
    if (type === 'video' && !videoPreview && !videoFile)
      return toast.show('ارفع فيديو', 'error');
    if (type === 'image' && showOverlay && !selectedContentId)
      return toast.show('اختر النص اللي هيظهر فوق الصورة', 'error');

    setLoading(true);
    try {
      // Upload لو في file جديد
      let imageUrl = imagePreview;
      let videoUrl = videoPreview;

      if (imageFile) imageUrl = await uploadFile(imageFile);
      if (videoFile) videoUrl = await uploadFile(videoFile);

      const body = {
        type,
        imageUrl: type === 'image' ? imageUrl : undefined,
        videoUrl: type === 'video' ? videoUrl : undefined,
        showOverlay: type === 'image' ? showOverlay : undefined,
        overlayTextId: (type === 'image' && showOverlay) ? selectedContentId : null,
        order,
      };

      const url = isEdit
        ? `${API}/home/slides/${slide._id}`
        : `${API}/home/slides`;

      await fetch(url, {
        method: isEdit ? 'PATCH' : 'POST',
        headers: { ...authHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      await fetch(`${API}/home/visible-slides`, {
        method: 'PATCH',
        headers: { ...authHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ visibleContentSlides: allVisible ? [] : selectedVisible }),
      });

      toast.show(isEdit ? 'تم التعديل' : 'تم الإضافة');
      onClose();
    } catch (err) {
      toast.show("Error: " + err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: '#0f172a', borderRadius: 16, padding: 28, width: '100%',
        maxWidth: 500, maxHeight: '90vh', overflowY: 'auto',
        border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: 20
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: '#f1f5f9', fontSize: 18, fontWeight: 700, margin: 0 }}>
            {isEdit ? 'تعديل سلايد' : 'إضافة سلايد جديد'}
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 20 }}>✕</button>
        </div>

        {/* Type Toggle */}
        <div>
          <p style={sectionTitle}>نوع السلايد</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['image', 'video'].map(t => (
              <button key={t} onClick={() => setType(t)} style={{
                flex: 1, padding: '10px', borderRadius: 8, cursor: 'pointer',
                border: `1px solid ${type === t ? '#1a5fff' : '#1f2937'}`,
                background: type === t ? '#1a3a7a' : '#111827',
                color: type === t ? '#60a5fa' : '#6b7280', fontSize: 13, fontWeight: 600
              }}>
                {t === 'image' ? '🖼 صورة' : '🎬 فيديو'}
              </button>
            ))}
          </div>
        </div>

        {type === 'image' && (
          <div>
            <label style={labelStyle}>{type === "image" ? "Image" : "Video"}</label>
            <div style={{
              border: "2px dashed #1f2937", borderRadius: 10, padding: 20,
              textAlign: "center", cursor: "pointer"
            }} onClick={() => document.getElementById("slideFile").click()}>
              {preview
                ? type === "image"
                  ? <img src={preview} alt="" style={{ maxHeight: 140, borderRadius: 8 }} />
                  : <video src={preview} style={{ maxHeight: 140, borderRadius: 8 }} controls />
                : <div style={{ color: "#4b5563", fontSize: 13 }}>
                  <Icon name="upload" size={24} /><br />
                  Click to upload {type === "image" ? "image" : "video"}
                </div>}
              <input id="slideFile" type="file" accept={type === "image" ? "image/*" : "video/*"} hidden onChange={handleFile} />
            </div>
          </div>

          {/* Show overlay toggle (images only) */}
        {type === "image" && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#111827", borderRadius: 10 }}>
            <span style={{ color: "#f1f5f9", fontSize: 14 }}>إظهار النصوص فوق الصورة</span>
            <button onClick={() => setShowOverlay(p => !p)} style={{
              background: showOverlay ? "#22d3ee" : "#374151", border: "none", borderRadius: 20,
              width: 44, height: 24, cursor: "pointer", position: "relative", transition: "background 0.2s"
            }}>
              <span style={{
                background: '#1a5fff', color: '#fff', padding: '6px 16px',
                borderRadius: 6, fontSize: 12, fontWeight: 600
              }}>اختر من جهازك</span>
              <span style={{ color: '#374151', fontSize: 11 }}>MP4, MOV, AVI — max 100MB</span>
              <input type="file" accept="video/*" style={{ display: 'none' }}
                onChange={e => {
                  const file = e.target.files[0];
                  if (file) { setVideoFile(file); setVideoPreview(URL.createObjectURL(file)); }
                }} />
            </label>
            )}
          </div>
        )}

        {/* Show Overlay Toggle - image only */}
        {type === 'image' && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#cbd5e1', fontSize: 13 }}>إظهار النصوص فوق الصورة؟</span>
            <button onClick={() => setShowOverlay(p => !p)} style={{
              width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
              background: showOverlay ? '#1a5fff' : '#374151',
              position: 'relative', transition: 'background 0.2s'
            }}>
              <span style={{
                position: 'absolute', top: 3, left: showOverlay ? 22 : 3,
                width: 18, height: 18, borderRadius: '50%', background: '#fff',
                transition: 'left 0.2s'
              }} />
            </button>
          </div>
        )}

        {/* Overlay text fields */}
        {(showOverlay || type === "video") && (
          <div style={{ background: "#111827", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ color: "#22d3ee", fontSize: 12, fontWeight: 600, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: 1 }}>نصوص العرض</p>
            <input value={overlay.badge} onChange={e => setOverlay(p => ({ ...p, badge: e.target.value }))} style={inputStyle} placeholder="Badge مثلاً: MARKETING & GROWTH" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              <input value={overlay.prefix} onChange={e => setOverlay(p => ({ ...p, prefix: e.target.value }))} style={inputStyle} placeholder="Prefix: WE" />
              <input value={overlay.highlight} onChange={e => setOverlay(p => ({ ...p, highlight: e.target.value }))} style={inputStyle} placeholder="Highlight" />
              <input value={overlay.suffix} onChange={e => setOverlay(p => ({ ...p, suffix: e.target.value }))} style={inputStyle} placeholder="Suffix: BRANDS" />
            </div>
            <textarea value={overlay.description} onChange={e => setOverlay(p => ({ ...p, description: e.target.value }))}
              style={{ ...inputStyle, minHeight: 70, resize: "vertical" }} placeholder="وصف..." />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <input value={overlay.buttonText} onChange={e => setOverlay(p => ({ ...p, buttonText: e.target.value }))} style={inputStyle} placeholder="نص الزرار" />
              <input value={overlay.buttonLink} onChange={e => setOverlay(p => ({ ...p, buttonLink: e.target.value }))} style={inputStyle} placeholder="رابط الزرار" />
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 4 }}>
          <button onClick={onClose} style={ghostBtn}>إلغاء</button>
          <button onClick={save} disabled={loading} style={primaryBtn}>
            {loading ? "جاري الحفظ..." : isEdit ? "تحديث" : "إضافة"}
          </button>
        </div>
      </div>
    </div>
    </div >
  );
}