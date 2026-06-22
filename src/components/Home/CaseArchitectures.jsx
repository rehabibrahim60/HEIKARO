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
    <section
      className="case-architectures-section bg-[#050505] px-6 py-28 text-white lg:px-20"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="text-[13px] font-black uppercase tracking-[0.35em] text-[#bbfe0f]">
          The Proof
        </p>

        <h2 className="mt-5 text-[38px] font-black uppercase leading-[1.08] tracking-[-0.05em] text-white md:text-[48px] lg:text-[58px]">
          Case Architectures.
        </h2>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="group relative h-[330px] overflow-hidden border border-white/10 bg-[#050505] transition duration-300 hover:border-[#0f33fe]"
            >
              <div className="absolute left-0 top-7 h-[5px] w-full bg-white/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-32 w-32 opacity-20">
                  <span className="absolute left-1/2 top-1/2 h-[4px] w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/40" />
                  <span className="absolute left-1/2 top-1/2 h-[4px] w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/40" />
                </div>

                <p className="absolute text-[20px] font-black uppercase tracking-[-0.02em] text-white/15">
                  HEIKARO ASSET
                </p>
              </div>

              <div className="absolute bottom-7 left-6 right-6">
                <p className="text-[12px] font-black uppercase leading-[1.5] tracking-[0.28em] text-[#0f33fe]">
                  {item.tag}
                </p>

                <h3 className="mt-4 max-w-[260px] text-[24px] font-black uppercase leading-[1.05] tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
              </div>

              <span className="absolute bottom-7 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-[16px] text-white/70 transition group-hover:border-[#0f33fe] group-hover:text-[#0f33fe]">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}