import React from "react";

const items = [
    "Shot Concept Storyboards",
    "Production Location Scopes",
    "Camera Gear Matrix Matching",
    "Studio Light Configurations",
    "Post-production Pacing Guides",
    "Color Palette LUT Standards",
    "Audio Narrative Cleansing",
    "Sound FX Library",
    "Motion Frame Intros",
    "Mobile Vertical Aspect Adapts",
    "Product Detail Studio Arrays",
    "Atmosphere Lens Profiles",
    "Technical Metadata Tagging",
    "Asset Library Structuring",
    "Usage Licensure Deliveries",
];

const gridStyle = {
    backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
    backgroundSize: "60px 60px",
};

const MediaProductionSpecs = () => {
    return (
        <section className="relative w-full bg-[#080808] overflow-hidden py-20 md:py-28">

            {/* Grid background */}
            <div className="absolute inset-0 pointer-events-none" style={gridStyle} aria-hidden="true" />

            {/* Inner wrapper */}
            <div className="relative z-10 px-[6%] max-w-[1400px]">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* ── LEFT: label + heading + desc ── */}
                    <div className="lg:w-[36%] shrink-0">
                        <p className="text-[#0f33fe] text-[10.5px] font-bold tracking-[0.22em] uppercase mb-5">
                            ASSET BLUEPRINT SPECS
                        </p>
                        <h2
                            className="text-white font-bold leading-[1.15] tracking-[-0.02em] mb-6"
                            style={{ fontSize: "clamp(26px, 3vw, 44px)" }}
                        >
                            What A Complete Production Package Includes
                        </h2>
                        <p className="text-[#555] text-[13px] leading-[1.8] m-0">
                            We handle every detail of the capture matrix, designing and
                            building elements to perform synchronously. A complete system
                            aligns strategy, usability, conversion, structure, and code.
                        </p>
                    </div>

                    {/* ── RIGHT: items grid ── */}
                    <div className="flex-1">
                        <div className="grid grid-cols-3 gap-[10px]">
                            {items.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-[#111318] border border-[#1e2030] px-5 py-4
                   text-[#aaa] text-[12.5px] leading-[1.5]
                   transition-colors duration-150
                   hover:bg-[#181c26] hover:text-white"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MediaProductionSpecs;
