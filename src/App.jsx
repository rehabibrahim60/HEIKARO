import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import MediaProduction from "./pages/MediaProduction";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import DesignExperience from "./pages/DesignExperience";
import ContentAndStorytelling from "./pages/ContentAndStorytelling";
import MarketingGrowth from "./pages/MarketingGrowth";
import DigitalLearning from "./pages/DigitalLearning";
import AiPowerd from "./pages/AiPowerd";
import EventsExperiential from "./pages/EventsExperiential";
import ContentBuilder from "./pages/admin/ContentBuilder";
import AdminPanel from "./pages/admin/AdminPanel";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/media-production" element={<MediaProduction />} />
          <Route path="/services/digital-learning" element={<DigitalLearning />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/design-experience" element={<DesignExperience />} />
          <Route path="/services/ai-video-cgi" element={<AiPowerd />} />
          <Route path="/services/events-experiential" element={<EventsExperiential />} />
          <Route path="/services/brand-identity" element={<ServiceDetail />} />
          <Route path="/services/content-storytelling" element={<ContentAndStorytelling />} />
          <Route path="/services/marketing-growth" element={<MarketingGrowth />} />
          {/* Admin Routes */}
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route path="/admin/blog/new" element={<ContentBuilder
            pageTitle="New Blog Post"
            titlePlaceholder="Blog Title..."
            publishLabel="Publish Blog"
            onPublish={(data) => console.log("Blog:", data)}
          />} />
          <Route path="/admin/project/new" element={<ContentBuilder
            pageTitle="New Project"
            titlePlaceholder="Project Title..."
            publishLabel="Add Project"
            onPublish={(data) => console.log("Project:", data)}
          />} />
          {/* <Route path="/admin/contact" element={<ContactAdmin />} /> */}



        </Route>
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}





// import { useState } from "react";
// import { useToast, ToastContainer } from "./components/ui/Toast";
// import AdminLayout from "./components/layout/AdminLayout";
// import LoginPage from "./pages/LoginPage";
// import DashboardHome from "./pages/DashboardHome";
// import BlogsPage from "./pages/BlogsPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import ContactsPage from "./pages/ContactsPage";
// import HeroPage from "./pages/HeroPage";

// export default function App() {
//   const [authed, setAuthed] = useState(!!localStorage.getItem("admin_token"));
//   const [page, setPage] = useState("home");
//   const toast = useToast();

//   const logout = () => {
//     localStorage.removeItem("admin_token");
//     setAuthed(false);
//     setPage("home");
//   };

//   return (
//     <>
//       <style>{`
//         * { box-sizing: border-box; font-family: 'Cairo', 'Segoe UI', sans-serif; }
//         body { margin: 0; }
//         button { font-family: inherit; }
//         input, textarea { font-family: inherit; }
//         @keyframes pulse { 0%,100%{opacity:.6} 50%{opacity:.3} }
//         @keyframes slideIn { from{transform:translateX(20px);opacity:0} to{transform:none;opacity:1} }
//         textarea:focus, input:focus { outline: 2px solid #22d3ee !important; border-color: transparent !important; }
//       `}</style>

//       <ToastContainer toasts={toast.toasts} />

//       {!authed ? (
//         <LoginPage onLogin={() => setAuthed(true)} toast={toast} />
//       ) : (
//         <AdminLayout page={page} navigate={setPage} onLogout={logout}>
//           {page === "home"     && <DashboardHome navigate={setPage} />}
//           {page === "blogs"    && <BlogsPage     toast={toast} />}
//           {page === "projects" && <ProjectsPage  toast={toast} />}
//           {page === "contacts" && <ContactsPage  toast={toast} />}
//           {page === "hero"     && <HeroPage      toast={toast} />}
//         </AdminLayout>
//       )}
//     </>
//   );
// }