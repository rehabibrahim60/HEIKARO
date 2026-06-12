const steps = [
    {
        num: "Step 01",
        title: "Identity & Goal Sync",
        body: "We study your brand positioning, targeted channels, campaign deadlines, and product functions first.",
    },
    {
        num: "Step 02",
        title: "Concept Storyboarding",
        body: "Outlining exact scripts, shot plans, verbal pacing curves, and frame directions prior to booking crews.",
    },
    {
        num: "Step 03",
        title: "Logistics Coordination",
        body: "Managing locations, equipment matching, set directions, talent contracts, and schedules.",
    },
    {
        num: "Step 04",
        title: "On-Set Capturing",
        body: "Execution of video and photo shoots under standard cinema-grade criteria (framing, focus, lighting).",
    },
    {
        num: "Step 05",
        title: "Post-Production Sorting",
        body: "Cleansing raw takes, organizing top-tier selections, and arranging asset pools for editing.",
    },
    {
        num: "Step 06",
        title: "Pacing & Tone Grading",
        body: "Splicing narrative segments, styling color balances, balancing speech files, and embedding light motion overlays.",
    },
    {
        num: "Step 07",
        title: "Platform Adaptation Runs",
        body: "Exporting matching aspect dimensions (9:16 vertical, 16:9 widescreen, 4:5 timeline blocks) cleanly.",
    },
    {
        num: "Step 08",
        title: "Modular Delivery",
        body: "Structuring clean archive packages and folders so your marketing teams can easily reuse raw modules.",
    },
];

const gridStyle = {
    backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
    backgroundSize: "60px 60px",
};

const HowWeProduceMediaAssets = () => {
    return (
        <section className="relative w-full bg-[#080808] overflow-hidden py-20 md:py-28">
            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={gridStyle}
                aria-hidden="true"
            />

            {/* Inner wrapper — same px-[6%] max-w-[1400px] as adjacent sections */}
            <div className="relative z-10 px-[6%] max-w-[1400px]">
                {/* Header */}
                <p className="text-[#1a5fff] text-[10.5px] font-bold tracking-[0.22em] uppercase mb-4 text-center">
                    Systematic Storytelling
                </p>
                <h2
                    className="text-white font-bold leading-[1.15] tracking-[-0.02em] text-center mb-4"
                    style={{ fontSize: "clamp(28px, 3vw, 46px)" }}
                >
                    How We Produce Media Assets
                </h2>
                <p className="text-[#666] text-[13px] leading-[1.8] text-center max-w-[520px] mx-auto mb-14">
                    Our 8-step operating process ensures strategic alignment from visual
                    blueprint to final developer sign-off and site launch.
                </p>

                {/* Steps grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
                    {steps.map((step, i) => (
                        <StepCard key={i} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StepCard = ({ num, title, body }) => {
    return (
        <div className="group relative bg-[#0e1018] border border-[#1a1e2e] px-6 py-7 overflow-hidden transition-colors duration-250 hover:bg-[#121624] hover:border-[#252a3e]">
            {/* Bottom blue line animation on hover */}
            <span className="absolute bottom-0 left-0 h-[2px] bg-[#1a5fff] w-0 group-hover:w-full transition-[width] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />

            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#2a3060] group-hover:text-[#1a5fff] transition-colors duration-250 mb-[14px]">
                {num}
            </p>
            <p className="text-[12px] font-bold tracking-[0.06em] uppercase text-[#cccccc] group-hover:text-white transition-colors duration-250 mb-3 leading-[1.4]">
                {title}
            </p>
            <p className="text-[11.5px] text-[#555] leading-[1.75]">{body}</p>
        </div>
    );
};

export default HowWeProduceMediaAssets;