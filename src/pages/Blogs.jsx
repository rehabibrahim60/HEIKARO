import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StartWithClarity from "../components/common/START_WITH_CLARITY";

const API = "http://localhost:3000";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

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
    const loadBlogs = async () => {
      try {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading blogs...
      </div>
    );
  }

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  };

  const estimateReadTime = (text = "") => {
    const words = text.split(" ").length;
    const minutes = Math.max(1, Math.ceil(words / 180));
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <section
          className="relative min-h-[520px] flex items-center border-b border-white/10 overflow-hidden"
          style={{
            backgroundImage: "url('hero-bg.jpg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/75"></div>

          {/* Soft Blue Glow */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#0f33fe]/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="pl-4 md:pl-8 -mt-36 md:-mt-48">
              <h1 className="text-[150px] md:text-[280px] lg:text-[600px] leading-[0.68] font-black tracking-tight text-[#0f33fe] drop-shadow-[0_0_40px_rgba(15,51,254,0.75)]">
                THE
                <br />
                JOURNAL
              </h1>
            </div>

            <div className="md:pt-28 md:-ml-90">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                — Insights, ideas, and creative systems from the HEIKARO operating
                system.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#080808] border-y border-white/10 px-6 py-6">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex flex-col xl:flex-row gap-8 justify-between items-start">

              {/* Filters */}
              <div className="flex gap-5 items-start flex-1">
                <div className="pt-2 text-gray-500 shrink-0">
                  <svg
                    width="22"
                    height="22"
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

                <div className="flex flex-wrap gap-3 max-w-[950px]">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-6 py-3 text-[13px] font-black tracking-[0.18em] uppercase transition-all border ${
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
              <div className="w-full xl:w-[330px] shrink-0">
                <div className="flex items-center gap-4 bg-[#151515] border border-[#2a2a2a] px-5 py-3">
                  <svg
                    width="20"
                    height="20"
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
                    className="w-full bg-transparent text-gray-300 placeholder-gray-500 font-black tracking-[0.14em] text-[13px] outline-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-black px-6 pb-24">
          <div className="max-w-[1500px] mx-auto">
            {blogs.length === 0 ? (
              <p className="text-center text-gray-400 py-20">No blogs found.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
                {blogs.map((blog) => (
                  <Link
                    to={`/blogs/${blog.slug}`}
                    key={blog._id}
                    className="group border-r border-b border-white/10 bg-black hover:bg-[#050505] transition-all"
                  >
                    {/* Image */}
                    <div className="relative h-[300px] overflow-hidden border-b border-white/10 bg-[#080808]">
                      <img
                        src={getImageUrl(blog.coverImage)}
                        alt={blog.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />

                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Meta */}
                      <div className="flex items-center gap-5 text-gray-500 text-xs mb-7 font-mono">
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
                      <h2 className="text-white text-2xl md:text-[28px] leading-[1.05] font-black uppercase mb-6 group-hover:text-[#0f33fe] transition-colors">
                        {blog.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-400 text-base leading-7 min-h-[90px]">
                        {blog.description}
                      </p>

                      {/* Footer */}
                      <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white font-black text-sm tracking-[0.18em]">
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
            )}
          </div>
        </section>
      </div>
            <StartWithClarity />

    </div>
  );
}
