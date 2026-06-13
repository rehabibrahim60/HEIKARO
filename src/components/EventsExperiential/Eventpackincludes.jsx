const packItems = [
    "Event Archetype Definitions",
    "Guest Journey Flowcharts",
    "Spatial Blueprint Layouts",
    "Acoustic Stage Designs",
    "Scenic Lighting Schemes",
    "Wayfinding Directional Signage",
    "Dynamic Screen Graphics",
    "Live Interactive Quizzes",
    "Speaker Segment Schedules",
    "Attendee Credential Portals",
    "Post-Event Recap Videos",
    "Participant Analytical Reports",
];

const EventPackIncludes = () => {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">
            <div className="mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:gap-16">

                {/* ── Left: text block ── */}
                <div className="flex flex-col justify-center lg:w-[34%]">
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1a5fff]">
                        OPERATIONAL SPECS
                    </p>
                    <h2
                        className="mb-5 font-bold leading-[1.1] text-white"
                        style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}
                    >
                        What A Complete Event Pack Includes
                    </h2>
                    <p className="text-[13px] leading-relaxed text-[#666666]">
                        We handle every detail of the spaces matrix, designing and
                        building elements to perform synchronously. A complete system
                        aligns strategy, usability, conversion, structure, and code.
                    </p>
                </div>

                {/* ── Right: grid ── */}
                <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {packItems.map((item, index) => (
                        <div
                            key={index}
                            className="border border-[#1e1e1e] px-5 py-5 flex items-center"
                        >
                            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#999999]">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EventPackIncludes;