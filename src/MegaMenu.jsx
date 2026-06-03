import React from "react";
import { Link } from "react-router-dom";
import "./MegaMenu.css";
import {
  FaPaintBrush, FaDesktop, FaFileAlt, FaChartLine,
  FaVideo, FaGraduationCap, FaRobot, FaCalendarAlt,
} from "react-icons/fa";

const services = [
  {
    id: "01", slug: "brand-identity", icon: <FaPaintBrush />,
    title: "BRAND & IDENTITY",
    items: ["Brand Strategy & Positioning", "Brand Naming & Messaging", "Logo Design & Visual Identity", "Brand Guidelines & Systems", "Rebranding & Brand Refresh", "Packaging & Product Branding"],
  },
  {
    id: "02", slug: "design-experience", icon: <FaDesktop />,
    title: "DESIGN & EXPERIENCE",
    items: ["UX/UI Service", "Website Design & Development", "App Design & Development", "Landing Pages & Conversion UX"],
  },
  {
    id: "03", slug: "content-storytelling", icon: <FaFileAlt />,
    title: "CONTENT & STORYTELLING",
    items: ["Copywriting & Storytelling", "Social Media Content Production (Graphic)", "Social Media Content Production (Video/Photo)", "Content Strategy & Content System"],
  },
  {
    id: "04", slug: "marketing-growth", icon: <FaChartLine />,
    title: "MARKETING & GROWTH",
    items: ["Social Media Strategy & Management", "Digital Advertising", "Campaign Strategy & Performance Analytics", "Marketing Campaigns"],
  },
  {
    id: "05", slug: "media-production", icon: <FaVideo />,
    title: "MEDIA & PRODUCTION",
    items: ["Media Production", "Commercial Production", "Corporate & Brand Videos"],
  },
  {
    id: "06", slug: "digital-learning", icon: <FaGraduationCap />,
    title: "DIGITAL LEARNING",
    items: ["Learning Experience Design", "Interactive Educational Content", "Training & Capacity Building Programs"],
  },
  {
    id: "07", slug: "ai-video-cgi", icon: <FaRobot />,
    title: "AI-POWERED VIDEO & CGI",
    items: ["AI Cinematic Video Production", "CGI & Hyper-Real Visual Experiences", "AI Commercials & Brand Films"],
  },
  {
    id: "08", slug: "events-experiential", icon: <FaCalendarAlt />,
    title: "EVENTS & EXPERIENTIAL",
    items: ["Event Strategy & Concept", "Corporate Events", "Exhibitions & Booths"],
  },
];

const MegaMenu = () => {
  return (
    <div className="mega-menu-overlay">
      {services.map((s) => (
        <div key={s.id} className="service-column">
          <div className="service-header">
            <span className="service-icon">{s.icon}</span>
            <div className="service-title-group">
              <h3 className="service-title">{s.title}</h3>
              <span className="service-id">{s.id}</span>
            </div>
          </div>
          <ul className="service-list">
            {s.items.map((item, i) => (
              <li key={i}><a href="#">{item}</a></li>
            ))}
          </ul>
          <Link to={`/services/${s.slug}`} className="track-link">
            TRACK OVERVIEW →
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;