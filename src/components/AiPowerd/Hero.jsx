const Hero = () => {
  return (
    <section className="relative isolate w-full overflow-hidden px-[6%] py-24 min-h-[520px] flex flex-col justify-center bg-[#0d0d0d]">
      {/* Background Image */}
      <img
        src="/images/Ai/COVER.jpg"
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-[65%_center]"
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.72) 35%, rgba(13,13,13,0.35) 65%, rgba(13,13,13,0.08) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-xl">
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

        <p className="max-w-lg text-sm leading-relaxed text-white">
          Cinema-grade generative AI models fused with premium CGI and 3D
          product visualizations to bypass physical filming limits and unlock
          scale.
        </p>
      </div>
    </section>
  );
};

export default Hero;
