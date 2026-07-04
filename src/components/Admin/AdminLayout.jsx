import { useState } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const goToPage = (id) => {
    navigate(id);
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    setSidebarOpen(false);
    onLogout();
  };

  return (
    <>
      <style>{`
        .admin-layout-shell {
          display: flex;
          min-height: 100vh;
          background: #030712;
          direction: ltr;
          overflow-x: hidden;
        }

        .admin-layout-sidebar {
          width: 220px;
          min-width: 220px;
          flex-shrink: 0;
          background: #0f172a;
          border-right: 1px solid #1f2937;
          display: flex;
          flex-direction: column;
          padding: 24px 0;
          position: sticky;
          top: 0;
          height: 100vh;
          z-index: 50;
        }

        .admin-layout-main {
          flex: 1;
          min-width: 0;
          padding: 40px 36px;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .admin-mobile-topbar {
          display: none;
        }

        .admin-sidebar-backdrop {
          display: none;
        }

        .admin-logo {
          padding: 0 20px 28px;
          border-bottom: 1px solid #1f2937;
        }

        .admin-logo-title {
          color: ${BLUE};
          font-weight: 800;
          font-size: 16px;
          margin: 0;
          letter-spacing: 1px;
        }

        .admin-logo-subtitle {
          color: #4b5563;
          font-size: 11px;
          margin: 4px 0 0;
        }

        .admin-nav {
          padding: 16px 10px;
          flex: 1;
        }

        .admin-nav-btn,
        .admin-logout-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          margin-bottom: 4px;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          background: transparent;
          color: #6b7280;
          transition: all 0.15s;
          text-align: left;
        }

        .admin-nav-btn.active {
          background: rgba(15, 51, 254, 0.14);
          color: ${BLUE};
        }

        .admin-footer {
          padding: 16px 10px;
          border-top: 1px solid #1f2937;
        }

        .admin-logout-btn:hover {
          color: #f87171;
        }

        @media (max-width: 768px) {
          .admin-layout-shell {
            display: block;
            width: 100%;
            max-width: 100vw;
            min-height: 100vh;
            overflow-x: hidden;
          }

          .admin-mobile-topbar {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 100%;
            height: 62px;
            padding: 0 16px;
            background: #0f172a;
            border-bottom: 1px solid #1f2937;
            position: sticky;
            top: 0;
            z-index: 900;
          }

          .admin-menu-toggle {
            width: 42px;
            height: 42px;
            min-width: 42px;
            border-radius: 10px;
            border: 1px solid #1f2937;
            background: #111827;
            color: ${BLUE};
            font-size: 28px;
            line-height: 1;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
          }

          .admin-mobile-title {
            color: ${BLUE};
            font-size: 14px;
            font-weight: 900;
            line-height: 1.2;
            margin: 0;
            letter-spacing: 1px;
          }

          .admin-mobile-subtitle {
            display: block;
            color: #6b7280;
            font-size: 11px;
            line-height: 1.2;
            margin-top: 2px;
          }

          .admin-layout-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: min(280px, 84vw);
            min-width: 0;
            height: 100dvh;
            padding: 24px 0;
            background: #0f172a;
            border-right: 1px solid #1f2937;
            transform: translateX(-110%);
            transition: transform 0.25s ease;
            z-index: 1100;
            overflow-y: auto;
            visibility: hidden;
            pointer-events: none;
          }

          .admin-layout-sidebar.open {
            transform: translateX(0);
            visibility: visible;
            pointer-events: auto;
          }

          .admin-sidebar-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 100dvh;
            background: rgba(0, 0, 0, 0.65);
            border: none;
            z-index: 1000;
            padding: 0;
            margin: 0;
            cursor: pointer;
          }

          .admin-layout-main {
            width: 100%;
            max-width: 100vw;
            min-width: 0;
            min-height: calc(100vh - 62px);
            padding: 24px 16px;
            overflow-x: hidden;
            overflow-y: visible;
          }
        }

        @media (max-width: 420px) {
          .admin-mobile-topbar {
            padding: 0 14px;
          }

          .admin-layout-main {
            padding: 20px 14px;
          }

          .admin-layout-sidebar {
            width: 86vw;
          }
        }
      `}</style>

      <div className="admin-layout-shell">
        {/* Mobile Top Bar */}
        <header className="admin-mobile-topbar">
          <button
            type="button"
            className="admin-menu-toggle"
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? "×" : "☰"}
          </button>

          <div>
            <p className="admin-mobile-title">ADMIN</p>
            <span className="admin-mobile-subtitle">Dashboard</span>
          </div>
        </header>

        {sidebarOpen && (
          <button
            type="button"
            className="admin-sidebar-backdrop"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          />
        )}

        {/* Sidebar */}
        <aside className={`admin-layout-sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="admin-logo">
            <p className="admin-logo-title">ADMIN</p>
            <p className="admin-logo-subtitle">Dashboard</p>
          </div>

          <nav className="admin-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goToPage(item.id)}
                className={`admin-nav-btn ${page === item.id ? "active" : ""}`}
              >
                <Icon name={item.icon} size={17} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="admin-footer">
            <button onClick={handleLogout} className="admin-logout-btn">
              <Icon name="logout" size={17} />
              Logout
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="admin-layout-main">{children}</main>
      </div>
    </>
  );
}
