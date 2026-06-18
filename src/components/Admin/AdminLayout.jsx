import Icon from ".././Admin/ui/Icon";

const navItems = [
  { id: "home",     label: "الرئيسية", icon: "project" },
  { id: "blogs",    label: "المقالات", icon: "blog"    },
  { id: "projects", label: "المشاريع", icon: "project" },
  { id: "contacts", label: "التواصل",  icon: "contact" },
  { id: "hero",     label: "Hero",     icon: "hero"    },
];

export default function AdminLayout({ children, page, navigate, onLogout }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#030712", direction: "rtl" }}>
      {/* Sidebar */}
      <aside style={{
        width: 220, flexShrink: 0, background: "#0f172a",
        borderLeft: "1px solid #1f2937", display: "flex", flexDirection: "column",
        padding: "24px 0", position: "sticky", top: 0, height: "100vh"
      }}>
        <div style={{ padding: "0 20px 28px", borderBottom: "1px solid #1f2937" }}>
          <p style={{ color: "#22d3ee", fontWeight: 800, fontSize: 16, margin: 0, letterSpacing: 1 }}>ADMIN</p>
          <p style={{ color: "#4b5563", fontSize: 11, margin: "4px 0 0" }}>لوحة التحكم</p>
        </div>

        <nav style={{ padding: "16px 10px", flex: 1 }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => navigate(item.id)} style={{
              width: "100%", display: "flex", alignItems: "center", gap: 10,
              padding: "10px 12px", borderRadius: 10, marginBottom: 4,
              border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500,
              background: page === item.id ? "#083344" : "transparent",
              color: page === item.id ? "#22d3ee" : "#6b7280",
              transition: "all 0.15s"
            }}>
              <Icon name={item.icon} size={17} />
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: "16px 10px", borderTop: "1px solid #1f2937" }}>
          <button onClick={onLogout} style={{
            width: "100%", display: "flex", alignItems: "center", gap: 10,
            padding: "10px 12px", borderRadius: 10, border: "none",
            cursor: "pointer", fontSize: 14, background: "transparent",
            color: "#6b7280", transition: "color 0.15s"
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#f87171"}
            onMouseLeave={e => e.currentTarget.style.color = "#6b7280"}>
            <Icon name="logout" size={17} /> تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: "40px 36px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}