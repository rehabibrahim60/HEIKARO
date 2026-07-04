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
    <section
      className="bg-[#050505] px-6 py-28 text-white lg:px-20"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <p className="text-[13px] font-black uppercase tracking-[0.35em] text-white/40">
            The Heikaro Model
          </p>

          <h2 className="mt-6 text-[38px] font-black uppercase leading-[1.08] tracking-[-0.04em] text-white md:text-[48px] lg:text-[58px]">
            Creative Synthesis.
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[19px] font-medium leading-[1.9] text-slate-400">
            We translate abstract business goals into highly structured creative
            assets that fuel measurable market performance and durable brand
            positioning.
          </p>
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="min-h-[280px] border border-white/10 bg-[#050505] px-8 py-8 transition duration-300 hover:border-[#0f33fe]"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.03] text-[24px] text-[#0f33fe]">
                {step.icon}
              </div>

              <h3 className="mt-8 text-[22px] font-black uppercase leading-[1.2] tracking-[-0.04em] text-white">
                {step.title}
              </h3>

              <p className="mt-6 max-w-none text-[17px] font-medium leading-[1.85] text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
