const problems = [
    {
        number: "01",
        description:
            "Traditional cinematic shoots cost millions and are physically restricted by weather, location, or actor schedule.",
    },
    {
        number: "02",
        description:
            "Raw, unconstrained AI video generators produce random visual noise, morphing glitches, and zero brand continuity.",
    },
    {
        number: "03",
        description:
            "Generic templates or stock video clips strip brands of professional authority and unique visual distinction.",
    },
    {
        number: "04",
        description:
            "Product prototypes are not physically ready for standard studio shoots, causing massive launch friction.",
    },
    {
        number: "05",
        description:
            "Releasing high-frequency short-form video content quickly is blocked by lengthy traditional post-production pipelines.",
    },
    {
        number: "06",
        description:
            "Complicated technical, industrial, or medical features are impossible to capture or explain clearly with a real-world lens.",
    },
    {
        number: "07",
        description:
            "Struggling to find the sweet spot between CGI rendering perfection and the fast-moving cost requirements of digital ads.",
    },
    {
        number: "08",
        description:
            "Visual outputs look cheap, synthetic, or disconnected from the core brand communication, failing client audits.",
    },
];

const WhyFilmShootsStagnate = () => {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">

            {/* ── Centered header ── */}
            <div className="mb-16 flex flex-col items-center text-center">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cc2200]">
                    Logistical Bottlenecks
                </p>
                <h2
                    className="mb-6 max-w-2xl font-bold leading-[1.1] text-white"
                    style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
                >
                    Why Traditional Film Shoots Stagnate
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-[#777777]">
                    Booking physical crews, sorting actor schedules, and relying on ideal
                    weather is slow and expensive:
                </p>
            </div>

            {/* ── Cards grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {problems.map((item) => (
                    <div
                        key={item.number}
                        className="border border-[#1e1e1e] p-7 flex flex-col gap-4"
                    >
                        <span className="text-[13px] font-bold text-[#cc2200]">
                            {item.number}
                        </span>
                        <p className="text-sm leading-relaxed text-[#aaaaaa]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default WhyFilmShootsStagnate;
