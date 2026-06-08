import React from "react";
import { FaBullseye, FaCamera, FaLayerGroup } from "react-icons/fa";

const cards = [
    {
        icon: <FaBullseye />,
        title: "STRATEGIC\nPRODUCTION\nDIRECTION",
        desc: "Every production starts with a clear understanding of the brand, audience, message, and final usage.",
    },
    {
        icon: <FaCamera />,
        title: "PROFESSIONAL\nVISUAL\nEXECUTION",
        desc: "We produce video and photo assets with attention to framing, lighting, composition, pacing, tone, and brand consistency.",
    },
    {
        icon: <FaLayerGroup />,
        title: "MULTI-USE\nMEDIA\nASSETS",
        desc: "Content delivered for social media, campaigns, websites, ads, presentations, launches, events, and future marketing use.",
    },
];

// Grid background — same pattern as hero
const gridStyle = {
    backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
    backgroundSize: "60px 60px",
};

const Overview = () => {
    return (
        <section className="relative w-full bg-[#080808] overflow-hidden py-20 md:py-28">

            {/* ── Grid background ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={gridStyle}
                aria-hidden="true"
            />

            {/* ── Inner wrapper — px-[6%] يتطابق مع الهيرو والمنيو ── */}
            <div className="relative z-10 px-[6%] max-w-[1400px]">

                {/* ── TOP: label + heading + description ── */}
                <div className="mb-16 md:mb-20">

                    {/* Label */}
                    <p className="text-[#1a5fff] text-[10.5px] font-bold  uppercase mb-5">
                        HIGH-VALUE ASSETS
                    </p>

                    {/* Heading */}
                    <h2
                        className="text-white font-bold leading-[1.1] tracking-[-0.02em] mb-6 max-w-[700px]"
                        style={{ fontSize: "clamp(30px, 4vw, 54px)" }}
                    >
                        Media is your silent business proxy.
                        Let it reflect elite caliber.
                    </h2>

                    {/* Description */}
                    <p className="text-[#666] text-[13.5px] leading-[1.8] max-w-[620px] m-0">
                        HEIKARO engineers media systems that align with strategic brand rules.
                        From cinematic advertising layers and corporate documentaries to premium
                        catalog product layouts, motion diagrams, and interactive 360 scans, we
                        build high-status visual assets. We deliver modular visual content
                        libraries that continue supporting your sales pipelines.
                    </p>
                </div>

                {/* ── CARDS GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-[rgba(13,13,13,0.6)] border border-[#1e1e1e] p-8 flex flex-col gap-5
                         transition-colors duration-200 hover:bg-[rgba(16,16,16,0.8)] hover:border-[#2a2a2a]"
                        >
                            {/* Icon */}
                            <span
                                className="text-[#c8ff00] text-[18px] flex items-center justify-center
                           w-[42px] h-[42px] shrink-0
                           bg-[rgba(200,255,0,0.07)] border border-[rgba(200,255,0,0.22)]
                           rounded-[4px]"
                            >
                                {card.icon}
                            </span>

                            {/* Title */}
                            <h3
                                className="text-white text-[12px] font-bold 
                           uppercase leading-[1.45] m-0 whitespace-pre-line"
                            >
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#555] text-[12.5px] leading-[1.75] m-0">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Overview;