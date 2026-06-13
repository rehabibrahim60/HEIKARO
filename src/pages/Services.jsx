import React from 'react';
import { Link } from 'react-router-dom';
import StartWithClarity from '../components/common/START_WITH_CLARITY';


const servicesData = [
  {
    num: "01",
    icon: "🎨",
    title: "BRAND & IDENTITY",
    desc: "Translate your vision into a disciplined visual and strategic asset that benchmarks industry excellence.",
    capabilities: 6,
    tags: ["MARKET AUTHORITY", "INSTANT RECOGNITION", "STRATEGIC CONSISTENCY"],
    link: "/services/brand-identity",
  },
  {
    num: "02",
    icon: "🖥",
    title: "DESIGN & EXPERIENCE",
    desc: "Bridge the gap between aesthetic sophistication and functional conversion performance.",
    capabilities: 4,
    tags: ["USER RETENTION", "CONVERSION SURGE", "OPERATIONAL SPEED"],
    link: "/services/design-experience",
  },
  {
    num: "03",
    icon: "📄",
    title: "CONTENT & STORYTELLING",
    desc: "Shift from random acts of content to a structured storytelling system that builds durable brand equity.",
    capabilities: 4,
    tags: ["MARKET ADVOCACY", "AUDIENCE GROWTH", "STRATEGIC NARRATIVE"],
    link: "/services/content-storytelling",
  },
  {
    num: "04",
    icon: "📈",
    title: "MARKETING & GROWTH",
    desc: "Deploy creative that is engineered to scale, backed by real-time performance analytics.",
    capabilities: 4,
    tags: ["REVENUE EXPANSION", "CAC REDUCTION", "PREDICTABLE GROWTH"],
    link: "/services/marketing-growth",
  },
  {
    num: "05",
    icon: "🎬",
    title: "MEDIA & PRODUCTION",
    desc: "Cinematic excellence that justifies premier positioning and drives emotional conversion.",
    capabilities: 6,
    tags: ["PREMIUM POSITIONING", "EMOTIONAL IMPACT", "CINEMATIC PROOF"],
    link: "/services/media-production",
  },
  {
    num: "06",
    icon: "📚",
    title: "DIGITAL LEARNING EXPERIENCE",
    desc: "Standardize excellence by moving from traditional training to immersive capacity building systems.",
    capabilities: 4,
    tags: ["KNOWLEDGE RETENTION", "STANDARDIZED QUALITY", "OPERATIONAL SCALE"],
    link: "/services/digital-learning",
  },
  {
    num: "07",
    icon: "⚙️",
    title: "AI-POWERED VIDEO & CGI",
    desc: "Generate impossible visual worlds at strategic speed, blending imagination with technical precision.",
    capabilities: 5,
    tags: ["VISUAL UNIQUENESS", "PRODUCTION SPEED", "FUTURE-PROOFING"],
    link: "/services/ai-video-cgi",
  },
  {
    num: "08",
    icon: "🎯",
    title: "EVENTS & EXPERIENTIAL",
    desc: "We shape events as designed experience systems that connect audience emotion with brand purpose.",
    capabilities: 8,
    tags: ["MEMORABLE AUDIENCE EXPERIENCES", "STRONGER BRAND STORYTELLING", "DIRECT STAKEHOLDER TRUST"],
    link: "/services/events-experiential",
  },
];

export default function Services() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center px-[8%] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/hero-bg.jpg.jpeg')" }} />
        <div className="absolute inset-0 bg-black/80 z-0" />
        <div className="absolute bottom-0 right-0 z-0 text-[8rem] md:text-[14rem] font-extrabold text-white/5 select-none pointer-events-none leading-none">
          HEIKARO ASSET
        </div>
        <div className="relative z-10">
          <div className="border border-white/30 px-4 py-2 w-fit mb-8">
            <span className="text-white text-xs tracking-[3px] uppercase">CAPABILITIES ARCHITECTURE</span>
          </div>
          <h1 className="text-[6rem] md:text-[10rem] font-extrabold leading-[0.9] text-[#007bff] mb-8">
            SERVICES
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-[500px]">
            Strategic creative services designed as systems, not isolated outputs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#0a0a0a] py-24 px-[8%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#222]">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="relative border-r border-b border-[#222] p-8 flex flex-col justify-between min-h-[500px] overflow-hidden group"
            >
              {/* البوردر اللي بيجي من شمال لليمين */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#007bff] transition-all duration-500 group-hover:w-full z-10" />

              <div>
                {/* الأيقونة والرقم */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 border border-[#222] group-hover:border-[#007bff] transition-colors duration-300 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <span className="text-gray-600 group-hover:text-[#b0f200] font-mono text-sm transition-colors duration-300">{item.num}</span>
                </div>

                {/* العنوان */}
                <h3 className="text-white group-hover:text-[#007bff] transition-colors duration-300 font-bold text-xl uppercase leading-tight mb-4">
                  {item.title}
                </h3>

                {/* الوصف */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>

                {/* عدد الـ capabilities */}
                <div className="border border-[#222] px-3 py-1 w-fit mb-8">
                  <span className="text-gray-500 text-xs tracking-[2px]">{item.capabilities} CAPABILITIES</span>
                </div>
              </div>

              <div>
                {/* التاجز */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="border border-[#b0f200] px-2 py-1 text-[10px] text-[#b0f200] tracking-[1px]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* الزر */}
                <Link
                  to={item.link}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-gray-500 group-hover:text-[#007bff] transition-all duration-300"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">EXPLORE TRACK</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>
      {/* Section - How Services Work Together */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
        <div className="text-center mb-16">
          <p className="text-[#007bff] font-bold tracking-[3px] text-xs uppercase mb-4">
            UNIFIED OPERATING MODEL
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            How HEIKARO Services Work Together
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Our 8 operating services are designed as modular nodes of a single high-performance brand growth engine. Instead of hiring separate branding agencies, dev houses, video production studios, and performance agencies, HEIKARO integrates these capabilities under a single operational standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "QUALITY CONTROL", title: "UNIFIED AUDITS" },
            { label: "EXECUTION SPEED", title: "AI-ENHANCED WORKFLOWS" },
            { label: "BRAND UNITY", title: "SINGLE TONE OF VOICE" },
            { label: "CAPITAL EFFICIENCY", title: "CONSOLIDATED AGENCY FEES" },
          ].map((item, index) => (
            <div key={index} className="border border-[#222] p-8 text-center hover:border-[#333] transition-colors">
              <p className="text-[#b0f200] font-bold tracking-[2px] text-xs uppercase mb-3">{item.label}</p>
              <h3 className="text-white font-bold text-sm uppercase leading-tight">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* Section - Recommended Service Combinations */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
        <div className="text-center mb-16">
          <p className="text-[#b0f200] font-bold tracking-[3px] text-xs uppercase mb-4">
            STRATEGIC BLUEPRINTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recommended Service Combinations
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Connect complementary capabilities to fast-track specific company milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              combo: "COMBO 1",
              title: "The Ultimate Launch Blueprint",
              target: "EARLY-STAGE OR EXPANDING PRODUCTS",
              desc: "Establishes institutional market authority with an elite web app, premium product film, and fully packaged branding system ready for investment.",
              services: "Brand & Identity + Design & Experience + Media & Production",
            },
            {
              combo: "COMBO 2",
              title: "High-Performance Growth Loop",
              target: "ACTIVE DIGITAL SCALING BRANDS",
              desc: "Establishes a high-velocity localized content system driven by performance marketing, hyper-optimized conversion landing pages, and cinematic social ads.",
              services: "Marketing & Growth + Content & Storytelling + AI-Powered Video & CGI",
            },
            {
              combo: "COMBO 3",
              title: "Enterprise Transformation Suite",
              target: "LEGACY CORPORATE BRANDS",
              desc: "Modernizes organizational reputation, aligns interior team training via state-of-the-art interactive platforms, and deploys milestone hybrid events.",
              services: "Brand & Identity + Digital Learning Experience + Events & Experiential",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-[#222] p-8 flex flex-col justify-between min-h-[400px] group hover:border-[#b0f200]/30 transition-colors duration-300 cursor-pointer"
            >
              <div>
                <div className="border border-[#b0f200]/20 px-2 py-[2px] w-fit mb-4">
                  <span className="text-[#b0f200]/50 text-[10px] tracking-[2px]">{item.combo}</span>
                </div>

                <h3 className="text-white group-hover:text-[#007bff] transition-colors duration-300 font-bold text-xl mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs tracking-[2px] uppercase mb-4">{item.target}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#222]">
                <p className="text-gray-600 text-xs uppercase tracking-[2px] mb-2">COMBINED SERVICES</p>
                <p className="text-white text-sm font-medium">{item.services}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Section - The Creative Growth Operating Standard */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white font-bold tracking-[3px] text-xs uppercase mb-8">
            THE CREATIVE GROWTH OPERATING STANDARD
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Under HEIKARO's modern operating model, we unify disparate marketing-communication channels into responsive, highly structured platforms. Our approach encompasses Brand Identity development, interactive UI/UX design, full-scale front-end engineering, conversion-focused analytics, production services, and corporate learning experiences in a single, unified workflow.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            By treating content and design as an integrated operating system, we eliminate the operational overhead, communication gaps, and inconsistent executions typical of traditional multi-agency structures. Ambitious companies choose HEIKARO to deploy systematic brand value that translates directly into measurable customer choice.
          </p>
        </div>
      </section>
      {/* Section - CTA */}
      <section className="relative bg-[#020818] text-white py-24 px-[8%] border-t border-[#111] overflow-hidden">

        {/* خلفية زرقاء غامقة */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#001233_0%,_#0a0a0a_70%)] z-0" />

        <div className="relative z-10 text-center">
          {/* البادج */}
          <div className="border border-[#222] px-4 py-2 w-fit mx-auto mb-8 flex items-center gap-2">
            <span className="text-[#b0f200] text-xs">⬡</span>
            <span className="text-white text-xs tracking-[3px] uppercase">INTEGRATED GROWTH OS</span>
          </div>

          {/* العنوان */}
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            ENGINEER YOUR<br />
            <span className="text-[#007bff]">MARKET AUTHORITY.</span>
          </h2>

          {/* الوصف */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            We connect strategic diagnosis, high-fidelity design, and performance media under one unified growth operating system. Build your brand architecture today.
          </p>

          {/* الأزرار */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="bg-white text-black px-10 py-4 font-bold text-sm uppercase tracking-[2px] hover:bg-[#007bff] hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              ENGAGE HEIKARO →
            </Link>
            <Link
              to="/portfolio"
              className="border border-[#333] text-white px-10 py-4 font-bold text-sm uppercase tracking-[2px] hover:bg-[#007bff] hover:border-[#007bff] transition-colors duration-300"
            >
              REVIEW PROOF SYSTEM
            </Link>
          </div>

          {/* الخطوات */}
          <div className="flex items-center justify-center gap-12 text-gray-600 text-xs font-mono uppercase tracking-[3px]">
            <span>01 DIAGNOSE</span>
            <span>02 STRATEGIZE</span>
            <span>03 EXECUTE</span>
            <span>04 OPTIMIZE</span>
          </div>
        </div>

      </section>
      <StartWithClarity />
    </div>
  );
}