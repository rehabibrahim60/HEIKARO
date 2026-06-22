import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import "./style/pageHero.css";

const API = "http://localhost:3000";
const BLOGS_PER_PAGE = 9;

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All",
    "Brand & Identity",
    "Branding",
    "Design & Experience",
    "Content & Storytelling",
    "Marketing & Growth",
    "Media & Production",
    "AI & CGI",
    "Events & Experiential",
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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section
          className="unified-page-hero"
          style={{ "--hero-bg": "url('/hero-bg.jpg.jpeg')" }}
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
        <section className="bg-[#080808] border-y border-white/10 px-4 py-4">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-5 justify-between items-start lg:items-center">
              {/* Filters */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <div className="pt-2 text-gray-500 shrink-0">
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
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                </div>

                <div className="flex flex-wrap gap-2 max-w-[980px]">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 text-[11px] font-black tracking-[0.15em] uppercase transition-all border whitespace-nowrap ${
                        selectedCategory === cat
                          ? "bg-[#0f33fe] text-white border-[#0f33fe]"
                          : "bg-[#151515] text-gray-400 border-[#242424] hover:text-white hover:border-[#0f33fe]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="w-full lg:w-[280px] shrink-0">
                <div className="flex items-center gap-3 bg-[#151515] border border-[#2a2a2a] px-4 py-2.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-500 shrink-0"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="SEARCH INSIGHTS..."
                    className="w-full bg-transparent text-gray-300 placeholder-gray-500 font-black tracking-[0.13em] text-[11px] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="bg-black px-6 pb-30">
          <div className="max-w-[1500px] mx-auto">
            {blogs.length === 0 ? (
              <p className="text-center text-gray-400 py-20 text-[16px] leading-[1.8]">
                No blogs found.
              </p>
            ) : (
              <>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentBlogs.map((blog) => (
                    <Link
                      to={`/blogs/${blog.slug}`}
                      key={blog._id}
className="group border border-white/10 bg-black hover:bg-[#050505] transition-all"                    >
                      {/* Image */}
                      <div className="relative h-[280px] overflow-hidden border-b border-white/10 bg-[#080808]">
                        <img
                          src={getImageUrl(blog.coverImage)}
                          alt={blog.title}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />

                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all"></div>
                      </div>

                      {/* Content */}
                      <div className="p-7">
                        {/* Meta */}
                        <div className="flex items-center gap-5 text-gray-500 text-[12px] mb-6 font-mono">
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
                  <div className="flex items-center justify-center gap-2 mt-12">
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
                        setCurrentPage((prev) =>
                          Math.min(prev + 1, totalPages)
                        )
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
      </div>

      <StartWithClarity />
    </div>
  );
}