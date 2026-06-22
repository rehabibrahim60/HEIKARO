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
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-[16px]">
        Loading article...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <p className="text-gray-400 mb-4 text-[16px]">Blog not found.</p>
        <Link to="/blogs" className="text-[#0f33fe] font-extrabold">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const sortedContent = [...(blog.content || [])].sort(
    (a, b) => a.order - b.order
  );

  const firstTextIndex = sortedContent.findIndex(
    (block) => block.type === "text"
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Details */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pt-24 pb-16 md:pt-28 md:pb-20">
        {/* Cover image as faint background */}
        {blog.coverImage && (
          <img
            src={getMediaUrl(blog.coverImage)}
            alt={blog.title}
            className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 w-[300px] md:w-[420px] h-[240px] md:h-[320px] object-cover opacity-10 grayscale pointer-events-none"
          />
        )}

        <div className="relative z-10 max-w-[1500px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-3 text-gray-500 text-[12px] font-extrabold tracking-[0.18em] uppercase mb-10">
            <Link to="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>›</span>
            <Link to="/blogs" className="hover:text-white transition-colors">
              THE JOURNAL
            </Link>
            <span>›</span>
            <span className="text-white">{blog.title}</span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 md:gap-7 mb-7">
            <span className="bg-[#0f33fe] text-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.12em] rounded">
              {blog.category}
            </span>

            <span className="text-gray-400 text-[12px] md:text-[13px] font-extrabold uppercase tracking-[0.12em]">
              ◷ {estimateReadTime()}
            </span>

            <span className="text-gray-400 text-[12px] md:text-[13px] font-extrabold uppercase tracking-[0.12em]">
              ♙ HEIKARO TEAM
            </span>
          </div>

          {/* Big Title */}
          <h1 className="max-w-[1050px] text-[38px] md:text-[56px] lg:text-[68px] leading-[1.02] font-black uppercase mb-9 tracking-[-0.04em] bg-gradient-to-r from-[#0f33fe] via-[#bbfe0f] to-white bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(187,254,15,0.22)]">
            {blog.title}
          </h1>

          <div className="border-t border-white/10 pt-7">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-gray-500 font-extrabold tracking-[0.2em] uppercase text-[12px]">
                SHARE INSIGHTS
              </span>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 px-5 py-3 text-[11px] font-extrabold tracking-[0.16em] hover:border-[#0f33fe] hover:text-[#0f33fe] transition"
              >
                FACEBOOK
              </a>

              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 px-5 py-3 text-[11px] font-extrabold tracking-[0.16em] hover:border-[#0f33fe] hover:text-[#0f33fe] transition"
              >
                LINKEDIN
              </a>

              <button
                onClick={copyLink}
                className="border border-white/10 px-5 py-3 text-[11px] font-extrabold tracking-[0.16em] hover:border-[#0f33fe] hover:text-[#0f33fe] transition"
              >
                COPY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20 md:py-24 bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
                   {sortedContent.map((block, index) => (
            <div key={index}>
              {block.type === "text" && (
                <div
                  className={`text-gray-300 ${
                    index === firstTextIndex
                      ? "text-[18px] md:text-[20px]"
                      : "text-[16px] md:text-[18px]"
                  } leading-[1.9]
                  [&_p]:mb-6
                  [&_p]:leading-[1.9]
                  [&_h1]:text-[34px]
                  md:[&_h1]:text-[44px]
                  [&_h1]:font-black
                  [&_h1]:uppercase
                  [&_h1]:text-white
                  [&_h1]:leading-[1.15]
                  [&_h1]:mb-6
                  [&_h2]:text-[28px]
                  md:[&_h2]:text-[36px]
                  [&_h2]:font-black
                  [&_h2]:uppercase
                  [&_h2]:text-white
                  [&_h2]:leading-[1.2]
                  [&_h2]:mb-5
                  [&_h3]:text-[22px]
                  md:[&_h3]:text-[28px]
                  [&_h3]:font-extrabold
                  [&_h3]:text-white
                  [&_h3]:mb-4
                  [&_strong]:text-white
                  [&_strong]:font-extrabold
                  [&_a]:text-[#0f33fe]
                  [&_a]:underline
                  [&_ul]:list-disc
                  [&_ul]:pl-6
                  [&_ul]:mb-6
                  [&_ol]:list-decimal
                  [&_ol]:pl-6
                  [&_ol]:mb-6
                  [&_li]:mb-2`}
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
                    <p className="text-gray-500 text-[14px] mt-3 leading-[1.7]">
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
                    <p className="text-gray-500 text-[14px] mt-3 leading-[1.7]">
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