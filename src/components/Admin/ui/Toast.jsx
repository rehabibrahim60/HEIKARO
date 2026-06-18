import { useState, useCallback } from "react";
import Icon from "./Icon";

export function useToast() {
  const [toasts, setToasts] = useState([]);
  const show = useCallback((msg, type = "success") => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500);
  }, []);
  return { toasts, show };
}

export function ToastContainer({ toasts }) {
  return (
    <div style={{ position: "fixed", top: 24, right: 24, zIndex: 9999, display: "flex", flexDirection: "column", gap: 10 }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          padding: "12px 18px", borderRadius: 10, fontSize: 14, fontWeight: 500,
          background: t.type === "success" ? "#0f766e" : t.type === "error" ? "#be123c" : "#1e40af",
          color: "#fff", display: "flex", alignItems: "center", gap: 8,
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)", minWidth: 240,
          animation: "slideIn 0.2s ease"
        }}>
          <Icon name={t.type === "success" ? "check" : "alert"} size={16} />
          {t.msg}
        </div>
      ))}
    </div>
  );
}