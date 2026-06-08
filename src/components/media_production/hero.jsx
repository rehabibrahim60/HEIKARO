import React, { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 80);
  }, []);

  // Properties that have no Tailwind equivalent — kept as inline styles
  const gridStyle = {
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  };

  const titleStyle = {
    fontSize: "clamp(64px, 9vw, 130px)",
    lineHeight: "0.95",
    textShadow:
      "0 0 60px rgba(26,95,255,0.35), 0 0 120px rgba(26,95,255,0.15)",
  };

  const ghostStyle = {
    fontSize: "clamp(50px, 7.5vw, 110px)",
    lineHeight: "0.95",
    WebkitTextStroke: "1px rgba(255,255,255,0.07)",
  };

  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-[90px] pb-20">

      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={gridStyle}
        aria-hidden="true"
      />

      {/* ── Inner wrapper — px-[6%] matches MegaMenu padding ── */}
      <div className="relative z-10 px-[6%] max-w-[1400px]">

        

        {/* Title block */}
        <div className="relative w-full mb-8" ref={titleRef}>

          {/* Main title */}
          <h1
            className="relative z-10 m-0 font-black uppercase tracking-[-0.02em] text-[#1a5fff]"
            style={titleStyle}
          >
            MEDIA
            <br />
            PRODUCTION
          </h1>

          {/* Ghost watermark — hidden on mobile */}
          <span
            className="hidden md:block absolute top-1/2 left-[38%] -translate-y-1/2 z-[1]
                       font-black uppercase tracking-[-0.02em] text-transparent
                       whitespace-nowrap pointer-events-none select-none"
            style={ghostStyle}
            aria-hidden="true"
          >
            HEIKARO&nbsp;ASSET
          </span>
        </div>

        {/* Description */}
        <p className="max-w-[620px] text-[#888] text-[15px] leading-[1.75] m-0">
          Cinema-grade commercial and corporate video, professional photography,
          motion graphics, and virtual tours built to reflect your true enterprise
          value.
        </p>
      </div>
    </section>
  );
};

export default Hero;