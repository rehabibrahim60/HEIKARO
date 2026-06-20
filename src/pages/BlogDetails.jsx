import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API = "http://localhost:3000";

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMediaUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${API}${url}`;
  };

  const estimateReadTime = () => {
    const allText = [
      blog?.description || "",
      ...(blog?.content || [])
        .filter((block) => block.type === "text")
        .map((block) => block.text?.replace(/<[^>]+>/g, "") || ""),
    ].join(" ");

    const words = allText.split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 180))} MIN READ`;
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied");
  };

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const res = await fetch(`${API}/blogs/${slug}`);
        const data = await res.json();
        setBlog(data.data);
      } catch (error) {
        console.error("Failed to load blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading article...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <p className="text-gray-400 mb-4">Blog not found.</p>
        <Link to="/blogs" className="text-blue-500">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const sortedContent = [...(blog.content || [])].sort(
    (a, b) => a.order - b.order
  );

  const firstTextIndex = sortedContent.findIndex((block) => block.type === "text");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Details */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pt-20 pb-20">
        {/* Cover image as faint background */}
        {blog.coverImage && (
          <img
            src={getMediaUrl(blog.coverImage)}
            alt={blog.title}
            className="absolute right-20 top-1/2 -translate-y-1/2 w-[420px] h-[320px] object-cover opacity-10 grayscale pointer-events-none"
          />
        )}

        <div className="relative z-10 max-w-[1500px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm font-black tracking-[0.22em] uppercase mb-12">
            <Link to="/" className="hover:text-white">HOME</Link>
            <span>›</span>
            <Link to="/blogs" className="hover:text-white">THE JOURNAL</Link>
            <span>›</span>
            <span className="text-white">{blog.title}</span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-8 mb-8">
            <span className="bg-blue-600 text-white px-4 py-2 text-sm font-black uppercase tracking-[0.12em] rounded">
              {blog.category}
            </span>

            <span className="text-gray-400 font-black uppercase tracking-[0.12em]">
              ◷ {estimateReadTime()}
            </span>

            <span className="text-gray-400 font-black uppercase tracking-[0.12em]">
              ♙ HEIKARO TEAM
            </span>
          </div>

          {/* Big Title */}
          <h1 className="max-w-[1050px] text-[46px] md:text-[72px] lg:text-[86px] leading-[0.92] font-black uppercase mb-10 bg-gradient-to-r from-cyan-200 via-lime-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(163,230,53,0.25)]">
            {blog.title}
          </h1>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-gray-500 font-black tracking-[0.22em] uppercase text-sm">
                SHARE INSIGHTS
              </span>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 px-5 py-3 text-xs font-black tracking-[0.16em] hover:border-blue-600 hover:text-blue-500 transition"
              >
                FACEBOOK
              </a>

              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 px-5 py-3 text-xs font-black tracking-[0.16em] hover:border-blue-600 hover:text-blue-500 transition"
              >
                LINKEDIN
              </a>

              <button
                onClick={copyLink}
                className="border border-white/10 px-5 py-3 text-xs font-black tracking-[0.16em] hover:border-blue-600 hover:text-blue-500 transition"
              >
                COPY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
          {blog.description && (
            <div className="border-l-4 border-lime-300 pl-8 mb-16">
              <p className="text-3xl md:text-4xl leading-[1.45] text-gray-200">
                {blog.description}
              </p>
            </div>
          )}

          {sortedContent.map((block, index) => (
            <div key={index}>
              {block.type === "text" && (
                <div
                  className={`text-gray-300 leading-9 ${
                    index === firstTextIndex
                      ? "text-xl md:text-2xl"
                      : "text-lg"
                  }`}
                  dangerouslySetInnerHTML={{ __html: block.text }}
                />
              )}

              {block.type === "image" && block.image?.url && (
                <div className="my-14">
                  <img
                    src={getMediaUrl(block.image.url)}
                    alt={block.image.alt || ""}
                    className="w-full rounded-none border border-white/10 object-cover"
                  />
                  {block.image.caption && (
                    <p className="text-gray-500 text-sm mt-3">
                      {block.image.caption}
                    </p>
                  )}
                </div>
              )}

              {block.type === "video" && block.video?.url && (
                <div className="my-14">
                  <video controls className="w-full border border-white/10">
                    <source src={getMediaUrl(block.video.url)} />
                  </video>
                  {block.video.caption && (
                    <p className="text-gray-500 text-sm mt-3">
                      {block.video.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}