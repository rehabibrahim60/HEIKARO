import React from "react";
import { Link } from "react-router-dom";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import "./style/pageHero.css";

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
    tags: [
      "MEMORABLE AUDIENCE EXPERIENCES",
      "STRONGER BRAND STORYTELLING",
      "DIRECT STAKEHOLDER TRUST",
    ],
    link: "/services/events-experiential",
  },
];

export default function Services() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section
        className="unified-page-hero"
        style={{ "--hero-bg": "url('/hero-bg.jpg.jpeg')" }}
      >
        <div className="unified-page-hero-content">
          <h1 className="unified-page-title">SERVICES</h1>

          <p className="unified-page-desc">
            Strategic creative services designed as systems, not isolated outputs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#0a0a0a] py-20 px-[8%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#222]">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="relative border-r border-b border-[#222] p-7 flex flex-col justify-between min-h-[480px] overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#0f33fe] transition-all duration-500 group-hover:w-full z-10" />

              <div>
                <div className="flex items-center justify-between mb-7">
                  <div className="w-11 h-11 border border-[#222] group-hover:border-[#0f33fe] transition-colors duration-300 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>

                  <span className="text-gray-600 group-hover:text-[#bbfe0f] font-mono text-[13px] transition-colors duration-300">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-white group-hover:text-[#0f33fe] transition-colors duration-300 font-extrabold text-[19px] uppercase leading-[1.25] mb-4 tracking-[-0.02em]">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-[15px] leading-[1.8] mb-6">
                  {item.desc}
                </p>

                <div className="border border-[#222] px-3 py-1 w-fit mb-7">
                  <span className="text-gray-500 text-[11px] tracking-[2px] uppercase">
                    {item.capabilities} CAPABILITIES
                  </span>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-7">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border border-[#bbfe0f] px-2 py-1 text-[10px] text-[#bbfe0f] tracking-[1px] leading-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={item.link}
                  className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[2px] text-gray-500 group-hover:text-[#0f33fe] transition-all duration-300"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    EXPLORE TRACK
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section - How Services Work Together */}
      <section className="bg-[#0a0a0a] text-white py-20 px-[8%] border-t border-[#111]">
        <div className="text-center mb-14">
          <p className="text-[#0f33fe] font-extrabold tracking-[3px] text-[12px] uppercase mb-4">
            UNIFIED OPERATING MODEL
          </p>

          <h2 className="text-[34px] md:text-[46px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-6">
            How HEIKARO Services Work Together
          </h2>

          <p className="text-gray-400 text-[16px] md:text-[18px] leading-[1.85] max-w-3xl mx-auto">
            Our 8 operating services are designed as modular nodes of a single
            high-performance brand growth engine. Instead of hiring separate
            branding agencies, dev houses, video production studios, and
            performance agencies, HEIKARO integrates these capabilities under a
            single operational standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "QUALITY CONTROL", title: "UNIFIED AUDITS" },
            { label: "EXECUTION SPEED", title: "AI-ENHANCED WORKFLOWS" },
            { label: "BRAND UNITY", title: "SINGLE TONE OF VOICE" },
            { label: "CAPITAL EFFICIENCY", title: "CONSOLIDATED AGENCY FEES" },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-[#222] p-7 text-center hover:border-[#333] transition-colors"
            >
              <p className="text-[#bbfe0f] font-extrabold tracking-[2px] text-[11px] uppercase mb-3">
                {item.label}
              </p>

              <h3 className="text-white font-extrabold text-[14px] uppercase leading-[1.35]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Section - Recommended Service Combinations */}
      <section className="bg-[#0a0a0a] text-white py-20 px-[8%] border-t border-[#111]">
        <div className="text-center mb-14">
          <p className="text-[#bbfe0f] font-extrabold tracking-[3px] text-[12px] uppercase mb-4">
            STRATEGIC BLUEPRINTS
          </p>

          <h2 className="text-[34px] md:text-[46px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-6">
            Recommended Service Combinations
          </h2>

          <p className="text-gray-400 text-[16px] md:text-[18px] leading-[1.85] max-w-2xl mx-auto">
            Connect complementary capabilities to fast-track specific company
            milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              combo: "COMBO 1",
              title: "The Ultimate Launch Blueprint",
              target: "EARLY-STAGE OR EXPANDING PRODUCTS",
              desc: "Establishes institutional market authority with an elite web app, premium product film, and fully packaged branding system ready for investment.",
              services:
                "Brand & Identity + Design & Experience + Media & Production",
            },
            {
              combo: "COMBO 2",
              title: "High-Performance Growth Loop",
              target: "ACTIVE DIGITAL SCALING BRANDS",
              desc: "Establishes a high-velocity localized content system driven by performance marketing, hyper-optimized conversion landing pages, and cinematic social ads.",
              services:
                "Marketing & Growth + Content & Storytelling + AI-Powered Video & CGI",
            },
            {
              combo: "COMBO 3",
              title: "Enterprise Transformation Suite",
              target: "LEGACY CORPORATE BRANDS",
              desc: "Modernizes organizational reputation, aligns interior team training via state-of-the-art interactive platforms, and deploys milestone hybrid events.",
              services:
                "Brand & Identity + Digital Learning Experience + Events & Experiential",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-[#222] p-7 flex flex-col justify-between min-h-[390px] group hover:border-[#bbfe0f]/30 transition-colors duration-300 cursor-pointer"
            >
              <div>
                <div className="border border-[#bbfe0f]/20 px-2 py-[2px] w-fit mb-4">
                  <span className="text-[#bbfe0f]/60 text-[10px] tracking-[2px]">
                    {item.combo}
                  </span>
                </div>

                <h3 className="text-white group-hover:text-[#0f33fe] transition-colors duration-300 font-extrabold text-[20px] leading-[1.25] mb-4 tracking-[-0.02em]">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-[11px] tracking-[2px] uppercase mb-4 leading-relaxed">
                  {item.target}
                </p>

                <p className="text-gray-400 text-[15px] leading-[1.8]">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#222]">
                <p className="text-gray-600 text-[11px] uppercase tracking-[2px] mb-2">
                  COMBINED SERVICES
                </p>

                <p className="text-white text-[15px] leading-[1.65] font-medium">
                  {item.services}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section - The Creative Growth Operating Standard */}
      <section className="bg-[#0a0a0a] text-white py-20 px-[8%] border-t border-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white font-extrabold text-[28px] md:text-[42px] leading-[1.15] tracking-[-0.03em] uppercase mb-7">
  THE CREATIVE GROWTH OPERATING STANDARD
</h2>

          <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.85] mb-7">
            Under HEIKARO&apos;s modern operating model, we unify disparate
            marketing-communication channels into responsive, highly structured
            platforms. Our approach encompasses Brand Identity development,
            interactive UI/UX design, full-scale front-end engineering,
            conversion-focused analytics, production services, and corporate
            learning experiences in a single, unified workflow.
          </p>

          <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.85]">
            By treating content and design as an integrated operating system, we
            eliminate the operational overhead, communication gaps, and
            inconsistent executions typical of traditional multi-agency
            structures. Ambitious companies choose HEIKARO to deploy systematic
            brand value that translates directly into measurable customer choice.
          </p>
        </div>
      </section>

      {/* Section - CTA */}
      <section className="relative bg-[#020818] text-white py-20 px-[8%] border-t border-[#111] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#001233_0%,_#0a0a0a_70%)] z-0" />

        <div className="relative z-10 text-center">
          <div className="border border-[#222] px-4 py-2 w-fit mx-auto mb-7 flex items-center gap-2">
            <span className="text-[#bbfe0f] text-[12px]">⬡</span>
            <span className="text-white text-[11px] font-extrabold tracking-[3px] uppercase">
              INTEGRATED GROWTH OS
            </span>
          </div>

          <h2 className="text-[38px] md:text-[58px] font-extrabold leading-[1.06] tracking-[-0.04em] mb-7">
            ENGINEER YOUR
            <br />
            <span className="text-[#0f33fe]">MARKET AUTHORITY.</span>
          </h2>

          <p className="text-gray-400 text-[16px] md:text-[18px] leading-[1.85] max-w-2xl mx-auto mb-10">
            We connect strategic diagnosis, high-fidelity design, and performance
            media under one unified growth operating system. Build your brand
            architecture today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 font-extrabold text-[13px] uppercase tracking-[2px] hover:bg-[#0f33fe] hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              ENGAGE HEIKARO →
            </Link>

            <Link
              to="/portfolio"
              className="border border-[#333] text-white px-8 py-4 font-extrabold text-[13px] uppercase tracking-[2px] hover:bg-[#0f33fe] hover:border-[#0f33fe] transition-colors duration-300"
            >
              REVIEW PROOF SYSTEM
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-gray-600 text-[11px] font-mono uppercase tracking-[3px]">
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