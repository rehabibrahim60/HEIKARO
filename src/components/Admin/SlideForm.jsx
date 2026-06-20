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
    } catch {
      toast.show('حدث خطأ', 'error');
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
            <label style={labelStyle}>الصورة</label>

            {/* Preview */}
            {imagePreview && (
              <div style={{ position: 'relative', marginBottom: 10 }}>
                <img src={imagePreview} alt="preview"
                  style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8 }} />
                <button onClick={() => { setImagePreview(''); setImageFile(null); }} style={{
                  position: 'absolute', top: 6, left: 6, background: '#cc2200',
                  border: 'none', borderRadius: '50%', width: 24, height: 24,
                  color: '#fff', cursor: 'pointer', fontSize: 14, lineHeight: 1
                }}>✕</button>
              </div>
            )}

            {/* Upload Area */}
            {!imagePreview && (
              <label style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                border: '2px dashed #1f2937', borderRadius: 8, padding: '32px 16px', cursor: 'pointer',
                background: '#0a0f1a', gap: 8, transition: 'border-color 0.2s'
              }}
                onDragOver={e => e.preventDefault()}
                onDrop={e => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file) { setImageFile(file); setImagePreview(URL.createObjectURL(file)); }
                }}
              >
                <span style={{ fontSize: 32 }}>🖼</span>
                <span style={{ color: '#6b7280', fontSize: 13 }}>اسحب صورة هنا أو</span>
                <span style={{
                  background: '#1a5fff', color: '#fff', padding: '6px 16px',
                  borderRadius: 6, fontSize: 12, fontWeight: 600
                }}>اختر من جهازك</span>
                <span style={{ color: '#374151', fontSize: 11 }}>JPG, PNG, WEBP — max 100MB</span>
                <input type="file" accept="image/*" style={{ display: 'none' }}
                  onChange={e => {
                    const file = e.target.files[0];
                    if (file) { setImageFile(file); setImagePreview(URL.createObjectURL(file)); }
                  }} />
              </label>
            )}
          </div>
        )}
        {type === 'video' && (
          <div>
            <label style={labelStyle}>الفيديو</label>

            {/* Preview */}
            {videoPreview && (
              <div style={{ position: 'relative', marginBottom: 10 }}>
                <video src={videoPreview} controls
                  style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8 }} />
                <button onClick={() => { setVideoPreview(''); setVideoFile(null); }} style={{
                  position: 'absolute', top: 6, left: 6, background: '#cc2200',
                  border: 'none', borderRadius: '50%', width: 24, height: 24,
                  color: '#fff', cursor: 'pointer', fontSize: 14, lineHeight: 1
                }}>✕</button>
              </div>
            )}

            {/* Upload Area */}
            {!videoPreview && (
              <label style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                border: '2px dashed #1f2937', borderRadius: 8, padding: '32px 16px', cursor: 'pointer',
                background: '#0a0f1a', gap: 8
              }}
                onDragOver={e => e.preventDefault()}
                onDrop={e => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file) { setVideoFile(file); setVideoPreview(URL.createObjectURL(file)); }
                }}
              >
                <span style={{ fontSize: 32 }}>🎬</span>
                <span style={{ color: '#6b7280', fontSize: 13 }}>اسحب فيديو هنا أو</span>
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

        {/* اختيار النص - image + showOverlay */}
        {type === 'image' && showOverlay && (
          <div>
            <p style={sectionTitle}>اختر النص اللي هيظهر فوق الصورة</p>
            {loadingContent ? (
              <p style={{ color: '#6b7280', fontSize: 12 }}>جاري التحميل...</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {contentSlides.map(cs => (
                  <button key={cs._id} onClick={() => setSelectedContentId(cs._id)} style={{
                    padding: '10px 14px', borderRadius: 8, cursor: 'pointer', textAlign: 'right',
                    border: `1px solid ${selectedContentId === cs._id ? '#1a5fff' : '#1f2937'}`,
                    background: selectedContentId === cs._id ? '#0f2a5e' : '#111827',
                    display: 'flex', alignItems: 'center', gap: 10
                  }}>
                    <span style={{
                      minWidth: 28, height: 28, borderRadius: 6, display: 'flex',
                      alignItems: 'center', justifyContent: 'center', fontWeight: 700,
                      fontSize: 12, flexShrink: 0,
                      background: selectedContentId === cs._id ? '#1a5fff' : '#1f2937',
                      color: selectedContentId === cs._id ? '#fff' : '#6b7280'
                    }}>{cs.order}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: '#f1f5f9', fontSize: 13, fontWeight: 600, margin: 0 }}>{cs.label}</p>
                      <p style={{
                        color: '#6b7280', fontSize: 11, margin: '2px 0 0',
                        overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
                        maxWidth: 300
                      }}>{cs.heading}</p>
                    </div>
                    {selectedContentId === cs._id && (
                      <span style={{ color: '#1a5fff', fontSize: 16 }}>✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #1e293b' }} />

        {/* اختيار الـ content slides اللي هتظهر في الهيرو */}
        <div>
          <p style={sectionTitle}>السلايدز النصية اللي هتظهر في الهيرو</p>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <button onClick={() => setAllVisible(true)} style={{
              flex: 1, padding: '8px', borderRadius: 8, cursor: 'pointer',
              border: `1px solid ${allVisible ? '#1a5fff' : '#1f2937'}`,
              background: allVisible ? '#1a3a7a' : '#111827',
              color: allVisible ? '#60a5fa' : '#6b7280', fontSize: 12, fontWeight: 600
            }}>كل السلايدز (الـ 6)</button>
            <button onClick={() => setAllVisible(false)} style={{
              flex: 1, padding: '8px', borderRadius: 8, cursor: 'pointer',
              border: `1px solid ${!allVisible ? '#1a5fff' : '#1f2937'}`,
              background: !allVisible ? '#1a3a7a' : '#111827',
              color: !allVisible ? '#60a5fa' : '#6b7280', fontSize: 12, fontWeight: 600
            }}>اختر معين</button>
          </div>

          {!allVisible && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {contentSlides.map(cs => (
                <button key={cs._id} onClick={() => toggleVisibleSlide(cs._id)} style={{
                  padding: '8px 14px', borderRadius: 8, cursor: 'pointer', textAlign: 'right',
                  border: `1px solid ${selectedVisible.includes(cs._id) ? '#c8ff00' : '#1f2937'}`,
                  background: selectedVisible.includes(cs._id) ? '#1a2a00' : '#111827',
                  display: 'flex', alignItems: 'center', gap: 10
                }}>
                  <span style={{
                    minWidth: 28, height: 28, borderRadius: 6, display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12,
                    flexShrink: 0,
                    background: selectedVisible.includes(cs._id) ? '#c8ff00' : '#1f2937',
                    color: selectedVisible.includes(cs._id) ? '#000' : '#6b7280'
                  }}>{cs.order}</span>
                  <span style={{ color: '#f1f5f9', fontSize: 13, fontWeight: 600 }}>{cs.label}</span>
                  {selectedVisible.includes(cs._id) && (
                    <span style={{ color: '#c8ff00', fontSize: 16, marginRight: 'auto' }}>✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Order */}
        <div>
          <label style={labelStyle}>الترتيب</label>
          <input type="number" value={order} onChange={e => setOrder(Number(e.target.value))}
            style={{ ...inputStyle, width: 80 }} />
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={handleSubmit} disabled={loading} style={{
            flex: 1, padding: '12px', borderRadius: 8, border: 'none',
            background: '#1a5fff', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer'
          }}>
            {loading ? 'جاري الحفظ...' : isEdit ? 'حفظ التعديلات' : 'إضافة'}
          </button>
          <button onClick={onClose} style={{
            flex: 1, padding: '12px', borderRadius: 8,
            border: '1px solid #1f2937', background: 'transparent',
            color: '#6b7280', fontSize: 14, cursor: 'pointer'
          }}>إلغاء</button>
        </div>
      </div>
    </div>
  );
}