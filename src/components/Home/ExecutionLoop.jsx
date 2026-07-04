const loop = [
  { num: "01", label: "Input" },
  { num: "02", label: "Synthesis", active: true },
  { num: "03", label: "Refinement" },
  { num: "04", label: "Deployment", green: true },
];

export default function ExecutionLoop() {
  return (
    <section
      className="bg-[#050505] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-20 lg:py-28"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <div className="mx-auto max-w-[900px] text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#bbfe0f] sm:text-[13px]">
          Operating System
        </p>

        <h2 className="mt-4 text-[26px] font-black uppercase leading-[1.08] tracking-[-0.04em] text-white sm:mt-5 sm:text-[38px] md:text-[48px] lg:text-[58px]">
          The Execution Loop
        </h2>

        <div className="relative mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:mt-24 sm:flex sm:items-center sm:justify-between sm:gap-0">
          <div className="absolute left-0 right-0 top-[24px] hidden h-px bg-[#0f33fe]/30 sm:block" />

          {loop.map((item) => (
            <div
              key={item.num}
              className="relative z-10 flex min-w-0 flex-col items-center"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center border text-[12px] font-black sm:h-12 sm:w-12 sm:text-[13px] ${
                  item.active
                    ? "border-[#0f33fe] text-[#0f33fe]"
                    : item.green
                      ? "border-[#bbfe0f] text-[#bbfe0f]"
                      : "border-white text-white"
                }`}
              >
                {item.num}
              </div>

              <p className="mt-4 max-w-full text-center text-[10px] font-black uppercase leading-[1.5] tracking-[0.18em] text-white/45 sm:mt-5 sm:text-[13px] sm:tracking-[0.25em]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
