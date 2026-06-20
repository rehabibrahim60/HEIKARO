import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/about";
import Portfolio from "./pages/Portfolio";
import MediaProduction from "./pages/MediaProduction";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import DesignExperience from "./pages/DesignExperience";
import ContentAndStorytelling from "./pages/ContentAndStorytelling";
import MarketingGrowth from "./pages/MarketingGrowth";
import DigitalLearning from "./pages/DigitalLearning";
import AiPowerd from "./pages/AiPowerd";
import EventsExperiential from "./pages/EventsExperiential";
import { useToast, ToastContainer } from "./components/Admin/ui/Toast";
import AdminLayout from "./components/Admin/AdminLayout";
import LoginPage from "./pages/admin/LoginPage";
import DashboardHome from "./pages/admin/DashboardHome";
import BlogsPage from "./pages/admin/BlogsPage";
import ProjectsPage from "./pages/admin/ProjectsPage";
import ContactsPage from "./pages/admin/ContactsPage";
import HeroPage from "./pages/admin/HeroPage";
import ContentBuilder from "./pages/admin/ContentBuilder";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

// ── Admin wrapper (handles auth + sidebar navigation) ──────────────────────
function AdminApp() {
  const [authed, setAuthed] = useState(!!localStorage.getItem("admin_token"));
  const [page, setPage] = useState("home");
  const [builderConfig, setBuilderConfig] = useState(null); // ← جديد
  const toast = useToast();

  const logout = () => {
    localStorage.removeItem("admin_token");
    setAuthed(false);
    setPage("home");
  };

  // فتح الـ ContentBuilder بـ config معين
  const openBuilder = (config) => {
    setBuilderConfig(config);
    setPage("builder");
  };

  if (!authed) {
    return (
      <>
        <ToastContainer toasts={toast.toasts} />
        <LoginPage onLogin={() => setAuthed(true)} toast={toast} />
      </>
    );
  }

  return (
    <>
      <ToastContainer toasts={toast.toasts} />
      <AdminLayout page={page} navigate={setPage} onLogout={logout}>
        {page === "home" && <DashboardHome navigate={setPage} />}
        {page === "blogs" && <BlogsPage toast={toast} openBuilder={openBuilder} />}
        {page === "projects" && <ProjectsPage toast={toast} openBuilder={openBuilder} />}
        {page === "contacts" && <ContactsPage toast={toast} />}
        {page === "hero" && <HeroPage toast={toast} />}
        {page === "builder" && builderConfig && (
          <ContentBuilder
            {...builderConfig}
            onPublish={(data) => {
              builderConfig.onPublish?.(data);
              setPage(builderConfig.returnPage || "home");
            }}
            onCancel={() => setPage(builderConfig.returnPage || "home")}
          />
        )}
      </AdminLayout>
    </>
  );
}

// ── Root App ───────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <style>{`
        * { box-sizing: border-box; font-family: 'Cairo', 'Segoe UI', sans-serif; }
        body { margin: 0; }
        button { font-family: inherit; }
        input, textarea { font-family: inherit; }
        @keyframes pulse { 0%,100%{opacity:.6} 50%{opacity:.3} }
        @keyframes slideIn { from{transform:translateX(20px);opacity:0} to{transform:none;opacity:1} }
        textarea:focus, input:focus { outline: 2px solid #22d3ee !important; border-color: transparent !important; }
      `}</style>

      <Routes>
        {/* ── Public website routes ── */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/media-production" element={<MediaProduction />} />
          <Route path="/services/digital-learning" element={<DigitalLearning />} />
          <Route path="/services/design-experience" element={<DesignExperience />} />
          <Route path="/services/ai-video-cgi" element={<AiPowerd />} />
          <Route path="/services/events-experiential" element={<EventsExperiential />} />
          <Route path="/services/brand-identity" element={<ServiceDetail />} />
          <Route path="/services/content-storytelling" element={<ContentAndStorytelling />} />
          <Route path="/services/marketing-growth" element={<MarketingGrowth />} />
        </Route>

        {/* ── Admin routes (no Navbar/Footer) ── */}
        <Route path="/admin/*" element={<AdminApp />} />

        {/* ── Fallback ── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
