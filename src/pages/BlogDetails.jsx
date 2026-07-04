import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API = "https://api.heikaro.com";

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
    (a, b) => a.order - b.order,
  );

  const firstTextIndex = sortedContent.findIndex(
    (block) => block.type === "text",
  );

  return (
    <div className="blog-details-page min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Details */}
      <section
        className="relative overflow-hidden border-b border-white/10 px-4 pt-24 pb-14 sm:px-6 md:pt-28 md:pb-20"
        style={{
          backgroundImage: blog.coverImage
            ? `linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.45) 100%), url(${getMediaUrl(blog.coverImage)})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        {/* Cover image as faint background 
          {blog.coverImage && (
          <img
            src={getMediaUrl(blog.coverImage)}
            alt={blog.title}
            className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 w-[300px] md:w-[420px] h-[240px] md:h-[320px] object-cover opacity-10 grayscale pointer-events-none"
          />
        )}*/}
        <div className="relative z-10 max-w-[1500px] mx-auto">
          {/* Breadcrumb */}
          <div className="blog-details-breadcrumb flex flex-wrap items-center gap-3 text-gray-500 text-[12px] font-extrabold tracking-[0.18em] uppercase mb-10">
            <Link to="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>›</span>
            <Link to="/blogs" className="hover:text-white transition-colors">
              THE JOURNAL
            </Link>
            <span>›</span>
            <span className="text-white break-words min-w-0">{blog.title}</span>
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
          <h1 className="max-w-[1050px] text-[34px] sm:text-[42px] md:text-[56px] lg:text-[68px] leading-[1.04] font-black uppercase mb-9 tracking-[-0.04em] bg-gradient-to-r from-[#0f33fe] via-[#bbfe0f] to-white bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(187,254,15,0.22)] break-words">
            {blog.title}
          </h1>

          <div className="border-t border-white/10 pt-7">
            <div className="blog-share-row flex flex-wrap items-center gap-4">
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
      <section className="px-4 py-16 sm:px-6 md:py-24 bg-black">
        <div className="blog-content-wrap max-w-4xl mx-auto space-y-10 md:space-y-12">
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

      <style>{`
  .blog-details-page {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  .blog-details-page,
  .blog-details-page * {
    box-sizing: border-box;
  }

  .blog-details-page img,
  .blog-details-page video,
  .blog-details-page iframe {
    max-width: 100%;
  }

  .blog-details-page iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .blog-content-wrap table {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
  }

  .blog-content-wrap pre {
    max-width: 100%;
    overflow-x: auto;
    white-space: pre;
    padding: 18px;
    background: #080808;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .blog-content-wrap code {
    word-break: break-word;
  }

  .blog-content-wrap p,
  .blog-content-wrap li,
  .blog-content-wrap h1,
  .blog-content-wrap h2,
  .blog-content-wrap h3 {
    overflow-wrap: anywhere;
  }

  @media (max-width: 768px) {
    .blog-details-breadcrumb {
      font-size: 10px !important;
      letter-spacing: 1.2px !important;
      gap: 8px !important;
      margin-bottom: 32px !important;
    }

    .blog-details-page h1 {
      font-size: clamp(32px, 10vw, 44px) !important;
      line-height: 1.05 !important;
      letter-spacing: -0.035em !important;
    }

    .blog-details-page h2 {
      font-size: clamp(26px, 8vw, 34px) !important;
      line-height: 1.15 !important;
    }

    .blog-details-page h3 {
      font-size: 22px !important;
      line-height: 1.25 !important;
    }

    .blog-details-page p,
    .blog-details-page li {
      font-size: 15px !important;
      line-height: 1.85 !important;
    }

    .blog-share-row {
      display: grid !important;
      grid-template-columns: 1fr !important;
      gap: 10px !important;
      align-items: stretch !important;
    }

    .blog-share-row > span {
      margin-bottom: 4px !important;
      font-size: 10px !important;
      letter-spacing: 1.4px !important;
    }

    .blog-share-row a,
    .blog-share-row button {
      width: 100% !important;
      min-height: 46px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
      font-size: 10px !important;
      letter-spacing: 1.4px !important;
    }

    .blog-content-wrap {
      max-width: 100% !important;
    }

    .blog-content-wrap img {
      width: 100% !important;
      height: auto !important;
    }
  }

  @media (max-width: 420px) {
    .blog-details-page h1 {
      font-size: 32px !important;
    }

    .blog-details-page p,
    .blog-details-page li {
      font-size: 14px !important;
    }

    .blog-details-breadcrumb {
      font-size: 9px !important;
    }
  }
`}</style>
    </div>
  );
}
