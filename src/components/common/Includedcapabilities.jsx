import React from "react";
import { FaArrowRight } from "react-icons/fa";

// ─────────────────────────────────────────────────
//  USAGE EXAMPLE (pass different data in each page):
//
//  import IncludedCapabilities from "@/components/IncludedCapabilities";
//
//  const caps = [
//    {
//      id: "01",
//      title: "Commercial Production",
//      desc:  "Promotional film assets...",
//      tag:   "Cinema-grade commercial ads",
//      image: null,                          // or "/images/commercial.jpg"
//    },
//    { id: "02", title: "...", desc: "...", tag: "...", image: "/images/x.jpg" },
//  ];
//
//  <IncludedCapabilities
//    label="PRODUCTION COMPETENCY"
//    title="Included Capabilities"
//    capabilities={caps}
//  />
// ─────────────────────────────────────────────────

const gridStyle = {
    backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
    backgroundSize: "60px 60px",
};

const CapabilityCard = ({ id, title, desc, tag, image, anchor }) => {
    const handleClick = () => {
        if (!anchor) return;
        const target = document.getElementById(anchor);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`group bg-[rgba(13,13,13,0.6)] border border-[#1e1e1e] flex flex-col
                  transition-colors duration-200 hover:border-[#2a2a2a] hover:bg-[rgba(16,16,16,0.8)]
                  ${anchor ? "cursor-pointer" : ""}`}
        >
            {/* ── Image slot (optional) ── */}
            {image && (
                <div className="w-full aspect-[16/9] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            )}

            {/* ── Content ── */}
            <div className="flex flex-col flex-1 gap-4 p-6">

                {/* Number + arrow */}
                <div className="flex items-center justify-between">
                    <span className="text-[#444] text-[11px] font-bold tracking-[0.12em]">
                        {id}
                    </span>
                    <FaArrowRight
                        className={`text-[12px] transition-all duration-200
                        ${anchor
                                ? "text-[#0f33fe] group-hover:translate-x-1"
                                : "text-[#333]"
                            }`}
                    />
                </div>

                {/* Title */}
                <h3 className="text-white text-[14px] font-bold leading-[1.35] tracking-[0.01em] m-0">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-[#555] text-[12.5px] leading-[1.75] m-0 flex-1">
                    {desc}
                </p>

                {/* Tag — lime reference text */}
                {tag && (
                    <span className="text-[#bbfe0f] text-[11px] font-semibold tracking-[0.04em] mt-2 italic">
                        {tag}
                    </span>
                )}
            </div>
        </div>
    );
};

const IncludedCapabilities = ({
    label = "PRODUCTION COMPETENCY",
    title = "Included Capabilities",
    capabilities = [],
}) => {
    return (
        <section className="relative w-full bg-[#080808] overflow-hidden py-20 md:py-28">

            {/* Grid background */}
            <div className="absolute inset-0 pointer-events-none" style={gridStyle} aria-hidden="true" />

            <div className="relative z-10 px-[6%] max-w-[1400px]">

                {/* ── Header — centered ── */}
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-[#bbfe0f] text-[10.5px] font-bold tracking-[0.22em] uppercase mb-4">
                        {label}
                    </p>
                    <h2
                        className="text-white font-bold leading-[1.1] tracking-[-0.02em] m-0"
                        style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}
                    >
                        {title}
                    </h2>
                </div>

                {/* ── Cards grid — 4 cols ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {capabilities.map((cap) => (
                        <CapabilityCard key={cap.id} {...cap} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default IncludedCapabilities;

