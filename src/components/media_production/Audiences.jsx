import React from "react";

const audiences = [
    {
        title: "CORPORATE ENTERPRISES",
        desc: "Corporate brands needing profile films, executive interviews, and structured internal communication assets.",
    },
    {
        title: "SERVICE FIRMS",
        desc: "Clinics, restaurants, real estate, education, consulting, and professional service brands needing authority assets.",
    },
    {
        title: "LAUNCH MARKETING TEAMS",
        desc: "Teams launching campaigns, products, services, or limited offers requiring strong visual assets.",
    },
    {
        title: "ACTIVE ADVERTISERS",
        desc: "Businesses running paid campaign funnels that require highly optimized video hooks and product visual arrays.",
    },
];

const gridStyle = {
    backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
    backgroundSize: "60px 60px",
};

const Audiences = () => {
    return (
        <section className="relative w-full bg-[#080808] overflow-hidden py-20 md:py-28">

            {/* Grid background */}
            <div className="absolute inset-0 pointer-events-none" style={gridStyle} aria-hidden="true" />

            <div className="relative z-10 px-[6%] max-w-[1400px]">

                {/* ── Header — centered ── */}
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-[#1a5fff] text-[10.5px] font-bold tracking-[0.22em] uppercase mb-5">
                        OPERATIONAL TARGET
                    </p>
                    <h2
                        className="text-white font-bold leading-[1.1] tracking-[-0.02em] m-0"
                        style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}
                    >
                        Target Audiences For This Service
                    </h2>
                </div>

                {/* ── Cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {audiences.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[rgba(13,13,13,0.6)] border border-[#1e1e1e] p-7
                         flex flex-col justify-between gap-8
                         transition-colors duration-200 hover:border-[#2a2a2a] hover:bg-[rgba(16,16,16,0.8)]"
                        >
                            {/* Top: title + desc */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-white text-[12px] font-bold tracking-[0.08em] uppercase m-0">
                                    {item.title}
                                </h3>
                                <p className="text-[#555] text-[12.5px] leading-[1.75] m-0">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Bottom: lime dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-[#c8ff00] shrink-0" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Audiences;