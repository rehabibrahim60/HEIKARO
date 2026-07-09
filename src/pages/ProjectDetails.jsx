import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API } from "../utils/api";

//const API = "https://api.heikaro.com";


export default function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMediaUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${API}${url}`;
  };

  const estimateReadTime = () => {
    const allText = [
      project?.description || "",
      ...(project?.content || [])
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
    const loadProject = async () => {
      try {
const res = await fetch(`${API}/projects/${slug}`, {
  cache: "no-store",
});        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.message || "Failed to load project");
        }

        setProject(data.data);
      } catch (error) {
        console.error("Failed to load project details:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading project...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <p className="text-gray-400 mb-4">Project not found.</p>
        <Link to="/portfolio" className="text-[#0f33fe]">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const sortedContent = [...(project.content || [])].sort(
    (a, b) => a.order - b.order,
  );

  const firstTextIndex = sortedContent.findIndex(
    (block) => block.type === "text",
  );

  return (
    <div className="project-details-page min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Details */}
      <section
className="relative overflow-hidden px-4 pt-24 pb-14 sm:px-6 md:pt-28 md:pb-20"
        style={{
          backgroundImage: project.coverImage
            ? `linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.45) 100%), url(${getMediaUrl(project.coverImage)})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Cover image as faint background */}

        <div className="relative z-10 max-w-[1500px] mx-auto">
          {/* Breadcrumb */}
          <div className="project-details-breadcrumb flex flex-wrap items-center gap-3 text-gray-500 text-[12px] font-black tracking-[0.18em] uppercase mb-10 md:mb-12">
            <Link to="/" className="hover:text-white">
              HOME
            </Link>
            <span>›</span>
            <Link to="/portfolio" className="hover:text-white">
              THE PORTFOLIO
            </Link>
            <span>›</span>
            <span className="text-white break-words min-w-0">
              {project.title}
            </span>
          </div>

          {/* Meta */}
          <div className="project-meta-row flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
            <span className="bg-[#0f33fe] text-white px-4 py-2 text-sm font-black uppercase tracking-[0.12em] rounded">
              {project.category}
            </span>

            <span className="text-gray-400 font-black uppercase tracking-[0.12em]">
              ◷ {estimateReadTime()}
            </span>

            {project.client && (
              <span className="text-gray-400 font-black uppercase tracking-[0.12em]">
                ♙ {project.client}
              </span>
            )}
          </div>

          {/* Big Title */}
          <h1 className="max-w-[1050px] text-[34px] sm:text-[44px] md:text-[64px] lg:text-[86px] leading-[1.02] md:leading-[0.96] font-black uppercase mb-10 bg-gradient-to-r from-[#0f33fe] via-[#bbfe0f] to-white bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(187,254,15,0.25)] break-words">
            {project.title}
          </h1>

          {project.tags?.length > 0 && (
            <div className="project-tags-row flex flex-wrap gap-3 mb-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-4 py-2 text-xs font-black tracking-[0.16em] uppercase text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-16 sm:px-6 md:py-24 bg-black">
        <div className="project-details-content max-w-4xl mx-auto space-y-10 md:space-y-12">
          {sortedContent.map((block, index) => (
            <div key={index}>
              {block.type === "text" && (
                <div
                  className={`project-rich-text text-gray-300 ${
                    index === firstTextIndex
                      ? "text-[18px] md:text-[22px]"
                      : "text-[16px] md:text-[18px]"
                  } leading-[1.9]`}
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

      <style>{`
  .project-details-page {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  .project-details-page,
  .project-details-page * {
    box-sizing: border-box;
  }

  .project-details-page img,
  .project-details-page video,
  .project-details-page iframe {
    max-width: 100%;
  }

  .project-details-page iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .project-details-content table {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
  }

  .project-details-content pre {
    max-width: 100%;
    overflow-x: auto;
    white-space: pre;
    padding: 18px;
    background: #080808;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .project-details-content code {
    word-break: break-word;
  }

  .project-rich-text p,
  .project-rich-text li,
  .project-rich-text h1,
  .project-rich-text h2,
  .project-rich-text h3,
  .project-rich-text h4 {
    overflow-wrap: anywhere;
  }

  .project-rich-text p {
    margin-bottom: 24px;
    line-height: 1.9;
  }

  .project-rich-text h1 {
    color: #ffffff;
    font-size: 40px;
    line-height: 1.12;
    font-weight: 900;
    text-transform: uppercase;
    margin: 40px 0 22px;
  }

  .project-rich-text h2 {
    color: #ffffff;
    font-size: 34px;
    line-height: 1.15;
    font-weight: 900;
    text-transform: uppercase;
    margin: 36px 0 20px;
  }

  .project-rich-text h3 {
    color: #ffffff;
    font-size: 26px;
    line-height: 1.25;
    font-weight: 900;
    margin: 30px 0 16px;
  }

  .project-rich-text strong {
    color: #ffffff;
    font-weight: 900;
  }

  .project-rich-text a {
    color: #0f33fe;
    text-decoration: underline;
  }

  .project-rich-text ul {
    list-style: disc;
    padding-left: 24px;
    margin-bottom: 24px;
  }

  .project-rich-text ol {
    list-style: decimal;
    padding-left: 24px;
    margin-bottom: 24px;
  }

  .project-rich-text li {
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    .project-cover-ghost {
      opacity: 0.06 !important;
      right: -40px !important;
      width: 240px !important;
      height: 190px !important;
    }

    .project-details-breadcrumb {
      font-size: 10px !important;
      letter-spacing: 1.2px !important;
      gap: 8px !important;
      margin-bottom: 32px !important;
    }

    .project-meta-row {
      gap: 10px !important;
    }

    .project-meta-row span {
      font-size: 10px !important;
      letter-spacing: 1.2px !important;
      line-height: 1.5 !important;
    }

    .project-tags-row span {
      font-size: 10px !important;
      letter-spacing: 1.2px !important;
      line-height: 1.5 !important;
      padding: 8px 12px !important;
    }

    .project-details-page h1 {
      font-size: clamp(32px, 10vw, 44px) !important;
      line-height: 1.05 !important;
      letter-spacing: -0.035em !important;
    }

    .project-rich-text {
      font-size: 15px !important;
      line-height: 1.85 !important;
    }

    .project-rich-text h1 {
      font-size: 32px !important;
      line-height: 1.12 !important;
    }

    .project-rich-text h2 {
      font-size: 27px !important;
      line-height: 1.16 !important;
    }

    .project-rich-text h3 {
      font-size: 22px !important;
      line-height: 1.25 !important;
    }

    .project-details-content img {
      width: 100% !important;
      height: auto !important;
    }

    .project-details-content video {
      width: 100% !important;
    }
  }

  @media (max-width: 420px) {
    .project-details-page h1 {
      font-size: 32px !important;
    }

    .project-rich-text {
      font-size: 14px !important;
    }

    .project-details-breadcrumb {
      font-size: 9px !important;
    }
  }
    .blog-details-page section,
.project-details-page section {
  border-top: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
}

.blog-details-page section::before,
.blog-details-page section::after,
.project-details-page section::before,
.project-details-page section::after {
  display: none !important;
}
`}</style>
    </div>
  );
}
