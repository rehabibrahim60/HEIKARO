import React, { useState } from "react";
import "./Portfolio.css";



const Portfolio = () => {
  // --- ضيفي المنطق ده هنا (جوه الكومبوننت وقبل الـ return) ---
  const [activeFilter, setActiveFilter] = useState("ALL SYSTEMS");

  const filters = ["ALL SYSTEMS", "IDENTITY", "UX/UI", "CONTENT", "GROWTH", "FILM", "LEARNING", "AI/CGI", "EVENTS"];
  
  // داتا المشاريع (هنا بنحدد 20 مشروع ثابتين بدل العشوائي)
  const projects = [
    { id: 1, title: "Brand & Identity", description: " Global BrandArchitecture Evolution",category: "IDENTITY" },

    { id: 2, title: "Design & Experience", description: " Enterprise SaaSPerformance Portal", category: "UX/UI" },

    { id: 3, title: "Marketing & Growth", description: "D2C MarketDominance Campaign", category: "GROWTH" },

    { id: 4, title: "AI-Powered Video & CGI", description: "AI Synthesis &Future Film Production", category:"AI/CGI" },

    { id: 5, title: "Brand & Identity", description: "Project Name05", category: "IDENTITY" },

    { id: 6, title: "Design & Experience",  description: "Project Name06",category: "UX/UI" },


    { id: 7, title: "Content & Storytelling",  description: "Project Name07",category: "CONTENT" },


    { id: 8, title: "Marketing & Growth",  description: "Project Name08",category: "GROWTH" },

    { id: 9, title: " Media & Production",  description: "Project Name09",category: "FILM" },

    { id: 10, title: "Brand & Identity",  description: "Project Name10",category: "IDENTITY " },

    { id: 11, title: "Design & Experience",  description: "Project Name11",category: "UX/UI" },

    { id: 12, title: "Content & Storytelling",  description: "Project Name12",category: "CONTENT" },

    { id: 13, title: "Marketing & Growth", description: "Project Name13", category: "GROWTH" },

    { id: 14, title: "Media & Production", description: "Project Name14", category:"FILM" },

    { id: 15, title: " Brand & Identity", description: "Project Name15", category: "IDENTITY" },

    { id: 16, title: "Design & Experience",  description: " Project Name16",category: "UX/UI" },

    { id: 17, title: "Content & Storytelling", description: " Project Name17", category: "CONTENT" },
    { id: 18, title: "Marketing & Growth", description: "Project Name18", category: "GROWTH" },
    { id: 19, title: "Media & Production", description: " Project Name19", category: "FILM" },

    { id: 20, title: "Brand & Identity", description: " Project Name20", category: "IDENTITY" },
  ];



  const filteredProjects = activeFilter === "ALL SYSTEMS" 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter)); 
    
  // -----------------------------------------------------------

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="hero-content">
          <span className="proof-tag">PROOF SYSTEM</span>
          <h1>THE PORTFOLIO</h1>
          <p className="portfolio-desc">Selected work, visual systems, campaigns, and creative case studies.</p>
        </div>
      </section>

      <section className="filter-bar">
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <input type="text" placeholder="SEARCH PROJECTS..." className="search-input" />
      </section>

      {/* هنا بنعرض المشاريع اللي تم تصفيتها */}
  <section className="projects-grid">
  {filteredProjects.map((project) => (
    <div key={project.id} className="project-card">
      <div className="project-img-wrapper">
        <span className="asset-text">HEIKARO ASSET</span>
      </div>
      <div className="project-info">
        <span className="project-cat">{project.category}</span>
        <h3>{project.title}</h3>
        
        {/* أضيفي هذا السطر هنا ليظهر الوصف */}
        {project.description && <p className="project-desc">{project.description}</p>}
      </div>
    </div>
  ))}
</section>
      <section className="cta-section">
  <div className="cta-content">
    <h2>LOOKING FOR DEEP-LAYER CASES?</h2>
    <p>
      BECAUSE WE WORK AT THE CORE ORGANIZATIONAL LEVEL, SOME OF OUR MOST 
      IMPACTFUL STRATEGIC DIAGNOSTIC AND AI IMPLEMENTATION CASES ARE UNDER STRICT NDA.
    </p>
    <button className="cta-button">
      REQUEST CASE STUDY PACK <span>→</span>
    </button>
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
    </div>
    
  );
};

export default Portfolio;