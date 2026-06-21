import React, { useState } from "react";
import "./style/contact.css";
import { Link } from "react-router-dom";
import "./style/about.css";

const API = "http://localhost:3000";

/* =======================
   Service → Solutions Map
======================= */
const SOLUTIONS_MAP = {
  "Track Film — Media & Production": [
    "Commercial Production",
    "Corporate & Brand Videos",
    "Motion Graphics",
    "Commercial Photography",
    "Virtual Tour 360",
    "Media Production Management",
  ],

  "Track Learning — Digital Learning Experience": [
    "Learning Experience Design",
    "Interactive Educational Content",
    "Training & Capacity Building Programs",
    "Learning Platforms UX & Content",
  ],

  "Track AI/CGI — AI-Powered Video & CGI": [
    "AI Cinematic Video Production",
    "CGI & Hyper-Real Visual Experiences",
    "AI Commercials & Brand Films",
    "Product Visualization (3D/CGI)",
    "AI Motion & VFX",
  ],

  "Track Events — Events & Experiential": [
    "Event Strategy & Concept",
    "Corporate Events",
    "Exhibitions & Booths",
    "Experiential Activations",
    "Conferences",
    "Product Launch Events",
    "Cultural & Development Events",
    "Hybrid & Digital Events",
  ],

  "Track Identity — Brand & Identity": [
    "Brand Strategy & Positioning",
    "Brand Naming & Messaging",
    "Logo Design & Visual Identity",
    "Brand Guidelines & Systems",
    "Rebranding & Brand Refresh",
    "Packaging & Product Branding",
  ],

  "Track UX/UI — Design & Experience": [
    "UX & UI Service",
    "Website Design",
    "App Design",
    "Landing Pages",
  ],

  "Track Content — Content & Storytelling": [
    "Copywriting & Storytelling",
    "Content Strategy & Content System",
    "Social Media Content Production (Graphic)",
    "Social Media Content Production (Video/Photo)",
  ],

  "Track Growth — Marketing & Growth": [
    "Social Media Strategy & Management",
    "Digital Advertising (Paid Acquisition)",
    "Campaign Strategy & Performance Analytics",
    "End-to-End Marketing Campaigns",
  ],
};

const Contact = () => {
  /* =======================
     Form State
  ======================= */
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    workEmail: "",
    serviceFamily: "",
    specificSolution: "",
    inquiryBrief: "",
    agreedToPrivacyPolicy: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  /* =======================
     Handlers
  ======================= */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "serviceFamily" && { specificSolution: "" }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setMessage("Inquiry submitted successfully.");
      setForm({
        fullName: "",
        organization: "",
        workEmail: "",
        serviceFamily: "",
        specificSolution: "",
        inquiryBrief: "",
        agreedToPrivacyPolicy: false,
      });
    } catch (err) {
      setMessage(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const specificSolutions =
    SOLUTIONS_MAP[form.serviceFamily] || [];

  /* =======================
     JSX (UNTOUCHED STRUCTURE)
  ======================= */
  return (
    <div className="contact-page">
      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#ffffff" }} />
              <stop offset="50%" style={{ stopColor: "#0f33fe" }} />
              <stop offset="100%" style={{ stopColor: "#bbfe0f" }} />
            </linearGradient>
          </defs>
        </svg>

        <div className="contact-container">
          <svg viewBox="0 0 600 250" className="gradient-svg">
            <text x="0" y="80" className="text-content">CONNECT</text>
            <text x="0" y="170" className="text-content">& CONVERT.</text>
          </svg>

          <p className="contact-subtitle">
            — Connect with HEIKARO to shape the next iteration of your brand.
          </p>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="contact-form-section">
        <div className="form-column">
          <h2 className="section-header">SUBMIT YOUR REQUIREMENTS</h2>

          <form className="main-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label>FULLNAME</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>ORGANIZATION</label>
                <input
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>WORK EMAIL</label>
                <input
                  type="email"
                  name="workEmail"
                  value={form.workEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>SERVICE FAMILY</label>
                <select
                  name="serviceFamily"
                  value={form.serviceFamily}
                  onChange={handleChange}
                >
                  <option value="">Select Track</option>
                  {Object.keys(SOLUTIONS_MAP).map((track) => (
                    <option key={track} value={track}>{track}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label>SPECIFIC SOLUTION</label>
              <select
                name="specificSolution"
                value={form.specificSolution}
                onChange={handleChange}
                disabled={!form.serviceFamily}
              >
                <option value="">
                  {form.serviceFamily
                    ? "Select Specific Solution"
                    : "Please select a service family first"}
                </option>
                {specificSolutions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label>INQUIRY BRIEF</label>
              <textarea
                name="inquiryBrief"
                value={form.inquiryBrief}
                onChange={handleChange}
              />
            </div>

            <div className="checkbox-field">
              <input
                type="checkbox"
                name="agreedToPrivacyPolicy"
                checked={form.agreedToPrivacyPolicy}
                onChange={handleChange}
              />
              <label>I agree to the Privacy Policy</label>
            </div>

            {message && <p className="form-message">{message}</p>}

            <button className="submit-btn" disabled={loading}>
              {loading ? "SENDING..." : "INITIATE INQUIRY →"}
            </button>
          </form>
        </div>

        {/* ============ SIDEBAR (UNCHANGED) ============ */}
        <aside className="sidebar-column">
          {/* نفس الكود القديم بدون أي تغيير */}
          {/* … */}
        </aside>
      </section>
    </div>
  );
};

export default Contact;

