import { useState, useEffect } from 'react';
import { API, authHeaders, apiFetch } from '../../utils/api';

const inputStyle = {
  background: '#111827',
  border: '1px solid #1f2937',
  borderRadius: 8,
  color: '#f1f5f9',
  padding: '10px 14px',
  fontSize: 13,
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box'
};

const labelStyle = {
  color: '#9ca3af',
  fontSize: 12,
  marginBottom: 6,
  display: 'block'
};

const sectionTitle = {
  color: '#6b7280',
  fontSize: 11,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 1,
  marginBottom: 12
};

const ghostBtn = {
  background: 'transparent',
  border: '1px solid #374151',
  color: '#cbd5e1',
  padding: '10px 16px',
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 600
};

const primaryBtn = {
  background: '#0f33fe',
  border: 'none',
  color: '#ffffff',
  padding: '10px 18px',
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 700
};

function Icon({ name, size = 16 }) {
  const icons = {
    image: '🖼️',
    video: '🎥',
    upload: '⬆️'
  };

  return (
    <span style={{ fontSize: size, lineHeight: 1 }}>
      {icons[name] || '•'}
    </span>
  );
}

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
  const [loadingContent, setLoadingContent] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await apiFetch('/contentSlides');
        setContentSlides(data.slides || []);
      } catch {
        toast.show('فشل تحميل النصوص', 'error');
      } finally {
        setLoadingContent(false);
      }
    };

    fetchContent();
  }, [toast]);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`${API}/upload`, {
      method: 'POST',
      headers: authHeaders(), // Do not add Content-Type; fetch adds it automatically with FormData
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || 'Upload failed');
    }

    return data.url;
  };

  const handleSubmit = async () => {
    if (type === 'image' && !imagePreview && !imageFile) {
      return toast.show('ارفع صورة', 'error');
    }

    if (type === 'video' && !videoPreview && !videoFile) {
      return toast.show('ارفع فيديو', 'error');
    }

    if (type === 'image' && showOverlay && !selectedContentId) {
      return toast.show('اختر النص اللي هيظهر فوق الصورة', 'error');
    }

    setLoading(true);

    try {
      // Upload only if there is a new file
      let imageUrl = imagePreview;
      let videoUrl = videoPreview;
      if (imageFile) imageUrl = await uploadFile(imageFile);
      if (videoFile) videoUrl = await uploadFile(videoFile);

      const body = {
        type,
        imageUrl: type === 'image' ? imageUrl : undefined,
        videoUrl: type === 'video' ? videoUrl : undefined,
        showOverlay: type === 'image' ? showOverlay : false,
        overlayTextId: type === 'image' && showOverlay ? selectedContentId : null,
        order: Number(order) || 0,
      };

      const headers = { ...authHeaders(), 'Content-Type': 'application/json' };

      const res = await fetch(
        isEdit ? `${API}/hero/slides/${slide._id}` : `${API}/hero/slides`,
        {
          method: isEdit ? 'PATCH' : 'POST',
          headers: {
            ...authHeaders(),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || `${res.status}: ${res.statusText}`);
      }

      toast.show(isEdit ? 'تم تحديث السلايد' : 'تم إضافة السلايد');
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
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: 20,
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: '#0f172a',
        border: '1px solid #1f2937',
        borderRadius: 20,
        width: '100%',
        maxWidth: 600,
        padding: 32,
        maxHeight: '90vh',
        overflowY: 'auto',
        boxSizing: 'border-box'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 24
        }}>
          <h2 style={{
            color: '#f1f5f9',
            fontSize: 18,
            fontWeight: 700,
            margin: 0
          }}>
            {isEdit ? 'تعديل سلايد' : 'إضافة سلايد جديد'}
          </h2>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#6b7280',
              cursor: 'pointer',
              fontSize: 20
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Type selector */}
          <div>
            <label style={labelStyle}>نوع السلايد</label>
            <div style={{ display: 'flex', gap: 8 }}>
              {['image', 'video'].map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  type="button"
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    border: type === t ? 'none' : '1px solid #1f2937',
                    background: type === t ? '#0f33fe' : 'transparent',
                    color: type === t ? '#fff' : '#6b7280',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6
                  }}
                >
                  <Icon name={t} size={16} />
                  {t === 'image' ? 'صورة' : 'فيديو'}
                </button>
              ))}
            </div>
          </div>

          {/* Image upload */}
          {type === 'image' && (
            <div>
              <label style={labelStyle}>الصورة</label>
              <div
                style={{
                  border: '2px dashed #1f2937',
                  borderRadius: 10,
                  padding: 20,
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => document.getElementById('slideImageFile')?.click()}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt=""
                    style={{ maxHeight: 140, borderRadius: 8, maxWidth: '100%' }}
                  />
                ) : (
                  <div style={{ color: '#4b5563', fontSize: 13 }}>
                    <Icon name="upload" size={24} />
                    <br />
                    اضغط لرفع صورة
                  </div>
                )}

                <input
                  id="slideImageFile"
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

          {/* Video upload */}
          {type === 'video' && (
            <div>
              <label style={labelStyle}>الفيديو</label>
              <div
                style={{
                  border: '2px dashed #1f2937',
                  borderRadius: 10,
                  padding: 20,
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => document.getElementById('slideVideoFile')?.click()}
              >
                {videoPreview ? (
                  <video
                    src={videoPreview}
                    style={{ maxHeight: 140, borderRadius: 8, maxWidth: '100%' }}
                    controls
                  />
                ) : (
                  <div style={{ color: '#4b5563', fontSize: 13 }}>
                    <Icon name="upload" size={24} />
                    <br />
                    اضغط لرفع فيديو
                  </div>
                )}

                <input
                  id="slideVideoFile"
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
          </div>

          {/* Order */}
          <div>
            <label style={labelStyle}>ترتيب السلايد</label>
            <input
              type="number"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              style={inputStyle}
              placeholder="0"
            />
          </div>

          {/* Show overlay toggle - image only */}
          {type === 'image' && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              background: '#111827',
              borderRadius: 10
            }}>
              <span style={{ color: '#cbd5e1', fontSize: 13 }}>
                إظهار النصوص فوق الصورة؟
              </span>

              <button
                type="button"
                onClick={() => setShowOverlay((p) => !p)}
                style={{
                  width: 44,
                  height: 24,
                  borderRadius: 12,
                  border: 'none',
                  cursor: 'pointer',
                  background: showOverlay ? '#0f33fe' : '#374151',
                  position: 'relative',
                  transition: 'background 0.2s'
                }}
              >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#cbd5e1', fontSize: 13 }}>إظهار النصوص فوق الصورة؟</span>
              <button onClick={() => setShowOverlay(p => !p)} style={{
                width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
                background: showOverlay ? '#1a5fff' : '#374151', position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  top: 3,
                  left: showOverlay ? 22 : 3,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: '#fff',
                  transition: 'left 0.2s'
                }} />
              </button>
            </div>
          )}

          {/* Overlay text selector */}
          {type === 'image' && showOverlay && (
            <div style={{
              background: '#111827',
              borderRadius: 12,
              padding: 16
            }}>
              <p style={sectionTitle}>نصوص العرض</p>

              {loadingContent ? (
                <p style={{ color: '#9ca3af', fontSize: 13, margin: 0 }}>
                  جاري تحميل النصوص...
                </p>
              ) : (
                <select
                  value={selectedContentId}
                  onChange={(e) => setSelectedContentId(e.target.value)}
                  style={inputStyle}
                >
                  <option value="">اختاري النص اللي هيظهر فوق الصورة</option>
                  {contentSlides.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.badge || item.title || item.highlight || item._id}
                    </option>
                  ))}
                </select>
              )}
            </div>
          )}

          <div style={{
            display: 'flex',
            gap: 10,
            justifyContent: 'flex-end',
            marginTop: 4
          }}>
            <button type="button" onClick={onClose} style={ghostBtn}>
              إلغاء
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              style={{
                ...primaryBtn,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? 'جاري الحفظ...' : isEdit ? 'تحديث' : 'إضافة'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
