const steps = [
    {
        step: "STEP 01",
        title: "Target Vision Setup",
        desc: "Defining cinematic narrative scripts, product specifications, CAD structures, and platform channels.",
    },
    {
        step: "STEP 02",
        title: "Model Parameter Tuning",
        desc: "Configuring base neural diffusion configurations, embedding models, and custom style sliders.",
    },
    {
        step: "STEP 03",
        title: "CGI Geometry Blueprint",
        desc: "Rebuilding product shapes, bounding vectors, camera coordinates, and light rigs in 3D space.",
    },
    {
        step: "STEP 04",
        title: "PBR Material Texturing",
        desc: "Applying physical material characteristics — refraction, roughness, metallicity — to make assets look real.",
    },
    {
        step: "STEP 05",
        title: "Rendering & Sequence Synthesis",
        desc: "Generating high-definition frame groups using high-speed cloud compute render farms.",
    },
    {
        step: "STEP 06",
        title: "Temporal Stability Checks",
        desc: "Injecting framing algorithms and frame interpolations to clean up flickering or visual errors.",
    },
    {
        step: "STEP 07",
        title: "Sound & VFX Compositing",
        desc: "Overlaying audio effects, music clips, typography overlays, and custom transitions.",
    },
    {
        step: "STEP 08",
        title: "Final Multi-Aspect Deliveries",
        desc: "Exporting standard ProRes and MP4 packages optimized across vertical and landscape timelines.",
    },
];

const HowWeProduceCinemaFiles = () => {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">

            {/* ── Centered header ── */}
            <div className="mb-16 flex flex-col items-center text-center">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">
                    Operational Methodology
                </p>
                <h2
                    className="mb-5 max-w-2xl font-bold leading-[1.1] text-white"
                    style={{ fontSize: "clamp(28px, 4vw, 54px)" }}
                >
                    How We Produce Synthetic Cinema Files
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-[#666666]">
                    Our 8-step operating process ensures strategic alignment from visual
                    blueprint to final developer sign-off and site launch.
                </p>
            </div>

            {/* ── Steps grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {steps.map((item, index) => (
                    <div
                        key={index}
                        className="group border border-[#1e1e1e] p-7 flex flex-col gap-4 
                       transition-colors duration-200 hover:border-[#c8ff00]"
                    >
                        {/* Step label */}
                        <span className="text-[11px] font-bold tracking-[0.15em] text-[#1a5fff]">
                            {item.step}
                        </span>

                        {/* Title */}
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-white">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[12.5px] leading-relaxed text-[#666666]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default HowWeProduceCinemaFiles;