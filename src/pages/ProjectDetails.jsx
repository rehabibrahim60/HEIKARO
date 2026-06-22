import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API = "http://localhost:3000";

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
                const res = await fetch(`${API}/projects/${slug}`);
                const data = await res.json();

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
        (a, b) => a.order - b.order
    );

    const firstTextIndex = sortedContent.findIndex(
        (block) => block.type === "text"
    );

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Details */}
            <section className="relative overflow-hidden border-b border-white/10 px-6 pt-20 pb-20">
                {/* Cover image as faint background */}
                {project.coverImage && (
                    <img
                        src={getMediaUrl(project.coverImage)}
                        alt={project.title}
                        className="absolute right-20 top-1/2 -translate-y-1/2 w-[420px] h-[320px] object-cover opacity-10 grayscale pointer-events-none"
                    />
                )}

                <div className="relative z-10 max-w-[1500px] mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm font-black tracking-[0.22em] uppercase mb-12">
                        <Link to="/" className="hover:text-white">
                            HOME
                        </Link>
                        <span>›</span>
                        <Link to="/portfolio" className="hover:text-white">
                            THE PORTFOLIO
                        </Link>
                        <span>›</span>
                        <span className="text-white">{project.title}</span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-8 mb-8">
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
                    <h1 className="max-w-[1050px] text-[46px] md:text-[72px] lg:text-[86px] leading-[0.92] font-black uppercase mb-10 bg-gradient-to-r from-[#0f33fe] via-[#bbfe0f] to-white bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(187,254,15,0.25)]">
                        {project.title}
                    </h1>

                    {project.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-10">
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
            <section className="px-6 py-24 bg-black">
                <div className="max-w-4xl mx-auto space-y-12">
                    {sortedContent.map((block, index) => (
                        <div key={index}>
                            {block.type === "text" && (
                                <div
                                    className={`text-gray-300 leading-9 ${index === firstTextIndex
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