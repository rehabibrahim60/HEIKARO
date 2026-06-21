import { useState, useEffect } from 'react';
import { API, authHeaders, apiFetch } from '../../utils/api';

const inputStyle = {
  background: '#111827', border: '1px solid #1f2937', borderRadius: 8,
  color: '#f1f5f9', padding: '10px 14px', fontSize: 13, width: '100%',
  outline: 'none', boxSizing: 'border-box'
};
const labelStyle = { color: '#9ca3af', fontSize: 12, marginBottom: 6, display: 'block' };

const ghostBtn = {
  background: 'transparent', border: '1px solid #1f2937', color: '#9ca3af',
  padding: '10px 20px', borderRadius: 8, cursor: 'pointer', fontSize: 14
};
const primaryBtn = {
  background: '#1a5fff', border: 'none', color: '#fff',
  padding: '10px 24px', borderRadius: 8, cursor: 'pointer', fontSize: 14, fontWeight: 600
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
  const [contentSlides, setContentSlides] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await apiFetch('/contentSlides');
        setContentSlides(data.slides || []);
      } catch {
        toast.show('فشل تحميل النصوص', 'error');
      }
    };
    fetchContent();
  }, []);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch(`${API}/upload`, {
      method: 'POST',
      headers: authHeaders(),
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

      const headers = { ...authHeaders(), 'Content-Type': 'application/json' };

      if (isEdit) {
        await fetch(`${API}/hero/slides/${slide._id}`, {
          method: 'PATCH', headers, body: JSON.stringify(body)
        });
        toast.show('تم تحديث السلايد');
      } else {
        await fetch(`${API}/hero/slides`, {
          method: 'POST', headers, body: JSON.stringify(body)
        });
        toast.show('تم إضافة السلايد');
      }
      onClose();
    } catch (err) {
      toast.show('حدث خطأ: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  // الـ preview الصح حسب النوع
  const preview = type === 'image' ? imagePreview : videoPreview;

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: '#0f172a', border: '1px solid #1f2937', borderRadius: 20,
        width: '100%', maxWidth: 600, padding: 32
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
          <h2 style={{ color: '#f1f5f9', fontSize: 18, fontWeight: 700, margin: 0 }}>
            {isEdit ? 'تعديل سلايد' : 'إضافة سلايد جديد'}
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 20 }}>✕</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Type selector */}
          <div>
            <label style={labelStyle}>نوع السلايد</label>
            <div style={{ display: 'flex', gap: 8 }}>
              {['image', 'video'].map(t => (
                <button key={t} onClick={() => setType(t)} style={{
                  flex: 1, padding: '10px', borderRadius: 8, fontSize: 14, fontWeight: 500,
                  border: type === t ? 'none' : '1px solid #1f2937',
                  background: type === t ? '#1a5fff' : 'transparent',
                  color: type === t ? '#fff' : '#6b7280', cursor: 'pointer'
                }}>
                  {t === 'image' ? '🖼 صورة' : '🎬 فيديو'}
                </button>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label style={labelStyle}>{type === 'image' ? 'الصورة' : 'الفيديو'}</label>
            <div style={{
              border: '2px dashed #1f2937', borderRadius: 10, padding: 20,
              textAlign: 'center', cursor: 'pointer'
            }} onClick={() => document.getElementById('slideFile').click()}>
              {preview
                ? type === 'image'
                  ? <img src={preview} alt="" style={{ maxHeight: 140, borderRadius: 8 }} />
                  : <video src={preview} style={{ maxHeight: 140, borderRadius: 8 }} controls />
                : <div style={{ color: '#4b5563', fontSize: 13 }}>
                    اضغط لرفع {type === 'image' ? 'صورة' : 'فيديو'}
                  </div>
              }
              <input
                id="slideFile" type="file" hidden
                accept={type === 'image' ? 'image/*' : 'video/*'}
                onChange={e => {
                  const file = e.target.files[0];
                  if (!file) return;
                  const url = URL.createObjectURL(file);
                  if (type === 'image') { setImageFile(file); setImagePreview(url); }
                  else { setVideoFile(file); setVideoPreview(url); }
                }}
              />
            </div>
          </div>

          {/* Show Overlay Toggle - image only */}
          {type === 'image' && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#cbd5e1', fontSize: 13 }}>إظهار النصوص فوق الصورة؟</span>
              <button onClick={() => setShowOverlay(p => !p)} style={{
                width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
                background: showOverlay ? '#1a5fff' : '#374151', position: 'relative'
              }}>
                <span style={{
                  position: 'absolute', top: 3,
                  left: showOverlay ? 22 : 3,
                  width: 18, height: 18, borderRadius: '50%', background: '#fff',
                  transition: 'left 0.2s'
                }} />
              </button>
            </div>
          )}

          {/* Content Slide selector */}
          {type === 'image' && showOverlay && (
            <div>
              <label style={labelStyle}>اختر نص العرض</label>
              <select
                value={selectedContentId}
                onChange={e => setSelectedContentId(e.target.value)}
                style={inputStyle}
              >
                <option value="">-- اختر --</option>
                {contentSlides.map(cs => (
                  <option key={cs._id} value={cs._id}>
                    {cs.badge || cs.highlight || cs._id}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Order */}
          <div>
            <label style={labelStyle}>الترتيب</label>
            <input
              type="number" value={order}
              onChange={e => setOrder(Number(e.target.value))}
              style={inputStyle}
            />
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 4 }}>
            <button onClick={onClose} style={ghostBtn}>إلغاء</button>
            <button onClick={handleSubmit} disabled={loading} style={primaryBtn}>
              {loading ? 'جاري الحفظ...' : isEdit ? 'تحديث' : 'إضافة'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}