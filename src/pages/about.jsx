import "./style/about.css";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tracks from "../components/Home/Tracks";

const servicesData = [
  {
    track: "Track 01",
    title: "BRAND & IDENTITY",
    desc: "Brand strategy, naming, messaging, logo design, visual identity, brand guidelines, rebranding, and packaging systems.",
    icon: "❐",
  },
  {
    track: "Track 02",
    title: "DESIGN & EXPERIENCE",
    desc: "UX, UI, websites, apps, landing pages, digital journeys, and conversion-focused experiences.",
    icon: "◪",
  },
  {
    track: "Track 03",
    title: "CONTENT & STORYTELLING",
    desc: "Copywriting, storytelling, social media content, content systems, and narrative structures that give brands a clear voice.",
    icon: "💬",
  },
  {
    track: "Track 04",
    title: "MARKETING & GROWTH",
    desc: "Campaigns, digital advertising, performance analytics, social media strategy, growth planning, and lead-generation systems.",
    icon: "📈",
  },
  {
    track: "Track 05",
    title: "MEDIA & PRODUCTION",
    desc: "Commercial production, media production, corporate videos, motion graphics, photography, and virtual tour experiences.",
    icon: "🎞",
  },
  {
    track: "Track 06",
    title: "DIGITAL LEARNING EXPERIENCE",
    desc: "Learning experience design, interactive educational content, training programs, AI-enhanced learning, and learning platform content.",
    icon: "📖",
  },
  {
    track: "Track 07",
    title: "AI-POWERED VIDEO & CGI",
    desc: "AI cinematic videos, CGI visuals, hyper-real product visualization, AI commercials, motion, and VFX-driven brand films.",
    icon: "✦",
  },
  {
    track: "Track 08",
    title: "EVENTS & EXPERIENTIAL",
    desc: "Event strategy, corporate events, activations, exhibitions, product launches, conferences, and immersive brand experiences.",
    icon: "🌐",
  },
];

const stepsData = [
  {
    id: "01",
    step: "STEP 01",
    title: "DISCOVER",
    desc: "We understand the business, audience, market, goals, pain points, current assets, and growth opportunities.",
  },
  {
    id: "02",
    step: "STEP 02",
    title: "DEFINE",
    desc: "We clarify the strategy, positioning, creative direction, messaging logic, and experience goals.",
  },
  {
    id: "03",
    step: "STEP 03",
    title: "DESIGN",
    desc: "We build the visual, verbal, content, digital, or experiential system required for the project.",
  },
  {
    id: "04",
    step: "STEP 04",
    title: "PRODUCE",
    desc: "We execute the selected outputs with production discipline, review cycles, technical accuracy, and brand consistency.",
  },
  {
    id: "05",
    step: "STEP 05",
    title: "LAUNCH & IMPROVE",
    desc: "We support delivery, activation, optimization, reporting, and future development where needed.",
  },
];

const strategicData = [
  {
    id: "001",
    typical: "A single design",
    heikaro: "A visual system with strategic logic",
  },
  {
    id: "002",
    typical: "Campaign posts",
    heikaro:
      "A campaign idea, content architecture, media direction, and performance logic",
  },
  {
    id: "003",
    typical: "A website screen",
    heikaro:
      "A digital experience with message hierarchy, UX flow, SEO structure, and conversion intent",
  },
  {
    id: "004",
    typical: "A video",
    heikaro:
      "A story-driven media asset connected to brand perception and audience behavior",
  },
  {
    id: "005",
    typical: "Random AI experiments",
    heikaro:
      "AI-powered workflows connected to real business and creative outcomes",
  },
];

const ecosystemData = [
  {
    title: "STRATEGY COMMAND",
    desc: "Brand strategy workshop boards linking business goals with visual direction.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "DYNAMIC IDENTITY SHEETS",
    desc: "Complete visual identity frameworks & responsive grid elements.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "STORYTELLING STUDIO",
    desc: "High-end narrative captured using cinematic lighting and high-definition gear.",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "PERFORMANCE INTEL",
    desc: "Real-time campaign analytics tracing conversions, traffic, and user actions.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "DIGITAL JOURNEY MAP",
    desc: "Highly tailored user interfaces designed to streamline conversion funnels.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "GENERATIVE ENGINE",
    desc: "Cinematic, AI-enhanced workflow blending live frames and CGI pipelines.",
    img: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "EXPERIENTIAL SPACE",
    desc: "Bespoke events, booths, and physical product launch configurations.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "CREATIVE GRID",
    desc: "Connecting strategy, design, production, and AI-accelerated frameworks.",
    img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=500&q=80",
  },
];

const beliefsData = [
  {
    id: "BELIEF 01",
    category: "PERSISTENT LOGIC",
    title: "STRATEGY DRIVES CREATIVITY",
    desc: "We believe that pure aesthetics without a core business logic are meaningless. Every pixel must serve a strategic intent.",
  },
  {
    id: "BELIEF 02",
    category: "PERSISTENT LOGIC",
    title: "SYSTEMIC THINKING",
    desc: "We don't build isolated assets. We craft connected digital ecosystems where design, media, and tech reinforce each other.",
  },
  {
    id: "BELIEF 03",
    category: "PERSISTENT LOGIC",
    title: "HUMAN REALISM",
    desc: "Even in a world governed by fast data, brand value is built on raw human emotions and authentic storytelling.",
  },
  {
    id: "BELIEF 04",
    category: "PERSISTENT LOGIC",
    title: "AI EXPANDS THE CREATIVE ENGINE",
    desc: "We use AI as an accelerator for research, ideation, content systems and smarter execution without removing human judgment.",
  },
];

const valueArchitectureData = [
  {
    id: "01",
    title: "CLARITY",
    desc: "To understand what their brand should stand for, how it should communicate, and how it should appear across every touchpoint.",
  },
  {
    id: "02",
    title: "CONSISTENCY",
    desc: "To stop scattered visuals, weak content, and disconnected marketing efforts from weakening brand perception.",
  },
  {
    id: "03",
    title: "GROWTH",
    desc: "To create campaigns, content, platforms, and experiences that support awareness, engagement, trust, and conversion.",
  },
  {
    id: "04",
    title: "EXECUTION",
    desc: "To move from ideas to real deliverables with clear structure, timelines, files, outputs, and review logic.",
  },
  {
    id: "05",
    title: "INNOVATION",
    desc: "To use AI, digital tools, visual systems, and modern production methods in ways that serve actual business goals.",
  },
];

const personalityData = [
  {
    attr: "ATTR_01",
    title: "STRATEGIC",
    desc: "Every visual decision starts with business and audience logic.",
  },
  {
    attr: "ATTR_02",
    title: "CINEMATIC",
    desc: "We create work that feels atmospheric, memorable, and emotionally sharp.",
  },
  {
    attr: "ATTR_03",
    title: "SYSTEMATIC",
    desc: "We turn creative thinking into repeatable structures and scalable outputs.",
  },
  {
    attr: "ATTR_04",
    title: "EXPERIMENTAL",
    desc: "We explore new formats, AI workflows, visual languages, and experience models.",
  },
  {
    attr: "ATTR_05",
    title: "PREMIUM",
    desc: "We care about precision, restraint, hierarchy, composition, and finish.",
  },
  {
    attr: "ATTR_06",
    title: "GROWTH-FOCUSED",
    desc: "We connect creative work to awareness, trust, engagement, and conversion.",
  },
];

export default function HeroSection() {
  return (
    <>
      {/* --- 1. HERO SECTION --- */}
      <section className="hk-root">
        <div className="hk-bg-lines" />
        <div className="hk-overlay" />

        <div className="hk-content">
          <div className="hk-badge">Who We Are / System Overview</div>
          <h1 className="hk-title">Creative Growth Operating System</h1>
          <p className="hk-sub">
            Not just a studio. Not just an agency. HEIKARO connects strategy,
            creativity, technology, and execution into one structured ecosystem.
          </p>
          <p className="hk-headline">
            HEIKARO builds brands with direction, intelligence, and execution.
          </p>
          <p className="hk-body">
            We are a creative growth operating system designed to help ambitious
            brands move from scattered ideas to clear strategy, distinctive
            identity, powerful content, digital experiences, and measurable
            growth.
          </p>
          <div>
            <Link to="/contact" className="hk-btn-primary">
              Start Your Brief
            </Link>

            <Link to="/services" className="hk-btn-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
        <div className="hk-divider" />
      </section>

      {/* --- 2. ABOUT SECTION (تم إصلاح الـ className والـ onError هنا) --- */}
      <section className="ab-root">
        <div className="ab-grid-bg"></div>
        <div className="ab-glow-effect"></div>

        <div className="ab-container">
          <div className="ab-left">
            <span className="ab-label">Who We Are</span>
            <h2 className="ab-title">Operating with collective precision.</h2>

            <p className="ab-body">
              HEIKARO is built for brands that need more than isolated creative
              output. We help businesses define where they stand, how they look,
              what they say, how they move, and how they grow across every
              digital and physical touchpoint.
            </p>

            <p className="ab-body">
              We combine strategic thinking, creative direction, visual systems,
              content production, marketing execution, digital product design,
              media production, AI-powered workflows, and experiential
              activations into one connected model.
            </p>

            <div className="ab-quote">
              "We do not design pieces. We build systems that make brands easier
              to understand, easier to trust, and harder to ignore."
            </div>
          </div>

          <div className="ab-right">
            <img src="/images/ABOUT/OperatingWithCollectivePrecision.jpg"></img>
          </div>
        </div>
      </section>

      {/* --- 8. CORE BELIEFS SECTION --- */}
      <section className="beliefs-root">
        <div className="eco-header">
          <p className="eco-label">CORE BELIEFS</p>
          <h2 className="eco-title">WHAT WE BELIEVE</h2>
          <div className="eco-sub-wrapper">
            <p className="eco-sub">
              In a crowded market, brands do not grow because they look good
              once. They grow because every detail works together.
            </p>
          </div>
        </div>

        <div className="beliefs-grid">
          {beliefsData.map((item, idx) => (
            <div className="belief-card" key={idx}>
              <div className="belief-top-content">
                <div className="belief-icon-block">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <h3 className="belief-title">{item.title}</h3>
                <p className="belief-desc">{item.desc}</p>
              </div>

              <div className="belief-footer">
                <span className="belief-id">{item.id}</span>
                <span className="belief-category">• {item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. SERVICES MATRIX SECTION --- */}
      <section className="services-root">
        <div className="services-header">
          <p className="services-label">SERVICES MATRIX</p>
          <h2 className="services-title">WHAT WE DO</h2>
          <p className="services-sub">
            HEIKARO brings together multiple creative and strategic disciplines
            under one operating model.
          </p>
        </div>

        <Tracks />

        <div className="services-footer">
          <Link to="/Services" className="services-btn">
            VIEW ALL SERVICES
          </Link>
        </div>
      </section>

      {/* --- 4. HOW HEIKARO WORKS SECTION --- */}
      <section className="model-root">
        <div className="model-header">
          <p className="model-label">OUR OPERATING MODEL</p>
          <h2 className="model-title">HOW HEIKARO WORKS</h2>
          <p className="model-sub">
            Our work is structured to move from clarity to execution. Every
            project follows a disciplined creative process that keeps strategy,
            design, content, and delivery aligned.
          </p>
        </div>

        <div className="model-container">
          <div className="model-left-timeline">
            <div className="timeline-line"></div>

            {stepsData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="step-number-box">
                  <span>{item.id}</span>
                </div>
                <div className="step-content">
                  <span className="step-tag">{item.step}</span>
                  <h3 className="step-title">{item.title}</h3>
                  <div className="step-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="model-right-media">
            <div className="media-wrapper">
              <span className="media-tag-top">MAP INTEGRATION</span>
              <img
                src="/images/ABOUT/HowHEIKAROWorks.jpeg"
                alt="Heikaro Workspace"
                className="model-img"
              />
              <span className="media-coord">COORD_GRID_94</span>
              <span className="media-tag-bottom">SYSTEM RUNNING v2.4</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. STRATEGIC EDGE SECTION --- */}
      <section className="edge-root">
        <div className="edge-header">
          <p className="edge-label">STRATEGIC EDGE</p>
          <h2 className="edge-title">WHY HEIKARO IS DIFFERENT</h2>
          <p className="edge-sub">
            Many creative teams deliver outputs. HEIKARO is designed to build
            connected creative systems.
          </p>
        </div>

        <div className="edge-container">
          {strategicData.map((row, index) => (
            <div className="edge-row" key={index}>
              <div className="edge-col-stage">
                <span className="stage-num">{row.id}</span>
                <span className="stage-text">STAGE</span>
              </div>

              <div className="edge-col-typical">
                <div className="col-top-tag">
                  <span className="dot dot-red"></span>
                  TYPICAL OUTPUT
                </div>
                <p className="typical-desc">{row.typical}</p>
              </div>

              <div className="edge-col-heikaro">
                <div className="col-top-tag">
                  <span className="dot dot-blue"></span>
                  HEIKARO APPROACH
                </div>
                <p className="heikaro-desc">{row.heikaro}</p>
                <span className="arrow-diagonal">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 6. BRAND STATEMENT SECTION --- */}
      <section className="statement-root">
        <div className="statement-container">
          <h2 className="statement-text">
            "THE DIFFERENCE IS NOT ONLY IN HOW THE WORK LOOKS.
            <span className="highlight-blue">
              {" "}
              IT IS IN HOW THE WORK THINKS."
            </span>
          </h2>
        </div>
      </section>

      {/* --- 7. VISUAL ECOSYSTEM SECTION --- */}
      <section className="eco-root">
        <div className="eco-header">
          <p className="eco-label">VISUAL ECOSYSTEM</p>
          <h2 className="eco-title">INSIDE THE HEIKARO CREATIVE ECOSYSTEM</h2>
          <p className="eco-sub">
            Our work lives at the intersection of strategy, identity, content,
            technology, media, and experience.
          </p>
        </div>

        <div className="eco-grid">
          {ecosystemData.map((item, idx) => (
            <div className="eco-card" key={idx}>
              <div className="eco-img-wrapper">
                <img src={item.img} alt={item.title} className="eco-img" />
              </div>
              <h3 className="eco-card-title">{item.title}</h3>
              <p className="eco-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 9. VALUE ARCHITECTURE SECTION --- */}
      <section className="val-root">
        <div className="val-header">
          <p className="val-label">VALUE ARCHITECTURE</p>
          <h2 className="val-title">WHAT CLIENTS COME TO HEIKARO FOR</h2>
        </div>

        <div className="val-grid">
          {valueArchitectureData.map((card, idx) => (
            <div className="val-card" key={idx}>
              <div className="val-card-top">
                <span className="val-card-num">{card.id}</span>
                <h3 className="val-card-title">{card.title}</h3>
                <p className="val-card-desc">{card.desc}</p>
              </div>

              <div className="val-card-footer">
                <span className="val-footer-text">{card.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 9. THE HEIKARO PERSONALITY SECTION --- */}
      <section className="pers-root">
        <div className="pers-header">
          <p className="pers-label">VERBAL EXPRESSION</p>
          <h2 className="pers-title">THE HEIKARO PERSONALITY</h2>
          <p className="pers-sub">
            HEIKARO is built to feel strategic, cinematic, intelligent,
            disciplined, and bold.
          </p>
        </div>

        <div className="pers-grid">
          {personalityData.map((item, index) => (
            <div className="pers-card" key={index}>
              <span className="pers-attr">{item.attr}</span>
              <h3 className="pers-card-title">{item.title}</h3>
              <p className="pers-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 10. PROJECT BRIEFING SECTION --- */}
      <section className="briefing-root">
        <div className="briefing-glow" />

        <div className="briefing-container">
          <p className="briefing-label">PROJECT BRIEFING</p>
          <h2 className="briefing-title">
            READY TO BUILD A BRAND SYSTEM <br />
            <span className="highlight-blue">
              THAT WORKS BEYOND THE FIRST IMPRESSION?
            </span>
          </h2>
          <p className="briefing-desc">
            Tell us what you are building, changing, launching, or scaling.
            HEIKARO will help you turn the idea into a structured creative
            direction and a clear execution path.
          </p>

          <div>
            <Link to="/contact" className="hk-btn-primary">
              Start Your Brief
            </Link>

            <Link to="/services" className="hk-btn-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* --- 11. CLARITY BANNER SECTION --- */}
      <section className="clarity-banner-root">
        <div className="clarity-banner-container">
          <div className="clarity-banner-left">
            <h2 className="clarity-banner-title">
              START WITH CLARITY.
              <br />
              BUILD WITH STRUCTURE.
            </h2>
            <p className="clarity-banner-desc">
              We map the right service system for your growth before a single
              asset is produced.
            </p>
          </div>

          <div className="clarity-banner-right">
            <Link to="/contact" className="clarity-banner-btn">
              START YOUR GROWTH
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
