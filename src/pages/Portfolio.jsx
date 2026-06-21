import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Portfolio.css";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import EngineerYourMarket from "../components/common/ENGINEER_YOUR_MARKET";

const API = "http://localhost:3000";

const filters = [
  "ALL SYSTEMS",
  "IDENTITY",
  "UX/UI",
  "CONTENT",
  "GROWTH",
  "FILM",
  "LEARNING",
  "AI/CGI",
  "EVENTS",
];

const categoryMap = {
  IDENTITY: "Brand & Identity",
  "UX/UI": "Design & Experience",
  CONTENT: "Content & Storytelling",
  GROWTH: "Marketing & Growth",
  FILM: "Media & Production",
  "AI/CGI": "AI & CGI",
  EVENTS: "Events & Experiential",
  LEARNING: "Digital Learning",
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("ALL SYSTEMS");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${API}${url}`;
  };

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);

        const buildUrl = (categoryValue) => {
          const params = new URLSearchParams();

          if (categoryValue) {
            params.append("category", categoryValue);
          }

          if (search.trim()) {
            params.append("search", search.trim());
          }

          params.append("limit", "100");

          return `${API}/projects?${params.toString()}`;
        };

        let url;

        if (activeFilter === "ALL SYSTEMS") {
          url = buildUrl(null);
        } else {
          url = buildUrl(categoryMap[activeFilter] || activeFilter);
        }

        let res = await fetch(url, {
          cache: "no-store",
        });

        let data = await res.json();

        if (!res.ok) {
          throw new Error(data?.message || "Failed to load projects");
        }

        /*
          Fallback:
          لو بعتنا Brand & Identity ومرجعش حاجة،
          نجرب نبعت IDENTITY مباشرة،
          عشان لو الداتا في MongoDB متسجلة بالاسم المختصر.
        */
        if (
          activeFilter !== "ALL SYSTEMS" &&
          (data.data || []).length === 0 &&
          categoryMap[activeFilter]
        ) {
          const fallbackUrl = buildUrl(activeFilter);

          res = await fetch(fallbackUrl, {
            cache: "no-store",
          });

          data = await res.json();

          if (!res.ok) {
            throw new Error(data?.message || "Failed to load projects");
          }
        }

        setProjects(data.data || []);
      } catch (error) {
        console.error("Failed to load projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [activeFilter, search]);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="hero-content">
          <span className="proof-tag">PROOF SYSTEM</span>
          <h1>THE PORTFOLIO</h1>
          <p className="portfolio-desc">
            Selected work, visual systems, campaigns, and creative case studies.
          </p>
        </div>
      </section>

      <section className="filter-bar">
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="SEARCH PROJECTS..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className="projects-grid">
        {loading ? (
          <p className="text-center text-gray-400 py-20">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No projects found.</p>
        ) : (
          projects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project._id}
              className="project-card"
            >
              <div className="project-img-wrapper">
                {project.coverImage ? (
                  <img
                    src={getImageUrl(project.coverImage)}
                    alt={project.title}
                    className="project-img"
                  />
                ) : (
                  <span className="asset-text">HEIKARO ASSET</span>
                )}
              </div>

              <div className="project-info">
                <span className="project-cat">{project.category}</span>
                <h3>{project.title}</h3>

                {project.description && (
                  <p className="project-desc">{project.description}</p>
                )}
              </div>
            </Link>
          ))
        )}
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>LOOKING FOR DEEP-LAYER CASES?</h2>
          <p>
            BECAUSE WE WORK AT THE CORE ORGANIZATIONAL LEVEL, SOME OF OUR MOST
            IMPACTFUL STRATEGIC DIAGNOSTIC AND AI IMPLEMENTATION CASES ARE UNDER
            STRICT NDA.
          </p>
          <button className="cta-button" type="button">
            REQUEST CASE STUDY PACK <span>→</span>
          </button>
        </div>
      </section>

      <EngineerYourMarket />
      <StartWithClarity />
    </div>
  );
};

export default Portfolio;