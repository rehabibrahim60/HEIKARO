export default function MarqueeSection() {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=680&q=80',
            tag: 'Brand Identity'
        },
        {
            url: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=680&q=80',
            tag: 'Campaign'
        },
        {
            url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=680&q=80',
            tag: 'Digital Design'
        },
        {
            url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=680&q=80',
            tag: 'Photography'
        },
        {
            url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=680&q=80',
            tag: 'Production'
        },
        {
            url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=680&q=80',
            tag: 'Strategy'
        }
    ];

    // Duplicate for seamless loop
    const extendedImages = [...images, ...images];

    return (
        <section className="relative overflow-hidden bg-[#020306] py-20">
            {/* Background gradients */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(15,118,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(74,199,255,0.06),transparent_35%)]" />

            {/* Header */}
            <div className="relative z-10 mb-12 px-6 text-center lg:px-10">


                <h2 className="mx-auto mb-4 max-w-2xl text-4xl font-black leading-[1.15] text-white sm:text-5xl lg:text-[1.5rem]">
                    <span className="bg-gradient-to-r from-slate-100 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                        Global Brands Powered by HEIKARO OS
                    </span>
                </h2>

            </div>

            {/* Marquee Track */}
            <div className="relative z-10 overflow-hidden">
                {/* Left gradient fade */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-32 bg-gradient-to-r from-[#020306] to-transparent" />

                {/* Right gradient fade */}
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-32 bg-gradient-to-l from-[#020306] to-transparent" />

                <div className="flex gap-5 animate-[marquee_28s_linear_infinite] hover:pause">
                    <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-\[marquee_28s_linear_infinite\]:hover {
              animation-play-state: paused;
            }
          `}</style>

                    {extendedImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative flex-shrink-0 h-56 w-96 overflow-hidden rounded-1xl border border-white/[0.07] bg-[#0d1117]"
                        >
                            <img
                                src={image.url}
                                alt={image.tag}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-104"
                                loading="lazy"
                            />

                            {/* Overlay gradient */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(2,3,6,0.65)] via-transparent to-transparent" />

                            {/* Tag */}
                            <span className="absolute bottom-3.5 left-3.5 inline-flex items-center rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-xs uppercase -[0.2em] text-white/70 backdrop-blur-sm">
                                {image.tag}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}