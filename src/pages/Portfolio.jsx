import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Portfolio.css";
import "./style/pageHero.css";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import EngineerYourMarket from "../components/common/ENGINEER_YOUR_MARKET";

const API = "http://localhost:3000";
const PROJECTS_PER_PAGE = 9;

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
  const [currentPage, setCurrentPage] = useState(1);

  const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${API}${url}`;
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, search]);

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

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  return (
    <div className="portfolio-page">
      <section
        className="unified-page-hero"
        style={{ "--hero-bg": "url('/hero-bg.jpg.jpeg')" }}
      >
        <div className="unified-page-hero-content">
          <h1 className="unified-page-title">
            THE <br />
            PORTFOLIO
          </h1>

          <p className="unified-page-desc">
            — Selected work, visual systems, campaigns, and creative case
            studies.
          </p>
        </div>
      </section>

      <section className="portfolio-blog-filter-wrap">
        <div className="portfolio-blog-filter-inner">
          <div className="portfolio-blog-filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`portfolio-blog-filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-blog-search-box">
            <input
              type="text"
              placeholder="SEARCH PROJECTS..."
              className="portfolio-blog-search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="projects-grid">
        {loading ? (
          <p className="portfolio-message">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="portfolio-message">No projects found.</p>
        ) : (
          <>
            {currentProjects.map((project) => (
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
            ))}

            {totalPages > 1 && (
              <div className="portfolio-pagination">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="portfolio-pagination-btn"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    type="button"
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`portfolio-pagination-number ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="portfolio-pagination-btn"
                >
                  Next
                </button>
              </div>
            )}
          </>
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

          <Link to="/contact" className="cta-button">
            REQUEST CASE STUDY PACK <span>→</span>
          </Link>
        </div>
      </section>

      <EngineerYourMarket />
      <StartWithClarity />
    </div>
  );
};

export default Portfolio;
