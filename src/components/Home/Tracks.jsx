import { Link } from "react-router-dom";

const servicesData = [
    {
        track: "Track 01",
        title: "BRAND & IDENTITY",
        desc: "Brand strategy, naming, messaging, logo design, visual identity, brand guidelines, rebranding, and packaging systems.",
        icon: "❐",
        link: "/brand-identity"
    },
    {
        track: "Track 02",
        title: "DESIGN & EXPERIENCE",
        desc: "UX, UI, websites, apps, landing pages, digital journeys, and conversion-focused experiences.",
        icon: "◪",
        link: "/design-experience"
    },
    {
        track: "Track 03",
        title: "CONTENT & STORYTELLING",
        desc: "Copywriting, storytelling, social media content, content systems, and narrative structures that give brands a clear voice.",
        icon: "💬",
        link: "/content-storytelling"
    },
    {
        track: "Track 04",
        title: "MARKETING & GROWTH",
        desc: "Campaigns, digital advertising, performance analytics, social media strategy, growth planning, and lead-generation systems.",
        icon: "📈",
        link: "/marketing-growth"
    },
    {
        track: "Track 05",
        title: "MEDIA & PRODUCTION",
        desc: "Commercial production, media production, corporate videos, motion graphics, photography, and virtual tour experiences.",
        icon: "🎞",
        link: "/media-production"
    },
    {
        track: "Track 06",
        title: "DIGITAL LEARNING EXPERIENCE",
        desc: "Learning experience design, interactive educational content, training programs, AI-enhanced learning, and learning platform content.",
        icon: "📖",
        link: "/digital-learning"
    },
    {
        track: "Track 07",
        title: "AI-POWERED VIDEO & CGI",
        desc: "AI cinematic videos, CGI visuals, hyper-real product visualization, AI commercials, motion, and VFX-driven brand films.",
        icon: "✦",
        link: "/ai-video-cgi"
    },
    {
        track: "Track 08",
        title: "EVENTS & EXPERIENTIAL",
        desc: "Event strategy, corporate events, activations, exhibitions, product launches, conferences, and immersive brand experiences.",
        icon: "🌐",
        link: "/events-experiential"
    }
];

export default function Tracks() {

    return (
        <>
            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-card-header">
                            <span className="service-track">{service.track}</span>
                            <span className="service-icon">{service.icon}</span>
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.desc}</p>
                        <Link to={`/services${service.link}`}>
                            <div className="service-inspect">
                                INSPECT MODULE <span className="arrow">→</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
