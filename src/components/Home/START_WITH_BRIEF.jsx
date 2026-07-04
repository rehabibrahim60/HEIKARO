export default function StartWithBrief() {
  return (
    <section
      className="bg-black px-6 py-12 text-white lg:px-10 lg:py-16"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <div className="mx-auto max-w-[1240px] border border-white/10 bg-[#050505]">
        <div className="px-8 py-12 sm:px-12 lg:px-20 lg:py-14">
          <h2 className="max-w-[720px] text-[40px] font-black uppercase leading-[1.02] tracking-[-0.04em] text-white md:text-[52px] lg:text-[64px]">
            Start With A Clear
            <br />
            Brief
          </h2>

          <p className="mt-7 max-w-[720px] text-[18px] font-black uppercase leading-[1.7] tracking-[0.04em] text-[#bbfe0f]">
            The Stronger The Brief, The Stronger The Output.
          </p>

          <p className="mt-6 max-w-[700px] text-[19px] font-medium leading-[1.85] text-[#94A3B8]">
            Start your project with HEIKARO through a structured creative brief.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center justify-center bg-[#0A5BFF] px-10 py-4 text-[14px] font-black uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Start Your Brief
          </a>
        </div>
      </div>
    </section>
  );
}
