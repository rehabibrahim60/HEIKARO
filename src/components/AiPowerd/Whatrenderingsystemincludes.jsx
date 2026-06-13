const items = [
    "Stable Prompt Pipelines",
    "Temporal Frame Interpolators",
    "Tactile Texturing Models",
    "3D Camera Geometry Mappings",
    "Post-production Splicing Layouts",
    "LUT Color Balancing Formulas",
    "SoundFX Scapes Matching",
    "Interactive Web Lottie Configs",
    "PBR Direct Material Properties",
    "Neural Resolution Upscalers",
    "Multi-Pass Alpha Compositors",
    "System Asset Databases",
];

const WhatRenderingSystemIncludes = () => {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

                {/* ── Left: text ── */}
                <div className="flex flex-col justify-center gap-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1a5fff]">
                        Platform Integration Specs
                    </p>
                    <h2
                        className="font-bold leading-[1.1] text-white"
                        style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
                    >
                        What A Complete Rendering System Includes
                    </h2>
                    <p className="max-w-sm text-sm leading-relaxed text-[#666666]">
                        We handle every detail of the rendering matrix, designing and
                        building elements to perform synchronously. A complete system aligns
                        strategy, usability, conversion, structure, and code.
                    </p>
                </div>

                {/* ── Right: 3-col grid ── */}
                <div className="grid grid-cols-3 gap-2">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border border-[#1e1e1e] px-5 py-4 flex items-center"
                        >
                            <span className="text-[12.5px] leading-snug text-[#aaaaaa]">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhatRenderingSystemIncludes;