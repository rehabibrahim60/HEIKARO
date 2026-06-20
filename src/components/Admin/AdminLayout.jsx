import Icon from ".././Admin/ui/Icon";

const navItems = [
  { id: "home", label: "Home", icon: "project" },
  { id: "blogs", label: "Blogs", icon: "blog" },
  { id: "projects", label: "Projects", icon: "project" },
  { id: "contacts", label: "Contacts", icon: "contact" },
  { id: "hero", label: "Hero", icon: "hero" },
];

const BLUE = "#0f33fe";

export default function AdminLayout({ children, page, navigate, onLogout }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#030712",
        direction: "ltr",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          flexShrink: 0,
          background: "#0f172a",
          borderRight: "1px solid #1f2937",
          display: "flex",
          flexDirection: "column",
          padding: "24px 0",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        <div
          style={{
            padding: "0 20px 28px",
            borderBottom: "1px solid #1f2937",
          }}
        >
          <p
            style={{
              color: BLUE,
              fontWeight: 800,
              fontSize: 16,
              margin: 0,
              letterSpacing: 1,
            }}
          >
            ADMIN
          </p>

          <p
            style={{
              color: "#4b5563",
              fontSize: 11,
              margin: "4px 0 0",
            }}
          >
            Dashboard
          </p>
        </div>

        <nav style={{ padding: "16px 10px", flex: 1 }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 10,
                marginBottom: 4,
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 500,
                background: page === item.id ? "rgba(15, 51, 254, 0.14)" : "transparent",
                color: page === item.id ? BLUE : "#6b7280",
                transition: "all 0.15s",
                textAlign: "left",
              }}
            >
              <Icon name={item.icon} size={17} />
              {item.label}
            </button>
          ))}
        </nav>

        <div
          style={{
            padding: "16px 10px",
            borderTop: "1px solid #1f2937",
          }}
        >
          <button
            onClick={onLogout}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              background: "transparent",
              color: "#6b7280",
              transition: "color 0.15s",
              textAlign: "left",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f87171")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
          >
            <Icon name="logout" size={17} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main
        style={{
          flex: 1,
          padding: "40px 36px",
          overflowY: "auto",
        }}
      >
        {children}
      </main>
    </div>
  );
}