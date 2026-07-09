import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import "./style/pageHero.css";

const API = "https://api.heikaro.com";
const BLOGS_PER_PAGE = 9;

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { label: "All", value: "All" },
    { label: "Brand & Identity", value: "Brand&Identity" },
    { label: "Branding", value: "Branding" },
    { label: "Design & Experience", value: "Design&Experience" },
    { label: "Content & Storytelling", value: "Content&Storytelling" },
    { label: "Marketing & Growth", value: "Marketing&Growth" },
    { label: "Media & Production", value: "Media&Production" },
    { label: "AI & CGI", value: "AI&CGI" },
    { label: "Events & Experiential", value: "Events&Experiential" },
  ];

  const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${API}${url}`;
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, search]);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);

        const params = new URLSearchParams();

        if (selectedCategory !== "All") {
          params.append("category", selectedCategory);
        }

        if (search.trim()) {
          params.append("search", search.trim());
        }

        const res = await fetch(`${API}/blogs?${params.toString()}`);
        const data = await res.json();
        setBlogs(data.data || []);
      } catch (error) {
        console.error("Failed to load blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [selectedCategory, search]);

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  };

  const estimateReadTime = (text = "") => {
    const words = text.split(" ").filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 180));
    return `${minutes} min read`;
  };

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-[16px] font-extrabold tracking-[0.12em] uppercase">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="blog-page min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="unified-page-hero"
        style={{ "--hero-bg": "url('/images/Blog/COVER.jpg')" }}
      >
        <div className="unified-page-hero-content">
          <h1 className="unified-page-title">
            THE <br />
            JOURNAL
          </h1>

          <p className="unified-page-desc">
            — Insights, ideas, and creative systems from the HEIKARO operating
            system.
          </p>
        </div>
      </section>

      {/* Filters + Search */}
      {/* Filters + Search */}
      <section className="blog-filter-section bg-[#050505] border-y border-white/10 px-4 py-5 sm:px-6 lg:px-[8%]">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Categories */}
            <div className="min-w-0 flex-1">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-gray-500 lg:hidden">
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
                Filter by topic
              </div>

              <div className="flex items-start gap-4">
                <div className="hidden pt-2 text-gray-500 lg:block">
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

                <div className="blog-category-scroll -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:flex-wrap lg:overflow-visible lg:pb-0">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`shrink-0 border px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.14em] transition-all sm:text-[11px] ${
                        selectedCategory === cat.value
                          ? "border-[#0f33fe] bg-[#0f33fe] text-white shadow-[0_0_22px_rgba(15,51,254,0.25)]"
                          : "border-white/10 bg-white/[0.035] text-gray-400 hover:border-[#0f33fe] hover:text-white"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="w-full lg:w-[330px] lg:shrink-0">
              <div className="flex h-[46px] items-center gap-3 border border-white/10 bg-white/[0.035] px-4 transition-colors focus-within:border-[#0f33fe]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 text-gray-500"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="SEARCH INSIGHTS..."
                  className="w-full bg-transparent text-[11px] font-black uppercase tracking-[0.13em] text-gray-300 outline-none placeholder:text-gray-600"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="shrink-0 text-[14px] font-black text-gray-500 transition-colors hover:text-white"
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

      {/* Blogs Grid */}
      <section className="blog-grid-section bg-black px-4 py-16 sm:px-6 lg:px-[8%] lg:py-20">
        <div className="max-w-[1500px] mx-auto">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-400 py-20 text-[16px] leading-[1.8]">
              No blogs found.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {currentBlogs.map((blog) => (
                  <Link
                    to={`/blogs/${blog.slug}`}
                    key={blog._id}
className="blog-card group border border-white/10 bg-black hover:bg-[#050505] transition-all"                  >
                    {/* Image */}
                    <div className="relative h-[210px] overflow-hidden border-b border-white/10 bg-[#080808] sm:h-[240px] lg:h-[280px]">
                      <img
                        src={getImageUrl(blog.coverImage)}
                        alt={blog.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />

                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all"></div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 lg:p-7">
                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-gray-500 text-[12px] mb-6 font-mono">
                        <span className="flex items-center gap-2">
                          <span>▦</span>
                          {formatDate(blog.publishedAt || blog.createdAt)}
                        </span>

                        <span className="flex items-center gap-2">
                          <span>◷</span>
                          {estimateReadTime(blog.description)}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-white text-[22px] md:text-[26px] leading-[1.15] font-black uppercase mb-5 tracking-[-0.03em] group-hover:text-[#0f33fe] transition-colors">
                        {blog.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-400 text-[15px] leading-[1.8] min-h-[92px]">
                        {blog.description}
                      </p>

                      {/* Footer */}
                      <div className="mt-9 pt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white font-black text-[12px] tracking-[0.16em]">
                          <span className="text-[#0f33fe]">♙</span>
                          MORE DETAILS
                        </div>

                        <span className="text-[#0f33fe] text-2xl group-hover:translate-x-2 transition-transform">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2 mt-12 px-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`px-4 py-3 border text-[12px] font-black tracking-[0.14em] uppercase transition-all ${
                      currentPage === 1
                        ? "border-[#1f1f1f] text-gray-700 cursor-not-allowed"
                        : "border-[#2a2a2a] text-gray-400 hover:border-[#0f33fe] hover:text-[#0f33fe]"
                    }`}
                  >
                    Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-11 h-11 border text-[13px] font-black transition-all ${
                        currentPage === index + 1
                          ? "bg-[#0f33fe] border-[#0f33fe] text-white"
                          : "bg-[#111] border-[#2a2a2a] text-gray-400 hover:border-[#0f33fe] hover:text-[#0f33fe]"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`px-4 py-3 border text-[12px] font-black tracking-[0.14em] uppercase transition-all ${
                      currentPage === totalPages
                        ? "border-[#1f1f1f] text-gray-700 cursor-not-allowed"
                        : "border-[#2a2a2a] text-gray-400 hover:border-[#0f33fe] hover:text-[#0f33fe]"
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <style>{`
  .blog-page {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
    .blog-card {
  min-width: 0;
  overflow: hidden;
}

.blog-card h2 {
  max-width: 100%;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.blog-card p {
  max-width: 100%;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

  .blog-page,
  .blog-page * {
    box-sizing: border-box;
  }

  .blog-page img {
    max-width: 100%;
    display: block;
  }

  .blog-page .grid {
    min-width: 0;
  }

  @media (max-width: 768px) {
    .blog-page section:not(.unified-page-hero) {
      padding-left: 18px !important;
      padding-right: 18px !important;
    }

    .blog-page .unified-page-title {
      font-size: clamp(42px, 14vw, 64px) !important;
      line-height: 0.95 !important;
    }

    .blog-page .unified-page-desc {
      font-size: 15px !important;
      line-height: 1.8 !important;
      max-width: 100% !important;
    }

    .blog-page h2 {
      font-size: 20px !important;
      line-height: 1.2 !important;
    }

    .blog-page p {
      font-size: 14px !important;
      line-height: 1.75 !important;
      overflow-wrap: anywhere;
    }

    .blog-page button,
    .blog-page input,
    .blog-page a {
      max-width: 100%;
    }

    .blog-page button {
      font-size: 10px !important;
      letter-spacing: 1.1px !important;
    }

    .blog-page input {
      font-size: 10px !important;
      letter-spacing: 1px !important;
    }

    .blog-page .min-h-\\[92px\\] {
      min-height: auto !important;
    }

    .blog-page .tracking-\\[0\\.16em\\],
    .blog-page .tracking-\\[0\\.15em\\],
    .blog-page .tracking-\\[0\\.14em\\],
    .blog-page .tracking-\\[0\\.13em\\] {
      letter-spacing: 1.2px !important;
    }
  }

  @media (max-width: 420px) {
    .blog-page section:not(.unified-page-hero) {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }

    .blog-page .unified-page-title {
      font-size: 42px !important;
    }

    .blog-page h2 {
      font-size: 19px !important;
    }

    .blog-page p {
      font-size: 13.5px !important;
    }
  }

  .blog-category-scroll {
    scrollbar-width: none;
  }

  .blog-category-scroll::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    .blog-filter-section {
      position: relative;
      z-index: 5;
    }

    .blog-category-scroll {
      scroll-snap-type: x mandatory;
    }

    .blog-category-scroll button {
      scroll-snap-align: start;
      border-radius: 0;
      min-height: 38px;
    }
  }
`}</style>

      <StartWithClarity />
    </div>
  );
}
