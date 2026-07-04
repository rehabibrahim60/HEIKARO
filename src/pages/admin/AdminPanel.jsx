import { useState, useEffect, useRef, useCallback } from "react";
import ContentBuilder from "./ContentBuilder";
import { Link, useNavigate } from "react-router-dom";

const API = "https://api.heikaro.com";

const getToken = () => localStorage.getItem("admin_token");
const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

async function apiFetch(path, options = {}) {
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: { ...authHeaders(), ...options.headers },
  });
  if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
  return res.json();
}

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {name === "blog" && (
      <>
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
        <line x1="9" y1="9" x2="10" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </>
    )}
    {name === "project" && (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    )}
    {name === "contact" && (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    )}
    {name === "hero" && (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21,15 16,10 5,21" />
      </>
    )}
    {name === "plus" && (
      <>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </>
    )}
    {name === "trash" && (
      <>
        <polyline points="3,6 5,6 21,6" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <path d="M10 11v6M14 11v6" />
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </>
    )}
    {name === "edit" && (
      <>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </>
    )}
    {name === "eye" && (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
    {name === "logout" && (
      <>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16,17 21,12 16,7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </>
    )}
    {name === "check" && <polyline points="20,6 9,17 4,12" />}
    {name === "x" && (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    )}
    {name === "image" && (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21,15 16,10 5,21" />
      </>
    )}
    {name === "video" && (
      <>
        <polygon points="23,7 16,12 23,17 23,7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </>
    )}
    {name === "type" && (
      <>
        <polyline points="4,7 4,4 20,4 20,7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </>
    )}
    {name === "toggle-on" && (
      <>
        <rect x="1" y="5" width="22" height="14" rx="7" />
        <circle cx="16" cy="12" r="3" />
      </>
    )}
    {name === "toggle-off" && (
      <>
        <rect x="1" y="5" width="22" height="14" rx="7" />
        <circle cx="8" cy="12" r="3" />
      </>
    )}
    {name === "move" && (
      <>
        <polyline points="5,9 2,12 5,15" />
        <polyline points="9,5 12,2 15,5" />
        <polyline points="15,19 12,22 9,19" />
        <polyline points="19,9 22,12 19,15" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </>
    )}
    {name === "link" && (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    )}
    {name === "lock" && (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    )}
    {name === "upload" && (
      <>
        <polyline points="16,16 12,12 8,16" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
      </>
    )}
    {name === "github" && (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    )}
    {name === "chevron-right" && <polyline points="9,18 15,12 9,6" />}
    {name === "alert" && (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </>
    )}
  </svg>
);

// ─── TOAST ────────────────────────────────────────────────────────────────────
function useToast() {
  const [toasts, setToasts] = useState([]);
  const show = useCallback((msg, type = "success") => {
    const id = Date.now();
    setToasts((p) => [...p, { id, msg, type }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3500);
  }, []);
  return { toasts, show };
}

function ToastContainer({ toasts }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          style={{
            padding: "12px 18px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 500,
            background:
              t.type === "success"
                ? "#0f766e"
                : t.type === "error"
                  ? "#be123c"
                  : "#1e40af",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 8,
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
            minWidth: 240,
            animation: "slideIn 0.2s ease",
          }}
        >
          <Icon name={t.type === "success" ? "check" : "alert"} size={16} />
          {t.msg}
        </div>
      ))}
    </div>
  );
}

// ─── CONFIRM DIALOG ───────────────────────────────────────────────────────────
function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 9000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: 16,
          padding: "28px 32px",
          maxWidth: 400,
          width: "90%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div style={{ color: "#f87171" }}>
            <Icon name="alert" size={24} />
          </div>
          <p
            style={{
              color: "#f1f5f9",
              fontSize: 16,
              fontWeight: 500,
              margin: 0,
            }}
          >
            Confirm Delete
          </p>
        </div>
        <p
          style={{
            color: "#94a3b8",
            fontSize: 14,
            marginBottom: 24,
            lineHeight: 1.6,
          }}
        >
          {message}
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button
            onClick={onCancel}
            style={{
              padding: "8px 20px",
              borderRadius: 8,
              border: "1px solid #374151",
              background: "transparent",
              color: "#9ca3af",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              padding: "8px 20px",
              borderRadius: 8,
              border: "none",
              background: "#dc2626",
              color: "#fff",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CONTENT BUILDER (shared between Blog & Project) ─────────────────────────

// ─── PAGE: LOGIN ──────────────────────────────────────────────────────────────
function LoginPage({ onLogin, toast }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.show("Please enter all required fields", "error");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Invalid credentials");
      const data = await res.json();
      localStorage.setItem("admin_token", data.token);
      onLogin();
      toast.show("Welcome to the admin dashboard");
    } catch (err) {
      toast.show(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#030712",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#0f172a",
          border: "1px solid #1f2937",
          borderRadius: 20,
          padding: "40px 36px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#083344",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              color: "#22d3ee",
            }}
          >
            <Icon name="lock" size={24} />
          </div>
          <h1
            style={{
              color: "#f1f5f9",
              fontSize: 22,
              fontWeight: 700,
              margin: "0 0 6px",
            }}
          >
            Admin Dashboard
          </h1>
          <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>
            Sign in to continue
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              placeholder="admin@example.com"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>
          <div>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="••••••••"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              ...primaryBtn,
              width: "100%",
              marginTop: 8,
              padding: "12px",
              fontSize: 15,
            }}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE: DASHBOARD HOME ─────────────────────────────────────────────────────
function DashboardHome({ navigate }) {
  const cards = [
    { label: "Blogs", icon: "blog", page: "blogs", color: "#0891b2" },
    { label: "Projects", icon: "project", page: "projects", color: "#7c3aed" },
    {
      label: "Contact Messages",
      icon: "contact",
      page: "contacts",
      color: "#059669",
    },
    { label: "Hero", icon: "hero", page: "hero", color: "#d97706" },
  ];

  return (
    <div>
      <h1
        style={{
          color: "#f1f5f9",
          fontSize: 26,
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        Admin Dashboard
      </h1>
      <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 36 }}>
        Welcome — choose the section you want to manage
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        {cards.map((c) => (
          <button
            key={c.page}
            onClick={() => navigate(c.page)}
            style={{
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: 16,
              padding: "28px 24px",
              cursor: "pointer",
              textAlign: "left",
              transition: "border-color 0.2s",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = c.color)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "#1f2937")
            }
          >
            <div style={{ color: c.color }}>
              <Icon name={c.icon} size={28} />
            </div>
            <span style={{ color: "#f1f5f9", fontSize: 16, fontWeight: 600 }}>
              {c.label}
            </span>
            <span
              style={{
                color: "#6b7280",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Manage {c.label} <Icon name="chevron-right" size={14} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── PAGE: BLOGS ──────────────────────────────────────────────────────────────
function BlogsPage({ toast }) {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/blogs/admin/all");
      setBlogs(data.blogs || data.data || data || []);
    } catch {
      toast.show("Failed to load blogs", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const deleteBlog = async (id) => {
    try {
      await fetch(`${API}/blogs/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      setBlogs((p) => p.filter((b) => b._id !== id));
      toast.show("Blog deleted successfully");
    } catch {
      toast.show("Failed to delete", "error");
    } finally {
      setConfirm(null);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <div>
          <h1
            style={{
              color: "#f1f5f9",
              fontSize: 22,
              fontWeight: 700,
              margin: "0 0 4px",
            }}
          >
            Blogs
          </h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>
            {blogs.length} blog
          </p>
        </div>
        <button onClick={() => navigate("/admin/blog/new")} style={primaryBtn}>
          <Icon name="plus" size={16} /> New Blog
        </button>
      </div>

      {loading ? (
        <LoadingGrid />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {blogs.length === 0 && (
            <EmptyState icon="blog" label="No blogs yet" />
          )}
          {blogs.map((b) => (
            <div key={b._id} style={listCard}>
              {b.coverImage && (
                <img
                  src={b.coverImage}
                  alt=""
                  style={{
                    width: 72,
                    height: 52,
                    objectFit: "cover",
                    borderRadius: 8,
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    color: "#f1f5f9",
                    fontWeight: 600,
                    fontSize: 15,
                    margin: "0 0 4px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {b.title}
                </p>
                <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>
                  {new Date(b.createdAt).toLocaleDateString("en-US")}
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                <button
                  onClick={() => {
                    setEditItem(b);
                    setShowForm(true);
                  }}
                  style={iconBtn}
                >
                  <Icon name="edit" size={16} />
                </button>
                <button
                  onClick={() => setConfirm(b._id)}
                  style={{ ...iconBtn, color: "#f87171" }}
                >
                  <Icon name="trash" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {confirm && (
        <ConfirmDialog
          message="Are you sure you want to delete this blog? This action cannot be undone."
          onConfirm={() => deleteBlog(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}

// ─── PAGE: PROJECTS ───────────────────────────────────────────────────────────
function ProjectsPage({ toast }) {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/projects/admin/all");
      setProjects(data.projects || data.data || data || []);
    } catch {
      toast.show("Failed to load projects", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const deleteProject = async (id) => {
    try {
      await fetch(`${API}/projects/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      setProjects((p) => p.filter((pr) => pr._id !== id));
      toast.show("Project deleted successfully");
    } catch {
      toast.show("Failed to delete", "error");
    } finally {
      setConfirm(null);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <div>
          <h1
            style={{
              color: "#f1f5f9",
              fontSize: 22,
              fontWeight: 700,
              margin: "0 0 4px",
            }}
          >
            Projects
          </h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>
            {projects.length} project
          </p>
        </div>
        <button
          onClick={() => navigate("/admin/project/new")}
          style={primaryBtn}
        >
          <Icon name="plus" size={16} /> New Project
        </button>
      </div>

      {loading ? (
        <LoadingGrid />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {projects.length === 0 && (
            <EmptyState icon="project" label="No projects yet" />
          )}
          {projects.map((pr) => (
            <div
              key={pr._id}
              style={{
                ...listCard,
                flexDirection: "column",
                gap: 12,
                padding: 0,
                overflow: "hidden",
                alignItems: "stretch",
              }}
            >
              {pr.coverImage ? (
                <img
                  src={pr.coverImage}
                  alt=""
                  style={{ width: "100%", height: 160, objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    height: 160,
                    background: "#1f2937",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#374151",
                  }}
                >
                  <Icon name="project" size={40} />
                </div>
              )}
              <div style={{ padding: "12px 16px 16px" }}>
                <p
                  style={{
                    color: "#f1f5f9",
                    fontWeight: 600,
                    fontSize: 15,
                    margin: "0 0 6px",
                  }}
                >
                  {pr.title}
                </p>
                {pr.tags?.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      flexWrap: "wrap",
                      marginBottom: 12,
                    }}
                  >
                    {pr.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 11,
                          padding: "2px 8px",
                          background: "#083344",
                          color: "#22d3ee",
                          borderRadius: 20,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => {
                      setEditItem(pr);
                      setShowForm(true);
                    }}
                    style={{ ...iconBtn, flex: 1, justifyContent: "center" }}
                  >
                    <Icon name="edit" size={15} /> Edit
                  </button>
                  <button
                    onClick={() => setConfirm(pr._id)}
                    style={{ ...iconBtn, color: "#f87171" }}
                  >
                    <Icon name="trash" size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {confirm && (
        <ConfirmDialog
          message="Are you sure you want to delete this project?"
          onConfirm={() => deleteProject(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}

// ─── PAGE: CONTACTS ───────────────────────────────────────────────────────────
function ContactsPage({ toast }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/contacts");
      setContacts(data.contacts || data.data || data || []);
    } catch {
      toast.show("Failed to load messages", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const deleteContact = async (id) => {
    try {
      await fetch(`${API}/contacts/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      setContacts((p) => p.filter((c) => c._id !== id));
      if (selected?._id === id) setSelected(null);
      toast.show("Message deleted successfully");
    } catch {
      toast.show("Failed to delete", "error");
    } finally {
      setConfirm(null);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1
          style={{
            color: "#f1f5f9",
            fontSize: 22,
            fontWeight: 700,
            margin: "0 0 4px",
          }}
        >
          Contact Messages
        </h1>
        <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>
          {contacts.length} message
        </p>
      </div>

      {loading ? (
        <LoadingGrid />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: selected ? "1fr 1fr" : "1fr",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {contacts.length === 0 && (
              <EmptyState icon="contact" label="No messages" />
            )}
            {contacts.map((c) => (
              <div
                key={c._id}
                onClick={() => setSelected(c)}
                style={{
                  ...listCard,
                  cursor: "pointer",
                  border:
                    selected?._id === c._id
                      ? "1px solid #22d3ee"
                      : "1px solid #1f2937",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "#083344",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#22d3ee",
                    fontWeight: 700,
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  {(c.name || c.email || "?")[0].toUpperCase()}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      color: "#f1f5f9",
                      fontWeight: 600,
                      fontSize: 14,
                      margin: "0 0 2px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {c.name || "—"}
                  </p>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: 12,
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {c.email}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <span style={{ color: "#6b7280", fontSize: 11 }}>
                    {new Date(c.createdAt).toLocaleDateString("en-US")}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setConfirm(c._id);
                    }}
                    style={{ ...iconBtn, color: "#f87171", padding: 4 }}
                  >
                    <Icon name="trash" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selected && (
            <div
              style={{
                background: "#111827",
                border: "1px solid #1f2937",
                borderRadius: 14,
                padding: 24,
                position: "sticky",
                top: 80,
                alignSelf: "start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    color: "#22d3ee",
                    fontSize: 13,
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Message Details
                </p>
                <button onClick={() => setSelected(null)} style={iconBtn}>
                  <Icon name="x" size={16} />
                </button>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <Detail label="Name" value={selected.name} />
                <Detail label="Email" value={selected.email} />
                {selected.phone && (
                  <Detail label="Phone" value={selected.phone} />
                )}
                {selected.subject && (
                  <Detail label="Subject" value={selected.subject} />
                )}
                <div>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      marginBottom: 6,
                      letterSpacing: 1,
                    }}
                  >
                    Message
                  </p>
                  <p
                    style={{
                      color: "#f1f5f9",
                      fontSize: 14,
                      lineHeight: 1.7,
                      background: "#0f172a",
                      padding: 14,
                      borderRadius: 8,
                      margin: 0,
                    }}
                  >
                    {selected.message}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {confirm && (
        <ConfirmDialog
          message="Are you sure you want to delete this message?"
          onConfirm={() => deleteContact(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p
        style={{
          color: "#6b7280",
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          marginBottom: 3,
          letterSpacing: 1,
        }}
      >
        {label}
      </p>
      <p style={{ color: "#f1f5f9", fontSize: 14, margin: 0 }}>
        {value || "—"}
      </p>
    </div>
  );
}

// ─── PAGE: HERO MANAGER ───────────────────────────────────────────────────────
function HeroPage({ toast }) {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editSlide, setEditSlide] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/home");
      setSlides(data.slides || data.data?.slides || []);
    } catch {
      toast.show("Failed to load slides", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const toggleSlide = async (id, current) => {
    try {
      await fetch(`${API}/hero/slides/${id}/toggle`, {
        method: "PATCH",
        headers: authHeaders(),
      });
      setSlides((p) =>
        p.map((s) => (s._id === id ? { ...s, isActive: !current } : s)),
      );
      toast.show(
        current ? "Slide hidden successfully" : "Slide activated successfully",
      );
    } catch {
      toast.show("Failed to update status", "error");
    }
  };

  const deleteSlide = async (id) => {
    try {
      await fetch(`${API}/hero/slides/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      setSlides((p) => p.filter((s) => s._id !== id));
      toast.show("Slide deleted successfully");
    } catch {
      toast.show("Failed to delete", "error");
    } finally {
      setConfirm(null);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <div>
          <h1
            style={{
              color: "#f1f5f9",
              fontSize: 22,
              fontWeight: 700,
              margin: "0 0 4px",
            }}
          >
            Hero Section
          </h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>
            Manage the main website hero slider
          </p>
        </div>
        <button
          onClick={() => {
            setEditSlide(null);
            setShowAdd(true);
          }}
          style={primaryBtn}
        >
          <Icon name="plus" size={16} /> Add Slide
        </button>
      </div>

      {loading ? (
        <LoadingGrid />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {slides.length === 0 && (
            <EmptyState icon="hero" label="No slides yet" />
          )}
          {slides.map((s, idx) => (
            <div
              key={s._id}
              style={{ ...listCard, alignItems: "flex-start", gap: 16 }}
            >
              {/* Preview */}
              <div
                style={{
                  width: 120,
                  height: 72,
                  borderRadius: 8,
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "#1f2937",
                  position: "relative",
                }}
              >
                {s.type === "image" && s.imageUrl ? (
                  <img
                    src={s.imageUrl}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : s.type === "video" && s.videoUrl ? (
                  <video
                    src={s.videoUrl}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    muted
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#374151",
                    }}
                  >
                    <Icon
                      name={s.type === "video" ? "video" : "image"}
                      size={28}
                    />
                  </div>
                )}
                <span
                  style={{
                    position: "absolute",
                    bottom: 4,
                    left: 4,
                    fontSize: 10,
                    padding: "2px 6px",
                    borderRadius: 4,
                    background: s.type === "video" ? "#3b1d8a" : "#083344",
                    color: s.type === "video" ? "#a78bfa" : "#22d3ee",
                    fontWeight: 600,
                  }}
                >
                  {s.type === "video" ? "Video" : "Image"}
                </span>
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 14 }}
                  >
                    {s.overlayText?.heading?.highlight ||
                      s.overlayText?.badge ||
                      `Slide ${idx + 1}`}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 20,
                      fontWeight: 600,
                      background: s.isActive ? "#064e3b" : "#1f2937",
                      color: s.isActive ? "#34d399" : "#6b7280",
                    }}
                  >
                    {s.isActive ? "Active" : "Hidden"}
                  </span>
                </div>
                {s.type === "image" && (
                  <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>
                    Text: {s.showOverlay ? "Visible" : "Hidden"}
                  </p>
                )}
                {s.overlayText?.description && (
                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: 12,
                      margin: "4px 0 0",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {s.overlayText.description}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <button
                  onClick={() => toggleSlide(s._id, s.isActive)}
                  style={{
                    ...iconBtn,
                    color: s.isActive ? "#34d399" : "#6b7280",
                  }}
                >
                  <Icon
                    name={s.isActive ? "toggle-on" : "toggle-off"}
                    size={18}
                  />
                </button>
                <button
                  onClick={() => {
                    setEditSlide(s);
                    setShowAdd(true);
                  }}
                  style={iconBtn}
                >
                  <Icon name="edit" size={16} />
                </button>
                <button
                  onClick={() => setConfirm(s._id)}
                  style={{ ...iconBtn, color: "#f87171" }}
                >
                  <Icon name="trash" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showAdd && (
        <SlideForm
          slide={editSlide}
          toast={toast}
          onClose={() => {
            setShowAdd(false);
            setEditSlide(null);
            load();
          }}
        />
      )}

      {confirm && (
        <ConfirmDialog
          message="Are you sure you want to delete this slide?"
          onConfirm={() => deleteSlide(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}

function SlideForm({ slide, onClose, toast }) {
  const isEdit = !!slide;
  const [type, setType] = useState(slide?.type || "image");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(
    slide?.imageUrl || slide?.videoUrl || null,
  );
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
      fd.append(
        "overlayText",
        JSON.stringify({
          badge: overlay.badge,
          heading: {
            prefix: overlay.prefix,
            highlight: overlay.highlight,
            suffix: overlay.suffix,
          },
          description: overlay.description,
          buttonText: overlay.buttonText,
          buttonLink: overlay.buttonLink,
        }),
      );
      if (isEdit) {
        await fetch(`${API}/hero/slides/${slide._id}`, {
          method: "PATCH",
          headers: authHeaders(),
          body: fd,
        });
        toast.show("Slide updated successfully");
      } else {
        await fetch(`${API}/hero/slides`, {
          method: "POST",
          headers: authHeaders(),
          body: fd,
        });
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
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        zIndex: 8000,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflowY: "auto",
        padding: "40px 16px",
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
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <h2
            style={{
              color: "#f1f5f9",
              fontSize: 18,
              fontWeight: 700,
              margin: 0,
            }}
          >
            {isEdit ? "Edit Slide" : "Add New Slide"}
          </h2>
          <button onClick={onClose} style={iconBtn}>
            <Icon name="x" size={18} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Type */}
          <div>
            <label style={labelStyle}>Slide Type</label>
            <div style={{ display: "flex", gap: 8 }}>
              {["image", "video"].map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    border: type === t ? "none" : "1px solid #1f2937",
                    background: type === t ? "#22d3ee" : "transparent",
                    color: type === t ? "#000" : "#6b7280",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  <Icon name={t} size={16} />{" "}
                  {t === "image" ? "Image" : "Video"}
                </button>
              ))}
            </div>
          </div>

          {/* File upload */}
          <div>
            <label style={labelStyle}>
              {type === "image" ? "Image" : "Video"}
            </label>
            <div
              style={{
                border: "2px dashed #1f2937",
                borderRadius: 10,
                padding: 20,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => document.getElementById("slideFile").click()}
            >
              {preview ? (
                type === "image" ? (
                  <img
                    src={preview}
                    alt=""
                    style={{ maxHeight: 140, borderRadius: 8 }}
                  />
                ) : (
                  <video
                    src={preview}
                    style={{ maxHeight: 140, borderRadius: 8 }}
                    controls
                  />
                )
              ) : (
                <div style={{ color: "#4b5563", fontSize: 13 }}>
                  <Icon name="upload" size={24} />
                  <br />
                  Click to upload {type === "image" ? "Image" : "Video"}
                </div>
              )}
              <input
                id="slideFile"
                type="file"
                accept={type === "image" ? "image/*" : "video/*"}
                hidden
                onChange={handleFile}
              />
            </div>
          </div>

          {/* Show overlay toggle (images only) */}
          {type === "image" && (
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
              <span style={{ color: "#f1f5f9", fontSize: 14 }}>
                Show text over image
              </span>
              <button
                onClick={() => setShowOverlay((p) => !p)}
                style={{
                  background: showOverlay ? "#22d3ee" : "#374151",
                  border: "none",
                  borderRadius: 20,
                  width: 44,
                  height: 24,
                  cursor: "pointer",
                  position: "relative",
                  transition: "background 0.2s",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: 3,
                    left: showOverlay ? 23 : 3,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#fff",
                    transition: "left 0.2s",
                    display: "block",
                  }}
                />
              </button>
            </div>
          )}

          {/* Overlay text fields */}
          {(showOverlay || type === "video") && (
            <div
              style={{
                background: "#111827",
                borderRadius: 12,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <p
                style={{
                  color: "#22d3ee",
                  fontSize: 12,
                  fontWeight: 600,
                  margin: "0 0 4px",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Overlay Text
              </p>
              <input
                value={overlay.badge}
                onChange={(e) =>
                  setOverlay((p) => ({ ...p, badge: e.target.value }))
                }
                style={inputStyle}
                placeholder="Badge e.g. MARKETING & GROWTH"
              />
              <div className="admin-form-grid admin-form-grid-3">
                <input
                  value={overlay.prefix}
                  onChange={(e) =>
                    setOverlay((p) => ({ ...p, prefix: e.target.value }))
                  }
                  style={inputStyle}
                  placeholder="Prefix: WE"
                />
                <input
                  value={overlay.highlight}
                  onChange={(e) =>
                    setOverlay((p) => ({ ...p, highlight: e.target.value }))
                  }
                  style={inputStyle}
                  placeholder="Highlight"
                />
                <input
                  value={overlay.suffix}
                  onChange={(e) =>
                    setOverlay((p) => ({ ...p, suffix: e.target.value }))
                  }
                  style={inputStyle}
                  placeholder="Suffix: BRANDS"
                />
              </div>
              <textarea
                value={overlay.description}
                onChange={(e) =>
                  setOverlay((p) => ({ ...p, description: e.target.value }))
                }
                style={{ ...inputStyle, minHeight: 70, resize: "vertical" }}
                placeholder="Description..."
              />
              <div className="admin-form-grid admin-form-grid-2">
                <input
                  value={overlay.buttonText}
                  onChange={(e) =>
                    setOverlay((p) => ({ ...p, buttonText: e.target.value }))
                  }
                  style={inputStyle}
                  placeholder="Button Text"
                />
                <input
                  value={overlay.buttonLink}
                  onChange={(e) =>
                    setOverlay((p) => ({ ...p, buttonLink: e.target.value }))
                  }
                  style={inputStyle}
                  placeholder="Button Link"
                />
              </div>
            </div>
          )}

          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "flex-end",
              marginTop: 4,
            }}
          >
            <button onClick={onClose} style={ghostBtn}>
              Cancel
            </button>
            <button onClick={save} disabled={loading} style={primaryBtn}>
              {loading ? "Saving..." : isEdit ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── LAYOUT ───────────────────────────────────────────────────────────────────
const navItems = [
  { id: "home", label: "Home", icon: "project" },
  { id: "blogs", label: "Blogs", icon: "blog" },
  { id: "projects", label: "Projects", icon: "project" },
  { id: "contacts", label: "Contacts", icon: "contact" },
  { id: "hero", label: "Hero", icon: "hero" },
];

function AdminLayout({ children, page, navigate, onLogout }) {
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
    <div className="admin-shell">
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

      {/* Backdrop */}
      {sidebarOpen && (
        <button
          type="button"
          className="admin-sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="admin-sidebar-logo">
          <p>ADMIN</p>
          <span>Admin Dashboard</span>
        </div>

        <nav className="admin-sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goToPage(item.id)}
              className={page === item.id ? "active" : ""}
            >
              <Icon name={item.icon} size={17} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <button onClick={handleLogout}>
            <Icon name="logout" size={17} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="admin-main">{children}</main>
    </div>
  );
}
// ─── HELPERS ──────────────────────────────────────────────────────────────────
function LoadingGrid() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            background: "#111827",
            borderRadius: 12,
            height: 68,
            animation: "pulse 1.5s ease infinite",
          }}
        />
      ))}
    </div>
  );
}

function EmptyState({ icon, label }) {
  return (
    <div
      style={{ textAlign: "center", padding: "60px 20px", color: "#374151" }}
    >
      <Icon name={icon} size={40} />
      <p style={{ marginTop: 12, fontSize: 14 }}>{label}</p>
    </div>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const primaryBtn = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "10px 20px",
  borderRadius: 10,
  border: "none",
  background: "#22d3ee",
  color: "#000",
  fontWeight: 700,
  fontSize: 14,
  cursor: "pointer",
};

const ghostBtn = {
  padding: "10px 20px",
  borderRadius: 10,
  border: "1px solid #1f2937",
  background: "transparent",
  color: "#9ca3af",
  fontSize: 14,
  cursor: "pointer",
};

const iconBtn = {
  display: "flex",
  alignItems: "center",
  gap: 4,
  padding: "6px 10px",
  borderRadius: 8,
  border: "1px solid #1f2937",
  background: "transparent",
  color: "#9ca3af",
  cursor: "pointer",
  fontSize: 13,
};

const toolBtn = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "7px 14px",
  borderRadius: 8,
  border: "1px solid #374151",
  background: "transparent",
  color: "#d1d5db",
  cursor: "pointer",
  fontSize: 13,
};

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #1f2937",
  background: "#0f172a",
  color: "#f1f5f9",
  fontSize: 14,
  boxSizing: "border-box",
  outline: "none",
};

const labelStyle = {
  display: "block",
  color: "#6b7280",
  fontSize: 12,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: 1,
  marginBottom: 6,
};

const listCard = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  background: "#111827",
  border: "1px solid #1f2937",
  borderRadius: 12,
  padding: "12px 16px",
  width: "100%",
  minWidth: 0,
  flexWrap: "wrap",
};

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [authed, setAuthed] = useState(!!localStorage.getItem("admin_token"));
  const [page, setPage] = useState("home");
  const toast = useToast();

  const logout = () => {
    localStorage.removeItem("admin_token");
    setAuthed(false);
    setPage("home");
  };

  return (
    <>
      <style>{`
  /* ===============================
     Global Reset
  =============================== */

  * {
    box-sizing: border-box;
    font-family: 'Cairo', 'Segoe UI', sans-serif;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #030712;
  }

  body {
    margin: 0;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  input,
  textarea {
    max-width: 100%;
  }

  img,
  video {
    max-width: 100%;
    display: block;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.6;
    }

    50% {
      opacity: 0.3;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(20px);
      opacity: 0;
    }

    to {
      transform: none;
      opacity: 1;
    }
  }

  textarea:focus,
  input:focus {
    outline: 2px solid #22d3ee !important;
    border-color: transparent !important;
  }

  /* ===============================
     Admin Layout - Desktop
  =============================== */

  .admin-shell {
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    background: #030712;
    overflow-x: hidden;
  }

  .admin-sidebar {
    width: 220px;
    min-width: 220px;
    max-width: 220px;
    flex: 0 0 220px;
    height: 100vh;
    background: #0f172a;
    border-right: 1px solid #1f2937;
    border-left: none;
    display: flex;
    flex-direction: column;
    padding: 24px 0;
    position: sticky;
    top: 0;
    z-index: 90;
  }

  .admin-main {
    flex: 1;
    width: calc(100% - 220px);
    min-width: 0;
    min-height: 100vh;
    padding: 40px 36px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .admin-mobile-topbar {
    display: none;
  }

  .admin-sidebar-backdrop {
    display: none;
  }

  /* ===============================
     Admin Common Responsive Helpers
  =============================== */

  .admin-page-header {
    min-width: 0;
  }

  .admin-page-header > div {
    min-width: 0;
  }

  .admin-page-header h1,
  .admin-page-header p {
    overflow-wrap: anywhere;
  }

  .admin-contacts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .admin-contacts-grid.has-selected {
    grid-template-columns: 1fr 1fr;
  }

  .admin-form-grid {
    display: grid;
    gap: 8px;
  }

  .admin-form-grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .admin-form-grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* ===============================
     Admin Blogs Responsive Classes
  =============================== */

  .admin-blog-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .admin-blog-card {
    width: 100% !important;
    min-width: 0 !important;
  }

  .admin-blog-thumb {
    width: 72px;
    height: 52px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
    background: #1f2937;
  }

  .admin-blog-info {
    min-width: 0 !important;
  }

  .admin-blog-title {
    color: #f1f5f9;
    font-weight: 600;
    font-size: 15px;
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .admin-blog-actions {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
  }

  /* ===============================
     Mobile / Tablet Drawer Sidebar
  =============================== */

  @media (max-width: 1024px) {
    html,
    body,
    #root {
      width: 100% !important;
      max-width: 100vw !important;
      overflow-x: hidden !important;
    }

    .admin-shell {
      display: block !important;
      width: 100% !important;
      max-width: 100vw !important;
      min-height: 100vh !important;
      overflow-x: hidden !important;
      background: #030712 !important;
    }

    .admin-mobile-topbar {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      width: 100% !important;
      height: 62px !important;
      padding: 0 16px !important;
      background: #0f172a !important;
      border-bottom: 1px solid #1f2937 !important;
      position: sticky !important;
      top: 0 !important;
      left: 0 !important;
      z-index: 80 !important;
    }

    .admin-menu-toggle {
      width: 42px !important;
      height: 42px !important;
      min-width: 42px !important;
      border-radius: 10px !important;
      border: 1px solid #1f2937 !important;
      background: #111827 !important;
      color: #22d3ee !important;
      font-size: 26px !important;
      line-height: 1 !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 0 !important;
    }

    .admin-mobile-title {
      color: #22d3ee !important;
      font-size: 14px !important;
      font-weight: 900 !important;
      line-height: 1.2 !important;
      margin: 0 !important;
      letter-spacing: 1px !important;
    }

    .admin-mobile-subtitle {
      display: block !important;
      color: #6b7280 !important;
      font-size: 11px !important;
      line-height: 1.2 !important;
      margin-top: 2px !important;
    }

    .admin-sidebar {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: min(280px, 84vw) !important;
      min-width: 0 !important;
      max-width: none !important;
      flex: none !important;
      height: 100dvh !important;
      padding: 24px 0 !important;
      background: #0f172a !important;
      border-right: 1px solid #1f2937 !important;
      border-left: none !important;
      border-bottom: none !important;
      transform: translateX(-110%) !important;
      transition: transform 0.25s ease !important;
      z-index: 100 !important;
      overflow-y: auto !important;
    }

    .admin-sidebar.is-open {
      transform: translateX(0) !important;
    }

    .admin-sidebar nav {
      display: block !important;
      padding: 16px 10px !important;
      overflow: visible !important;
      flex: 1 !important;
    }

    .admin-sidebar nav button {
      width: 100% !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 10px !important;
      margin-bottom: 4px !important;
      white-space: normal !important;
      text-align: left !important;
    }

    .admin-sidebar-backdrop {
      display: block !important;
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100dvh !important;
      background: rgba(0, 0, 0, 0.65) !important;
      border: none !important;
      z-index: 95 !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    .admin-main {
      width: 100% !important;
      max-width: 100vw !important;
      min-width: 0 !important;
      min-height: calc(100vh - 62px) !important;
      padding: 24px 16px !important;
      overflow-x: hidden !important;
      overflow-y: visible !important;
    }

    .admin-page-header {
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 14px !important;
    }

    .admin-page-header button {
      width: 100% !important;
      justify-content: center !important;
    }

    .admin-contacts-grid,
    .admin-contacts-grid.has-selected {
      grid-template-columns: 1fr !important;
    }

    .admin-form-grid-3,
    .admin-form-grid-2 {
      grid-template-columns: 1fr !important;
    }
  }

  /* ===============================
     Mobile Cards
  =============================== */

  @media (max-width: 640px) {
    .admin-blog-card {
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 12px !important;
      padding: 14px !important;
    }

    .admin-blog-thumb {
      width: 100% !important;
      height: 170px !important;
      border-radius: 10px !important;
    }

    .admin-blog-title {
      white-space: normal !important;
      overflow: visible !important;
      text-overflow: unset !important;
      font-size: 15px !important;
      line-height: 1.5 !important;
    }

    .admin-blog-info p:last-child {
      font-size: 12px !important;
    }

    .admin-blog-actions {
      width: 100% !important;
      justify-content: stretch !important;
    }

    .admin-blog-actions button {
      flex: 1 !important;
      justify-content: center !important;
      min-height: 42px !important;
    }
  }

  /* ===============================
     Small Mobile
  =============================== */

  @media (max-width: 420px) {
    .admin-main {
      padding: 20px 14px !important;
    }

    .admin-mobile-topbar {
      padding: 0 14px !important;
    }

    .admin-sidebar {
      width: 86vw !important;
    }

    .admin-sidebar nav button {
      font-size: 13px !important;
      padding: 9px 10px !important;
    }

    .admin-page-header h1 {
      font-size: 20px !important;
    }

    .admin-page-header p {
      font-size: 12px !important;
    }

    .admin-blog-thumb {
      height: 145px !important;
    }

    .admin-blog-card {
      padding: 12px !important;
    }
  }

  /* =========================
   Admin Layout Desktop
========================= */

.admin-shell {
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #030712;
  overflow-x: hidden;
}

.admin-sidebar {
  width: 220px;
  min-width: 220px;
  height: 100vh;
  background: #0f172a;
  border-right: 1px solid #1f2937;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  position: sticky;
  top: 0;
  z-index: 90;
}

.admin-main {
  flex: 1;
  min-width: 0;
  min-height: 100vh;
  padding: 40px 36px;
  overflow-x: hidden;
}

.admin-mobile-topbar {
  display: none;
}

.admin-sidebar-backdrop {
  display: none;
}

.admin-sidebar-logo {
  padding: 0 20px 28px;
  border-bottom: 1px solid #1f2937;
}

.admin-sidebar-logo p {
  color: #22d3ee;
  font-weight: 800;
  font-size: 16px;
  margin: 0;
  letter-spacing: 1px;
}

.admin-sidebar-logo span {
  display: block;
  color: #4b5563;
  font-size: 11px;
  margin-top: 4px;
}

.admin-sidebar-nav {
  padding: 16px 10px;
  flex: 1;
}

.admin-sidebar-nav button,
.admin-sidebar-footer button {
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
  transition: all 0.15s ease;
  text-align: left;
}

.admin-sidebar-nav button.active {
  background: #083344;
  color: #22d3ee;
}

.admin-sidebar-footer {
  padding: 16px 10px;
  border-top: 1px solid #1f2937;
}

.admin-sidebar-footer button:hover {
  color: #f87171;
}


/* =========================
   Mobile Sidebar Drawer
========================= */

@media (max-width: 768px) {
  html,
  body,
  #root {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .admin-shell {
    display: block;
    width: 100%;
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
    z-index: 120;
  }

  .admin-menu-toggle {
    width: 42px;
    height: 42px;
    min-width: 42px;
    border-radius: 10px;
    border: 1px solid #1f2937;
    background: #111827;
    color: #22d3ee;
    font-size: 26px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .admin-mobile-title {
    color: #22d3ee;
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

  .admin-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    max-width: 84vw;
    min-width: 0;
    height: 100dvh;
    padding: 24px 0;
    background: #0f172a;
    border-right: 1px solid #1f2937;
    transform: translateX(-110%);
    transition: transform 0.25s ease;
    z-index: 150;
    overflow-y: auto;
  }

  .admin-sidebar.is-open {
    transform: translateX(0);
  }

  .admin-sidebar-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100dvh;
    background: rgba(0, 0, 0, 0.65);
    border: none;
    z-index: 140;
    padding: 0;
    cursor: pointer;
  }

  .admin-main {
    width: 100%;
    min-width: 0;
    min-height: calc(100vh - 62px);
    padding: 24px 16px;
    overflow-x: hidden;
  }
}


/* =========================
   Small Mobile
========================= */

@media (max-width: 420px) {
  .admin-main {
    padding: 20px 14px;
  }

  .admin-sidebar {
    width: 86vw;
  }

  .admin-mobile-topbar {
    padding: 0 14px;
  }
}

/* =========================
   FINAL MOBILE SIDEBAR FIX
========================= */

@media screen and (max-width: 1200px) {
  html,
  body,
  #root {
    width: 100% !important;
    max-width: 100vw !important;
    min-height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden !important;
    background: #030712 !important;
  }

  .admin-shell {
    width: 100% !important;
    max-width: 100vw !important;
    min-height: 100vh !important;
    display: block !important;
    position: relative !important;
    overflow-x: hidden !important;
    background: #030712 !important;
  }

  .admin-mobile-topbar {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
    width: 100% !important;
    max-width: 100vw !important;
    height: 62px !important;
    padding: 0 16px !important;
    background: #0f172a !important;
    border-bottom: 1px solid #1f2937 !important;
    position: sticky !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 900 !important;
  }

  .admin-menu-toggle {
    width: 42px !important;
    height: 42px !important;
    min-width: 42px !important;
    border-radius: 10px !important;
    border: 1px solid #1f2937 !important;
    background: #111827 !important;
    color: #22d3ee !important;
    font-size: 26px !important;
    line-height: 1 !important;
    cursor: pointer !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 !important;
  }

  .admin-mobile-title {
    color: #22d3ee !important;
    font-size: 14px !important;
    font-weight: 900 !important;
    line-height: 1.2 !important;
    margin: 0 !important;
    letter-spacing: 1px !important;
  }

  .admin-mobile-subtitle {
    display: block !important;
    color: #6b7280 !important;
    font-size: 11px !important;
    line-height: 1.2 !important;
    margin-top: 2px !important;
  }

  .admin-sidebar {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    bottom: 0 !important;

    width: min(280px, 84vw) !important;
    min-width: 0 !important;
    max-width: 84vw !important;
    height: 100dvh !important;

    display: flex !important;
    flex-direction: column !important;

    padding: 24px 0 !important;
    background: #0f172a !important;
    border-right: 1px solid #1f2937 !important;
    border-left: none !important;

    transform: translate3d(-110%, 0, 0) !important;
    transition: transform 0.25s ease !important;

    z-index: 1100 !important;
    overflow-y: auto !important;

    visibility: hidden !important;
    pointer-events: none !important;
  }

  .admin-sidebar.is-open {
    transform: translate3d(0, 0, 0) !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }

  .admin-sidebar-backdrop {
    display: block !important;
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100dvh !important;
    background: rgba(0, 0, 0, 0.65) !important;
    border: none !important;
    z-index: 1000 !important;
    padding: 0 !important;
    margin: 0 !important;
    cursor: pointer !important;
  }

  .admin-main {
    width: 100% !important;
    max-width: 100vw !important;
    min-width: 0 !important;
    min-height: calc(100vh - 62px) !important;

    margin-left: 0 !important;
    padding: 24px 16px !important;

    overflow-x: hidden !important;
    overflow-y: visible !important;
    background: #030712 !important;
  }

  .admin-main > * {
    max-width: 100% !important;
    min-width: 0 !important;
  }
}

@media screen and (max-width: 420px) {
  .admin-mobile-topbar {
    padding: 0 14px !important;
  }

  .admin-main {
    padding: 20px 14px !important;
  }

  .admin-sidebar {
    width: 86vw !important;
    max-width: 86vw !important;
  }
}
`}</style>
      <ToastContainer toasts={toast.toasts} />
      {!authed ? (
        <LoginPage onLogin={() => setAuthed(true)} toast={toast} />
      ) : (
        <AdminLayout page={page} navigate={setPage} onLogout={logout}>
          {page === "home" && <DashboardHome navigate={setPage} />}
          {page === "blogs" && <BlogsPage toast={toast} />}
          {page === "projects" && <ProjectsPage toast={toast} />}
          {page === "contacts" && <ContactsPage toast={toast} />}
          {page === "hero" && <HeroPage toast={toast} />}
        </AdminLayout>
      )}
    </>
  );
}
