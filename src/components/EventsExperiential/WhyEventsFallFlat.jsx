export default function WhyEventsFallFlat() {

    const problems = [
        {
            number: "01",
            description:
                "Events are planned around boring logistics instead of strategic growth purpose.",
        },
        {
            number: "02",
            description:
                "The audience attends but forgets the core campaign message within hours.",
        },
        {
            number: "03",
            description:
                "The physical space looks good but tells zero cohesive brand stories.",
        },
        {
            number: "04",
            description:
                "The program agenda feels random and disconnected from target client conversions.",
        },
        {
            number: "05",
            description:
                "Staff stand passively behind booths instead of systematically guiding guest actions.",
        },
        {
            number: "06",
            description:
                "The event ends without gathering dynamic customer leads, feedback, or follow-up pathways.",
        },
    ];

    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">

            {/* ── Centered header ── */}
            <div className="mb-16 flex flex-col items-center text-center">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cc2200]">
                    Operational Gaps
                </p>
                <h2
                    className="mb-6 max-w-2xl font-bold leading-[1.1] text-white"
                    style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
                >
                    Why Traditional Events Fall Flat
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-[#777777]">
                    Relying purely on operational coordinates results in flat, forgettable meetings
                    that fail to trigger target buyer conversions.
                </p>
            </div>

            {/* ── Cards grid 3x2 ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
}