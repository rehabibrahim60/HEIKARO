import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style/ServiceDetail.css";
import "./style/pageHero.css";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";

const capabilities = [
  {
    id: "cap-1",
    title: "Brand Strategy & Positioning",
    desc: "Define the strategic foundation: audience, market position, differentiation, promise, personality.",
    footer: "Strategic foundation playbook",
  },
  {
    id: "cap-2",
    title: "Brand Naming & Messaging",
    desc: "Create brand names, taglines, tone of voice, message systems, and verbal identity frameworks.",
    footer: "Name registry & voice guidance",
  },
  {
    id: "cap-3",
    title: "Logo Design & Visual Identity",
    desc: "Design the visual identity system: logo, colors, typography, layouts, visual language.",
    footer: "Custom vector kits",
  },
  {
    id: "cap-4",
    title: "Brand Guidelines & Systems",
    desc: "Create the rulebook and operating system that keeps the brand consistent across teams.",
    footer: "Digital brand handbook",
  },
  {
    id: "cap-5",
    title: "Rebranding & Brand Refresh",
    desc: "Redesign, reposition or modernize existing brands while protecting recognition.",
    footer: "Repositioning audits",
  },
  {
    id: "cap-6",
    title: "Packaging & Product Branding",
    desc: "Build product and packaging identity systems that improve shelf presence and perception.",
    footer: "3D packaging mockups",
  },
];
const pillarsData = [
  {
    title: "STRATEGY BEFORE GRIDS",
    desc: "We map category whitespace and target buyers first. Visuals emerge only from validated strategic parameters.",
  },
  {
    title: "ACOUSTIC INTEGRITY",
    desc: "Establishing strict naming registries and emotional copy systems so the brand speaks in a single clear, distinctive voice.",
  },
  {
    title: "DYNAMIC ELASTICITY",
    desc: "Every vector icon, layout grid, and box fold is stress tested to remain legible on minor mobile feeds or billboard scales.",
  },
  {
    title: "TRUE IP ECOSYSTEMS",
    desc: "No random templates. We deliver structured asset kits, organized font licensing guides, and complete Digital Brand Handbooks.",
  },
];
const faqData = [
  {
    q: "Is Brand Strategy the same as Logo Design?",
    a: "No. Brand Strategy defines the foundation of the brand before visual design begins. It clarifies the brand's audience, positioning, value, differentiation, and messaging direction. Logo Design comes later as a visual expression of that strategy.",
  },
  {
    q: "Do we need a brand strategy if we are already established?",
    a: "Yes, established businesses often need to refresh their strategy when they experience brand message stagnation, launch new products, expand into different markets, or look smaller than their real valuation.",
  },
  {
    q: "How does the rebranding process protect existing recognition?",
    a: "We conduct an Equity Audit to isolate which visual assets (e.g., signature shapes, colors, symbols) have the highest audience recognition, evolving them systematically rather than destroying your hard-earned marketing memory.",
  },
  {
    q: "How long does a complete Brand & Identity service engagement take?",
    a: "A typical full-scale project ranges from 8 to 12 weeks, moving incrementally through strategic alignment, verbal voice design, creative visual concepts, applications testing, and digital guidelines delivery.",
  },
];

const SERVICES_DATA = {
  "brand-identity": {
    id: "01",
    track: "BRAND ARCHITECTURE",
    title: "BRAND &\nIDENTITY",
    subtitle: "A UNIFIED ECOSYSTEM",
    quote:
      "Brand identity is not the surface of the business. It is the core operating system.",
    description:
      "Strategic brand systems designed to define how your brand thinks, speaks, looks, behaves, and becomes remembered.",
    pillars: [
      {
        icon: "⊙",
        title: "STRATEGIC POSITIONING",
        desc: "We define where the brand stands in the market, who it is for, and why it should be chosen over alternatives.",
      },
      {
        icon: "☐",
        title: "VERBAL IDENTITY",
        desc: "We shape the name, message, tone, promise, taglines, and language system that help the brand speak clearly.",
      },
      {
        icon: "⊟",
        title: "VISUAL IDENTITY",
        desc: "We create logo systems, colors, typography, imagery, layout behavior, and brand applications that make the brand recognizable.",
      },
      {
        icon: "⊘",
        title: "BRAND SYSTEMS",
        desc: "We turn identity into guidelines, rules, files, templates, and scalable systems so the brand can stay consistent over time.",
      },
    ],
    image: "/hero-bg.jpg.jpeg",
  },
};

const operationalSteps = [
  {
    step: "01",
    title: "BRAND AUDIT & DISCOVERY",
    desc: "Rigorous research into your operations model, targets, competitors, current market trends, and growth trajectory.",
  },
  {
    step: "02",
    title: "STRATEGIC POSITIONING",
    desc: "Isolating the unique, value-anchored category space ownable uniquely by your corporate architecture.",
  },
  {
    step: "03",
    title: "VERBAL IDENTITY SYSTEMS",
    desc: "Developing names, values dictionaries, taglines, messaging structures, and tone playbooks.",
  },
  {
    step: "04",
    title: "VISUAL CREATIVE DIRECTIONS",
    desc: "Pitching alternative style paths: defining color spectrums, type hierarchies, and emotional boards.",
  },
  {
    step: "05",
    title: "CORE IDENTITY DESIGN",
    desc: "Precision vector modeling of primary logos and foundational graphics with systematic layout boundaries.",
  },
  {
    step: "06",
    title: "REAL-TOUCH TESTING",
    desc: "Applying the brand elements directly across slide templates, web covers, stationery, or box dielines.",
  },
  {
    step: "07",
    title: "DIGITAL GOVERNANCE BOOK",
    desc: "Documenting layout borders, font scales, asset registries, use restrictions, and style standards.",
  },
  {
    step: "08",
    title: "SCALE DEPLOYMENT",
    desc: "Delivering organized vector formats, briefing development grids, and training divisions.",
  },
];

export default function ServiceDetail() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isActive, setIsActive] = useState(false); // Add this line; it is very important
  const service = SERVICES_DATA["brand-identity"];

  const ALL_SECTIONS_DATA = [
    {
      id: "s1",
      chapter: "CHAPTER 01 // VALUE PROPOSITION",
      title: "Brand Strategy & Positioning",
      desc: "Most brand identities are shallow because they start with logo layouts instead of structured positioning frameworks. HEIKARO crafts custom market-differentiation maps, identifies ownable white space inside competitor categories, and builds exact messaging hierarchies to set a bulletproof baseline for visual design.",

      img: "../public/hero-bg.jpg.jpeg",
      items: [
        {
          n: "01",
          t: "STRATEGIC ROLE",
          d: "Solves message fragmentation by aligning business operations, ideal client profiles (ICPs), and value propositions. Explains what makes your company unique on a single balance-sheet format.",
        },
        {
          n: "02",
          t: " How HEIKARO Approaches It",
          d: "We conduct category whitespace surveys and ideal client profiling to construct a high-impact branding playbook. Our framework establishes a core message architecture that aligns cross-functional divisions, ensuring cohesive market perception.",
        },
        {
          n: "03",
          t: " Execution Flow",
          d: (
            <ul style={{ paddingLeft: "15px", margin: 0 }}>
              <li>Competitive Audit & Whitespace Study</li>
              <li>Audience Trigger Modeling</li>
              <li>Core Differentiation Definition</li>
              <li>Brand Storyboard Drafting</li>
            </ul>
          ),
        },
        {
          n: "04",
          t: " Outcomes & Use Cases",
          d: "Eliminates marketing conversion waste by delivering sharp value messaging. Critical for startups preparing scale runs or established entities repositioning against new market entries.",
        },
      ],
    },
    {
      id: "s2",
      chapter: "CHAPTER 02 // VERBAL IDENTITY & NOMENCLATURE",

      title: "Brand Naming & Messaging",
      desc: "We organize names, brand taglines, structured tone of voice manuals, and full corporate origin stories. By designing a coherent verbal ruleset, your organization learns exactly how to speak across all sales collateral and media formats without confusing consumers.",
      img: "../public/identity.jpg",
      items: [
        {
          n: "01",
          t: "STRATEGIC ROLE",
          d: "Visual identity functions as a silent sales proxy. A professional aesthetic builds immediate balance-sheet credibility, justifying premium price-tiers over commodity competitors.",
        },
        {
          n: "02",
          t: " How HEIKARO Approaches It",
          d: "We engineer responsive logo systems, custom color profiles, and typographic hierarchies. Each digital and physical asset is tested across diverse resolutions and layouts to preserve pristine, high-fidelity presentation.",
        },
        {
          n: "03",
          t: " Execution Flow",
          d: (
            <ul style={{ paddingLeft: "15px", margin: 0 }}>
              <li>Creative Visual Direction Mapping</li>
              <li>Vector Concept Sketching</li>
              <li>Typography Sourcing & Symmetries Study</li>
              <li>Application Testing Runs</li>
            </ul>
          ),
        },
        {
          n: "04",
          t: " Outcomes & Use Cases",
          d: "Increases brand value recognition by standardizing graphics. Used to build premium confidence in venture rounds or unified physical-meet-digital asset operations.",
        },
      ],
    },
    {
      id: "s3",
      chapter: "CHAPTER 03 // VISUAL FOUNDATION LAYER",
      title: "Logo Design & Visual Identity",
      desc: " Designing distinctive, flexible logos and comprehensive visual languages. We create layouts, premium color spaces, responsive grid alignments, typography standards, and asset matrices that adapt beautifully across websites, apps, and tangible print mediums.",
      img: "../public/identity.jpg",
      items: [
        {
          n: "01",
          t: "STRATEGIC ROLE",
          d: "Visual identity functions as a silent sales proxy. A professional aesthetic builds immediate balance-sheet credibility, justifying premium price-tiers over commodity competitors.",
        },
        {
          n: "02",
          t: " How HEIKARO Approaches It",
          d: "We engineer responsive logo systems, custom color profiles, and typographic hierarchies. Each digital and physical asset is tested across diverse resolutions and layouts to preserve pristine, high-fidelity presentation.",
        },
        {
          n: "03",
          t: " Execution Flow",
          d: (
            <ul style={{ paddingLeft: "15px", margin: 0 }}>
              <li>Creative Visual Direction Mapping</li>
              <li>Vector Concept Sketching</li>
              <li>Typography Sourcing & Symmetries Study</li>
              <li>Application Testing Runs</li>
            </ul>
          ),
        },
        {
          n: "04",
          t: "/ Outcomes & Use Cases",
          d: "Increases brand value recognition by standardizing graphics. Used to build premium confidence in venture rounds or unified physical-meet-digital asset operations.",
        },
      ],
    },
    {
      id: "s4",
      chapter: "CHAPTER 04 // OPERATIONAL BRAND GOVERNANCE",
      title: "Brand Guidelines & Systems",
      desc: "  Identity is useless without strict, centralized implementation rules. We encode your brand strategy, verbal language guidelines, visual templates, and asset file directories into a comprehensive Digital Brand Handbook so internal or external teams can build consistent creatives.",
      img: "../public/identity.jpg",
      items: [
        {
          n: "01",
          t: "STRATEGIC ROLE",
          d: "Prevents brand erosion. Stops chaotic, unauthorized asset uses by designers or third-party marketing units, saving operational review hours and maintaining elite presentation.",
        },
        {
          n: "02",
          t: " How HEIKARO Approaches It",
          d: "We document layout rules, color boundaries, and system restrictions in an interactive Digital Brand Handbook. This centralized operating manual ensures internal teams and external designers implement consistent assets without visual drift.",
        },
        {
          n: "03",
          t: " Execution Flow",
          d: (
            <ul style={{ paddingLeft: "15px", margin: 0 }}>
              <li>Layout & Element Restrictions Logging</li>
              <li>Digital Assets Folder Cleansing</li>
              <li>Live Stylebook Compilation</li>
              <li>Internal Scaling Training</li>
            </ul>
          ),
        },
        {
          n: "04",
          t: "/ Outcomes & Use Cases",
          d: "Allows rapid market scaling across regional divisions. An essential framework for franchise systems, corporate expansions, or decentralized content pipelines.",
        },
      ],
    },
    {
      id: "s5",
      chapter: "CHAPTER 05 // SYSTEM MATURATION & RE-ENGAGEMENT",
      title: "Rebranding & Brand Refresh",
      desc: " Injecting structured, modern aesthetic value into established enterprises. We perform thorough Equity Audits to isolate, protect, and evolve highly recognized brand assets, maintaining audience trust while correcting outdated visual elements or corporate message styles.",
      img: "../public/identity.jpg",
      items: [
        {
          n: "01",
          t: "STRATEGIC ROLE",
          d: "Restores modern relevance for legacy operations. Addresses stagnant growth trends and visual drift, updating old styles to align with modern buyer psychologies.",
        },
        {
          n: "02",
          t: " How HEIKARO Approaches It",
          d: "We execute deep equity audits to preserve highly recognized visual assets while modernizing stagnant elements. Our transition blueprints protect established customer recognition and reclaim modern relevance in active target segments.",
        },
        {
          n: "03",
          t: " Execution Flow",
          d: (
            <ul style={{ paddingLeft: "15px", margin: 0 }}>
              <li>Recognition Audit & Legacy Logging</li>
              <li>Friction Evaluation & Pain Spot Mapping</li>
              <li>Visual Direction Tuning</li>
              <li>Evolutionary Delivery Runs</li>
            </ul>
          ),
        },
        {
          n: "04",
          t: "/ Outcomes & Use Cases",
          d: "Prevents customer drop-offs while dramatically improving market positioning. Vital for corporate acquisitions, generational leadership shifts, or legacy pivots.",
        },
      ],
    },
    {
      id: "s6",
      chapter: "CHAPTER 06 // PHYSICAL EMBODIMENT & UNBOXING UX",
      title: "Packaging & Product Branding",
      desc: "Building premium product shelf presence and unforgettable unboxing moments. We merge spatial physical designs with classic structural grids, selecting elite material profiles, structural box folds, and clean tactile graphics to turn product handovers into premium experiences.",
      img: "../public/identity.jpg",
      items: [
        {
          n: "01",
          t: "STRATEGIC ROLE",
          d: "Drives dynamic organic sharing. Premium tactile packaging builds strong dopamine anchors during unboxing, encouraging free social media sharing and boosting retention.",
        },
        {
          n: "02",
          t: " How HEIKARO Approaches It",
          d: "We merge structural box-fold maps with elegant graphics to shape high-impact tactile experiences. By exploring premium materials and print specs, we turn standard packaging into permanent customer emotional connections.",
        },
        {
          n: "03",
          t: " Execution Flow",
          d: (
            <ul style={{ paddingLeft: "15px", margin: 0 }}>
              <li>Unboxing Experience Storyboarding</li>
              <li> Structural Box-fold Engineering</li>
              <li> Sensory Material Sourcing</li>
              <li> Press-ready Layout Finalization</li>
            </ul>
          ),
        },
        {
          n: "04",
          t: "/ Outcomes & Use Cases",
          d: " Dramatically elevates perceived retail and e-commerce cart values. Suited for premium cosmetics, designer accessories, technology modules, and limited-run collector packaging.",
        },
      ],
    },
    // Repeat this for 6 sections
  ];
  const [badgeIndex, setBadgeIndex] = useState(0);

  const brandIdentityCapabilities = [
    {
      id: 1,
      anchorId: "brand-strategy-positioning",
      chapter: "CHAPTER 01 // BRAND POSITIONING CORE",
      title: "Brand Strategy & Positioning",
      description:
        "Most brands fail due to unclear market logic instead of structured positioning frameworks. At HEIKARO, we combine analytical foundations, category insights, creative intelligence, and commercial narrative mapping to build brands that own meaningful lanes inside noisy markets.",
      competencyText: "STRATEGIC BRAND FOUNDATION",
      image: "/hero-bg.jpg.jpeg",
      imageAlt: "Brand Strategy and Positioning",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Defines where the brand should stand, who it should speak to, what it should own, and why customers should choose it over competing alternatives.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We study market categories, customer mindsets, competitor gaps, and internal business ambitions to shape a clear positioning system that guides every future creative and commercial decision.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Market & Category Diagnosis",
            "Audience Mindset Mapping",
            "Competitive Positioning Review",
            "Brand Direction Frameworking",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Creates a strong foundation for launches, rebrands, campaigns, websites, investor decks, and brand systems that need strategic clarity before visual execution.",
        },
      ],
    },
    {
      id: 2,
      anchorId: "brand-naming-messaging",
      chapter: "CHAPTER 02 // VERBAL IDENTITY & MESSAGE CRAFTING",
      title: "Brand Naming & Messaging",
      description:
        "We engineer names, brand taglines, editorial tone of voice manuals, and language design systems. By defining emotional codes and verbal architecture, we turn positioning into memorable, repeatable, and scalable brand communication.",
      competencyText: "NAMING & MESSAGE SYSTEMS",
      image: "",
      imageAlt: "Brand Naming and Messaging",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Transforms brand direction into clear words customers can remember, repeat, and trust across digital platforms, campaigns, presentations, and sales conversations.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We build naming routes, tagline systems, tone of voice rules, message hierarchies, and brand language guidelines that keep communication consistent and emotionally sharp.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Naming Route Exploration",
            "Tone of Voice Definition",
            "Tagline & Message Crafting",
            "Verbal System Documentation",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Improves brand recall, pitch clarity, campaign consistency, website messaging, social captions, product descriptions, and every customer-facing communication layer.",
        },
      ],
    },
    {
      id: 3,
      anchorId: "logo-design-visual-identity",
      chapter: "CHAPTER 03 // LOGO DESIGN & VISUAL IDENTITY",
      title: "Logo Design & Visual Identity",
      description:
        "Designing distinctive, flexible logos and comprehensive visual language. We create logo logic, geometric color systems, typography grids, digital signage usage, hierarchy standards, and asset rules that help brands look aligned across websites, apps, and tangible print surfaces.",
      competencyText: "LOGO & VISUAL LANGUAGE",
      image: "",
      imageAlt: "Logo Design and Visual Identity",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Gives the brand a recognizable face and a consistent visual presence that customers can identify across every digital and physical touchpoint.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We design logo systems, typography rules, color palettes, visual motifs, layout grids, and adaptable identity assets that work across websites, packaging, social media, signage, and print.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Logo Concept Development",
            "Typography & Color System",
            "Visual Asset Construction",
            "Cross-Platform Application Testing",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Builds a premium visual identity for startups, corporate brands, product launches, service companies, and businesses that need a stronger recognizable market presence.",
        },
      ],
    },
    {
      id: 4,
      anchorId: "brand-guidelines-systems",
      chapter: "CHAPTER 04 // SYSTEMIZATION BRAND GOVERNANCE",
      title: "Brand Guidelines & Systems",
      description:
        "Identity is useless without control, consistency, and implementation flows. We compile your brand strategy, visual language, applications, templates, and content direction into a comprehensive digital brand system that helps internal teams and external vendors execute the identity accurately.",
      competencyText: "BRAND CONTROL SYSTEMS",
      image: "",
      imageAlt: "Brand Guidelines and Systems",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Protects the brand from inconsistency by giving every designer, marketer, developer, and vendor a clear system for correct brand execution.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We build complete brand manuals covering logo usage, colors, typography, layout behavior, imagery direction, tone of voice, content rules, templates, and application examples.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Identity Rule Documentation",
            "Template & Layout Structuring",
            "Usage Examples Creation",
            "Digital Brand Manual Delivery",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Useful for growing teams, franchise models, agencies, marketing departments, and businesses that need repeatable brand consistency across multiple execution channels.",
        },
      ],
    },
    {
      id: 5,
      anchorId: "rebranding-brand-refresh",
      chapter: "CHAPTER 05 // BRAND MODERNIZATION & RENEWAL",
      title: "Rebranding & Brand Refresh",
      description:
        "Updating tired brands without erasing their existing memory. Through diagnosis, audience realignment, brand repositioning, logo system upgrades, verbal refresh, and roll-out mapping, we modernize legacy brands without disconnecting recognizable assets from loyal audiences.",
      competencyText: "BRAND REFRESH & REALIGNMENT",
      image: "",
      imageAlt: "Rebranding and Brand Refresh",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Helps established brands look relevant again while protecting the equity, recognition, and trust they have already built with their audience.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We audit existing brand assets, identify outdated signals, redefine positioning, modernize visual language, refresh messaging, and plan a smooth transition into the new identity system.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Current Brand Diagnosis",
            "Audience & Market Realignment",
            "Identity System Modernization",
            "Roll-Out Transition Mapping",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Perfect for brands entering new markets, changing audience segments, improving perceived value, recovering from outdated visuals, or preparing for a stronger digital presence.",
        },
      ],
    },
    {
      id: 6,
      anchorId: "packaging-product-branding",
      chapter: "CHAPTER 06 // PHYSICAL BRANDING & PRODUCT SHELF",
      title: "Packaging & Product Branding",
      description:
        "Building premium product shelf presence and digital label systems. We turn strategy into tactile packaging, label designs, adaptive product grids, unboxing-led emotional profiles, structural form logic, and e-commerce-ready product layouts that support brand value in physical and digital environments.",
      competencyText: "PRODUCT & PACKAGING SYSTEMS",
      image: "",
      imageAlt: "Packaging and Product Branding",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Turns products into desirable branded objects by improving shelf impact, perceived value, buying confidence, and the emotional experience around opening and using the product.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We design packaging systems, label families, product naming logic, box layouts, visual hierarchies, material directions, and e-commerce presentation assets that make products feel premium and consistent.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Product Positioning Review",
            "Packaging Concept Direction",
            "Label & Layout System Design",
            "Digital Mockup & Export Preparation",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Ideal for cosmetics, food, wellness products, retail brands, luxury items, and e-commerce businesses that need stronger product identity and better customer perception.",
        },
      ],
    },
  ];

  const gradients = [
    "linear-gradient(90deg, #fff 0%, #0f33fe 50%, #bbfe0f 100%)",
    "linear-gradient(90deg, #bbfe0f 0%, #fff 50%, #0f33fe 100%)",
    "linear-gradient(90deg, #0f33fe 0%, #bbfe0f 50%, #fff 100%)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex((i) => (i + 1) % gradients.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!service)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", color: "#fff" }}>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
              marginBottom: 16,
            }}
          >
            Service not found
          </p>
          <Link to="/services" style={{ color: "#0f33fe", fontSize: 13 }}>
            ← Back to Services
          </Link>
        </div>
      </div>
    );

  return (
    <div className="service-page service-detail-page">
      <div className="site-container">
        {/* Breadcrumb */}
        {/* <div className="sd-breadcrumb">
          <Link to="/" className="sd-crumb">
            🏠 HOME
          </Link>
          <span className="sd-crumb-sep">›</span>
          <Link to="/services" className="sd-crumb">
            SERVICES
          </Link>
          <span className="sd-crumb-sep">›</span>
          <span className="sd-crumb active">
            {service.title.replace("\n", " ")}
          </span>
        </div> */}

        {/* Hero */}
        <section
          className="sd-hero unified-page-hero"
          style={{ "--hero-bg": `url(${service.image})` }}
        >
          <div className="sd-hero-overlay" />
          <div className="sd-hero-content unified-page-hero-content">
            {/* <div className="sd-badge">
              <span className="sd-badge-static">SERVICE {service.id} // </span>
              <span className="sd-badge-gradient">{service.track}</span>
            </div> */}
            <h1 className="unified-page-title">
              {service.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="sd-desc-small">
              {service.description.slice(0, 120)}...
            </p>
          </div>
        </section>

        {/* Quote + Pillars + Image */}
        <section className="sd-content-section">
          <div className="sd-content-left">
            <div className="sd-quote-left">
              <span className="sd-subtitle-label">{service.subtitle}</span>
              <h2 className="sd-quote">{service.quote}</h2>
              <p className="sd-description">{service.description}</p>
            </div>
            <div className="sd-pillars">
              {service.pillars.map((p, i) => (
                <div key={i} className="sd-pillar">
                  <span className="sd-pillar-icon">{p.icon}</span>
                  <h3 className="sd-pillar-title">{p.title}</h3>
                  <p className="sd-pillar-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sd-content-right">
            <img
              src={service.image}
              alt={service.title}
              className="sd-side-img"
            />
          </div>
        </section>
        <section className="second-section">
          {/* Section title */}
          <div className="section-header">
            <span className="section-label">EROSION OF DIFFERENTIATION</span>
            <h2 className="section-title">Why Most Brands Look Similar</h2>
            <p className="section-description">
              When a brand has no strategy-centered design guidelines, every
              asset deployment restarts from zero. Flat templated brands
              dissolve in aggressive scaling stages:
            </p>
          </div>

          {/* Boxes grid (4 columns × 2 rows) */}
          <div className="pillars-grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="pillar-card">
                <span className="pillar-number">0{i + 1}</span>
                <p className="pillar-text">
                  The brand has a logo but no clear positioning background or
                  rationale.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="capabilities-section">
          <div className="section-header">
            <span className="section-label">MODULAR COMPETENCY</span>
            <h2 className="section-title">Our Included Capabilities</h2>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((item, i) => (
              // Linking is handled through the ID named section-cap-01 and so on
              <a
                href={`#section-cap-0${i + 1}`}
                key={i}
                className="capability-card"
              >
                <span className="card-number">0{i + 1}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                <div className="card-divider"></div>
                <span className="card-footer">{item.footer}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Main title appears only in the first section */}

        <CapabilitiesSection
          id="capabilities-section"
          eyebrow="BRAND & IDENTITY"
          title="Capabilities In Detail"
          cards={brandIdentityCapabilities}
        />

        <section className="operational-section">
          <div className="section-container">
            {/* Section title */}
            <div className="operational-header">
              <span className="section-label">OPERATIONAL METHODOLOGY</span>
              <h2 className="section-title">
                Our 8-Step Brand & Identity Systems Framework
              </h2>
              <p className="section-description">
                We deploy creative projects according to a rigorous scientific
                roadmap to ensure strategic purpose underpins every single
                graphic element.
              </p>
            </div>

            {/* Grid (4 columns × 2 rows) */}
            <div className="operational-grid">
              {operationalSteps.map((step, i) => (
                <div key={i} className="op-card">
                  <span className="op-number">STEP {step.step}</span>
                  <h3 className="op-title">{step.title}</h3>
                  <p className="op-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className="anatomy-section">
        <div className="site-container">
          <div className="split-layout">
            {/* Left side: text */}
            <div className="text-side">
              <span className="section-label">ANATOMY OF A MARKET LEADER</span>
              <h2 className="section-title">
                What A Complete Brand System Includes
              </h2>
              <p className="section-description">
                Branding is not a file package. It is an operating standard. We
                develop each component as an interactive variable, engineered to
                work synchronously across the enterprise runtime.
              </p>
            </div>

            {/* Right side: matrix (4x4) */}
            <div className="grid-side">
              {[
                "Brand Purpose",
                "Audience Definition",
                "Market Positioning",
                "Competitive Differentiation",
                "Brand Promise",
                "Brand Personality",
                "Naming System",
                "Messaging Framework",
                "Tone of Voice",
                "Logo System",
                "Color Palette",
                "Typography",
                "Visual Language",
                "Imagery Direction",
                "Layout Rules",
                "Brand Applications",
                "Packaging System",
                "Brand Guidelines",
                "Governance Rules",
                "Template System",
              ].map((item, i) => (
                <div key={i} className="anatomy-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="strategic-section">
        <div className="site-container">
          <div className="split-layout">
            {/* Left side: text */}
            <div className="text-side">
              <span className="section-label">
                DESIGN LOGIC & MARKET PEDIGREE
              </span>
              <h2 className="section-title">
                Elite Creative Grounded In Pure Strategic Purpose
              </h2>
              <p className="section-description">
                Beautiful graphics without strategy are empty assets. Similarly,
                extensive strategy slide-decks lacking visual taste look
                clinical and fail to align with premium customer lifestyles.
              </p>
              <p className="section-description">
                HEIKARO bridges this aesthetic discrepancy. We are a
                consolidated, design-first brand engine. Our
                strategist-designers work synchronously inside single unified
                conceptual pods, ensuring every grid layout, curve, message, and
                dieline traces natively to your corporate margins and target
                audience metrics.
              </p>
            </div>

            {/* Right side: 4 cards */}
            <div className="grid-side-pillars">
              {pillarsData.map((item, i) => (
                <div key={i} className="pillar-card">
                  <span className="pillar-icon">✓</span>
                  <h3 className="pillar-title">{item.title}</h3>
                  <p className="pillar-text">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="site-container split-layout">
          <div className="text-side">
            <span className="section-label" style={{ color: "#bbfe0f" }}>
              FAQS
            </span>
            <h2 className="section-title">Got Questions? We Have Answers.</h2>
            <p className="section-description">
              Got questions about positioning logic, asset licensing rules, or
              transition workflows? Discover details here, or reach out for
              custom scoping.
            </p>
          </div>

          <div className="faq-side">
            {faqData.map((item, i) => (
              <div
                key={i}
                className={`faq-item ${openIndex === i ? "active" : ""}`}
              >
                <div
                  className="faq-header"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <h3>{item.q}</h3>
                  <span className="faq-arrow">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </div>
                <div className="faq-content">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="hero-section">
        <div className="site-container">
          <span className="hero-label">AESTHETIC ALIGNMENT</span>
          <h1 className="hero-title">ENFORCE YOUR DISTINCT VISUAL IP</h1>
          <p
            className="hero-description"
            style={{ color: "#888", maxWidth: "600px", margin: "0 auto" }}
          >
            Book an identity strategy exploration. Our team will audit your
            current positioning baseline and design a custom structural brand
            rollout path.
          </p>

          <div className="hero-buttons">
            {/* First button: Contact with color change */}
            <button
              className={`custom-btn ${isActive ? "active" : ""}`}
              onClick={() => {
                setIsActive(true);
                setTimeout(() => {
                  window.location.href = "/contact";
                }, 200); // Very slight delay so the blue color appears before navigation
              }}
            >
              REQUEST BRAND SCOPING →
            </button>

            {/* Second button: Services */}
            <Link to="/services" className="btn-outline">
              BROWSE ALL SERVICES
            </Link>
          </div>
        </div>
      </section>
      <StartWithClarity />
    </div>
  );
}
