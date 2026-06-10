import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style/ServiceDetail.css";
import StartWithClarity from '../components/common/START_WITH_CLARITY';


const capabilities = [
  { id: "cap-1", title: "Brand Strategy & Positioning", desc: "Define the strategic foundation: audience, market position, differentiation, promise, personality.", footer: "Strategic foundation playbook" },
  { id: "cap-2", title: "Brand Naming & Messaging", desc: "Create brand names, taglines, tone of voice, message systems, and verbal identity frameworks.", footer: "Name registry & voice guidance" },
  { id: "cap-3", title: "Logo Design & Visual Identity", desc: "Design the visual identity system: logo, colors, typography, layouts, visual language.", footer: "Custom vector kits" },
  { id: "cap-4", title: "Brand Guidelines & Systems", desc: "Create the rulebook and operating system that keeps the brand consistent across teams.", footer: "Digital brand handbook" },
  { id: "cap-5", title: "Rebranding & Brand Refresh", desc: "Redesign, reposition or modernize existing brands while protecting recognition.", footer: "Repositioning audits" },
  { id: "cap-6", title: "Packaging & Product Branding", desc: "Build product and packaging identity systems that improve shelf presence and perception.", footer: "3D packaging mockups" }
];
const pillarsData = [
  { title: "STRATEGY BEFORE GRIDS", desc: "We map category whitespace and target buyers first. Visuals emerge only from validated strategic parameters." },
  { title: "ACOUSTIC INTEGRITY", desc: "Establishing strict naming registries and emotional copy systems so the brand speaks in a single clear, distinctive voice." },
  { title: "DYNAMIC ELASTICITY", desc: "Every vector icon, layout grid, and box fold is stress tested to remain legible on minor mobile feeds or billboard scales." },
  { title: "TRUE IP ECOSYSTEMS", desc: "No random templates. We deliver structured asset kits, organized font licensing guides, and complete Digital Brand Handbooks." }
];
const faqData = [
  { q: "Is Brand Strategy the same as Logo Design?", a: "No. Brand Strategy defines the foundation of the brand before visual design begins. It clarifies the brand's audience, positioning, value, differentiation, and messaging direction. Logo Design comes later as a visual expression of that strategy." },
  { q: "Do we need a brand strategy if we are already established?", a: "Yes, established businesses often need to refresh their strategy when they experience brand message stagnation, launch new products, expand into different markets, or look smaller than their real valuation." },
  { q: "How does the rebranding process protect existing recognition?", a: "We conduct an Equity Audit to isolate which visual assets (e.g., signature shapes, colors, symbols) have the highest audience recognition, evolving them systematically rather than destroying your hard-earned marketing memory." },
  { q: "How long does a complete Brand & Identity service engagement take?", a: "A typical full-scale project ranges from 8 to 12 weeks, moving incrementally through strategic alignment, verbal voice design, creative visual concepts, applications testing, and digital guidelines delivery." }
];

const SERVICES_DATA = {
  "brand-identity": {
    id: "01", track: "BRAND ARCHITECTURE", title: "BRAND &\nIDENTITY",
    subtitle: "A UNIFIED ECOSYSTEM",
    quote: "Brand identity is not the surface of the business. It is the core operating system.",
    description: "Strategic brand systems designed to define how your brand thinks, speaks, looks, behaves, and becomes remembered.",
    pillars: [
      { icon: "⊙", title: "STRATEGIC POSITIONING", desc: "We define where the brand stands in the market, who it is for, and why it should be chosen over alternatives." },
      { icon: "☐", title: "VERBAL IDENTITY", desc: "We shape the name, message, tone, promise, taglines, and language system that help the brand speak clearly." },
      { icon: "⊟", title: "VISUAL IDENTITY", desc: "We create logo systems, colors, typography, imagery, layout behavior, and brand applications that make the brand recognizable." },
      { icon: "⊘", title: "BRAND SYSTEMS", desc: "We turn identity into guidelines, rules, files, templates, and scalable systems so the brand can stay consistent over time." },
    ],
    image: "/hero-bg.jpg.jpeg"
  }
};

  const operationalSteps = [
  { step: "01", title: "BRAND AUDIT & DISCOVERY", desc: "Rigorous research into your operations model, targets, competitors, current market trends, and growth trajectory." },
  { step: "02", title: "STRATEGIC POSITIONING", desc: "Isolating the unique, value-anchored category space ownable uniquely by your corporate architecture." },
  { step: "03", title: "VERBAL IDENTITY SYSTEMS", desc: "Developing names, values dictionaries, taglines, messaging structures, and tone playbooks." },
  { step: "04", title: "VISUAL CREATIVE DIRECTIONS", desc: "Pitching alternative style paths: defining color spectrums, type hierarchies, and emotional boards." },
  { step: "05", title: "CORE IDENTITY DESIGN", desc: "Precision vector modeling of primary logos and foundational graphics with systematic layout boundaries." },
  { step: "06", title: "REAL-TOUCH TESTING", desc: "Applying the brand elements directly across slide templates, web covers, stationery, or box dielines." },
  { step: "07", title: "DIGITAL GOVERNANCE BOOK", desc: "Documenting layout borders, font scales, asset registries, use restrictions, and style standards." },
  { step: "08", title: "SCALE DEPLOYMENT", desc: "Delivering organized vector formats, briefing development grids, and training divisions." }
];

export default function ServiceDetail() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isActive, setIsActive] = useState(false); // أضيفي هذا السطر ضروري جداً
  const service = SERVICES_DATA["brand-identity"];

  const ALL_SECTIONS_DATA = [
  {
    id: "s1",
    chapter: "CHAPTER 01 // VALUE PROPOSITION",
    title: "Brand Strategy & Positioning",
    desc: "Most brand identities are shallow because they start with logo layouts instead of structured positioning frameworks. HEIKARO crafts custom market-differentiation maps, identifies ownable white space inside competitor categories, and builds exact messaging hierarchies to set a bulletproof baseline for visual design.",


    img: "../public/hero-bg.jpg.jpeg",
    items: [
      { n: "01", t: "STRATEGIC ROLE", d: "Solves message fragmentation by aligning business operations, ideal client profiles (ICPs), and value propositions. Explains what makes your company unique on a single balance-sheet format." },
      { n: "02", t: " How HEIKARO Approaches It", d: "We conduct category whitespace surveys and ideal client profiling to construct a high-impact branding playbook. Our framework establishes a core message architecture that aligns cross-functional divisions, ensuring cohesive market perception." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Competitive Audit & Whitespace Study</li>
        <li>Audience Trigger Modeling</li>
        <li>Core Differentiation Definition</li>
        <li>Brand Storyboard Drafting</li>
        </ul>
    ) },
     { n: "04", t: " Outcomes & Use Cases", d: "Eliminates marketing conversion waste by delivering sharp value messaging. Critical for startups preparing scale runs or established entities repositioning against new market entries." },

    ]
  },
  {
    id: "s2",
    chapter: "CHAPTER 02 // VERBAL IDENTITY & NOMENCLATURE",

    title: "Brand Naming & Messaging",
    desc: "We organize names, brand taglines, structured tone of voice manuals, and full corporate origin stories. By designing a coherent verbal ruleset, your organization learns exactly how to speak across all sales collateral and media formats without confusing consumers.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: "Visual identity functions as a silent sales proxy. A professional aesthetic builds immediate balance-sheet credibility, justifying premium price-tiers over commodity competitors." },
      { n: "02", t: " How HEIKARO Approaches It", d: "We engineer responsive logo systems, custom color profiles, and typographic hierarchies. Each digital and physical asset is tested across diverse resolutions and layouts to preserve pristine, high-fidelity presentation." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Creative Visual Direction Mapping</li>
        <li>Vector Concept Sketching</li>
        <li>Typography Sourcing & Symmetries Study</li>
        <li>Application Testing Runs</li>
       </ul>
    ) },
     { n: "04", t: " Outcomes & Use Cases", d: "Increases brand value recognition by standardizing graphics. Used to build premium confidence in venture rounds or unified physical-meet-digital asset operations." },

    ]
  },
  {
    id: "s3",
    chapter: "CHAPTER 03 // VISUAL FOUNDATION LAYER",
    title: "Logo Design & Visual Identity",
    desc: " Designing distinctive, flexible logos and comprehensive visual languages. We create layouts, premium color spaces, responsive grid alignments, typography standards, and asset matrices that adapt beautifully across websites, apps, and tangible print mediums.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: "Visual identity functions as a silent sales proxy. A professional aesthetic builds immediate balance-sheet credibility, justifying premium price-tiers over commodity competitors." },
      { n: "02", t: " How HEIKARO Approaches It", d: "We engineer responsive logo systems, custom color profiles, and typographic hierarchies. Each digital and physical asset is tested across diverse resolutions and layouts to preserve pristine, high-fidelity presentation." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Creative Visual Direction Mapping</li>
        <li>Vector Concept Sketching</li>
        <li>Typography Sourcing & Symmetries Study</li>
        <li>Application Testing Runs</li>
       </ul>
    ) },
     { n: "04", t: "/ Outcomes & Use Cases", d: "Increases brand value recognition by standardizing graphics. Used to build premium confidence in venture rounds or unified physical-meet-digital asset operations." },

    ]
  },
  {
    id: "s4",
    chapter: "CHAPTER 04 // OPERATIONAL BRAND GOVERNANCE",
    title: "Brand Guidelines & Systems",
    desc: "  Identity is useless without strict, centralized implementation rules. We encode your brand strategy, verbal language guidelines, visual templates, and asset file directories into a comprehensive Digital Brand Handbook so internal or external teams can build consistent creatives.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: "Prevents brand erosion. Stops chaotic, unauthorized asset uses by designers or third-party marketing units, saving operational review hours and maintaining elite presentation." },
      { n: "02", t: " How HEIKARO Approaches It", d: "We document layout rules, color boundaries, and system restrictions in an interactive Digital Brand Handbook. This centralized operating manual ensures internal teams and external designers implement consistent assets without visual drift." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Layout & Element Restrictions Logging</li>
        <li>Digital Assets Folder Cleansing</li>
        <li>Live Stylebook Compilation</li>
        <li>Internal Scaling Training</li>
       </ul>
    ) },
     { n: "04", t: "/ Outcomes & Use Cases", d: "Allows rapid market scaling across regional divisions. An essential framework for franchise systems, corporate expansions, or decentralized content pipelines." },

    ]
  },
  {
    id: "s5",
    chapter: "CHAPTER 05 // SYSTEM MATURATION & RE-ENGAGEMENT",
    title: "Rebranding & Brand Refresh",
    desc: " Injecting structured, modern aesthetic value into established enterprises. We perform thorough Equity Audits to isolate, protect, and evolve highly recognized brand assets, maintaining audience trust while correcting outdated visual elements or corporate message styles.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: "Restores modern relevance for legacy operations. Addresses stagnant growth trends and visual drift, updating old styles to align with modern buyer psychologies." },
      { n: "02", t: " How HEIKARO Approaches It", d: "We execute deep equity audits to preserve highly recognized visual assets while modernizing stagnant elements. Our transition blueprints protect established customer recognition and reclaim modern relevance in active target segments." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Recognition Audit & Legacy Logging</li>
        <li>Friction Evaluation & Pain Spot Mapping</li>
        <li>Visual Direction Tuning</li>
        <li>Evolutionary Delivery Runs</li>
       </ul>
    ) },
     { n: "04", t: "/ Outcomes & Use Cases", d: "Prevents customer drop-offs while dramatically improving market positioning. Vital for corporate acquisitions, generational leadership shifts, or legacy pivots." },

    ]
  },
  {
    id: "s6",
    chapter: "CHAPTER 06 // PHYSICAL EMBODIMENT & UNBOXING UX",
    title: "Packaging & Product Branding",
    desc: "Building premium product shelf presence and unforgettable unboxing moments. We merge spatial physical designs with classic structural grids, selecting elite material profiles, structural box folds, and clean tactile graphics to turn product handovers into premium experiences.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: "Drives dynamic organic sharing. Premium tactile packaging builds strong dopamine anchors during unboxing, encouraging free social media sharing and boosting retention." },
      { n: "02", t: " How HEIKARO Approaches It", d: "We merge structural box-fold maps with elegant graphics to shape high-impact tactile experiences. By exploring premium materials and print specs, we turn standard packaging into permanent customer emotional connections." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Unboxing Experience Storyboarding</li>
        <li> Structural Box-fold Engineering</li>
        <li> Sensory Material Sourcing</li>
        <li> Press-ready Layout Finalization</li>
       </ul>
    ) },
     { n: "04", t: "/ Outcomes & Use Cases", d: " Dramatically elevates perceived retail and e-commerce cart values. Suited for premium cosmetics, designer accessories, technology modules, and limited-run collector packaging." },

    ]
  },
  // كرري هذا لـ 6 أقسام
];
  const [badgeIndex, setBadgeIndex] = useState(0);

  const gradients = [
    "linear-gradient(90deg, #fff 0%, #007bff 50%, #ffd700 100%)",
    "linear-gradient(90deg, #ffd700 0%, #fff 50%, #007bff 100%)",
    "linear-gradient(90deg, #007bff 0%, #ffd700 50%, #fff 100%)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex(i => (i + 1) % gradients.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!service) return (
    <div style={{ minHeight: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", color: "#fff" }}>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>Service not found</p>
        <Link to="/services" style={{ color: "#007bff", fontSize: 13 }}>← Back to Services</Link>
      </div>
    </div>
  );
  

  return (
    <div className="service-detail-page">
      <div className="site-container">

      {/* Breadcrumb */}
      <div className="sd-breadcrumb">
        <Link to="/" className="sd-crumb">🏠 HOME</Link>
        <span className="sd-crumb-sep">›</span>
        <Link to="/services" className="sd-crumb">SERVICES</Link>
        <span className="sd-crumb-sep">›</span>
        <span className="sd-crumb active">{service.title.replace("\n", " ")}</span>
      </div>

      {/* Hero */}
      <section className="sd-hero" style={{
        backgroundImage: `url(${service.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="sd-hero-overlay" />
        <div className="sd-hero-content">
          <div className="sd-badge">
          <span className="sd-badge-static">SERVICE {service.id} // </span>
          <span className="sd-badge-gradient">
            {service.track}
          </span>
        </div>
          <h1 className="sd-title">
            {service.title.split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p className="sd-desc-small">{service.description.slice(0, 120)}...</p>
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
          <img src={service.image} alt={service.title} className="sd-side-img" />
        </div>
      </section>
      <section className="second-section">
      {/* عنوان القسم */}
      <div className="section-header">
        <span className="section-label">EROSION OF DIFFERENTIATION</span>
        <h2 className="section-title">Why Most Brands Look Similar</h2>
        <p className="section-description">
          When a brand has no strategy-centered design guidelines, every asset deployment restarts from zero. 
          Flat templated brands dissolve in aggressive scaling stages:
        </p>
      </div>

      {/* شبكة المربعات (4 أعمدة × 2 صفوف) */}
      <div className="pillars-grid">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="pillar-card">
            <span className="pillar-number">0{i + 1}</span>
            <p className="pillar-text">
              The brand has a logo but no clear positioning background or rationale.
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
      // الربط يتم عبر الـ ID المسمى section-cap-01 وهكذا
      <a href={`#section-cap-0${i + 1}`} key={i} className="capability-card">
        <span className="card-number">0{i + 1}</span>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.desc}</p>
        <div className="card-divider"></div>
        <span className="card-footer">{item.footer}</span>
      </a>
    ))}
  </div>
</section>
    {ALL_SECTIONS_DATA.map((section, index) => (
  /* هنا التعديل: سنضع الـ id ليطابق ما كتبناه في الرابط (section-cap-01, 02...) 
     استخدمنا (index + 1) ليكون الترقيم ديناميكياً (1, 2, 3...)
  */
  <section key={section.id} id={`section-cap-0${index + 1}`} className="detail-section">
    <div className="section-container">
      
      {/* العنوان الرئيسي يظهر فقط في أول قسم */}
      {index === 0 && (
        <>
          <span className="deep-label">DEEP ARCHITECTURAL CAPABILITIES</span>
          <h1 className="main-detail-title">Capabilities In Detail</h1>
        </>
      )}

      <div className="main-detail-card">
        <div className="content-layout">
          <div className="text-side">
            <span className="chapter-label">{section.chapter}</span>
            <h2 className="detail-title">{section.title}</h2>
            <p className="detail-desc">{section.desc}</p>

            <div className="grid-2x2">
              {section.items.map((item, i) => (
                <div key={i} className="small-card">
                  <span className="item-number">{item.n} // {item.t}</span>
                  <div className="item-desc">{item.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="image-side">
            <img src={section.img} alt={section.title} />
          </div>
        </div>
      </div>
    </div>
  </section>
))}
<section className="operational-section">
  <div className="section-container">
    {/* عنوان السيكشن */}
    <div className="operational-header">
      <span className="section-label">OPERATIONAL METHODOLOGY</span>
      <h2 className="section-title">Our 8-Step Brand & Identity Systems Framework</h2>
      <p className="section-description">
        We deploy creative projects according to a rigorous scientific roadmap to ensure 
        strategic purpose underpins every single graphic element.
      </p>
    </div>

    {/* الشبكة (4 أعمدة × 2 صف) */}
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
      
      {/* جهة اليسار: النص */}
      <div className="text-side">
        <span className="section-label">ANATOMY OF A MARKET LEADER</span>
        <h2 className="section-title">What A Complete Brand System Includes</h2>
        <p className="section-description">
          Branding is not a file package. It is an operating standard. 
          We develop each component as an interactive variable, 
          engineered to work synchronously across the enterprise runtime.
        </p>
      </div>

      {/* جهة اليمين: المصفوفات (4x4) */}
      <div className="grid-side">
        {["Brand Purpose", "Audience Definition", "Market Positioning", "Competitive Differentiation", 
          "Brand Promise", "Brand Personality", "Naming System", "Messaging Framework",
          "Tone of Voice", "Logo System", "Color Palette", "Typography",
          "Visual Language", "Imagery Direction", "Layout Rules", "Brand Applications", "Packaging System", "Brand Guidelines", "Governance Rules", "Template System"].map((item, i) => (
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
      
      {/* جهة اليسار: النص */}
      <div className="text-side">
        <span className="section-label">DESIGN LOGIC & MARKET PEDIGREE</span>
        <h2 className="section-title">Elite Creative Grounded In Pure Strategic Purpose</h2>
        <p className="section-description">
          Beautiful graphics without strategy are empty assets. Similarly, extensive strategy slide-decks lacking visual taste look clinical and fail to align with premium customer lifestyles.
        </p>
        <p className="section-description">
          HEIKARO bridges this aesthetic discrepancy. We are a consolidated, design-first brand engine. Our strategist-designers work synchronously inside single unified conceptual pods, ensuring every grid layout, curve, message, and dieline traces natively to your corporate margins and target audience metrics.
        </p>
      </div>

      {/* جهة اليمين: الـ 4 كروت */}
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
          <span className="section-label" style={{ color: "#aaff00" }}>FAQS</span>
          <h2 className="section-title">Got Questions? We Have Answers.</h2>
          <p className="section-description">
            Got questions about positioning logic, asset licensing rules, or transition workflows? Discover details here, or reach out for custom scoping.  
          </p>
        </div>

        <div className="faq-side">
          {faqData.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "active" : ""}`}>
              <div className="faq-header" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <h3>{item.q}</h3>
                <span className="faq-arrow">{openIndex === i ? "−" : "+"}</span>
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
    <p className="hero-description" style={{ color: "#888", maxWidth: "600px", margin: "0 auto" }}>
      Book an identity strategy exploration. Our team will audit your current positioning baseline and design a custom structural brand rollout path.
    </p>
    
   <div className="hero-buttons">
      {/* الزر الأول: للـ Contact مع تغيير اللون */}
      <button 
        className={`custom-btn ${isActive ? "active" : ""}`} 
        onClick={() => {
          setIsActive(true); 
          setTimeout(() => {
            window.location.href = "/contact";
          }, 200); // تأخير بسيط جداً ليظهر اللون الأزرق قبل الانتقال
        }}
      >
        REQUEST BRAND SCOPING →
      </button>

      {/* الزر الثاني: للـ Services */}
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