import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  FaPaintBrush,
  FaDesktop,
  FaFileAlt,
  FaChartLine,
  FaVideo,
  FaGraduationCap,
  FaRobot,
  FaCalendarAlt,
} from "react-icons/fa";

const servicesData = [
  {
    title: "BRAND & IDENTITY",
    desc: "Brand strategy, naming, messaging, logo design, visual identity, brand guidelines, rebranding, and packaging systems.",
    icon: <FaPaintBrush />,
    
    link: "/brand-identity",

  },
  {
    title: "DESIGN & EXPERIENCE",
    desc: "UX, UI, websites, apps, landing pages, digital journeys, and conversion-focused experiences.",
    icon: <FaDesktop />,
    link: "/design-experience",
  },
  {
    title: "CONTENT & STORYTELLING",
    desc: "Copywriting, storytelling, social media content, content systems, and narrative structures that give brands a clear voice.",
        icon: <FaFileAlt />,
    link: "/content-storytelling",
  },
  {
    title: "MARKETING & GROWTH",
    desc: "Campaigns, digital advertising, performance analytics, social media strategy, growth planning, and lead-generation systems.",
    icon: <FaChartLine />,
    link: "/marketing-growth",
  },
  {
    title: "MEDIA & PRODUCTION",
    desc: "Commercial production, media production, corporate videos, motion graphics, photography, and virtual tour experiences.",
        icon: <FaVideo />,
    
    link: "/media-production",
  },
  {
    title: "DIGITAL LEARNING EXPERIENCE",
    desc: "Learning experience design, interactive educational content, training programs, AI-enhanced learning, and learning platform content.",
        icon: <FaGraduationCap />,
    
    link: "/digital-learning",
  },
  {
    title: "AI-POWERED VIDEO & CGI",
    desc: "AI cinematic videos, CGI visuals, hyper-real product visualization, AI commercials, motion, and VFX-driven brand films.",
        icon: <FaRobot />,
    
    link: "/ai-video-cgi",
  },
  {
    title: "EVENTS & EXPERIENTIAL",
    desc: "Event strategy, corporate events, activations, exhibitions, product launches, conferences, and immersive brand experiences.",
       icon: <FaCalendarAlt />,
   
    link: "/events-experiential",
  },
];

export default function Tracks() {
  const navigate = useNavigate();

  const goToService = (link) => {
    console.log("clicked card:", link);
    navigate(`/services${link}`);
  };

  return (
    <div className="services-grid">
      {servicesData.map((service, index) => (
        <article
          key={index}
          className="service-card service-card-link"
          role="link"
          tabIndex={0}
          onClick={() => goToService(service.link)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              goToService(service.link);
            }
          }}
        >
          <div className="service-card-header">
            <span className="service-track">{service.track}</span>
            <span className="service-icon">{service.icon}</span>
          </div>

          <h3 className="service-title">{service.title}</h3>

          <p className="service-desc">{service.desc}</p>

          <div className="service-inspect">
            INSPECT MODULE <span className="arrow">→</span>
          </div>
        </article>
      ))}
    </div>
  );
}
