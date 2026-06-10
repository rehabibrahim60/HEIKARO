import { useState, useRef, useEffect } from 'react';
import "../pages/Portfolio.css";
import MarqueeSection from '../components/MarqueeSection';
import EngineerYourMarket from '../components/ENGINEER_YOUR_MARKET';
import StartWithClarity from '../components/START_WITH_CLARITY';
import DirectionSection from '../components/DirectionSection';
import StartWithBrief from '../components/START_WITH_BRIEF';
import CapabilitiesSection from "../components/CapabilitiesSection";
import CreativeSynthesis from "../components/CreativeSynthesis";
import CaseArchitectures from "../components/CaseArchitectures";
import ExecutionLoop from "../components/ExecutionLoop";
import FrequencyLogic from "../components/FrequencyLogic";


const slides = [
  {
    label: 'Creative Powerhouse',
    heading: 'We Build BRANDS That Move',
    description: 'HEIKARO transforms ideas into structured brand, design, content, marketing, media, and digital experiences. Direction before design. Systems before decoration. Impact before noise.',
    buttons: [
      { text: 'Start Your Growth', href: '#contact', variant: 'primary' },
      { text: 'Explore Services', href: '#services', variant: 'secondary' }
    ]
  },
  {
    label: 'Brand Systems',
    heading: 'We Scale IDENTITY Global Brands',
    description: 'Every visual, message, and interaction works as part of one connected creative system.Consistency that builds trust.Design that drives growth.Strategy that wins market share.',
    buttons: [
      { text: 'EXPLORE DESIGN', href: '#services', variant: 'primary' },
      { text: 'OUR WORK', href: '#portfolio', variant: 'secondary' }
    ]
  },
  {
    label: 'Content & Storytelling',
    heading: 'We Tell NARRATIVES With Purpose',
    description: 'Connecting creative direction with execution across every customer touchpoint. Words that convert.Stories that stick.Content systems that scale your message.',
    buttons: [
      { text: 'See the Stories', href: '#portfolio', variant: 'primary' },
      { text: 'Read Blogs', href: '#blog', variant: 'secondary' }
    ]
  },
  {
    label: 'Marketing & Growth',
    heading: 'We Ignite GROWTH Next Era Brands',
    description: 'Multi-channel acquisition strategy with AI-accelerated creative iterations. Growth is not a lucky break.It\'s a structured system of testing, learning, and scaling.',
    buttons: [
      { text: 'SCALE YOUR BRAND', href: '#contact', variant: 'primary' },

    ]
  },
  {
    label: 'Media & Production',
    heading: 'We create cinema that last',
    description: 'Cinematic excellence that justifies premier positioning and drives emotional conversion. High- fidelity production for brands that demand perfection in every pixel.',
    buttons: [
      { text: 'View Showreel', href: '#portfolio', variant: 'primary' }
    ]
  },

  {
    label: 'Future Intelligence',
    heading: 'We Build SYNTHESIS By Design',
    description: 'AI-enhanced creative systems for brands ready to grow smarter. Blending human intuition with artificial intelligence to engineer impossible solutions.',
    buttons: [
      { text: 'BUILD THE FUTURE', href: '#contact', variant: 'primary' }
    ]
  }
];

function IconFleeCursor() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
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
        y: newY * 0.5
      });
    };



    const handleMouseLeave = () => {
      setOffset({ x: 0, y: 0 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full max-w-[480px] justify-center"
    >
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-14 left-10 h-44 w-44 rounded-full border border-cyan-400/10 bg-cyan-500/5 blur-2xl" />
      <div
        className="relative flex h-[380px] w-[320px] flex-col items-center justify-center rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.95),rgba(5,7,13,0.8))] p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`
        }}
      >
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[24px] bg-blue-500/15 ring-2 ring-blue-300/20 backdrop-blur-xl">
          <span className="text-4xl font-black tracking-tight text-cyan-200">H</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 ثواني

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-[#020306] text-white pt-[110px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(15,118,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(74,199,255,0.08),transparent_25%),linear-gradient(180deg,rgba(7,9,16,0.92),rgba(3,3,8,0.98))]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-110px)] max-w-[1240px] flex-col items-stretch gap-0 px-6 py-10 lg:flex-row lg:items-center lg:gap-12 lg:px-10">
          {/* Left Content */}
          <div key={currentSlide} className="hero-slide-content max-w-2xl space-y-8 flex-1">
            <div className="hero-label inline-flex items-center gap-3 border border-white/20 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-slate-200 w-fit">
              {slide.label}
            </div>

            <div className="space-y-6">
              <h1 className="hero-title text-xl font-black uppercase leading-[0.9] text-white sm:text-2xl lg:text-[36px]">
                <span className="hero-title-text bg-gradient-to-r from-white via-cyan-300 to-lime-300 bg-clip-text text-transparent">
                  {slide.heading}
                </span>
              </h1>

              <p className="hero-desc max-w-3xl border-l border-lime-400 pl-5 text-base leading-8 text-slate-300 sm:text-lg">
                {slide.description}
              </p>
            </div>

            <div className={`hero-buttons flex flex-col gap-4 ${slide.buttons.length === 1 ? 'sm:w-fit' : 'sm:flex-row'}`}>
              {slide.buttons.map((btn, idx) => (
                <a
                  key={idx}
                  href={btn.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3 text-sm font-semibold uppercase  transition duration-300 ${btn.variant === 'primary'
                    ? 'bg-[#065bff] text-white hover:bg-white hover:text-black'
                    : 'border border-white/30 bg-transparent text-white hover:border-blue-400 hover:text-blue-200'
                    }`}
                >
                  {btn.text}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Navigation Controls Below Buttons */}
            <div className="flex items-center gap-2 pt-4">
              {/* Dots on Left */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'w-8 bg-blue-500'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Icon with Flee Animation */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <IconFleeCursor />
          </div>
        </div>

        {/* Arrow Buttons at Far Right - Aligned with Hero */}
        <div className="absolute bottom-10 right-6 lg:right-10 z-20 flex items-center gap-4">
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
        {/* image slider section */}

      </div>
      <MarqueeSection />
      <DirectionSection
        title="Direction Before Design"
        subtitle1="Creative systems built for brands that need clarity, presence, and growth."
        subtitle2="HEIKARO transforms ideas into structured brand, design, content, and digital experiences."
        buttonText="Start Your Brief"
        buttonHref="#services"
        imagePosition="right"
      />
      <DirectionSection
        title="ONE CREATIVE SYSTEM"
        subtitle1="Brand, design, content, marketing, media, digital learning, AI, and events working together."
        subtitle2="HEIKARO organizes creative work into connected tracks that help brands move with clarity."
        buttonText="Explore Services"
        buttonHref="#services"
        imagePosition="right"
      />

      <DirectionSection
        title="FROM IDEA TO EXECUTION"
        subtitle1="A FULL CREATIVE OPERATING MODEL FOR MODERN BRANDS."
        subtitle2="From strategy to launch, HEIKARO builds the system, the message, the visuals, and the experience."
        buttonText="View Portfolio"
        buttonHref="#portfolio"
        imagePosition="left"
      />
      <StartWithBrief />
      <CapabilitiesSection />
      <CreativeSynthesis />
      <CaseArchitectures />
      <ExecutionLoop />
      <FrequencyLogic />
      <EngineerYourMarket />
      <StartWithClarity />
    </>
  );
}
