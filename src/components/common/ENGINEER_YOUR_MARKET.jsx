import React from "react";
import { Link } from "react-router-dom";

const steps = [
  { num: "01", label: "Diagnose" },
  { num: "02", label: "Strategize" },
  { num: "03", label: "Execute" },
  { num: "04", label: "Optimize" },
];

const EngineerYourMarket = () => {
  return (
    <section
      className="bg-[#070d1b] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-20 lg:py-28"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <span className="mb-5 inline-flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.28em] text-[#0f33fe] sm:text-[11px] sm:tracking-[0.35em]">
          <span>⬡</span>
          Integrated Growth OS
        </span>

        <h2 className="max-w-[620px] text-[28px] font-black uppercase leading-[1.08] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[56px]">
          Engineer Your Market Authority.
        </h2>

        <p className="mt-6 max-w-[560px] text-[14px] font-semibold leading-[1.8] text-white/55 sm:text-[16px]">
          We connect strategic diagnosis, high-fidelity design, and performance
          media under one unified growth operating system. Build your brand
          architecture today.
        </p>

        <div className="mt-10 grid w-full max-w-[460px] grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            to="/contact"
            className="inline-flex min-h-[58px] items-center justify-center bg-white px-6 py-4 text-center text-[11px] font-black uppercase leading-[1.5] tracking-[0.12em] text-black transition hover:bg-[#0f33fe] hover:text-white"
          >
            Engage Heikaro <span className="ml-2">→</span>
          </Link>

          <Link
            to="/portfolio"
            className="inline-flex min-h-[58px] items-center justify-center border border-white/15 bg-transparent px-6 py-4 text-center text-[11px] font-black uppercase leading-[1.5] tracking-[0.12em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Review Proof System
          </Link>
        </div>

        <div className="mt-12 grid w-full max-w-[760px] grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-x-8">
          {steps.map((step) => (
            <div key={step.num} className="min-w-0 text-center">
              <div className="text-[13px] font-black leading-none text-white/55">
                {step.num}
              </div>

              <div className="mt-3 text-[10px] font-black uppercase leading-[1.4] tracking-[0.12em] text-white/45 sm:text-[11px] sm:tracking-[0.16em]">
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineerYourMarket;
