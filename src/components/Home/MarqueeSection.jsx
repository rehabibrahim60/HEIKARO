export default function MarqueeSection() {
  const images = [
    { url: "/images/home/Asset2.png", tag: "Karas eBokas" },
    { url: "/images/home/Asset1.png", tag: "Snell" },
    { url: "/images/home/Asset3.png", tag: "Germed" },
    { url: "/images/home/Asset4.png", tag: "Brand" },
    { url: "/images/home/Asset5.png", tag: "Adinfix" },
    { url: "/images/home/Asset7.png", tag: "Brand" },
    { url: "/images/home/Asset8.png", tag: "Brand" },
    { url: "/images/home/Asset9.png", tag: "Brand" },
    { url: "/images/home/Asset10.png", tag: "Brand" },
    { url: "/images/home/Asset11.png", tag: "Brand" },
    { url: "/images/home/12.png", tag: "Brand" },
    { url: "/images/home/Asset13.png", tag: "Brand" },
  ];

  const extendedImages = [...images, ...images];

  return (
    <section className="relative overflow-hidden bg-[#050505] py-20">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,51,254,0.08),transparent_35%)]" />

      {/* Header */}
      <div className="relative z-10 mb-12 px-6 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.55em] text-[#0f33fe]">
          Global Brands Powered by HEIKARO OS
        </p>
      </div>

      {/* Marquee */}
      <div className="relative z-10 overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-36 bg-gradient-to-r from-[#050505] to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-36 bg-gradient-to-l from-[#050505] to-transparent" />

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            animation: marquee 32s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-track flex items-center gap-24">
          {extendedImages.map((image, index) => (
            <div
              key={index}
              className="flex h-[90px] w-[210px] flex-shrink-0 items-center justify-center"
            >
              <img
                src={image.url}
                alt={image.tag}
                loading="lazy"
                className="max-h-[70px] max-w-[190px] object-contain opacity-35 transition-all duration-300 hover:opacity-80"
                style={{
                  filter: "grayscale(1) brightness(0.55)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
