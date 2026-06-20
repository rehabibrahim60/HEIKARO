import { useState } from "react";
import Icon from "./ui/Icon";
import { API, authHeaders } from "../../utils/api";
import { inputStyle, labelStyle, primaryBtn, ghostBtn } from "../../pages/style/shared";

export default function SlideForm({ slide, onClose, toast }) {
  const isEdit = !!slide;
  const [type, setType] = useState(slide?.type || "image");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(slide?.imageUrl || slide?.videoUrl || null);
  const [showOverlay, setShowOverlay] = useState(slide?.showOverlay ?? false);
  const [overlay, setOverlay] = useState({
    badge: slide?.overlayText?.badge || "",
    prefix: slide?.overlayText?.heading?.prefix || "",
    highlight: slide?.overlayText?.heading?.highlight || "",
    suffix: slide?.overlayText?.heading?.suffix || "",
    description: slide?.overlayText?.description || "",
    buttonText: slide?.overlayText?.buttonText || "",
    buttonLink: slide?.overlayText?.buttonLink || "",
  });
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const save = async () => {
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("type", type);
      if (file) fd.append(type === "image" ? "imageFile" : "videoFile", file);
      fd.append("showOverlay", showOverlay);
      fd.append("overlayText", JSON.stringify({
        badge: overlay.badge,
        heading: { prefix: overlay.prefix, highlight: overlay.highlight, suffix: overlay.suffix },
        description: overlay.description,
        buttonText: overlay.buttonText,
        buttonLink: overlay.buttonLink,
      }));

      if (isEdit) {
        await fetch(`${API}/hero/slides/${slide._id}`, { method: "PATCH", headers: authHeaders(), body: fd });
        toast.show("Slide updated successfully");
      } else {
        await fetch(`${API}/hero/slides`, { method: "POST", headers: authHeaders(), body: fd });
        toast.show("Slide added successfully");
      }
      onClose();
    } catch (err) {
      toast.show("Error: " + err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 8000,
      display: "flex", alignItems: "flex-start", justifyContent: "center",
      overflowY: "auto", padding: "40px 16px"
    }}>
      <div style={{ background: "#0f172a", border: "1px solid #1f2937", borderRadius: 20, width: "100%", maxWidth: 600, padding: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
          <h2 style={{ color: "#f1f5f9", fontSize: 18, fontWeight: 700, margin: 0 }}>
            {isEdit ? "Edit Slide" : "Add New Slide"}
          </h2>
          <button onClick={onClose} style={{ display: "flex", alignItems: "center", gap: 4, padding: "6px 10px", borderRadius: 8, border: "1px solid #1f2937", background: "transparent", color: "#9ca3af", cursor: "pointer" }}>
            <Icon name="x" size={18} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Type selector */}
          <div>
            <label style={labelStyle}>Slide Type</label>
            <div style={{ display: "flex", gap: 8 }}>
              {["image", "video"].map(t => (
                <button key={t} onClick={() => setType(t)} style={{
                  flex: 1, padding: "10px", borderRadius: 8, fontSize: 14, fontWeight: 500,
                  border: type === t ? "none" : "1px solid #1f2937",
                  background: type === t ? "#0f33fe" : "transparent",
                  color: type === t ? "#fff" : "#6b7280", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6
                }}>
                  <Icon name={t} size={16} /> {t === "image" ? "Image" : "Video"}
                </button>
              ))}
            </div>
          </div>

          {/* File upload */}
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
              <span style={{ color: "#f1f5f9", fontSize: 14 }}>Show text overlay on image</span>
              <button onClick={() => setShowOverlay(p => !p)} style={{
                background: showOverlay ? "#0f33fe" : "#374151", border: "none", borderRadius: 20,
                width: 44, height: 24, cursor: "pointer", position: "relative", transition: "background 0.2s"
              }}>
                <span style={{
                  position: "absolute", top: 3, left: showOverlay ? 23 : 3,
                  width: 18, height: 18, borderRadius: "50%", background: "#fff",
                  transition: "left 0.2s", display: "block"
                }} />
              </button>
            </div>
          )}

          {/* Overlay text fields */}
          {(showOverlay || type === "video") && (
            <div style={{ background: "#111827", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={{ color: "#0f33fe", fontSize: 12, fontWeight: 600, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: 1 }}>Overlay Text</p>
              <input value={overlay.badge} onChange={e => setOverlay(p => ({ ...p, badge: e.target.value }))} style={inputStyle} placeholder="Badge example: MARKETING & GROWTH" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                <input value={overlay.prefix} onChange={e => setOverlay(p => ({ ...p, prefix: e.target.value }))} style={inputStyle} placeholder="Prefix: WE" />
                <input value={overlay.highlight} onChange={e => setOverlay(p => ({ ...p, highlight: e.target.value }))} style={inputStyle} placeholder="Highlight" />
                <input value={overlay.suffix} onChange={e => setOverlay(p => ({ ...p, suffix: e.target.value }))} style={inputStyle} placeholder="Suffix: BRANDS" />
              </div>
              <textarea value={overlay.description} onChange={e => setOverlay(p => ({ ...p, description: e.target.value }))}
                style={{ ...inputStyle, minHeight: 70, resize: "vertical" }} placeholder="Description..." />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <input value={overlay.buttonText} onChange={e => setOverlay(p => ({ ...p, buttonText: e.target.value }))} style={inputStyle} placeholder="Button Text" />
                <input value={overlay.buttonLink} onChange={e => setOverlay(p => ({ ...p, buttonLink: e.target.value }))} style={inputStyle} placeholder="Button Link" />
              </div>
            </div>
          )}

          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 4 }}>
            <button onClick={onClose} style={ghostBtn}>Cancel</button>
            <button onClick={save} disabled={loading} style={primaryBtn}>
              {loading ? "Saving..." : isEdit ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}