import { useEffect, useState } from "react";

export default function MarqueeSection() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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

  useEffect(() => {
    const checkTouchDevice = () => {
      const touch =
        window.matchMedia("(hover: none)").matches ||
        window.matchMedia("(pointer: coarse)").matches;

      setIsTouchDevice(touch);
    };

    checkTouchDevice();

    window.addEventListener("resize", checkTouchDevice);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, []);

  const handleMarqueeClick = () => {
    if (!isTouchDevice) return;

    setIsPaused((prev) => !prev);
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 sm:py-20">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,51,254,0.08),transparent_35%)]" />

      {/* Header */}
      <div className="relative z-10 mb-10 px-6 text-center sm:mb-12">
        <p className="text-[9px] font-black uppercase tracking-[0.32em] text-[#0f33fe] sm:text-[10px] sm:tracking-[0.55em]">
          Global Brands Powered by HEIKARO OS
        </p>
      </div>

      {/* Marquee */}
      <div
        className="relative z-10 overflow-hidden"
        onClick={handleMarqueeClick}
      >
        {/* Left fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-[#050505] to-transparent sm:w-36" />

        {/* Right fade */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-[#050505] to-transparent sm:w-36" />

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
            width: max-content;
            animation: marquee 42s linear infinite;
            will-change: transform;
          }

          .marquee-track.is-paused {
            animation-play-state: paused;
          }

          /* Desktop / laptop only: pause with hover */
          @media (hover: hover) and (pointer: fine) {
            .marquee-track:hover {
              animation-play-state: paused;
            }
          }

          /* Tablet */
          @media (max-width: 768px) {
            .marquee-track {
              animation-duration: 34s;
            }
          }

          /* Mobile */
          @media (max-width: 480px) {
            .marquee-track {
              animation-duration: 30s;
            }
          }
        `}</style>

        <div
          className={`marquee-track flex items-center gap-10 md:gap-14 lg:gap-16 ${
            isPaused ? "is-paused" : ""
          }`}
        >
          {extendedImages.map((image, index) => (
            <div
              key={index}
              className="flex h-[78px] w-[165px] flex-shrink-0 items-center justify-center sm:h-[90px] sm:w-[210px]"
            >
              <img
                src={image.url}
                alt={image.tag}
                loading="lazy"
                className="max-h-[58px] max-w-[145px] object-contain opacity-35 transition-all duration-300 hover:opacity-80 sm:max-h-[70px] sm:max-w-[190px]"
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
