const cases = [
    {
        tag: "Brand & Identity",
        title: "Global Brand Architecture Evolution",
    },
    {
        tag: "Design & Experience",
        title: "Enterprise SaaS Performance Portal",
    },
    {
        tag: "Marketing & Growth",
        title: "D2C Market Dominance Campaign",
    },
];

export default function CaseArchitectures() {
    return (
        <section className="bg-[#050505] px-6 py-24 text-white lg:px-20">
            <div className="mx-auto max-w-[980px]">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#B8FF57]">
                    The Proof
                </p>

                <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] lg:text-[34px]">
                    Case Architectures.
                </h2>

                <div className="mt-20 grid gap-4 md:grid-cols-3">
                    {cases.map((item) => (
                        <article
                            key={item.title}
                            className="group relative h-[295px] overflow-hidden border border-white/10 bg-[#050505]"
                        >
                            <div className="absolute left-0 top-7 h-[5px] w-full bg-white/10" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative h-32 w-32 opacity-20">
                                    <span className="absolute left-1/2 top-1/2 h-[4px] w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/40" />
                                    <span className="absolute left-1/2 top-1/2 h-[4px] w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/40" />
                                </div>

                                <p className="absolute text-lg font-black uppercase text-white/15">
                                    HEIKARO ASSET
                                </p>
                            </div>

                            <div className="absolute bottom-5 left-5 right-5">
                                <p className="text-[8px] font-black uppercase tracking-[0.35em] text-[#065BFF]">
                                    {item.tag}
                                </p>

                                <h3 className="mt-2 max-w-[220px] text-lg font-black uppercase leading-[0.95] tracking-[-0.04em]">
                                    {item.title}
                                </h3>
                            </div>

                            <span className="absolute bottom-5 right-5 flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-xs text-white/60">
                                ↗
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}