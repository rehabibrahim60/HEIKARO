const Hero = () => {
    return (
        <section
            className="relative w-full overflow-hidden bg-[#0d0d0d] py-24 px-[6%]"

        >
            {/* Watermark background text */}
            <span
                className="pointer-events-none absolute right-[4%] top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-black uppercase leading-none text-white"
                style={{ fontSize: "clamp(60px, 10vw, 130px)", opacity: 0.04, letterSpacing: "0.05em" }}
                aria-hidden="true"
            >
                HEIKARO ASSET
            </span>

            {/* Content */}
            <div className="relative z-10 max-w-2xl">
                {/* Label badge */}
                <div className="mb-6 inline-flex items-center border border-[#2e2e2e] px-3 py-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                        E-Learning Ecosystems
                    </span>
                </div>

                {/* Main heading */}
                <h1
                    className="mb-6 font-black uppercase leading-none text-[#1a5fff]"
                    style={{ fontSize: "clamp(45px, 6vw, 112px)", letterSpacing: "-0.01em" }}
                >
                    Digital
                    <br />
                    Learning
                </h1>

                {/* Description */}
                <p className="max-w-lg ml-20 text-base leading-relaxed text-[#999999]">
                    Digital learning ecosystems and interactive content structures designed to
                    turn flat information sheets into masterfully paced, high-retention learner
                    paths.
                </p>
            </div>
        </section>
    );
};

export default Hero;
