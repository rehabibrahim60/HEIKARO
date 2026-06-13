const partners = [
    {
        title: "Product Launchers",
        description:
            "Brands introducing products or services requiring massive market attention.",
    },
    {
        title: "Enterprise Corps",
        description:
            "Companies detailing key developments, conferences, or milestones directly to clients.",
    },
    {
        title: "Exhibition Leaders",
        description:
            "Exhibitors requiring customized luxury booths, interactivity, and engagement.",
    },
    {
        title: "Cultural & NGOs",
        description:
            "Institutions deploying capacity-building programs, galas, and community initiatives.",
    },
];

const TargetPartners = () => {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">

            {/* ── Centered header ── */}
            <div className="mb-14 flex flex-col items-center text-center">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1a5fff]">
                    Operational Target
                </p>
                <h2
                    className="max-w-2xl font-bold leading-[1.1] text-white"
                    style={{ fontSize: "clamp(28px, 4vw, 54px)" }}
                >
                    Target Partners For This Service
                </h2>
            </div>

            {/* ── Cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {partners.map((item, index) => (
                    <div
                        key={index}
                        className="border border-[#1e1e1e] p-7 flex flex-col gap-4"
                    >
                        {/* Title */}
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="flex-1 text-[12.5px] leading-relaxed text-[#666666]">
                            {item.description}
                        </p>

                        {/* Dot */}
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#c8ff00]" />
                    </div>
                ))}
            </div>

        </section>
    );
};

export default TargetPartners;