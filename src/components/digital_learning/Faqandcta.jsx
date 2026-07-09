import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircleQuestion, ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────
//  FAQ DATA
// ─────────────────────────────────────────────
const faqs = [
    {
        q: "What is SCORM compliance, and does HEIKARO support it?",
        a: "Yes. SCORM (Sharable Content Object Reference Model) is the international standard for e-learning files. We deliver module outputs packaged in SCORM and xAPI standards, ensuring they load and track grades beautifully on any modern LMS like Moodle, TalentLMS, or Cornerstone.",
    },
    {
        q: "Can you design custom corporate academies from scratch?",
        a: "Absolutely. We build full academy ecosystems from strategy and content architecture to LMS configuration and interactive module production — all aligned to your brand and business objectives.",
    },
    {
        q: "How long does a standard academy design workflow take?",
        a: "A standard academy project runs between 6 to 12 weeks depending on scope, number of modules, and content readiness. We provide a detailed timeline after the initial discovery session.",
    },
];

// ─────────────────────────────────────────────
//  FAQ SECTION
// ─────────────────────────────────────────────
export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

                {/* ── Left ── */}
                <div className="flex flex-col gap-6">
                    {/* Icon */}
                    <span className="flex h-12 w-12 items-center justify-center bg-[#0d1a3a] text-[#0f33fe]">
                        <MessageCircleQuestion size={22} />
                    </span>

                    {/* Label */}
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0f33fe]">
                        FAQs
                    </p>

                    {/* Title */}
                    <h2
                        className="font-bold leading-[1.1] text-white"
                        style={{ fontSize: "clamp(24px, 3.5vw, 46px)" }}
                    >
                        Got Questions? We Have Answers.
                    </h2>

                    {/* Description */}
                    <p className="max-w-xs text-sm leading-relaxed text-[#666666]">
                        Got questions around SCORM packages or lesson planning systems?
                        Explore answers here.
                    </p>
                </div>

                {/* ── Right: Accordion ── */}
                <div className="flex flex-col divide-y divide-[#1e1e1e] border border-[#1e1e1e]">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            {/* Question row */}
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

                            {/* Answer */}
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0f33fe]">
                    Education Scaled
                </p>

                {/* Title */}
                <h2
                    className="max-w-2xl font-black uppercase leading-[1.05] text-white"
                    style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.01em" }}
                >
                    Build An Interactive Academy
                </h2>

                {/* Description */}
                <p className="max-w-sm text-sm leading-relaxed text-[#666666]">
                    Stop uploading passive documents. Partner with HEIKARO to design and
                    deploy highly interactive learning spaces structured purely for mastery.
                </p>

                {/* Buttons */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <Link
  to="/contact"
  className="flex items-center gap-2 bg-[#0f33fe] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
>
  Start Your Academy Brief
  <ArrowRight size={14} />
</Link>

<Link
  to="/services"
  className="border border-[#2a2a2a] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#444]"
>
  Browse All Services
</Link>
                </div>

            </div>
        </section>
    );
};
