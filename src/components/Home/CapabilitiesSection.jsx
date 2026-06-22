import Tracks from "./Tracks";

export default function CapabilitiesSection() {
  return (
    <section
      className="home-capabilities-section bg-[#050505] px-6 py-28 text-white lg:px-20"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <style>
        {`
          .home-capabilities-section,
          .home-capabilities-section * {
            font-family: "Aspekta", sans-serif !important;
          }

          .home-capabilities-section h2 {
            font-size: clamp(40px, 5vw, 64px) !important;
            line-height: 1.05 !important;
            font-weight: 900 !important;
            letter-spacing: -0.04em !important;
          }

          .home-capabilities-section h3,
          .home-capabilities-section h4 {
            font-size: 24px !important;
            line-height: 1.25 !important;
            font-weight: 900 !important;
          }

          .home-capabilities-section p,
          .home-capabilities-section span,
          .home-capabilities-section li,
          .home-capabilities-section [class*="text-sm"],
          .home-capabilities-section [class*="text-xs"],
          .home-capabilities-section [class*="text-[10px]"],
          .home-capabilities-section [class*="text-[11px]"],
          .home-capabilities-section [class*="text-[12px]"],
          .home-capabilities-section [class*="text-[13px]"],
          .home-capabilities-section [class*="text-[14px]"] {
            font-size: 17px !important;
            line-height: 1.8 !important;
          }

          .home-capabilities-section .capabilities-label {
            font-size: 13px !important;
            line-height: 1.5 !important;
            font-weight: 900 !important;
            letter-spacing: 0.35em !important;
          }
        `}
      </style>

      <div className="mx-auto max-w-[1240px]">
        <p className="capabilities-label mb-6 text-[13px] font-black uppercase tracking-[0.35em] text-white/40">
          Our Capabilities
        </p>

        <h2 className="max-w-[850px] text-[40px] font-black uppercase leading-[1.05] tracking-[-0.04em] text-white md:text-[52px] lg:text-[64px]">
          Unified Brand Architecture.
          <br />
          <span className="text-[#0f33fe]">8 Strategic Tracks.</span>
        </h2>

        <div className="mt-24">
          <Tracks />
        </div>
      </div>
    </section>
  );
}