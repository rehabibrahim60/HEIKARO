import { useState } from "react";
import { MessageCircleQuestion, ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────
//  FAQ DATA
// ─────────────────────────────────────────────
const faqs = [
  {
    q: "How does HEIKARO bypass the typical morphing or flickering seen in raw AI videos?",
    a: "We apply temporal stability algorithms and frame interpolation passes directly on raw AI outputs to eliminate flickering, morphing artifacts, and continuity breaks — delivering smooth, cinema-grade sequences.",
  },
  {
    q: "Can we build packaging and product layouts before manufacturing starts?",
    a: "Yes. Our 3D/CGI pipeline allows us to construct photorealistic product renders and packaging visualizations from CAD files or briefs — fully launch-ready before a single physical unit is produced.",
  },
  {
    q: "Do you integrate custom-composed audio and voiceover tracks?",
    a: "Absolutely. We layer custom SoundFX, brand-matched music compositions, and professional voiceover tracks into every video deliverable as part of our standard post-production pipeline.",
  },
  {
    q: "What file outputs can we expect for our publishing pipeline?",
    a: "We deliver standard ProRes 4K masters alongside platform-optimized MP4 exports in vertical, square, and landscape aspect ratios — ready for paid media, social, and web publishing pipelines.",
  },
];

// ─────────────────────────────────────────────
//  FAQ SECTION
// ─────────────────────────────────────────────
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="w-full bg-[#0d0d0d] px-[6%] py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

        {/* ── Left ── */}
        <div className="flex flex-col gap-6">
          <span className="flex h-12 w-12 items-center justify-center bg-[#0d1a3a] text-[#1a5fff]">
            <MessageCircleQuestion size={22} />
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1a5fff]">
            FAQs
          </p>
          <h2
            className="font-bold leading-[1.1] text-white"
            style={{ fontSize: "clamp(24px, 3.5vw, 46px)" }}
          >
            Got Questions? We Have Answers.
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-[#666666]">
            Got questions around SCORM packages, adaptive AI models, or lesson
            planning systems? Explore answers here.
          </p>
        </div>

        {/* ── Right: Accordion ── */}
        <div className="flex flex-col divide-y divide-[#1e1e1e] border border-[#1e1e1e]">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#111111]"
              >
                <span className="text-[13px] font-medium text-white">
                  {faq.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={16} className="shrink-0 text-[#555]" />
                ) : (
                  <ChevronDown size={16} className="shrink-0 text-[#555]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[12.5px] leading-relaxed text-[#666666]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
//  CTA SECTION
// ─────────────────────────────────────────────
export const CTASection = () => {
  return (
    <section className="w-full bg-[#080808] px-[6%] py-28">
      <div className="flex flex-col items-center text-center gap-6">

        {/* Label */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">
          Unbounded Visual Space
        </p>

        {/* Title */}
        <h2
          className="max-w-2xl font-black uppercase leading-[1.05] text-white"
          style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.01em" }}
        >
          Unlock Zero-Constraint Production
        </h2>

        {/* Description */}
        <p className="max-w-md text-sm leading-relaxed text-[#666666]">
          Book a custom synthetic scoping conversation today. Our project
          directors will audit your product guidelines and map out a tailored 3D
          CGI and AI conceptual roadmap.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button className="flex items-center gap-2 bg-[#c8ff00] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-black transition-opacity hover:opacity-90">
            Request Synthetic Briefing
            <ArrowRight size={14} />
          </button>
          <button className="border border-[#2a2a2a] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#444]">
            Browse All Services
          </button>
        </div>

      </div>
    </section>
  );
};