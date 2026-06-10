import React from "react";
import "./Services.css";
import "./Portfolio.css";


const services = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    ),
    title: "Brand & Identity",
    desc: "Translate your vision into a disciplined visual and strategic asset that...",
    items: [
      { label: "Brand Strategy & Positioning" },
      { label: "Brand Naming & Messaging" },
      { label: "Logo Design & Visual Identity" },
    ],
    link: "/services/brand-identity",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="8" height="8" rx="1"/>
        <rect x="13" y="3" width="8" height="8" rx="1"/>
        <rect x="3" y="13" width="8" height="8" rx="1"/>
        <rect x="13" y="13" width="8" height="8" rx="1"/>
      </svg>
    ),
    title: "Design & Experience",
    desc: "Bridge the gap between aesthetic sophistication and functional conversio...",
    items: [
      { label: "UX/UI Service" },
      { label: "Website Design & Development" },
      { label: "App Design & Development" },
    ],
    link: "/services/design-experience",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Content & Storytelling",
    desc: "Shift from random acts of content to a structured storytelling system that...",
    items: [
      { label: "Copywriting & Storytelling" },
      { label: "Social Media Content Production (Graphic)" },
      { label: "Social Media Content Production (Video/Photo)" },
    ],
    link: "/services/content-storytelling",
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
        <polyline points="16,7 22,7 22,13"/>
      </svg>
    ),
    title: "Marketing & Growth",
    desc: "Deploy creative that is engineered to scale, backed by real-time performanc...",
    items: [
      { label: "Social Media Strategy & Management" },
      { label: "Digital Advertising" },
      { label: "Campaign Strategy & Performance Analytics" },
    ],
    link: "/services/marketing-growth",
  },
  {
    num: "05",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23,7 16,12 23,17"/>
        <rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    title: "Media & Production",
    desc: "Cinematic excellence that justifies premier positioning and drives...",
    items: [
      { label: "Media Production" },
      { label: "Commercial Production" },
      { label: "Corporate & Brand Videos" },
    ],
    link: "/services/media-production",
  },
  {
    num: "06",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: "Digital Learning Experience",
    desc: "Standardize excellence by moving from traditional training to immersive...",
    items: [
      { label: "Learning Experience Design" },
      { label: "Interactive Educational Content" },
      { label: "Training & Capacity Building Programs" },
    ],
    link: "/services/digital-learning-experience",
  },
  {
    num: "07",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <path d="M15 2v2M9 2v2M2 15h2M2 9h2M15 20v2M9 20v2M20 15h2M20 9h2"/>
      </svg>
    ),
    title: "AI-Powered Video & CGI",
    desc: "Generate impossible visual worlds at strategic speed, blending imagination...",
    items: [
      { label: "AI Cinematic Video Production" },
      { label: "CGI & Hyper-Real Visual Experiences" },
      { label: "AI Commercials & Brand Films" },
    ],
    link: "/services/ai-video-cgi",
  },
  {
    num: "08",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
      </svg>
    ),
    title: "Events & Experiential",
    desc: "We shape events as designed experience systems that connect...",
    items: [
      { label: "Event Strategy & Concept" },
      { label: "Corporate Events" },
      { label: "Exhibitions & Booths" },
    ],
    link: "/services/events-experiential",
  },
];

const ServicesHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-bg-text">HEIKARO ASSET</div>
        <div className="services-hero-content">
          <span className="services-badge">CAPABILITIES ARCHITECTURE</span>
          <h1 className="services-hero-title">SERVICES</h1>
          <p className="services-hero-subtitle">
            Strategic creative services designed as systems, not isolated outputs.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="sc-section">
        <div className="sc-grid">
          {services.map((service) => (
            <div className="sc-card" key={service.num}>
              <span className="sc-num">{service.num}</span>
              <div className="sc-icon">{service.icon}</div>
              <div className="sc-body">
                <h3 className="sc-title">{service.title}</h3>
                <p className="sc-desc">{service.desc}</p>
                <ul className="sc-items">
                  {service.items.map((item, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="5" cy="12" r="1.5"/>
                      </svg>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={service.link} className="sc-link">
                Explore System
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="ig-section">
        <div className="ig-container">
          <h2 className="ig-title">INTEGRATED GOVERNANCE</h2>
          <p className="ig-desc">
            Our services aren't silos. They are modules of a single growth machine. 
            We apply rigorous documentation and governance across every family 
            to ensure your brand compounds value with every execution.
          </p>
          <div className="ig-features">
            <div className="ig-feature-item"><span className="ig-feat-label">QUALITY</span><span className="ig-feat-sub">RIGOROUS AUDIT</span></div>
            <div className="ig-feature-item"><span className="ig-feat-label">SPEED</span><span className="ig-feat-sub">AI-ACCELERATED</span></div>
            <div className="ig-feature-item"><span className="ig-feat-label">UNITY</span><span className="ig-feat-sub">SINGLE VOICE</span></div>
            <div className="ig-feature-item"><span className="ig-feat-label">GROWTH</span><span className="ig-feat-sub">MEASURED RESULTS</span></div>
          </div>
        </div>
      </section>
      <section className="value-section">
  <div className="value-content">
    <span className="mini-tag">
      <span className="icon">⬡</span> INTEGRATED GROWTH OS
    </span>
    <h2>ENGINEER YOUR MARKET AUTHORITY.</h2>
    <p>
      We connect strategic diagnosis, high-fidelity design, and performance 
      media under one unified growth operating system. Build your brand architecture today.
    </p>
    
    <div className="value-buttons">
      <button className="primary-btn">ENGAGE HEIKARO <span>→</span></button>
      <button className="secondary-btn">REVIEW PROOF SYSTEM</button>
    </div>

    <div className="process-steps">
      <span>01 DIAGNOSE</span>
      <span>02 STRATEGIZE</span>
      <span>03 EXECUTE</span>
      <span>04 OPTIMIZE</span>
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
    </>
  );
};

export default ServicesHero;