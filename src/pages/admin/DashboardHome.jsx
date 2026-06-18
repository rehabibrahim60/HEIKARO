import Icon from "../../components/Admin/ui/Icon";

const cards = [
  { label: "المقالات",     icon: "blog",    page: "blogs",    color: "#0891b2" },
  { label: "المشاريع",     icon: "project", page: "projects", color: "#7c3aed" },
  { label: "رسائل التواصل", icon: "contact", page: "contacts", color: "#059669" },
  { label: "الهيرو",       icon: "hero",    page: "hero",     color: "#d97706" },
];

export default function DashboardHome({ navigate }) {
  return (
    <div>
      <h1 style={{ color: "#f1f5f9", fontSize: 26, fontWeight: 700, marginBottom: 8 }}>لوحة التحكم</h1>
      <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 36 }}>مرحباً بك — اختر القسم الذي تريد إدارته</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        {cards.map(c => (
          <button key={c.page} onClick={() => navigate(c.page)} style={{
            background: "#111827", border: "1px solid #1f2937", borderRadius: 16,
            padding: "28px 24px", cursor: "pointer", textAlign: "left", transition: "border-color 0.2s",
            display: "flex", flexDirection: "column", gap: 14
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = c.color}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#1f2937"}>
            <div style={{ color: c.color }}><Icon name={c.icon} size={28} /></div>
            <span style={{ color: "#f1f5f9", fontSize: 16, fontWeight: 600 }}>{c.label}</span>
            <span style={{ color: "#6b7280", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
              إدارة {c.label} <Icon name="chevron-right" size={14} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}