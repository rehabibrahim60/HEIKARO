import React from "react";
import "./style/contact.css"; 
import { Link } from "react-router-dom";
import "./style/about.css";
 // تأكدي من وجود هذا السطر في أعلى الملف

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        {/* تعريف التدرج اللوني هنا ليراه الـ SVG */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#ffffff" }} />
              <stop offset="50%" style={{ stopColor: "#007bff" }} />
              <stop offset="100%" style={{ stopColor: "#ffd700" }} />
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
     <section className="contact-form-section">
      {/* جهة اليسار: الفورم */}
      <div className="form-column">
        <h2 className="section-header">SUBMIT YOUR REQUIREMENTS</h2>
        <form className="main-form">
          <div className="form-row">
            <div className="field">
              <label>FULLNAME</label>
              <input type="text" placeholder="Ex: John Wick" />
            </div>
            <div className="field">
              <label>ORGANIZATION</label>
              <input type="text" placeholder="Ex: Continental" />
            </div>
          </div>
         <div className="form-row">
            <div className="field">
            <label>WORK EMAIL</label>
            <input type="email" placeholder="Ex: john@wick.com" />
            </div>
            <div className="field">
            <label>SERVICE FAMILY</label>
            <select className="custom-select">
                <option value="" disabled hidden>
                Select Track
                </option>
                <option value="brand">Track Identity — Brand & Identity</option>
                <option value="ux">Track UX/UI — Design & Experience</option>
                <option value="content">Track Content — Content & Storytelling</option>
                <option value="growth">Track Growth — Marketing & Growth</option>
                <option value="film">Track Film — Media & Production</option>
                <option value="learning">Track Learning — Digital Learning Experience</option>
                <option value="ai">Track AI/CGI — AI-Powered Video & CGI</option>
                <option value="events">Track Events — Events & Experiential</option>
            </select>
            </div>
        </div>
          <div className="field">
            <label>SPECIFIC SOLUTION</label>
            <input type="text" placeholder="Please select a service family first" />
          </div>
          <div className="field">
            <label>INQUIRY BRIEF</label>
            <textarea placeholder="Tell us about your project goals and timeline..."></textarea>
          </div>
          <div className="checkbox-field">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">I agree to the Privacy Policy and allow HEIKARO to contact me.</label>
          </div>
          <button className="submit-btn">INITIATE INQUIRY <span>➤</span></button>
        </form>
      </div>

      {/* جهة اليمين: الـ Sidebar */}
      <aside className="sidebar-column">
      <div className="channels-box">
        <h3 className="sidebar-title">DIRECT CHANNELS</h3>
        
        <div className="channel-item">
            <span>📧</span>
            <div>
                <span className="label-small">EMAIL</span>
                <span className="value-bold">hallo@heikaro.com</span>
            </div>
        </div>
        
        <div className="channel-item">
            <span>📍</span>
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
        <p>We operate across 8 specialized service families. Select your primary track in the form to begin discovery.</p>
        <ul className="tracks-list">
            <li>BRAND & IDENTITY</li>
            <li>DESIGN & EXPERIENCE</li>
            <li>CONTENT & STORYTELLING</li>
            <li>MARKETING & GROWTH</li>
        </ul>
<Link to="/services" className="view-all">VIEW ALL 8 TRACKS</Link>        </div>
      </aside>
    </section>
<section className="map-section">
  <div className="map-wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60395376045!2d31.3328221!3d30.0595581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21696f%3A0x86134a413d7c588e!2sNew%20Cairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1717416390141!5m2!1sen!2seg"
      width="100%"
      height="500"
      className="dark-map"
      title="Heikaro Location"
      loading="lazy"
    ></iframe>

    <div className="location-overlay">
      <div className="overlay-box">
        <p className="subtitle">LOGIC CONTROL CENTER</p>
        <p className="title">CREATIVE HUB, NEW CAIRO, EGYPT</p>
      </div>
    </div>
  </div>
</section>
<section className="clarity-banner-root">
        <div className="clarity-banner-container">
          
          <div className="clarity-banner-left">
            <h2 className="clarity-banner-title">
              START WITH CLARITY.<br />
              BUILD WITH STRUCTURE.
            </h2>
            <p className="clarity-banner-desc">
              We map the right service system for your growth before a single asset is produced.
            </p>
          </div>

          <div className="clarity-banner-right">
            <button className="clarity-banner-btn">
              START YOUR GROWTH
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;