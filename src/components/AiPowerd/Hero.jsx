const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0d0d0d] px-[6%] py-24 min-h-[340px] flex flex-col justify-center">
      {/* ── Background image with dark overlay ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ai-video/hero-bg.jpg')",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      {/* ── Dark gradient overlay (fades left to right) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(13,13,13,0.95) 35%, rgba(13,13,13,0.55) 70%, rgba(13,13,13,0.2) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-xl">
        {/* Title */}
        <h1
          className="mb-6 font-black uppercase leading-none text-[#1a5fff]"
          style={{
            fontSize: "clamp(52px, 8vw, 108px)",
            letterSpacing: "-0.01em",
          }}
        >
          AI Video &amp;
          <br />
          CGI
        </h1>

        {/* Description */}
        <p className="max-w-lg text-sm leading-relaxed text-[#999999]">
          Cinema-grade generative AI models fused with premium CGI and 3D
          product visualizations to bypass physical filming limits and unlock
          scale.
        </p>
      </div>
    </section>
  );
};

export default Hero;
