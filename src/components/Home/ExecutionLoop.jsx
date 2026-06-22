const loop = [
  { num: "01", label: "Input" },
  { num: "02", label: "Synthesis", active: true },
  { num: "03", label: "Refinement" },
  { num: "04", label: "Deployment", green: true },
];

export default function ExecutionLoop() {
  return (
    <section
      className="bg-[#050505] px-6 py-28 text-white lg:px-20"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <div className="mx-auto max-w-[900px] text-center">
        <p className="text-[13px] font-black uppercase tracking-[0.35em] text-[#bbfe0f]">
          Operating System
        </p>

        <h2 className="mt-5 text-[38px] font-black uppercase leading-[1.08] tracking-[-0.04em] text-white md:text-[48px] lg:text-[58px]">
          The Execution Loop
        </h2>

        <div className="relative mt-24 flex items-center justify-between">
          <div className="absolute left-0 right-0 top-[24px] h-px bg-[#0f33fe]/30" />

          {loop.map((item) => (
            <div key={item.num} className="relative z-10 flex flex-col items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center border text-[13px] font-black ${
                  item.active
                    ? "border-[#0f33fe] text-[#0f33fe]"
                    : item.green
                    ? "border-[#bbfe0f] text-[#bbfe0f]"
                    : "border-white text-white"
                }`}
              >
                {item.num}
              </div>

              <p className="mt-5 text-[13px] font-black uppercase leading-[1.5] tracking-[0.25em] text-white/45">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}