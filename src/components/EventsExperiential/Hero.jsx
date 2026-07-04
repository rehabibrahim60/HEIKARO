const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#0d0d0d] px-[6%] py-28 min-h-[380px] flex flex-col justify-center">

            {/* ── Background image ── */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/events/hero-bg.jpg')",
                    opacity: 0.3,
                }}
                aria-hidden="true"
            />

            {/* ── Left-to-right gradient (content side darker) ── */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to right, rgba(13,13,13,0.85) 30%, rgba(13,13,13,0.4) 70%, rgba(13,13,13,0.15) 100%)",
                }}
                aria-hidden="true"
            />

            {/* ── Content ── */}
            <div className="relative z-10 max-w-xl">

                {/* Label badge */}
                <div className="mb-7 inline-flex items-center border border-[#2e2e2e] px-3 py-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                        Services 08 // Brand Environments
                    </span>
                </div>

                {/* Title */}
                <h1
                    className="mb-7 font-black uppercase leading-none text-[#1a5fff]"
                    style={{ fontSize: "clamp(52px, 8vw, 108px)", letterSpacing: "-0.01em" }}
                >
                    Events &amp;
                    <br />
                    Experiential
                </h1>

                {/* Description */}
                <p className="max-w-lg text-sm leading-relaxed text-[#999999]">
                    Turn flat physical rooms, exhibition booths, and digital meeting places into
                    highly tactical, narrative-driven spatial branding environments.
                </p>

            </div>
        </section>
    );
};

export default Hero;
