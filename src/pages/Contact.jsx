import React, { useState } from "react";
import "./style/contact.css";
import { Link } from "react-router-dom";
import "./style/pageHero.css";

const API = "http://localhost:3000";

/* =======================
   Service → Solutions Map
======================= */
const SOLUTIONS_MAP = {
  "Media & Production": [
    "Commercial Production",
    "Corporate & Brand Videos",
    "Motion Graphics",
    "Commercial Photography",
    "Virtual Tour 360",
    "Media Production Management",
  ],

  "Digital Learning Experience": [
    "Learning Experience Design",
    "Interactive Educational Content",
    "Training & Capacity Building Programs",
    "Learning Platforms UX & Content",
  ],

  "AI-Powered Video & CGI": [
    "AI Cinematic Video Production",
    "CGI & Hyper-Real Visual Experiences",
    "AI Commercials & Brand Films",
    "Product Visualization (3D/CGI)",
    "AI Motion & VFX",
  ],

  "Events & Experiential": [
    "Event Strategy & Concept",
    "Corporate Events",
    "Exhibitions & Booths",
    "Experiential Activations",
    "Conferences",
    "Product Launch Events",
    "Cultural & Development Events",
    "Hybrid & Digital Events",
  ],

  "Brand & Identity": [
    "Brand Strategy & Positioning",
    "Brand Naming & Messaging",
    "Logo Design & Visual Identity",
    "Brand Guidelines & Systems",
    "Rebranding & Brand Refresh",
    "Packaging & Product Branding",
  ],

  "Design & Experience": [
    "UX & UI Service",
    "Website Design",
    "App Design",
    "Landing Pages",
  ],

  "Content & Storytelling": [
    "Copywriting & Storytelling",
    "Content Strategy & Content System",
    "Social Media Content Production (Graphic)",
    "Social Media Content Production (Video/Photo)",
  ],

  "Marketing & Growth": [
    "Social Media Strategy & Management",
    "Digital Advertising (Paid Acquisition)",
    "Campaign Strategy & Performance Analytics",
    "End-to-End Marketing Campaigns",
  ],
};

const Contact = () => {
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

  const specificSolutions = SOLUTIONS_MAP[form.serviceFamily] || [];

  return (
    <div className="contact-page">
      {/* ================= HERO ================= */}
      <section
        className="unified-page-hero"
        style={{ "--hero-bg": "url('/images/Contact/COVER.jpg')" }}
      >
        <div className="unified-page-hero-content">
          <h1 className="unified-page-title">
            CONNECT <br />& CONVERT.
          </h1>

          <p className="unified-page-desc">
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
                  placeholder="Ex: John Wick"
                />
              </div>

              <div className="field">
                <label>ORGANIZATION</label>
                <input
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Ex: Continental"
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
                  placeholder="Ex: john@wick.com"
                />
              </div>

              <div className="field">
                <label>SERVICE FAMILY</label>
                <select
                  name="serviceFamily"
                  value={form.serviceFamily}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  {Object.keys(SOLUTIONS_MAP).map((track) => (
                    <option key={track} value={track}>
                      {track}
                    </option>
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

                {specificSolutions.map((solution) => (
                  <option key={solution} value={solution}>
                    {solution}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label>INQUIRY BRIEF</label>
              <textarea
                name="inquiryBrief"
                value={form.inquiryBrief}
                onChange={handleChange}
                placeholder="Tell us about your project goals and timeline..."
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginTop: "18px",
                marginBottom: "8px",
              }}
            >
              <input
                id="privacy"
                type="checkbox"
                name="agreedToPrivacyPolicy"
                checked={form.agreedToPrivacyPolicy}
                onChange={handleChange}
                style={{
                  width: "18px",
                  height: "18px",
                  minWidth: "22px",
                  margin: 0,
                  accentColor: "#0f33fe",
                  cursor: "pointer",
                }}
              />

              <label
                htmlFor="privacy"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.45",
                  color: "#ffffff",
                  fontWeight: 700,
                  letterSpacing: "0px",
                  textTransform: "none",
                  margin: 0,
                  cursor: "pointer",
                }}
              >
                I agree to the Privacy Policy and allow HEIKARO to contact me.
              </label>
            </div>
            {message && <p className="form-message">{message}</p>}

            <button className="submit-btn" disabled={loading}>
              {loading ? "SENDING..." : "INITIATE INQUIRY →"}
            </button>
          </form>
        </div>

        {/* ================= SIDEBAR ================= */}
        <aside className="sidebar-column">
          <div className="channels-box">
            <h3 className="sidebar-title">DIRECT CHANNELS</h3>

            <div className="channel-item">
              <span className="channel-icon">📧</span>
              <div>
                <span className="label-small">EMAIL</span>
                <span className="value-bold">hallo@heikaro.com</span>
              </div>
            </div>

            <div className="channel-item">
              <span className="channel-icon">📍</span>
              <div>
                <span className="label-small">PRESENCE</span>
                <span className="value-bold">CAIRO, EGYPT</span>
              </div>
            </div>
          </div>

          <div className="ecosystem-box">
            <h3 className="sidebar-title">ECOSYSTEM</h3>

            <div className="social-grid">
              <div className="social-item">FACEBOOK</div>
              <div className="social-item">INSTAGRAM</div>
              <div className="social-item">TWITTER</div>
              <div className="social-item">YOUTUBE</div>
              <div className="social-item">LINKEDIN</div>
              <div className="social-item">BEHANCE</div>
            </div>
          </div>

          <div className="strategic-box">
            <h3>STRATEGIC TRACKS</h3>

            <p>
              We operate across 8 specialized service families. Select your
              primary track in the form to begin discovery.
            </p>

            <ul className="tracks-list">
              <li>BRAND & IDENTITY</li>
              <li>DESIGN & EXPERIENCE</li>
              <li>CONTENT & STORYTELLING</li>
              <li>MARKETING & GROWTH</li>
            </ul>

            <Link to="/services" className="view-all">
              VIEW ALL 8 TRACKS
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Contact;
