// import { useState, useEffect } from "react";
// import { API, authHeaders, apiFetch } from "../../utils/api";

// const inputStyle = {
//   background: "#111827",
//   border: "1px solid #1f2937",
//   borderRadius: 8,
//   color: "#f1f5f9",
//   padding: "10px 14px",
//   fontSize: 13,
//   width: "100%",
//   outline: "none",
//   boxSizing: "border-box",
// };

// const labelStyle = {
//   color: "#9ca3af",
//   fontSize: 12,
//   marginBottom: 6,
//   display: "block",
// };

// const sectionTitle = {
//   color: "#6b7280",
//   fontSize: 11,
//   fontWeight: 700,
//   textTransform: "uppercase",
//   letterSpacing: 1,
//   marginBottom: 12,
// };

// const ghostBtn = {
//   background: "transparent",
//   border: "1px solid #374151",
//   color: "#cbd5e1",
//   padding: "10px 16px",
//   borderRadius: 8,
//   cursor: "pointer",
//   fontSize: 13,
//   fontWeight: 600,
// };

// const primaryBtn = {
//   background: "#0f33fe",
//   border: "none",
//   color: "#ffffff",
//   padding: "10px 18px",
//   borderRadius: 8,
//   cursor: "pointer",
//   fontSize: 13,
//   fontWeight: 700,
// };

// function Icon({ name, size = 16 }) {
//   const icons = {
//     image: "🖼️",
//     video: "🎥",
//     upload: "⬆️",
//   };

//   return (
//     <span style={{ fontSize: size, lineHeight: 1 }}>{icons[name] || "•"}</span>
//   );
// }

// export default function SlideForm({
//   slide,
//   toast,
//   onClose,
//   allVisible = false,
//   selectedVisible = [],
// }) {
//   const isEdit = !!slide;
//   const overlayData =
//     typeof slide?.overlayText === "object"
//       ? slide.overlayText
//       : slide?.overlay || {};

//   const [type, setType] = useState(slide?.type || "image");
//   const [showOverlay, setShowOverlay] = useState(slide?.showOverlay || false);
//   const [showLogo, setShowLogo] = useState(slide?.showLogo ?? true);

//   const [overlayMode, setOverlayMode] = useState(
//     slide?.overlayText ? "preset" : "none",
//   );

//   const [overlayTextId, setOverlayTextId] = useState(
//     slide?.overlayText || null,
//   );
//   const [customOverlayText, setCustomOverlayText] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(slide?.imageUrl || "");
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoPreview, setVideoPreview] = useState(slide?.videoUrl || "");
//   const [selectedContentId, setSelectedContentId] = useState(
//     slide?.overlayText?._id || slide?.overlayText || "",
//   );
//   const [overlay, setOverlay] = useState({
//     badge: overlayData?.badge || slide?.badge || "",
//     prefix: overlayData?.prefix || slide?.prefix || "",
//     highlight: overlayData?.highlight || slide?.highlight || "",
//     suffix: overlayData?.suffix || slide?.suffix || "",
//     description: overlayData?.description || slide?.description || "",
//     buttonText: overlayData?.buttonText || slide?.buttonText || "",
//     buttonLink: overlayData?.buttonLink || slide?.buttonLink || "",
//   });
//   const [order, setOrder] = useState(slide?.order ?? 0);
//   const [loading, setLoading] = useState(false);
//   const [contentSlides, setContentSlides] = useState([]);
//   const [loadingContent, setLoadingContent] = useState(false);

//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const data = await apiFetch("/contentSlides");
//         setContentSlides(data.slides || []);
//       } catch {
//         toast.show("فشل تحميل النصوص", "error");
//       } finally {
//         setLoadingContent(false);
//       }
//     };

//     fetchContent();
//   }, [toast]);

//   const uploadFile = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);

//     const res = await fetch(`${API}/upload`, {
//       method: "POST",
//       headers: authHeaders(), // Do not add Content-Type; fetch adds it automatically with FormData
//       body: formData,
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data?.message || "Upload failed");
//     }

//     return data.url;
//   };

//   const handleSubmit = async () => {
//     if (type === "image" && !imagePreview && !imageFile) {
//       return toast.show("ارفع صورة", "error");
//     }

//     if (type === "video" && !videoPreview && !videoFile) {
//       return toast.show("ارفع فيديو", "error");
//     }

//     if (type === "image" && showOverlay && !selectedContentId) {
//       return toast.show("اختر النص اللي هيظهر فوق الصورة", "error");
//     }

//     setLoading(true);

//     let body = {
//       type,
//       imageUrl: type === "image" ? imagePreview : undefined,
//       videoUrl: type === "video" ? videoPreview : undefined,
//       showOverlay: type === "image" ? showOverlay : false,
//       overlayTextId: type === "image" && showOverlay ? selectedContentId : null,
//       overlay,
//       order: Number(order) || 0,
//     };

//     try {
//       // Upload only if there is a new file
//       let imageUrl = imagePreview;
//       let videoUrl = videoPreview;
//       if (imageFile) imageUrl = await uploadFile(imageFile);
//       if (videoFile) videoUrl = await uploadFile(videoFile);

//       body = {
//         type,
//         imageUrl: type === "image" ? imageUrl : undefined,
//         videoUrl: type === "video" ? videoUrl : undefined,
//         showOverlay: type === "image" ? showOverlay : false,
//         overlayTextId:
//           type === "image" && showOverlay ? selectedContentId : null,
//         overlay,
//         order: Number(order) || 0,
//       };

//       const url = isEdit
//         ? `${API}/home/slides/${slide._id}`
//         : `${API}/home/slides`;

//       await fetch(url, {
//         method: isEdit ? "PATCH" : "POST",
//         headers: { ...authHeaders(), "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       await fetch(`${API}/home/visible-slides`, {
//         method: "PATCH",
//         headers: { ...authHeaders(), "Content-Type": "application/json" },
//         body: JSON.stringify({
//           visibleContentSlides: allVisible ? [] : selectedVisible,
//         }),
//       });

//       toast.show(isEdit ? "تم التعديل" : "تم الإضافة");
//       onClose();
//     } catch (err) {
//       try {
//         toast.show("Error: " + err.message, "error");
//         const headers = {
//           ...authHeaders(),
//           "Content-Type": "application/json",
//         };

//         const res = await fetch(
//           isEdit ? `${API}/hero/slides/${slide._id}` : `${API}/hero/slides`,
//           {
//             method: isEdit ? "PATCH" : "POST",
//             headers,
//             body: JSON.stringify(body),
//           },
//         );

//         const data = await res.json().catch(() => null);

//         if (!res.ok) {
//           throw new Error(data?.message || `${res.status}: ${res.statusText}`);
//         }

//         toast.show(isEdit ? "تم تحديث السلايد" : "تم إضافة السلايد");
//         onClose();
//       } catch (err) {
//         toast.show("حدث خطأ: " + err.message, "error");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // الـ preview الصح حسب النوع
//   const preview = type === "image" ? imagePreview : videoPreview;
//   const save = handleSubmit;

//   return (
//     <div
//       data-preview={preview ? "true" : "false"}
//       style={{
//         position: "fixed",
//         inset: 0,
//         background: "rgba(0,0,0,0.7)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 1000,
//         padding: 20,
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         style={{
//           background: "#0f172a",
//           border: "1px solid #1f2937",
//           borderRadius: 20,
//           width: "100%",
//           maxWidth: 600,
//           padding: 32,
//           maxHeight: "90vh",
//           overflowY: "auto",
//           boxSizing: "border-box",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: 24,
//           }}
//         >
//           <h2
//             style={{
//               color: "#f1f5f9",
//               fontSize: 18,
//               fontWeight: 700,
//               margin: 0,
//             }}
//           >
//             {isEdit ? "تعديل سلايد" : "إضافة سلايد جديد"}
//           </h2>

//           <button
//             type="button"
//             onClick={onClose}
//             style={{
//               background: "none",
//               border: "none",
//               color: "#6b7280",
//               cursor: "pointer",
//               fontSize: 20,
//             }}
//           >
//             ✕
//           </button>
//         </div>

//         <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//           {/* Type selector */}
//           <div>
//             <label style={labelStyle}>نوع السلايد</label>
//             <div style={{ display: "flex", gap: 8 }}>
//               {["image", "video"].map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setType(t)}
//                   type="button"
//                   style={{
//                     flex: 1,
//                     padding: "10px",
//                     borderRadius: 8,
//                     fontSize: 14,
//                     fontWeight: 500,
//                     border: type === t ? "none" : "1px solid #1f2937",
//                     background: type === t ? "#0f33fe" : "transparent",
//                     color: type === t ? "#fff" : "#6b7280",
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: 6,
//                   }}
//                 >
//                   <Icon name={t} size={16} />
//                   {t === "image" ? "صورة" : "فيديو"}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Image upload */}
//           {type === "image" && (
//             <div>
//               <label style={labelStyle}>الصورة</label>
//               <div
//                 style={{
//                   border: "2px dashed #1f2937",
//                   borderRadius: 10,
//                   padding: 20,
//                   textAlign: "center",
//                   cursor: "pointer",
//                 }}
//                 onClick={() =>
//                   document.getElementById("slideImageFile")?.click()
//                 }
//               >
//                 {imagePreview ? (
//                   <img
//                     src={imagePreview}
//                     alt=""
//                     style={{
//                       maxHeight: 140,
//                       borderRadius: 8,
//                       maxWidth: "100%",
//                     }}
//                   />
//                 ) : (
//                   <div style={{ color: "#4b5563", fontSize: 13 }}>
//                     <Icon name="upload" size={24} />
//                     <br />
//                     اضغط لرفع صورة
//                   </div>
//                 )}

//                 <input
//                   id="slideImageFile"
//                   type="file"
//                   accept="image/*"
//                   hidden
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     if (file) {
//                       setImageFile(file);
//                       setImagePreview(URL.createObjectURL(file));
//                     }
//                   }}
//                 />
//               </div>
//             </div>
//           )}

//           {/* Video upload */}
//           {type === "video" && (
//             <div>
//               <label style={labelStyle}>الفيديو</label>
//               <div
//                 style={{
//                   border: "2px dashed #1f2937",
//                   borderRadius: 10,
//                   padding: 20,
//                   textAlign: "center",
//                   cursor: "pointer",
//                 }}
//                 onClick={() =>
//                   document.getElementById("slideVideoFile")?.click()
//                 }
//               >
//                 {videoPreview ? (
//                   <video
//                     src={videoPreview}
//                     style={{
//                       maxHeight: 140,
//                       borderRadius: 8,
//                       maxWidth: "100%",
//                     }}
//                     controls
//                   />
//                 ) : (
//                   <div style={{ color: "#4b5563", fontSize: 13 }}>
//                     <Icon name="upload" size={24} />
//                     <br />
//                     اضغط لرفع فيديو
//                   </div>
//                 )}

//                 <input
//                   id="slideVideoFile"
//                   type="file"
//                   accept="video/*"
//                   hidden
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     if (file) {
//                       setVideoFile(file);
//                       setVideoPreview(URL.createObjectURL(file));
//                     }
//                   }}
//                 />
//               </div>
//             </div>
//           )}

//           {/* Order */}
//           <div>
//             <label style={labelStyle}>ترتيب السلايد</label>
//             <input
//               type="number"
//               value={order}
//               onChange={(e) => setOrder(e.target.value)}
//               style={inputStyle}
//               placeholder="0"
//             />
//           </div>

//           {/* Show overlay toggle - image only */}
//           {type === "image" && (
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 padding: "12px 16px",
//                 background: "#111827",
//                 borderRadius: 10,
//               }}
//             >
//               <span style={{ color: "#cbd5e1", fontSize: 13 }}>
//                 إظهار النصوص فوق الصورة؟
//               </span>

//               <button
//                 type="button"
//                 onClick={() => setShowOverlay((p) => !p)}
//                 style={{
//                   width: 44,
//                   height: 24,
//                   borderRadius: 12,
//                   border: "none",
//                   cursor: "pointer",
//                   background: showOverlay ? "#0f33fe" : "#374151",
//                   position: "relative",
//                   transition: "background 0.2s",
//                 }}
//               >
//                 <span
//                   style={{
//                     position: "absolute",
//                     top: 3,
//                     left: showOverlay ? 22 : 3,
//                     width: 18,
//                     height: 18,
//                     borderRadius: "50%",
//                     background: "#fff",
//                     transition: "left 0.2s",
//                   }}
//                 />
//               </button>
//             </div>
//           )}

//           {/* Show Overlay Toggle - image only */}
//           {type === "image" && (
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <span style={{ color: "#cbd5e1", fontSize: 13 }}>
//                 إظهار النصوص فوق الصورة؟
//               </span>
//               <button
//                 type="button"
//                 onClick={() => setShowOverlay((p) => !p)}
//                 style={{
//                   width: 44,
//                   height: 24,
//                   borderRadius: 12,
//                   border: "none",
//                   cursor: "pointer",
//                   background: showOverlay ? "#1a5fff" : "#374151",
//                   position: "relative",
//                   transition: "background 0.2s",
//                 }}
//               >
//                 <span
//                   style={{
//                     position: "absolute",
//                     top: 3,
//                     left: showOverlay ? 22 : 3,
//                     width: 18,
//                     height: 18,
//                     borderRadius: "50%",
//                     background: "#fff",
//                     transition: "left 0.2s",
//                   }}
//                 />
//               </button>
//             </div>
//           )}

//           {/* Overlay text fields */}
//           {(showOverlay || type === "video") && (
//             <div
//               style={{
//                 background: "#111827",
//                 borderRadius: 12,
//                 padding: 16,
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: 12,
//               }}
//             >
//               <p
//                 style={{
//                   color: "#22d3ee",
//                   fontSize: 12,
//                   fontWeight: 600,
//                   margin: "0 0 4px",
//                   textTransform: "uppercase",
//                   letterSpacing: 1,
//                 }}
//               >
//                 نصوص العرض
//               </p>
//               <input
//                 value={overlay.badge}
//                 onChange={(e) =>
//                   setOverlay((p) => ({ ...p, badge: e.target.value }))
//                 }
//                 style={inputStyle}
//                 placeholder="Badge مثلاً: MARKETING & GROWTH"
//               />
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr 1fr 1fr",
//                   gap: 8,
//                 }}
//               >
//                 <input
//                   value={overlay.prefix}
//                   onChange={(e) =>
//                     setOverlay((p) => ({ ...p, prefix: e.target.value }))
//                   }
//                   style={inputStyle}
//                   placeholder="Prefix: WE"
//                 />
//                 <input
//                   value={overlay.highlight}
//                   onChange={(e) =>
//                     setOverlay((p) => ({ ...p, highlight: e.target.value }))
//                   }
//                   style={inputStyle}
//                   placeholder="Highlight"
//                 />
//                 <input
//                   value={overlay.suffix}
//                   onChange={(e) =>
//                     setOverlay((p) => ({ ...p, suffix: e.target.value }))
//                   }
//                   style={inputStyle}
//                   placeholder="Suffix: BRANDS"
//                 />
//               </div>
//               <textarea
//                 value={overlay.description}
//                 onChange={(e) =>
//                   setOverlay((p) => ({ ...p, description: e.target.value }))
//                 }
//                 style={{ ...inputStyle, minHeight: 70, resize: "vertical" }}
//                 placeholder="وصف..."
//               />
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr 1fr",
//                   gap: 8,
//                 }}
//               >
//                 <input
//                   value={overlay.buttonText}
//                   onChange={(e) =>
//                     setOverlay((p) => ({ ...p, buttonText: e.target.value }))
//                   }
//                   style={inputStyle}
//                   placeholder="نص الزرار"
//                 />
//                 <input
//                   value={overlay.buttonLink}
//                   onChange={(e) =>
//                     setOverlay((p) => ({ ...p, buttonLink: e.target.value }))
//                   }
//                   style={inputStyle}
//                   placeholder="رابط الزرار"
//                 />
//               </div>
//             </div>
//           )}

//           <div
//             style={{
//               display: "flex",
//               gap: 10,
//               justifyContent: "flex-end",
//               marginTop: 4,
//             }}
//           >
//             <button type="button" onClick={onClose} style={ghostBtn}>
//               إلغاء
//             </button>
//             <button
//               type="button"
//               onClick={save}
//               disabled={loading}
//               style={primaryBtn}
//             >
//               {loading ? "جاري الحفظ..." : isEdit ? "تحديث" : "إضافة"}
//             </button>

//             {/* Overlay text selector */}
//             {type === "image" && showOverlay && (
//               <div
//                 style={{
//                   background: "#111827",
//                   borderRadius: 12,
//                   padding: 16,
//                 }}
//               >
//                 <p style={sectionTitle}>نصوص العرض</p>

//                 {loadingContent ? (
//                   <p style={{ color: "#9ca3af", fontSize: 13, margin: 0 }}>
//                     جاري تحميل النصوص...
//                   </p>
//                 ) : (
//                   <select
//                     value={selectedContentId}
//                     onChange={(e) => setSelectedContentId(e.target.value)}
//                     style={inputStyle}
//                   >
//                     <option value="">اختاري النص اللي هيظهر فوق الصورة</option>
//                     {contentSlides.map((item) => (
//                       <option key={item._id} value={item._id}>
//                         {item.badge || item.title || item.highlight || item._id}
//                       </option>
//                     ))}
//                   </select>
//                 )}
//               </div>
//             )}

//             <div
//               style={{
//                 display: "flex",
//                 gap: 10,
//                 justifyContent: "flex-end",
//                 marginTop: 4,
//               }}
//             >
//               <button type="button" onClick={onClose} style={ghostBtn}>
//                 إلغاء
//               </button>

//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 style={{
//                   ...primaryBtn,
//                   opacity: loading ? 0.7 : 1,
//                   cursor: loading ? "not-allowed" : "pointer",
//                 }}
//               >
//                 {loading ? "جاري الحفظ..." : isEdit ? "تحديث" : "إضافة"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//=========================================================================================


// import { useState, useEffect } from "react";
// import { API, authHeaders, apiFetch } from "../../utils/api";

// /* =========================
//    Styles
// ========================= */

// const inputStyle = {
//   background: "#111827",
//   border: "1px solid #1f2937",
//   borderRadius: 8,
//   color: "#f1f5f9",
//   padding: "10px 14px",
//   fontSize: 13,
//   width: "100%",
// };

// const labelStyle = {
//   color: "#9ca3af",
//   fontSize: 12,
//   marginBottom: 6,
//   display: "block",
// };

// const ghostBtn = {
//   background: "transparent",
//   border: "1px solid #374151",
//   color: "#cbd5e1",
//   padding: "10px 16px",
//   borderRadius: 8,
//   cursor: "pointer",
//   fontSize: 13,
//   fontWeight: 600,
// };

// const primaryBtn = {
//   background: "#0f33fe",
//   border: "none",
//   color: "#ffffff",
//   padding: "10px 18px",
//   borderRadius: 8,
//   cursor: "pointer",
//   fontSize: 13,
//   fontWeight: 700,
// };

// /* =========================
//    Small UI Helpers
// ========================= */

// function Icon({ name }) {
//   const map = { image: "🖼️", video: "🎥", upload: "⬆️" };
//   return <span>{map[name] || "•"}</span>;
// }

// function Toggle({ value, onChange }) {
//   return (
//     <button
//       type="button"
//       onClick={() => onChange(!value)}
//       style={{
//         width: 44,
//         height: 24,
//         borderRadius: 12,
//         border: "none",
//         cursor: "pointer",
//         background: value ? "#0f33fe" : "#374151",
//         position: "relative",
//       }}
//     >
//       <span
//         style={{
//           position: "absolute",
//           top: 3,
//           left: value ? 22 : 3,
//           width: 18,
//           height: 18,
//           borderRadius: "50%",
//           background: "#fff",
//           transition: "left 0.2s",
//         }}
//       />
//     </button>
//   );
// }

// /* =========================
//    Main Component
// ========================= */

// export default function SlideForm({
//   slide,
//   toast,
//   onClose,
//   allVisible = false,
//   selectedVisible = [],
// }) {
//   const isEdit = !!slide;

//   /* ---------- State ---------- */

//   const [type, setType] = useState(slide?.type || "image");
//   const [order, setOrder] = useState(slide?.order ?? 0);
//   const [showOverlay, setShowOverlay] = useState(slide?.showOverlay || false);

//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(slide?.imageUrl || "");

//   const [videoFile, setVideoFile] = useState(null);
//   const [videoPreview, setVideoPreview] = useState(slide?.videoUrl || "");

//   const [overlay, setOverlay] = useState({
//     badge: slide?.badge || "",
//     prefix: slide?.prefix || "",
//     highlight: slide?.highlight || "",
//     suffix: slide?.suffix || "",
//     description: slide?.description || "",
//     buttonText: slide?.buttonText || "",
//     buttonLink: slide?.buttonLink || "",
//   });

//   const [contentSlides, setContentSlides] = useState([]);
//   const [selectedContentId, setSelectedContentId] = useState(
//     slide?.overlayText?._id || slide?.overlayText || "",
//   );

//   const [loading, setLoading] = useState(false);

//   /* ---------- Effects ---------- */

//   useEffect(() => {
//     apiFetch("/contentSlides")
//       .then((res) => setContentSlides(res.slides || []))
//       .catch(() => toast.show("Failed to load overlay texts", "error"));
//   }, [toast]);

//   /* ---------- Helpers ---------- */

//   const uploadFile = async (file) => {
//     const fd = new FormData();
//     fd.append("file", file);

//     const res = await fetch(`${API}/upload`, {
//       method: "POST",
//       headers: authHeaders(),
//       body: fd,
//     });

//     const data = await res.json();
//     if (!res.ok) throw new Error(data?.message || "Upload failed");
//     return data.url;
//   };

//   /* ---------- Submit ---------- */

//   const handleSubmit = async () => {
//     if (type === "image" && !imagePreview && !imageFile)
//       return toast.show("Please upload an image", "error");

//     if (type === "video" && !videoPreview && !videoFile)
//       return toast.show("Please upload a video", "error");

//     if (type === "image" && showOverlay && !selectedContentId)
//       return toast.show("Select overlay text", "error");

//     setLoading(true);

//     try {
//       const imageUrl = imageFile ? await uploadFile(imageFile) : imagePreview;
//       const videoUrl = videoFile ? await uploadFile(videoFile) : videoPreview;

//       const body = {
//         type,
//         order: Number(order) || 0,
//         imageUrl: type === "image" ? imageUrl : undefined,
//         videoUrl: type === "video" ? videoUrl : undefined,
//         showOverlay: type === "image" ? showOverlay : false,
//         overlayTextId:
//           type === "image" && showOverlay ? selectedContentId : null,
//         overlay,
//       };

//       await fetch(
//         isEdit ? `${API}/home/slides/${slide._id}` : `${API}/home/slides`,
//         {
//           method: isEdit ? "PATCH" : "POST",
//           headers: { ...authHeaders(), "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         },
//       );

//       await fetch(`${API}/home/visible-slides`, {
//         method: "PATCH",
//         headers: { ...authHeaders(), "Content-Type": "application/json" },
//         body: JSON.stringify({
//           visibleContentSlides: allVisible ? [] : selectedVisible,
//         }),
//       });

//       toast.show(isEdit ? "Slide updated" : "Slide created");
//       onClose();
//     } catch (err) {
//       toast.show(err.message, "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* =========================
//      Render
//   ========================= */

//   return (
//     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.7)" }}>
//       <div
//         style={{
//           background: "#0f172a",
//           maxWidth: 600,
//           margin: "5vh auto",
//           padding: 32,
//           borderRadius: 20,
//         }}
//       >
//         <h2 style={{ color: "#fff", marginBottom: 20 }}>
//           {isEdit ? "Edit Slide" : "Create Slide"}
//         </h2>

//         {/* Type */}
//         <label style={labelStyle}>Slide Type</label>
//         <div style={{ display: "flex", gap: 8 }}>
//           {["image", "video"].map((t) => (
//             <button
//               key={t}
//               onClick={() => setType(t)}
//               style={{
//                 flex: 1,
//                 padding: 10,
//                 borderRadius: 8,
//                 background: type === t ? "#0f33fe" : "transparent",
//                 color: type === t ? "#fff" : "#9ca3af",
//                 border: "1px solid #1f2937",
//               }}
//             >
//               <Icon name={t} /> {t.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* Order */}
//         <label style={{ ...labelStyle, marginTop: 16 }}>Order</label>
//         <input
//           type="number"
//           value={order}
//           onChange={(e) => setOrder(e.target.value)}
//           style={inputStyle}
//         />

//         {type === "image" && (
//           <div>
//             <label style={labelStyle}>Image</label>

//             <div
//               style={{
//                 border: "2px dashed #1f2937",
//                 borderRadius: 12,
//                 padding: 24,
//                 textAlign: "center",
//                 cursor: "pointer",
//               }}
//               onClick={() => document.getElementById("imageInput").click()}
//             >
//               {imagePreview ? (
//                 <img
//                   src={imagePreview}
//                   alt="Preview"
//                   style={{ maxWidth: "100%", maxHeight: 160, borderRadius: 8 }}
//                 />
//               ) : (
//                 <p style={{ color: "#6b7280", fontSize: 13 }}>
//                   Click to upload image
//                 </p>
//               )}

//               <input
//                 id="imageInput"
//                 type="file"
//                 accept="image/*"
//                 hidden
//                 onChange={(e) => {
//                   const file = e.target.files[0];
//                   if (file) {
//                     setImageFile(file);
//                     setImagePreview(URL.createObjectURL(file));
//                   }
//                 }}
//               />
//             </div>
//           </div>
//         )}

//         {type === "video" && (
//           <div>
//             <label style={labelStyle}>Video</label>

//             <div
//               style={{
//                 border: "2px dashed #1f2937",
//                 borderRadius: 12,
//                 padding: 24,
//                 textAlign: "center",
//                 cursor: "pointer",
//               }}
//               onClick={() => document.getElementById("videoInput").click()}
//             >
//               {videoPreview ? (
//                 <video
//                   src={videoPreview}
//                   controls
//                   style={{ maxWidth: "100%", maxHeight: 160, borderRadius: 8 }}
//                 />
//               ) : (
//                 <p style={{ color: "#6b7280", fontSize: 13 }}>
//                   Click to upload video
//                 </p>
//               )}

//               <input
//                 id="videoInput"
//                 type="file"
//                 accept="video/*"
//                 hidden
//                 onChange={(e) => {
//                   const file = e.target.files[0];
//                   if (file) {
//                     setVideoFile(file);
//                     setVideoPreview(URL.createObjectURL(file));
//                   }
//                 }}
//               />
//             </div>
//           </div>
//         )}

//         {/* Overlay Toggle */}
//         {type === "image" && (
//           <div
//             style={{
//               marginTop: 16,
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <span style={{ color: "#cbd5e1", fontSize: 13 }}>
//               Show Overlay Text
//             </span>
//             <Toggle value={showOverlay} onChange={setShowOverlay} />
//           </div>
//         )}

//         {/* Overlay Content */}
//         {type === "image" && showOverlay && (
//           <div style={{ marginTop: 16 }}>
//             <select
//               value={selectedContentId}
//               onChange={(e) => setSelectedContentId(e.target.value)}
//               style={inputStyle}
//             >
//               <option value="">Select overlay content</option>
//               {contentSlides.map((c) => (
//                 <option key={c._id} value={c._id}>
//                   {c.badge || c.heading || c._id}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Actions */}
//         <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
//           <button onClick={onClose} style={ghostBtn}>
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             style={{
//               ...primaryBtn,
//               opacity: loading ? 0.6 : 1,
//             }}
//           >
//             {loading ? "Saving..." : isEdit ? "Update" : "Create"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { API, authHeaders, apiFetch } from "../../utils/api";

// ─── Shared styles ────────────────────────────────────────────────────────────
const inputStyle = {
  background: "#111827",
  border: "1px solid #1f2937",
  borderRadius: 8,
  color: "#f1f5f9",
  padding: "10px 14px",
  fontSize: 13,
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle = {
  color: "#9ca3af",
  fontSize: 12,
  marginBottom: 6,
  display: "block",
};

const sectionTitle = {
  color: "#6b7280",
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1,
  marginBottom: 12,
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

// ─── Toggle helper ─────────────────────────────────────────────────────────────
function Toggle({ value, onChange, label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        background: "#111827",
        borderRadius: 10,
      }}
    >
      <span style={{ color: "#cbd5e1", fontSize: 13 }}>{label}</span>
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
          transition: "background 0.2s",
          flexShrink: 0,
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
    </div>
  );
}

// ─── Empty custom overlay state ────────────────────────────────────────────────
const emptyCustomOverlay = {
  label: "",
  heading: "",
  description: "",
  buttons: [{ text: "", href: "", variant: "primary" }],
};

// ─── Main component ────────────────────────────────────────────────────────────
export default function SlideForm({
  slide,
  toast,
  onClose,
  allVisible = false,
  selectedVisible = [],
}) {
  const isEdit = !!slide;

  // ── Core state ──────────────────────────────────────────────────────────────
  const [type, setType] = useState(slide?.type || "image");
  const [order, setOrder] = useState(slide?.order ?? 0);
  const [loading, setLoading] = useState(false);

  // ── Image state ─────────────────────────────────────────────────────────────
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(slide?.imageUrl || "");

  // ── Video state ─────────────────────────────────────────────────────────────
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(slide?.videoUrl || "");

  // ── Image-only toggles ──────────────────────────────────────────────────────
  const [showLogo, setShowLogo] = useState(slide?.showLogo ?? true);
  const [showOverlay, setShowOverlay] = useState(slide?.showOverlay || false);

  // ── Overlay mode: "preset" | "custom" ──────────────────────────────────────
  // Determine initial mode from saved data
  const initialOverlayMode =
    slide?.overlayMode === "custom"
      ? "custom"
      : slide?.overlayTextId || slide?.overlayText
      ? "preset"
      : "preset";

  const [overlayMode, setOverlayMode] = useState(initialOverlayMode);

  // ── Preset overlay ──────────────────────────────────────────────────────────
  const [contentSlides, setContentSlides] = useState([]);
  const [loadingContent, setLoadingContent] = useState(true);
  const [selectedContentId, setSelectedContentId] = useState(
    slide?.overlayText?._id || slide?.overlayText || ""
  );

  // ── Custom overlay ──────────────────────────────────────────────────────────
  const savedCustom =
    slide?.overlayMode === "custom" && typeof slide?.overlayText === "object"
      ? slide.overlayText
      : null;

  const [customOverlay, setCustomOverlay] = useState(
    savedCustom || emptyCustomOverlay
  );

  // ── Fetch preset content slides ─────────────────────────────────────────────
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await apiFetch("/contentSlides");
        setContentSlides(data.slides || []);
      } catch {
        toast.show("فشل تحميل النصوص", "error");
      } finally {
        setLoadingContent(false);
      }
    };
    fetchContent();
  }, [toast]);

  // ── Custom overlay helpers ──────────────────────────────────────────────────
  const updateCustomField = (field, value) =>
    setCustomOverlay((p) => ({ ...p, [field]: value }));

  const updateButton = (idx, field, value) =>
    setCustomOverlay((p) => {
      const buttons = [...p.buttons];
      buttons[idx] = { ...buttons[idx], [field]: value };
      return { ...p, buttons };
    });

  const addButton = () =>
    setCustomOverlay((p) => ({
      ...p,
      buttons: [...p.buttons, { text: "", href: "", variant: "secondary" }],
    }));

  const removeButton = (idx) =>
    setCustomOverlay((p) => ({
      ...p,
      buttons: p.buttons.filter((_, i) => i !== idx),
    }));

  // ── Upload helper ───────────────────────────────────────────────────────────
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${API}/upload`, {
      method: "POST",
      headers: authHeaders(),
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || "Upload failed");
    return data.url;
  };

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    // Validations
    if (type === "image" && !imagePreview && !imageFile)
      return toast.show("ارفع صورة", "error");
    if (type === "video" && !videoPreview && !videoFile)
      return toast.show("ارفع فيديو", "error");
    if (type === "image" && showOverlay && overlayMode === "preset" && !selectedContentId)
      return toast.show("اختر نص من القائمة", "error");
    if (type === "image" && showOverlay && overlayMode === "custom" && !customOverlay.heading.trim())
      return toast.show("اكتب عنوان للنص المخصص", "error");

    setLoading(true);

    try {
      // Upload new files if any
      let imageUrl = imagePreview;
      let videoUrl = videoPreview;
      if (imageFile) imageUrl = await uploadFile(imageFile);
      if (videoFile) videoUrl = await uploadFile(videoFile);

      // Build body
      const body = {
        type,
        order: Number(order) || 0,
        // Image fields
        ...(type === "image" && {
          imageUrl,
          showLogo,
          showOverlay,
          ...(showOverlay
            ? overlayMode === "preset"
              ? { overlayTextId: selectedContentId, overlayMode: "preset" }
              : { overlayText: customOverlay, overlayMode: "custom" }
            : { overlayMode: "none" }),
        }),
        // Video fields
        ...(type === "video" && { videoUrl }),
      };

      const url = isEdit
        ? `${API}/home/slides/${slide._id}`
        : `${API}/home/slides`;

      const res = await fetch(url, {
        method: isEdit ? "PATCH" : "POST",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || `${res.status}`);
      }

      // Update visible content slides list
      await fetch(`${API}/home/visible-slides`, {
        method: "PATCH",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({
          visibleContentSlides: allVisible ? [] : selectedVisible,
        }),
      });

      toast.show(isEdit ? "تم التعديل ✓" : "تم الإضافة ✓");
      onClose();
    } catch (err) {
      toast.show("حدث خطأ: " + err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 20,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#0f172a",
          border: "1px solid #1f2937",
          borderRadius: 20,
          width: "100%",
          maxWidth: 600,
          padding: 32,
          maxHeight: "90vh",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <h2 style={{ color: "#f1f5f9", fontSize: 18, fontWeight: 700, margin: 0 }}>
            {isEdit ? "تعديل سلايد" : "إضافة سلايد جديد"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            style={{ background: "none", border: "none", color: "#6b7280", cursor: "pointer", fontSize: 20 }}
          >
            ✕
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* ── Type selector ── */}
          <div>
            <label style={labelStyle}>نوع السلايد</label>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { value: "image", label: "🖼️ صورة" },
                { value: "video", label: "🎥 فيديو" },
              ].map((t) => (
                <button
                  key={t.value}
                  onClick={() => setType(t.value)}
                  type="button"
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    border: type === t.value ? "none" : "1px solid #1f2937",
                    background: type === t.value ? "#0f33fe" : "transparent",
                    color: type === t.value ? "#fff" : "#6b7280",
                    cursor: "pointer",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Image upload ── */}
          {type === "image" && (
            <div>
              <label style={labelStyle}>الصورة</label>
              <div
                style={{
                  border: "2px dashed #1f2937",
                  borderRadius: 10,
                  padding: 20,
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => document.getElementById("slideImageFile")?.click()}
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="" style={{ maxHeight: 140, borderRadius: 8, maxWidth: "100%" }} />
                ) : (
                  <div style={{ color: "#4b5563", fontSize: 13 }}>
                    ⬆️<br />اضغط لرفع صورة
                  </div>
                )}
                <input
                  id="slideImageFile"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) { setImageFile(file); setImagePreview(URL.createObjectURL(file)); }
                  }}
                />
              </div>
            </div>
          )}

          {/* ── Video upload ── */}
          {type === "video" && (
            <div>
              <label style={labelStyle}>الفيديو</label>
              <div
                style={{
                  border: "2px dashed #1f2937",
                  borderRadius: 10,
                  padding: 20,
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => document.getElementById("slideVideoFile")?.click()}
              >
                {videoPreview ? (
                  <video src={videoPreview} style={{ maxHeight: 140, borderRadius: 8, maxWidth: "100%" }} controls />
                ) : (
                  <div style={{ color: "#4b5563", fontSize: 13 }}>
                    ⬆️<br />اضغط لرفع فيديو
                  </div>
                )}
                <input
                  id="slideVideoFile"
                  type="file"
                  accept="video/*"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) { setVideoFile(file); setVideoPreview(URL.createObjectURL(file)); }
                  }}
                />
              </div>
            </div>
          )}

          {/* ── Order ── */}
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

          {/* ── Image-only options ── */}
          {type === "image" && (
            <>
              {/* Show Logo toggle */}
              <Toggle
                value={showLogo}
                onChange={setShowLogo}
                label="إظهار اللوجو (H) فوق الصورة؟"
              />

              {/* Show Overlay toggle */}
              <Toggle
                value={showOverlay}
                onChange={setShowOverlay}
                label="إظهار نص فوق الصورة؟"
              />

              {/* Overlay options — shown only when showOverlay = true */}
              {showOverlay && (
                <div
                  style={{
                    background: "#111827",
                    borderRadius: 14,
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    border: "1px solid #1f2937",
                  }}
                >
                  <p style={{ ...sectionTitle, margin: 0, color: "#22d3ee" }}>
                    نص العرض
                  </p>

                  {/* Mode tabs */}
                  <div style={{ display: "flex", gap: 8 }}>
                    {[
                      { value: "preset", label: "📋 من القائمة" },
                      { value: "custom", label: "✏️ نص مخصص" },
                    ].map((m) => (
                      <button
                        key={m.value}
                        type="button"
                        onClick={() => setOverlayMode(m.value)}
                        style={{
                          flex: 1,
                          padding: "8px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          border: overlayMode === m.value ? "none" : "1px solid #1f2937",
                          background: overlayMode === m.value ? "#1a5fff" : "transparent",
                          color: overlayMode === m.value ? "#fff" : "#6b7280",
                          cursor: "pointer",
                        }}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>

                  {/* Preset selector */}
                  {overlayMode === "preset" && (
                    <div>
                      {loadingContent ? (
                        <p style={{ color: "#9ca3af", fontSize: 13, margin: 0 }}>
                          جاري تحميل النصوص...
                        </p>
                      ) : (
                        <select
                          value={selectedContentId}
                          onChange={(e) => setSelectedContentId(e.target.value)}
                          style={inputStyle}
                        >
                          <option value="">اختر نص من القائمة</option>
                          {contentSlides.map((item) => (
                            <option key={item._id} value={item._id}>
                              {item.label || item.heading || item.badge || item.title || item._id}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  )}

                  {/* Custom text fields */}
                  {overlayMode === "custom" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {/* Label/badge */}
                      <div>
                        <label style={labelStyle}>Badge / Label</label>
                        <input
                          value={customOverlay.label}
                          onChange={(e) => updateCustomField("label", e.target.value)}
                          style={inputStyle}
                          placeholder="مثلاً: BRAND SYSTEMS"
                        />
                      </div>

                      {/* Heading */}
                      <div>
                        <label style={labelStyle}>العنوان الرئيسي *</label>
                        <input
                          value={customOverlay.heading}
                          onChange={(e) => updateCustomField("heading", e.target.value)}
                          style={inputStyle}
                          placeholder="مثلاً: WE BUILD BRANDS"
                        />
                      </div>

                      {/* Description */}
                      <div>
                        <label style={labelStyle}>الوصف / الفقرة</label>
                        <textarea
                          value={customOverlay.description}
                          onChange={(e) => updateCustomField("description", e.target.value)}
                          style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
                          placeholder="اكتب وصف السلايد هنا..."
                        />
                      </div>

                      {/* Buttons */}
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 8,
                          }}
                        >
                          <label style={{ ...labelStyle, margin: 0 }}>الأزرار</label>
                          {customOverlay.buttons.length < 2 && (
                            <button
                              type="button"
                              onClick={addButton}
                              style={{
                                background: "#1a5fff22",
                                border: "1px solid #1a5fff55",
                                color: "#60a5fa",
                                padding: "4px 10px",
                                borderRadius: 6,
                                cursor: "pointer",
                                fontSize: 12,
                              }}
                            >
                              + زرار
                            </button>
                          )}
                        </div>

                        {customOverlay.buttons.map((btn, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr auto auto",
                              gap: 8,
                              marginBottom: 8,
                              alignItems: "center",
                            }}
                          >
                            <input
                              value={btn.text}
                              onChange={(e) => updateButton(idx, "text", e.target.value)}
                              style={inputStyle}
                              placeholder="نص الزرار"
                            />
                            <input
                              value={btn.href}
                              onChange={(e) => updateButton(idx, "href", e.target.value)}
                              style={inputStyle}
                              placeholder="رابط"
                            />
                            <select
                              value={btn.variant}
                              onChange={(e) => updateButton(idx, "variant", e.target.value)}
                              style={{ ...inputStyle, width: "auto", padding: "10px 8px" }}
                            >
                              <option value="primary">Primary</option>
                              <option value="secondary">Secondary</option>
                            </select>
                            {customOverlay.buttons.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeButton(idx)}
                                style={{
                                  background: "none",
                                  border: "none",
                                  color: "#ef4444",
                                  cursor: "pointer",
                                  fontSize: 16,
                                  padding: "0 4px",
                                }}
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* ── Action buttons ── */}
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8 }}>
            <button type="button" onClick={onClose} style={ghostBtn}>
              إلغاء
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              style={{ ...primaryBtn, opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
            >
              {loading ? "جاري الحفظ..." : isEdit ? "تحديث" : "إضافة"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
