import Icon from "./Icon";

export function LoadingGrid() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {[1, 2, 3].map(i => (
        <div key={i} style={{ background: "#111827", borderRadius: 12, height: 68, animation: "pulse 1.5s ease infinite" }} />
      ))}
    </div>
  );
}

export function EmptyState({ icon, label }) {
  return (
    <div style={{ textAlign: "center", padding: "60px 20px", color: "#374151" }}>
      <Icon name={icon} size={40} />
      <p style={{ marginTop: 12, fontSize: 14 }}>{label}</p>
    </div>
  );
}