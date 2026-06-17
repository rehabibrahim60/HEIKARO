import { useState, useEffect, useRef, useCallback } from "react";
import ContentBuilder from "./ContentBuilder";
import { Link, useNavigate } from "react-router-dom";

const API = "http://localhost:3000";

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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    {name === "blog" && <><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" /><line x1="9" y1="9" x2="10" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></>}
    {name === "project" && <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>}
    {name === "contact" && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>}
    {name === "hero" && <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21,15 16,10 5,21" /></>}
    {name === "plus" && <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>}
    {name === "trash" && <><polyline points="3,6 5,6 21,6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></>}
    {name === "edit" && <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></>}
    {name === "eye" && <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>}
    {name === "logout" && <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16,17 21,12 16,7" /><line x1="21" y1="12" x2="9" y2="12" /></>}
    {name === "check" && <polyline points="20,6 9,17 4,12" />}
    {name === "x" && <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>}
    {name === "image" && <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21,15 16,10 5,21" /></>}
    {name === "video" && <><polygon points="23,7 16,12 23,17 23,7" /><rect x="1" y="5" width="15" height="14" rx="2" /></>}
    {name === "type" && <><polyline points="4,7 4,4 20,4 20,7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /></>}
    {name === "toggle-on" && <><rect x="1" y="5" width="22" height="14" rx="7" /><circle cx="16" cy="12" r="3" /></>}
    {name === "toggle-off" && <><rect x="1" y="5" width="22" height="14" rx="7" /><circle cx="8" cy="12" r="3" /></>}
    {name === "move" && <><polyline points="5,9 2,12 5,15" /><polyline points="9,5 12,2 15,5" /><polyline points="15,19 12,22 9,19" /><polyline points="19,9 22,12 19,15" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="22" /></>}
    {name === "link" && <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>}
    {name === "lock" && <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>}
    {name === "upload" && <><polyline points="16,16 12,12 8,16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" /></>}
    {name === "github" && <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />}
    {name === "chevron-right" && <polyline points="9,18 15,12 9,6" />}
    {name === "alert" && <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>}
  </svg>
);

// ─── TOAST ────────────────────────────────────────────────────────────────────
function useToast() {
  const [toasts, setToasts] = useState([]);
  const show = useCallback((msg, type = "success") => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500);
  }, []);
  return { toasts, show };
}

function ToastContainer({ toasts }) {
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

// ─── CONFIRM DIALOG ───────────────────────────────────────────────────────────
function ConfirmDialog({ message, onConfirm, onCancel }) {
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

// ─── CONTENT BUILDER (shared between Blog & Project) ─────────────────────────



// ─── PAGE: LOGIN ──────────────────────────────────────────────────────────────
function LoginPage({ onLogin, toast }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) { toast.show("ادخل البيانات كاملة", "error"); return; }
    setLoading(true);
    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("بيانات خاطئة");
      const data = await res.json();
      localStorage.setItem("admin_token", data.token);
      onLogin();
      toast.show("مرحباً بك في لوحة التحكم");
    } catch (err) { toast.show(err.message, "error"); }
    finally { setLoading(false); }
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#030712",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24
    }}>
      <div style={{
        width: "100%", maxWidth: 400,
        background: "#0f172a", border: "1px solid #1f2937",
        borderRadius: 20, padding: "40px 36px"
      }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14, background: "#083344",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 16px", color: "#22d3ee"
          }}>
            <Icon name="lock" size={24} />
          </div>
          <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>لوحة التحكم</h1>
          <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>سجّل دخولك للمتابعة</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={labelStyle}>البريد الإلكتروني</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              style={inputStyle} placeholder="admin@example.com"
              onKeyDown={e => e.key === "Enter" && handleSubmit()} />
          </div>
          <div>
            <label style={labelStyle}>كلمة المرور</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              style={inputStyle} placeholder="••••••••"
              onKeyDown={e => e.key === "Enter" && handleSubmit()} />
          </div>
          <button onClick={handleSubmit} disabled={loading} style={{ ...primaryBtn, width: "100%", marginTop: 8, padding: "12px", fontSize: 15 }}>
            {loading ? "جاري الدخول..." : "دخول"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE: DASHBOARD HOME ─────────────────────────────────────────────────────
function DashboardHome({ navigate }) {
  const cards = [
    { label: "المقالات", icon: "blog", page: "blogs", color: "#0891b2" },
    { label: "المشاريع", icon: "project", page: "projects", color: "#7c3aed" },
    { label: "رسائل التواصل", icon: "contact", page: "contacts", color: "#059669" },
    { label: "الهيرو", icon: "hero", page: "hero", color: "#d97706" },
  ];

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
    } catch { toast.show("فشل تحميل المقالات", "error"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const deleteBlog = async (id) => {
    try {
      await fetch(`${API}/blogs/${id}`, { method: "DELETE", headers: authHeaders() });
      setBlogs(p => p.filter(b => b._id !== id));
      toast.show("تم حذف المقال");
    } catch { toast.show("فشل الحذف", "error"); }
    finally { setConfirm(null); }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>المقالات</h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>{blogs.length} مقال</p>
        </div>
        <button onClick={() => navigate("/admin/blog/new")} style={primaryBtn}>
          <Icon name="plus" size={16} /> مقال جديد
        </button>
      </div>

      {loading ? <LoadingGrid /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {blogs.length === 0 && <EmptyState icon="blog" label="لا توجد مقالات بعد" />}
          {blogs.map(b => (
            <div key={b._id} style={listCard}>
              {b.coverImage && <img src={b.coverImage} alt="" style={{ width: 72, height: 52, objectFit: "cover", borderRadius: 8, flexShrink: 0 }} />}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 15, margin: "0 0 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{b.title}</p>
                <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>{new Date(b.createdAt).toLocaleDateString("ar-EG")}</p>
              </div>
              <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                <button onClick={() => { setEditItem(b); setShowForm(true); }} style={iconBtn}><Icon name="edit" size={16} /></button>
                <button onClick={() => setConfirm(b._id)} style={{ ...iconBtn, color: "#f87171" }}><Icon name="trash" size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      )}


      {confirm && (
        <ConfirmDialog message="هل أنت متأكد من حذف هذا المقال؟ لا يمكن التراجع."
          onConfirm={() => deleteBlog(confirm)} onCancel={() => setConfirm(null)} />
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
    } catch { toast.show("فشل تحميل المشاريع", "error"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const deleteProject = async (id) => {
    try {
      await fetch(`${API}/projects/${id}`, { method: "DELETE", headers: authHeaders() });
      setProjects(p => p.filter(pr => pr._id !== id));
      toast.show("تم حذف المشروع");
    } catch { toast.show("فشل الحذف", "error"); }
    finally { setConfirm(null); }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>المشاريع</h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>{projects.length} مشروع</p>
        </div>
        <button
          onClick={() => navigate("/admin/project/new")}
          style={primaryBtn}
        >
          <Icon name="plus" size={16} /> مشروع جديد
        </button>
      </div>

      {loading ? <LoadingGrid /> : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
          {projects.length === 0 && <EmptyState icon="project" label="لا توجد مشاريع بعد" />}
          {projects.map(pr => (
            <div key={pr._id} style={{ ...listCard, flexDirection: "column", gap: 12, padding: 0, overflow: "hidden", alignItems: "stretch" }}>
              {pr.coverImage
                ? <img src={pr.coverImage} alt="" style={{ width: "100%", height: 160, objectFit: "cover" }} />
                : <div style={{ height: 160, background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#374151" }}>
                  <Icon name="project" size={40} />
                </div>}
              <div style={{ padding: "12px 16px 16px" }}>
                <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 15, margin: "0 0 6px" }}>{pr.title}</p>
                {pr.tags?.length > 0 && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                    {pr.tags.slice(0, 3).map(t => (
                      <span key={t} style={{ fontSize: 11, padding: "2px 8px", background: "#083344", color: "#22d3ee", borderRadius: 20 }}>{t}</span>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => { setEditItem(pr); setShowForm(true); }} style={{ ...iconBtn, flex: 1, justifyContent: "center" }}><Icon name="edit" size={15} /> تعديل</button>
                  <button onClick={() => setConfirm(pr._id)} style={{ ...iconBtn, color: "#f87171" }}><Icon name="trash" size={15} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}


      {confirm && (
        <ConfirmDialog message="هل أنت متأكد من حذف هذا المشروع؟"
          onConfirm={() => deleteProject(confirm)} onCancel={() => setConfirm(null)} />
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
    } catch { toast.show("فشل تحميل الرسائل", "error"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const deleteContact = async (id) => {
    try {
      await fetch(`${API}/contacts/${id}`, { method: "DELETE", headers: authHeaders() });
      setContacts(p => p.filter(c => c._id !== id));
      if (selected?._id === id) setSelected(null);
      toast.show("تم حذف الرسالة");
    } catch { toast.show("فشل الحذف", "error"); }
    finally { setConfirm(null); }
  };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>رسائل التواصل</h1>
        <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>{contacts.length} رسالة</p>
      </div>

      {loading ? <LoadingGrid /> : (
        <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 1fr" : "1fr", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {contacts.length === 0 && <EmptyState icon="contact" label="لا توجد رسائل" />}
            {contacts.map(c => (
              <div key={c._id} onClick={() => setSelected(c)} style={{
                ...listCard, cursor: "pointer",
                border: selected?._id === c._id ? "1px solid #22d3ee" : "1px solid #1f2937"
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%", background: "#083344",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#22d3ee", fontWeight: 700, fontSize: 14, flexShrink: 0
                }}>
                  {(c.name || c.email || "?")[0].toUpperCase()}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 14, margin: "0 0 2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name || "—"}</p>
                  <p style={{ color: "#6b7280", fontSize: 12, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.email}</p>
                </div>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <span style={{ color: "#6b7280", fontSize: 11 }}>{new Date(c.createdAt).toLocaleDateString("ar-EG")}</span>
                  <button onClick={e => { e.stopPropagation(); setConfirm(c._id); }} style={{ ...iconBtn, color: "#f87171", padding: 4 }}><Icon name="trash" size={14} /></button>
                </div>
              </div>
            ))}
          </div>

          {selected && (
            <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: 14, padding: 24, position: "sticky", top: 80, alignSelf: "start" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                <p style={{ color: "#22d3ee", fontSize: 13, fontWeight: 600, margin: 0 }}>تفاصيل الرسالة</p>
                <button onClick={() => setSelected(null)} style={iconBtn}><Icon name="x" size={16} /></button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Detail label="الاسم" value={selected.name} />
                <Detail label="البريد" value={selected.email} />
                {selected.phone && <Detail label="الهاتف" value={selected.phone} />}
                {selected.subject && <Detail label="الموضوع" value={selected.subject} />}
                <div>
                  <p style={{ color: "#6b7280", fontSize: 11, fontWeight: 600, textTransform: "uppercase", marginBottom: 6, letterSpacing: 1 }}>الرسالة</p>
                  <p style={{ color: "#f1f5f9", fontSize: 14, lineHeight: 1.7, background: "#0f172a", padding: 14, borderRadius: 8, margin: 0 }}>{selected.message}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {confirm && (
        <ConfirmDialog message="هل أنت متأكد من حذف هذه الرسالة؟"
          onConfirm={() => deleteContact(confirm)} onCancel={() => setConfirm(null)} />
      )}
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p style={{ color: "#6b7280", fontSize: 11, fontWeight: 600, textTransform: "uppercase", marginBottom: 3, letterSpacing: 1 }}>{label}</p>
      <p style={{ color: "#f1f5f9", fontSize: 14, margin: 0 }}>{value || "—"}</p>
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
    } catch { toast.show("فشل تحميل السلايدز", "error"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const toggleSlide = async (id, current) => {
    try {
      await fetch(`${API}/hero/slides/${id}/toggle`, { method: "PATCH", headers: authHeaders() });
      setSlides(p => p.map(s => s._id === id ? { ...s, isActive: !current } : s));
      toast.show(current ? "تم إخفاء السلايد" : "تم تفعيل السلايد");
    } catch { toast.show("فشل التغيير", "error"); }
  };

  const deleteSlide = async (id) => {
    try {
      await fetch(`${API}/hero/slides/${id}`, { method: "DELETE", headers: authHeaders() });
      setSlides(p => p.filter(s => s._id !== id));
      toast.show("تم حذف السلايد");
    } catch { toast.show("فشل الحذف", "error"); }
    finally { setConfirm(null); }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Hero Section</h1>
          <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>إدارة السلايدر الرئيسي للموقع</p>
        </div>
        <button onClick={() => { setEditSlide(null); setShowAdd(true); }} style={primaryBtn}>
          <Icon name="plus" size={16} /> إضافة سلايد
        </button>
      </div>

      {loading ? <LoadingGrid /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {slides.length === 0 && <EmptyState icon="hero" label="لا توجد سلايدز" />}
          {slides.map((s, idx) => (
            <div key={s._id} style={{ ...listCard, alignItems: "flex-start", gap: 16 }}>
              {/* Preview */}
              <div style={{ width: 120, height: 72, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#1f2937", position: "relative" }}>
                {s.type === "image" && s.imageUrl
                  ? <img src={s.imageUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : s.type === "video" && s.videoUrl
                    ? <video src={s.videoUrl} style={{ width: "100%", height: "100%", objectFit: "cover" }} muted />
                    : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#374151" }}>
                      <Icon name={s.type === "video" ? "video" : "image"} size={28} />
                    </div>}
                <span style={{
                  position: "absolute", bottom: 4, left: 4, fontSize: 10, padding: "2px 6px",
                  borderRadius: 4, background: s.type === "video" ? "#3b1d8a" : "#083344",
                  color: s.type === "video" ? "#a78bfa" : "#22d3ee", fontWeight: 600
                }}>{s.type === "video" ? "فيديو" : "صورة"}</span>
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 14 }}>
                    {s.overlayText?.heading?.highlight || s.overlayText?.badge || `سلايد ${idx + 1}`}
                  </span>
                  <span style={{
                    fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 600,
                    background: s.isActive ? "#064e3b" : "#1f2937",
                    color: s.isActive ? "#34d399" : "#6b7280"
                  }}>{s.isActive ? "مفعّل" : "مخفي"}</span>
                </div>
                {s.type === "image" && (
                  <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>
                    الكلام: {s.showOverlay ? "يظهر" : "مخفي"}
                  </p>
                )}
                {s.overlayText?.description && (
                  <p style={{ color: "#4b5563", fontSize: 12, margin: "4px 0 0", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>
                    {s.overlayText.description}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
                <button onClick={() => toggleSlide(s._id, s.isActive)} style={{
                  ...iconBtn, color: s.isActive ? "#34d399" : "#6b7280"
                }}>
                  <Icon name={s.isActive ? "toggle-on" : "toggle-off"} size={18} />
                </button>
                <button onClick={() => { setEditSlide(s); setShowAdd(true); }} style={iconBtn}>
                  <Icon name="edit" size={16} />
                </button>
                <button onClick={() => setConfirm(s._id)} style={{ ...iconBtn, color: "#f87171" }}>
                  <Icon name="trash" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showAdd && (
        <SlideForm slide={editSlide} toast={toast}
          onClose={() => { setShowAdd(false); setEditSlide(null); load(); }} />
      )}

      {confirm && (
        <ConfirmDialog message="هل أنت متأكد من حذف هذا السلايد؟"
          onConfirm={() => deleteSlide(confirm)} onCancel={() => setConfirm(null)} />
      )}
    </div>
  );
}

function SlideForm({ slide, onClose, toast }) {
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
        toast.show("تم تحديث السلايد");
      } else {
        await fetch(`${API}/hero/slides`, { method: "POST", headers: authHeaders(), body: fd });
        toast.show("تم إضافة السلايد");
      }
      onClose();
    } catch (err) { toast.show("حدث خطأ: " + err.message, "error"); }
    finally { setLoading(false); }
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
            {isEdit ? "تعديل سلايد" : "إضافة سلايد جديد"}
          </h2>
          <button onClick={onClose} style={iconBtn}><Icon name="x" size={18} /></button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Type */}
          <div>
            <label style={labelStyle}>نوع السلايد</label>
            <div style={{ display: "flex", gap: 8 }}>
              {["image", "video"].map(t => (
                <button key={t} onClick={() => setType(t)} style={{
                  flex: 1, padding: "10px", borderRadius: 8, fontSize: 14, fontWeight: 500,
                  border: type === t ? "none" : "1px solid #1f2937",
                  background: type === t ? "#22d3ee" : "transparent",
                  color: type === t ? "#000" : "#6b7280", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6
                }}>
                  <Icon name={t} size={16} /> {t === "image" ? "صورة" : "فيديو"}
                </button>
              ))}
            </div>
          </div>

          {/* File upload */}
          <div>
            <label style={labelStyle}>{type === "image" ? "الصورة" : "الفيديو"}</label>
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
                  اضغط لرفع {type === "image" ? "صورة" : "فيديو"}
                </div>}
              <input id="slideFile" type="file" accept={type === "image" ? "image/*" : "video/*"} hidden onChange={handleFile} />
            </div>
          </div>

          {/* Show overlay toggle (images only) */}
          {type === "image" && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#111827", borderRadius: 10 }}>
              <span style={{ color: "#f1f5f9", fontSize: 14 }}>إظهار النصوص فوق الصورة</span>
              <button onClick={() => setShowOverlay(p => !p)} style={{
                background: showOverlay ? "#22d3ee" : "#374151", border: "none", borderRadius: 20,
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
              <p style={{ color: "#22d3ee", fontSize: 12, fontWeight: 600, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: 1 }}>نصوص العرض</p>
              <input value={overlay.badge} onChange={e => setOverlay(p => ({ ...p, badge: e.target.value }))} style={inputStyle} placeholder="Badge مثلاً: MARKETING & GROWTH" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                <input value={overlay.prefix} onChange={e => setOverlay(p => ({ ...p, prefix: e.target.value }))} style={inputStyle} placeholder="Prefix: WE" />
                <input value={overlay.highlight} onChange={e => setOverlay(p => ({ ...p, highlight: e.target.value }))} style={inputStyle} placeholder="Highlight" />
                <input value={overlay.suffix} onChange={e => setOverlay(p => ({ ...p, suffix: e.target.value }))} style={inputStyle} placeholder="Suffix: BRANDS" />
              </div>
              <textarea value={overlay.description} onChange={e => setOverlay(p => ({ ...p, description: e.target.value }))}
                style={{ ...inputStyle, minHeight: 70, resize: "vertical" }} placeholder="وصف..." />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <input value={overlay.buttonText} onChange={e => setOverlay(p => ({ ...p, buttonText: e.target.value }))} style={inputStyle} placeholder="نص الزرار" />
                <input value={overlay.buttonLink} onChange={e => setOverlay(p => ({ ...p, buttonLink: e.target.value }))} style={inputStyle} placeholder="رابط الزرار" />
              </div>
            </div>
          )}

          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 4 }}>
            <button onClick={onClose} style={ghostBtn}>إلغاء</button>
            <button onClick={save} disabled={loading} style={primaryBtn}>
              {loading ? "جاري الحفظ..." : isEdit ? "تحديث" : "إضافة"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── LAYOUT ───────────────────────────────────────────────────────────────────
const navItems = [
  { id: "home", label: "الرئيسية", icon: "project" },
  { id: "blogs", label: "المقالات", icon: "blog" },
  { id: "projects", label: "المشاريع", icon: "project" },
  { id: "contacts", label: "التواصل", icon: "contact" },
  { id: "hero", label: "Hero", icon: "hero" },
];

function AdminLayout({ children, page, navigate, onLogout }) {

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

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function LoadingGrid() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {[1, 2, 3].map(i => (
        <div key={i} style={{ background: "#111827", borderRadius: 12, height: 68, animation: "pulse 1.5s ease infinite" }} />
      ))}
    </div>
  );
}

function EmptyState({ icon, label }) {
  return (
    <div style={{ textAlign: "center", padding: "60px 20px", color: "#374151" }}>
      <Icon name={icon} size={40} />
      <p style={{ marginTop: 12, fontSize: 14 }}>{label}</p>
    </div>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const primaryBtn = {
  display: "flex", alignItems: "center", gap: 6,
  padding: "10px 20px", borderRadius: 10, border: "none",
  background: "#22d3ee", color: "#000", fontWeight: 700,
  fontSize: 14, cursor: "pointer"
};

const ghostBtn = {
  padding: "10px 20px", borderRadius: 10,
  border: "1px solid #1f2937", background: "transparent",
  color: "#9ca3af", fontSize: 14, cursor: "pointer"
};

const iconBtn = {
  display: "flex", alignItems: "center", gap: 4,
  padding: "6px 10px", borderRadius: 8, border: "1px solid #1f2937",
  background: "transparent", color: "#9ca3af", cursor: "pointer", fontSize: 13
};

const toolBtn = {
  display: "flex", alignItems: "center", gap: 6,
  padding: "7px 14px", borderRadius: 8, border: "1px solid #374151",
  background: "transparent", color: "#d1d5db", cursor: "pointer", fontSize: 13
};

const inputStyle = {
  width: "100%", padding: "10px 14px", borderRadius: 10,
  border: "1px solid #1f2937", background: "#0f172a",
  color: "#f1f5f9", fontSize: 14, boxSizing: "border-box",
  outline: "none"
};

const labelStyle = {
  display: "block", color: "#6b7280", fontSize: 12,
  fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6
};

const listCard = {
  display: "flex", alignItems: "center", gap: 14,
  background: "#111827", border: "1px solid #1f2937",
  borderRadius: 12, padding: "12px 16px"
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
        * { box-sizing: border-box; font-family: 'Cairo', 'Segoe UI', sans-serif; }
        body { margin: 0; }
        button { font-family: inherit; }
        input, textarea { font-family: inherit; }
        @keyframes pulse { 0%,100%{opacity:.6} 50%{opacity:.3} }
        @keyframes slideIn { from{transform:translateX(20px);opacity:0} to{transform:none;opacity:1} }
        textarea:focus, input:focus { outline: 2px solid #22d3ee !important; border-color: transparent !important; }
      `}</style>
      <ToastContainer toasts={toast.toasts} />
      {!authed
        ? <LoginPage onLogin={() => setAuthed(true)} toast={toast} />
        : (
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