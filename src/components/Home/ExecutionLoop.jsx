const loop = [
    { num: "01", label: "Input" },
    { num: "02", label: "Synthesis", active: true },
    { num: "03", label: "Refinement" },
    { num: "04", label: "Deployment", green: true },
];

export default function ExecutionLoop() {
    return (
        <section className="bg-[#050505] px-6 py-28 text-white lg:px-20">
            <div className="mx-auto max-w-[760px] text-center">
                <h2 className="text-sm font-black uppercase tracking-[0.55em] text-white">
                    The Execution Loop
                </h2>

                <div className="relative mt-20 flex items-center justify-between">
                    <div className="absolute left-0 right-0 top-[17px] h-px bg-[#065BFF]/30" />

                    {loop.map((item) => (
                        <div key={item.num} className="relative z-10 flex flex-col items-center">
                            <div
                                className={`flex h-8 w-8 items-center justify-center border text-[7px] font-black ${item.active
                                    ? "border-[#065BFF] text-[#065BFF]"
                                    : item.green
                                        ? "border-[#B8FF57] text-[#B8FF57]"
                                        : "border-white text-white"
                                    }`}
                            >
                                {item.num}
                            </div>

                            <p className="mt-4 text-[7px] font-black uppercase tracking-[0.35em] text-white/35">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}