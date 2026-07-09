import React from "react";
import { Link } from "react-router-dom";
import "./MegaMenu.css";

const services = [
  {
    slug: "brand-identity",
    image: "/images/icons/BRAND--IDENTITY.png",
    title: "BRAND & IDENTITY",
    subtitle: "Identity Architecture & Strategic Authority",
    items: [
      "Brand Strategy & Positioning",
      "Brand Naming & Messaging",
      "Logo Design & Visual Identity",
      "Brand Guidelines & Systems",
      "Rebranding & Brand Refresh",
      "Packaging & Product Branding",
    ],
  },
  {
    slug: "design-experience",
    image: "/images/icons/DESIGN-EXPERIENCE.png",
    title: "DESIGN & EXPERIENCE",
    subtitle: "Digital Interface Engines & UX Physics",
    items: [
      "UX/UI Service",
      "Website Design & Development",
      "App Design & Development",
      "Landing Pages & Conversion UX",
    ],
  },
  {
    slug: "content-storytelling",
    image: "/images/icons/CONTENT-STORYTELLING.png",
    title: "CONTENT & STORYTELLING",
    subtitle: "Narrative Infrastructure & Social Dominance",
    items: [
      "Copywriting & Storytelling",
      "Social Media Content Production (Graphic)",
      "Social Media Content Production (Video/Photo)",
      "Content Strategy & Content System",
    ],
  },
  {
    slug: "marketing-growth",
    image: "/images/icons/MARKETING--GROWTH.png",
    title: "MARKETING & GROWTH",
    subtitle: "Market Capture Systems & ROI Logic",
    items: [
      "Social Media Strategy & Management",
      "Digital Advertising",
      "Campaign Strategy & Performance Analytics",
      "Marketing Campaigns",
    ],
  },
  {
    slug: "media-production",
    image: "/images/icons/MEDIA-PRODUCTION.png",
    title: "MEDIA & PRODUCTION",
    subtitle: "Cinematic Media & High-Fidelity Proof",
    items: [
      "Media Production",
      "Commercial Production",
      "Corporate & Brand Videos",
    ],
  },
  {
    slug: "digital-learning",
    image: "/images/icons/DIGITAL-LEARNING-EXPERIENCE.png",
    title: "DIGITAL LEARNING EXPERIENCE",
    subtitle: "Capacity Building & Immersive UX",
    items: [
      "Learning Experience Design",
      "Interactive Educational Content",
      "Training & Capacity Building Programs",
    ],
  },
  {
    slug: "ai-video-cgi",
    image: "/images/icons/AI-POWERED-VIDEO-CGI.png",
    title: "AI-POWERED VIDEO & CGI",
    subtitle: "Visual Synthesis & Future Production",
    items: [
      "AI Cinematic Video Production",
      "CGI & Hyper-Real Visual Experiences",
      "AI Commercials & Brand Films",
    ],
  },
  {
    slug: "events-experiential",
    image: "/images/icons/EVENTS-EXPERIENTIAL.png",
    title: "EVENTS & EXPERIENTIAL",
    subtitle: "Strategic Event & Experiential Systems",
    items: [
      "Event Strategy & Concept",
      "Corporate Events",
      "Exhibitions & Booths",
    ],
  },
];

const MegaMenu = () => {
  return (
    <div className="mega-menu-overlay">
      <div className="mega-menu-grid">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="service-card-link"
          >
            <div className="service-column">
              <div>
                <div className="service-header">
                  <span className="service-icon">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="service-icon-img"
                    />
                  </span>

                  <h3 className="service-title">{s.title}</h3>
                </div>

                <p className="service-subtitle">{s.subtitle}</p>
              </div>

              <div className="explore-link">
                EXPLORE SERVICE <span className="explore-arrow">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mega-menu-footer">
        <span className="footer-system">
          <span className="footer-dot"></span>
          OPERATING SYSTEM V4.2 DEPLOYMENT
        </span>
        <Link to="/services" className="footer-view-all">
          VIEW ALL SERVICES
        </Link>
      </div>
    </div>
  );
};

export default MegaMenu;
