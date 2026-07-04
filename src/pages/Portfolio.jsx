import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Portfolio.css";
import "./style/pageHero.css";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import EngineerYourMarket from "../components/common/ENGINEER_YOUR_MARKET";

const API = "https://api.heikaro.com";
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
  IDENTITY: "Brand&Identity",
  "UX/UI": "Design&Experience",
  CONTENT: "Content&Storytelling",
  GROWTH: "Marketing&Growth",
  FILM: "Media&Production",
  "AI/CGI": "AI&CGI",
  EVENTS: "Events&Experiential",
  LEARNING: "DigitalLearning",
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
    <div className="portfolio-page overflow-x-hidden">
      <section
        className="unified-page-hero"
        style={{ "--hero-bg": "url('/images/Portfolio/COVER.jpg')" }}
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

      <section className="portfolio-filter-section">
        <div className="portfolio-filter-container">
          <div className="portfolio-filter-layout">
            {/* Filters */}
            <div className="portfolio-filter-left">
              <div className="portfolio-filter-mobile-label">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                Filter by system
              </div>

              <div className="portfolio-filter-row">
                <div className="portfolio-filter-icon">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                </div>

                <div className="portfolio-filter-scroll">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      className={`portfolio-filter-chip ${
                        activeFilter === filter ? "active" : ""
                      }`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="portfolio-search-box-new">
              <div className="portfolio-search-inner">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="portfolio-search-icon"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>

                <input
                  type="text"
                  placeholder="SEARCH PROJECTS..."
                  className="portfolio-search-input-new"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                {search && (
                  <button
                    type="button"
                    className="portfolio-search-clear"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
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
