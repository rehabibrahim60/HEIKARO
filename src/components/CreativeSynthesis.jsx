const steps = [
    {
        title: "Diagnosis",
        desc: "We identify systemic friction points to define clear growth roadmaps.",
        icon: "↯",
    },
    {
        title: "Architecture",
        desc: "We design hierarchical brand systems for multi-channel deployment.",
        icon: "▱",
    },
    {
        title: "Governance",
        desc: "We implement rigorous standards to maintain quality at scale.",
        icon: "♢",
    },
    {
        title: "Execution",
        desc: "We deploy high-fidelity creative that dominates the market landscape.",
        icon: "↗",
    },
];

export default function CreativeSynthesis() {
    return (
        <section className="bg-[#050505] px-6 py-24 text-white lg:px-20">
            <div className="mx-auto max-w-[1120px]">
                <div className="text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
                        The Heikaro Model
                    </p>

                    <h2 className="mt-5 text-3xl font-black uppercase tracking-[-0.04em] text-white lg:text-[34px]">
                        Creative Synthesis.
                    </h2>

                    <p className="mx-auto mt-5 max-w-[560px] text-sm leading-6 text-slate-500">
                        We translate abstract business goals into highly structured creative assets
                        that fuel measurable market performance and durable brand positioning.
                    </p>
                </div>

                <div className="mt-24 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.title}
                            className="min-h-[205px] border border-white/10 bg-[#050505] px-8 py-8"
                        >
                            <div className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.03] text-xl text-[#065BFF]">
                                {step.icon}
                            </div>

                            <h3 className="mt-7 text-lg font-black uppercase tracking-[-0.04em] text-white">
                                {step.title}
                            </h3>

                            <p className="mt-5 max-w-[180px] text-[11px] leading-5 tracking-[0.08em] text-slate-500">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}