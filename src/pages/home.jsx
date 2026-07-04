import { useState, useRef, useEffect } from "react";
import { API } from "../utils/api";
import "../pages/style/Portfolio.css";
import MarqueeSection from "../components/Home/MarqueeSection";
import EngineerYourMarket from "../components/common/ENGINEER_YOUR_MARKET";
import DirectionSection from "../components/Home/DirectionSection";
import StartWithBrief from "../components/Home/START_WITH_BRIEF";
import CapabilitiesSection from "../components/Home/CapabilitiesSection";
import CreativeSynthesis from "../components/Home/CreativeSynthesis";
import CaseArchitectures from "../components/Home/CaseArchitectures";
import ExecutionLoop from "../components/Home/ExecutionLoop";
import FrequencyLogic from "../components/Home/FrequencyLogic";

function IconFleeCursor() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isMobileOrTouch =
      window.matchMedia("(max-width: 1023px)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isMobileOrTouch) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = 150;
      const angle = Math.atan2(centerY - e.clientY, centerX - e.clientX);

      const newX = Math.cos(angle) * distance;
      const newY = Math.sin(angle) * distance;

      setOffset({
        x: newX * 0.5,
        y: newY * 0.5,
      });
    };

    const handleMouseLeave = () => {
      setOffset({ x: 0, y: 0 });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-icon-wrapper relative flex w-full max-w-[480px] justify-center"
    >
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-14 left-10 h-44 w-44 rounded-full border border-cyan-400/10 bg-cyan-500/5 blur-2xl" />

      <div
        className="hero-icon-card relative flex h-[380px] w-[320px] flex-col items-center justify-center rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.95),rgba(5,7,13,0))] p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <div className="mx-auto flex h-full w-full items-center justify-center overflow-hidden rounded-[24px]">
          <img
            src="/images/home/hero-icon-01.png"
            alt="Heikaro Logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadingSlides, setLoadingSlides] = useState(true);

  const defaultSlides = [
    {
      label: "Creative Powerhouse",
      heading: "We Build BRANDS That Move",
      description:
        "HEIKARO transforms ideas into structured brand, design, content, marketing, media, and digital experiences. Direction before design. Systems before decoration. Impact before noise.",
      buttons: [
        { text: "Start Your Growth", href: "contact", variant: "primary" },
        { text: "Explore Services", href: "services", variant: "secondary" },
      ],
    },
    {
      label: "Brand Systems",
      heading: "We Scale IDENTITY Global Brands",
      description:
        "Every visual, message, and interaction works as part of one connected creative system. Consistency that builds trust. Design that drives growth. Strategy that wins market share.",
      buttons: [
        { text: "EXPLORE DESIGN", href: "services", variant: "primary" },
        { text: "OUR WORK", href: "portfolio", variant: "secondary" },
      ],
    },
    {
      label: "Content & Storytelling",
      heading: "We Tell NARRATIVES With Purpose",
      description:
        "Connecting creative direction with execution across every customer touchpoint. Words that convert. Stories that stick. Content systems that scale your message.",
      buttons: [
        { text: "See the Stories", href: "portfolio", variant: "primary" },
        { text: "Read Blogs", href: "blog", variant: "secondary" },
      ],
    },
    {
      label: "Marketing & Growth",
      heading: "We Ignite GROWTH Next Era Brands",
      description:
        "Multi-channel acquisition strategy with AI-accelerated creative iterations. Growth is not a lucky break. It's a structured system of testing, learning, and scaling.",
      buttons: [
        { text: "SCALE YOUR BRAND", href: "contact", variant: "primary" },
      ],
    },
    {
      label: "Media & Production",
      heading: "We Create Cinema That Last",
      description:
        "Cinematic excellence that justifies premier positioning and drives emotional conversion. High-fidelity production for brands that demand perfection in every pixel.",
      buttons: [
        { text: "View Showreel", href: "portfolio", variant: "primary" },
      ],
    },
    {
      label: "Future Intelligence",
      heading: "We Build SYNTHESIS By Design",
      description:
        "AI-enhanced creative systems for brands ready to grow smarter. Blending human intuition with artificial intelligence to engineer impossible solutions.",
      buttons: [
        { text: "BUILD THE FUTURE", href: "contact", variant: "primary" },
      ],
    },
  ];

  const nextSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const contentRes = await fetch(`${API}/contentSlides`);
        const contentData = await contentRes.json();
        const allContentSlides = contentData.slides || [];

        const heroRes = await fetch(`${API}/home`);
        const heroData = await heroRes.json();
        const heroSlides = heroData.slides || [];
        const visibleIds = (heroData.visibleContentSlides || []).map(
          (v) => v._id || v,
        );

        const textSlides =
          allContentSlides.length === 0
            ? defaultSlides
            : visibleIds.length > 0
              ? allContentSlides.filter((s) => visibleIds.includes(s._id))
              : allContentSlides;

        const normalizedTextSlides = textSlides.map((s) => ({
          ...s,
          durationSeconds: s.durationSeconds || 10,
        }));

        const mediaSlides = heroSlides.map((s) => ({
          _id: s._id,
          label: "",
          heading: "",
          description: "",
          buttons: [],
          type: s.type,
          mediaUrl: s.imageUrl || s.videoUrl,
          showLogo: s.showLogo ?? true,
          showOverlay: s.showOverlay,
          overlayText: s.overlayText,
          order: s.order,
          durationSeconds: s.durationSeconds || 10,
          isMediaSlide: true,
        }));

        const combined = [...textSlides, ...mediaSlides].sort(
          (a, b) => (a.order ?? 99) - (b.order ?? 99),
        );

        setSlides(combined.length > 0 ? combined : defaultSlides);
      } catch {
        setSlides(defaultSlides);
      } finally {
        setLoadingSlides(false);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (currentSlide >= slides.length && slides.length > 0) {
      setCurrentSlide(0);
    }
  }, [slides, currentSlide]);

  useEffect(() => {
    if (slides.length === 0) return;

    const activeSlide = slides[currentSlide];
    const seconds = Number(activeSlide?.durationSeconds) || 10;

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, seconds * 1000);

    return () => clearTimeout(timer);
  }, [slides, currentSlide]);
  const slide = slides[currentSlide] || defaultSlides[0];

  let displaySlide = null;

  if (!slide.isMediaSlide) {
    displaySlide = slide;
  } else if (slide.type === "image" && slide.showOverlay && slide.overlayText) {
    displaySlide = {
      label: slide.overlayText.label || "",
      heading: slide.overlayText.heading || "",
      description: slide.overlayText.description || "",
      buttons: slide.overlayText.buttons || [],
    };
  }

  const showLogoCard = !slide.isMediaSlide
    ? true
    : slide.type === "image"
      ? (slide.showLogo ?? true)
      : false;

  return (
    <div
      id="homePageFontFix"
      className="home-page bg-[#020306] min-h-screen text-white"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <div className="relative min-h-screen overflow-hidden bg-[#020306] text-white">
        {" "}
        <div
          className={`pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top_right,_rgba(15,118,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(74,199,255,0.08),transparent_25%),linear-gradient(180deg,${
            slide.isMediaSlide
              ? "rgba(7,9,16,0.3),rgba(3,3,8,0.4)"
              : "rgba(7,9,16,0.92),rgba(3,3,8,0.98)"
          })]`}
        />
        {!slide.isMediaSlide && slide.backgroundImage ? (
          <div
            className="absolute inset-0 z-[1] opacity-55"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : !slide.isMediaSlide ? (
          <div className="absolute inset-0 z-[1] bg-[url('https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10" />
        ) : null}
        {slide.isMediaSlide && slide.mediaUrl && (
          <div className="absolute inset-0 z-[1] overflow-hidden bg-black">
            {slide.type === "video" ? (
              <>
                <video
                  key={`bg-${slide.mediaUrl}`}
                  src={slide.mediaUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hero-media-bg absolute inset-0 h-full w-full object-cover"
                />

                <video
                  key={`main-${slide.mediaUrl}`}
                  src={slide.mediaUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hero-media-main absolute inset-0 h-full w-full object-contain lg:object-cover"
                />
              </>
            ) : (
              <>
                <div
                  className="hero-media-bg absolute inset-0"
                  style={{
                    backgroundImage: `url(${slide.mediaUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <img
                  src={slide.mediaUrl}
                  alt=""
                  className="hero-media-main absolute inset-0 h-full w-full object-contain lg:object-cover"
                />
              </>
            )}
          </div>
        )}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1240px] flex-col items-center justify-center gap-8 px-4 pb-24 pt-28 sm:px-6 md:px-8 lg:min-h-[calc(100vh-110px)] lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10 lg:py-10">
          <div
            key={currentSlide}
            className="hero-slide-content hero-content-animate w-full max-w-[720px] flex-1 space-y-6 text-center lg:space-y-8 lg:text-left"
          >
            {loadingSlides ? (
              <div style={{ color: "#6b7280" }}>...</div>
            ) : displaySlide ? (
              <>
                {displaySlide.label && (
                  <div
                    className="hero-label mx-auto
                    inline-flex w-fit max-w-full items-center justify-center
                    gap-3 border border-white/20 bg-white/5 px-4 py-2 text-xs
                    font-black uppercase tracking-[0.35em] text-slate-200
                    lg:mx-0"
                  >
                    {displaySlide.label}
                  </div>
                )}

                <div className="space-y-6">
                  <h1 className="hero-title text-xl font-black uppercase leading-[0.9] text-white sm:text-2xl lg:text-[36px]">
                    <span className="hero-title-text bg-gradient-to-r from-white via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                      {displaySlide.heading}
                    </span>
                  </h1>

                  {displaySlide.description && (
                    <p className="hero-desc mx-auto max-w-3xl border-l border-lime-400 pl-5 text-left text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
                      {displaySlide.description}
                    </p>
                  )}
                </div>

                {displaySlide.buttons?.length > 0 && (
                  <div
                    className={`hero-buttons flex w-full flex-col gap-4 sm:w-auto ${
                      displaySlide.buttons.length === 1
                        ? "sm:w-fit"
                        : "sm:flex-row"
                    }`}
                  >
                    {displaySlide.buttons.map((btn, idx) => (
                      <a
                        key={idx}
                        href={btn.href}
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-sm px-8 py-3 text-sm font-semibold uppercase transition duration-300 sm:w-auto ${
                          btn.variant === "primary"
                            ? "bg-[#065bff] text-white hover:bg-white hover:text-black"
                            : "border border-white/30 bg-transparent text-white hover:border-blue-400 hover:text-blue-200"
                        }`}
                      >
                        {btn.text}

                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-8">
                <div style={{ height: 32 }} />

                <div className="space-y-6">
                  <div style={{ height: 40 }} />
                  <div style={{ height: 80 }} />
                </div>

                <div style={{ height: 48 }} />
              </div>
            )}
          </div>

          {showLogoCard && (
            <div className="hero-logo-wrap flex w-full flex-1 justify-center lg:justify-end">
              <IconFleeCursor />
            </div>
          )}
        </div>
        <div className="hero-controls absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center justify-between lg:bottom-10">
          {" "}
          <div className="hero-dots flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-blue-500"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="hero-arrows flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition duration-300 hover:border-blue-400 hover:bg-blue-500/10"
              aria-label="Previous slide"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition duration-300 hover:border-blue-400 hover:bg-blue-500/10"
              aria-label="Next slide"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MarqueeSection />

      <DirectionSection
        title="Direction Before Design"
        subtitle1="Creative systems built for brands that need clarity, presence, and growth."
        subtitle2="HEIKARO transforms ideas into structured brand, design, content, and digital experiences."
        buttonText="Start Your Brief"
        buttonHref="services"
        imagePath="/images/home/DirectionBeforeDesign.jpg"
        imagePosition="right"
      />

      <DirectionSection
        title="ONE CREATIVE SYSTEM"
        subtitle1="Brand, design, content, marketing, media, digital learning, AI, and events working together."
        subtitle2="HEIKARO organizes creative work into connected tracks that help brands move with clarity."
        buttonText="Explore Services"
        buttonHref="services"
        imagePath="/images/home/OneCreativeSystem.jpg"
        imagePosition="right"
      />

      <DirectionSection
        title="FROM IDEA TO EXECUTION"
        subtitle1="A FULL CREATIVE OPERATING MODEL FOR MODERN BRANDS."
        subtitle2="From strategy to launch, HEIKARO builds the system, the message, the visuals, and the experience."
        buttonText="View Portfolio"
        buttonHref="portfolio"
        imagePath="/images/home/fullCreativeOperatingModelForModernBrands.jpg"
        imagePosition="left"
      />

      <StartWithBrief />
      <CapabilitiesSection />
      <CreativeSynthesis />
      <CaseArchitectures />
      <ExecutionLoop />
      <FrequencyLogic />
      <EngineerYourMarket />

      <style>
        {`
          #homePageFontFix,
          #homePageFontFix *:not(svg):not(path) {
            font-family: "Aspekta", sans-serif !important;
          }

          #homePageFontFix h1,
          #homePageFontFix .hero-title {
            font-size: clamp(50px, 7vw, 92px) !important;
            line-height: 0.95 !important;
            font-weight: 900 !important;
            letter-spacing: -0.04em !important;
            text-transform: uppercase !important;
          }

          #homePageFontFix h2 {
            font-size: clamp(38px, 4.6vw, 60px) !important;
            line-height: 1.12 !important;
            font-weight: 900 !important;
            letter-spacing: -0.035em !important;
            text-transform: uppercase !important;
          }

          #homePageFontFix h3,
          #homePageFontFix h4,
          #homePageFontFix h5 {
            font-size: 24px !important;
            line-height: 1.3 !important;
            font-weight: 900 !important;
            letter-spacing: -0.02em !important;
            text-transform: uppercase !important;
          }

          #homePageFontFix p,
          #homePageFontFix [class*="desc"],
          #homePageFontFix [class*="description"],
          #homePageFontFix [class*="subtitle"],
          #homePageFontFix [class*="body"],
          #homePageFontFix [class*="copy"],
          #homePageFontFix [class*="paragraph"],
          #homePageFontFix [class*="text-gray"],
          #homePageFontFix [class*="text-slate"],
          #homePageFontFix [class*="text-neutral"],
          #homePageFontFix [class*="text-zinc"],
          #homePageFontFix [class*="text-white/"],
          #homePageFontFix .hero-desc {
            font-size: 20px !important;
            line-height: 1.9 !important;
            font-weight: 500 !important;
          }

          #homePageFontFix .text-xs,
          #homePageFontFix [class*="text-xs"],
          #homePageFontFix .text-sm,
          #homePageFontFix [class*="text-sm"],
          #homePageFontFix [class*="text-[10px]"],
          #homePageFontFix [class*="text-[11px]"],
          #homePageFontFix [class*="text-[12px]"],
          #homePageFontFix [class*="text-[13px]"],
          #homePageFontFix [class*="text-[14px]"],
          #homePageFontFix [class*="text-[15px]"] {
            font-size: 18px !important;
            line-height: 1.85 !important;
            font-weight: 500 !important;
          }

          #homePageFontFix li {
            font-size: 18px !important;
            line-height: 1.85 !important;
          }

          #homePageFontFix .hero-label,
          #homePageFontFix [class*="label"],
          #homePageFontFix [class*="tag"],
          #homePageFontFix [class*="eyebrow"],
          #homePageFontFix .mini-tag {
            font-size: 12px !important;
            line-height: 1.5 !important;
            font-weight: 900 !important;
            letter-spacing: 2.5px !important;
            text-transform: uppercase !important;
          }

          #homePageFontFix a,
          #homePageFontFix button {
            font-size: 14px !important;
            font-weight: 900 !important;
            letter-spacing: 1.4px !important;
          }

          #homePageFontFix .hero-title-text {
            font-size: inherit !important;
            line-height: inherit !important;
            font-weight: inherit !important;
          }

          @media (max-width: 768px) {
            #homePageFontFix h1,
            #homePageFontFix .hero-title {
              font-size: clamp(38px, 11vw, 58px) !important;
            }

            #homePageFontFix h2 {
              font-size: 32px !important;
            }

            #homePageFontFix h3,
            #homePageFontFix h4,
            #homePageFontFix h5 {
              font-size: 20px !important;
            }

            #homePageFontFix p,
            #homePageFontFix [class*="desc"],
            #homePageFontFix [class*="description"],
            #homePageFontFix [class*="subtitle"],
            #homePageFontFix [class*="body"],
            #homePageFontFix [class*="copy"],
            #homePageFontFix [class*="paragraph"],
            #homePageFontFix [class*="text-gray"],
            #homePageFontFix [class*="text-slate"],
            #homePageFontFix [class*="text-neutral"],
            #homePageFontFix [class*="text-zinc"],
            #homePageFontFix .hero-desc {
              font-size: 16px !important;
              line-height: 1.8 !important;
            }

            #homePageFontFix .text-xs,
            #homePageFontFix [class*="text-xs"],
            #homePageFontFix .text-sm,
            #homePageFontFix [class*="text-sm"] {
              font-size: 15px !important;
            }
          }

          html,
body,
#root {
  width: 100%;
  overflow-x: hidden;
}

#homePageFontFix {
  width: 100%;
  overflow-x: hidden;
}

#homePageFontFix img,
#homePageFontFix video {
  max-width: 100%;
}

#homePageFontFix section {
  max-width: 100%;
  overflow-x: hidden;
}

#homePageFontFix .hero-buttons a {
  min-height: 48px;
}

@media (max-width: 1024px) {
  #homePageFontFix .hero-slide-content {
    max-width: 820px !important;
  }

  #homePageFontFix .hero-logo-wrap {
    margin-top: 10px;
  }

  #homePageFontFix .hero-icon-wrapper {
    max-width: 360px;
  }

  #homePageFontFix .hero-icon-card {
    width: 280px !important;
    height: 320px !important;
    padding: 18px !important;
  }
}

@media (max-width: 768px) {
  #homePageFontFix h1,
  #homePageFontFix .hero-title {
    font-size: clamp(36px, 11vw, 54px) !important;
    line-height: 1 !important;
    letter-spacing: -0.035em !important;
  }

  #homePageFontFix h2 {
    font-size: clamp(28px, 8vw, 36px) !important;
  }

  #homePageFontFix .hero-desc {
    font-size: 15px !important;
    line-height: 1.75 !important;
    padding-left: 14px !important;
  }

  #homePageFontFix .hero-label {
    max-width: 100%;
    font-size: 10px !important;
    letter-spacing: 1.8px !important;
    text-align: center;
    white-space: normal;
  }

  #homePageFontFix .hero-buttons {
    width: 100%;
  }

  #homePageFontFix .hero-buttons a {
    width: 100%;
    padding: 13px 18px !important;
  }

  #homePageFontFix .hero-icon-wrapper {
    max-width: 280px;
  }

  #homePageFontFix .hero-icon-card {
    width: 230px !important;
    height: 260px !important;
    border-radius: 24px !important;
    padding: 14px !important;
  }

  #homePageFontFix .hero-arrows button {
    width: 42px !important;
    height: 42px !important;
  }
}

@media (max-width: 480px) {
  #homePageFontFix h1,
  #homePageFontFix .hero-title {
    font-size: clamp(32px, 12vw, 46px) !important;
  }

  #homePageFontFix .hero-slide-content {
    space-y: 20px;
  }

  #homePageFontFix .hero-desc {
    font-size: 14px !important;
    line-height: 1.7 !important;
  }

  #homePageFontFix .hero-icon-card {
    width: 200px !important;
    height: 220px !important;
  }
}

@media (max-width: 768px) {
  #homePageFontFix .hero-video {
    object-fit: contain !important;
    object-position: center center !important;
    background: #000 !important;
  }
}

#homePageFontFix .hero-media-bg {
  opacity: 0;
  pointer-events: none;
}

#homePageFontFix .hero-media-main {
  opacity: 0.9;
}

@media (max-width: 768px) {
  #homePageFontFix .hero-media-bg {
    opacity: 0.75;
    filter: blur(18px);
    transform: scale(1.15);
  }

  #homePageFontFix .hero-media-main {
    object-fit: contain !important;
    object-position: center center !important;
    opacity: 1 !important;
  }
}

#homePageFontFix .hero-controls {
  width: max-content;
  max-width: calc(100% - 32px);
}

#homePageFontFix .hero-dots {
  min-height: 42px;
}

#homePageFontFix .hero-arrows {
  min-height: 42px;
}

@media (max-width: 480px) {
  #homePageFontFix .hero-controls {
    gap: 14px !important;
    bottom: 28px !important;
  }

  #homePageFontFix .hero-arrows {
    gap: 10px !important;
  }

  #homePageFontFix .hero-arrows button {
    width: 40px !important;
    height: 40px !important;
  }
}

#homePageFontFix .hero-controls {
  width: clamp(190px, 26vw, 360px);
  max-width: calc(100% - 32px);
}

#homePageFontFix .hero-dots {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
}

#homePageFontFix .hero-arrows {
  display: flex;
  align-items: center;
  gap: clamp(10px, 1.2vw, 18px);
  min-height: 42px;
}

@media (max-width: 480px) {
  #homePageFontFix .hero-controls {
    width: 190px;
    bottom: 28px !important;
  }

  #homePageFontFix .hero-arrows button {
    width: 40px !important;
    height: 40px !important;
  }
}

@media (min-width: 768px) {
  #homePageFontFix .hero-controls {
    width: 280px;
  }
}

@media (min-width: 1024px) {
  #homePageFontFix .hero-controls {
    width: 360px;
  }
}
        `}
      </style>
    </div>
  );
}
