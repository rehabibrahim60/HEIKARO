import Icon from "./Icon";

export default function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 9000,
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "#111827", border: "1px solid #1f2937", borderRadius: 16,
        padding: "28px 32px", maxWidth: 400, width: "90%"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ color: "#f87171" }}><Icon name="alert" size={24} /></div>
          <p style={{ color: "#f1f5f9", fontSize: 16, fontWeight: 500, margin: 0 }}>تأكيد الحذف</p>
        </div>
        <p style={{ color: "#94a3b8", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>{message}</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button onClick={onCancel} style={{
            padding: "8px 20px", borderRadius: 8, border: "1px solid #374151",
            background: "transparent", color: "#9ca3af", cursor: "pointer", fontSize: 14
          }}>إلغاء</button>
          <button onClick={onConfirm} style={{
            padding: "8px 20px", borderRadius: 8, border: "none",
            background: "#dc2626", color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: 600
          }}>حذف</button>
        </div>
      </div>
    </div>
  );
}
