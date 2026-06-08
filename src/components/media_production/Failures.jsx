import React from "react";

const failures = [
  { id: "01", desc: "Videos look random, lacking a clear messaging focus or commercial hooks." },
  { id: "02", desc: "Corporate photographs feel like generic stock visual fillers, undermining actual value." },
  { id: "03", desc: "Shoot days start with zero concrete concept, leading to sluggish delays and waste." },
  { id: "04", desc: "Content outputs vary in grading, editing, and style from session to session." },
  { id: "05", desc: "Ad imagery fails to hook organic scrolls due to poor framing, text weights, or visual density." },
  { id: "06", desc: "Raw files are delivered as unorganized dumps, making future curation or editing impossible." },
  { id: "07", desc: "The brand spends massive budgets on high-end crews but gets zero modular, reusable assets." },
  { id: "08", desc: "Final video files remain unused because they were not optimized for specific platform channels." },
];

const gridStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
  backgroundSize: "60px 60px",
};

const Failures = () => {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-20 md:py-28">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={gridStyle} aria-hidden="true" />

      {/* Inner wrapper — px-[6%] matches all other sections */}
      <div className="relative z-10 px-[6%] max-w-[1400px]">

        {/* Label */}
        <p className="text-[#cc2200] text-[10.5px] font-bold tracking-[0.22em] uppercase mb-5">
          FAILURE OF PERCEPTION
        </p>

        {/* Heading */}
        <h2
          className="text-white font-bold leading-[1.1] tracking-[-0.02em] mb-5"
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
        >
          Why General Shoot Days Fail
        </h2>

        {/* Description */}
        <p className="text-[#666] text-[13.5px] leading-[1.8] max-w-[580px] mb-16 md:mb-20">
          When projects are booked without strict script directions, raw outputs feel
          messy, out-of-brand, and useless for campaigns:
        </p>

        {/* Cards grid — 4 cols, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {failures.map((item) => (
            <div
              key={item.id}
              className="bg-[rgba(13,13,13,0.6)] border border-[#1e1e1e] p-6 flex flex-col gap-5
                         transition-colors duration-200 hover:border-[#2a2a2a] hover:bg-[rgba(16,16,16,0.8)]"
            >
              {/* Number */}
              <span className="text-[#cc2200] text-[11px] font-bold tracking-[0.12em]">
                {item.id}
              </span>

              {/* Description */}
              <p className="text-[#666] text-[12.5px] leading-[1.75] m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Failures;