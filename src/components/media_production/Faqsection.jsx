import { useState } from "react";

const faqs = [
    {
        q: "Do you handle the full scriptwriting and planning stages?",
        a: "Yes. Every Media Production project starts with planning. Our directors outline precise shot arrays, draft acoustic dialogue scripts, set mood boards, and engineer storyboards so that production days run smoothly and within budget.",
    },
    {
        q: "Can you edit existing files or footage we already have?",
        a: "Absolutely. We accept raw footage, existing edits, and archive assets. Our post-production team sorts, grades, and restructures whatever you bring to align with your current brand tone and platform requirements.",
    },
    {
        q: "What is a Content Library, and how does it help?",
        a: "A Content Library is a structured archive of all your produced assets — organized by campaign, format, and platform. It lets your marketing team quickly locate, reuse, and repurpose media without re-briefing a production team each time.",
    },
    {
        q: "How long is a typical commercial video production cycle?",
        a: "Most commercial projects run 2–4 weeks from brief to final delivery. This includes concept storyboarding, logistics coordination, shooting days, post-production sorting, grading, and platform-adapted exports.",
    },
];

const gridStyle = {
    backgroundImage: `
    linear-gradient(rgba(255,255,255,0.00) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.00) 1px, transparent 1px)
  `,
    backgroundSize: "60px 60px",
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div style={{ backgroundColor: "#0a0a0a" }}>
            <section className="relative w-full overflow-hidden py-20 md:py-28">
                {/* Grid background */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={gridStyle}
                    aria-hidden="true"
                />

                {/* Inner wrapper — same px-[6%] max-w-[1400px] as adjacent sections */}
                <div className="relative z-10 px-[6%] max-w-[1400px] flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

                    {/* LEFT */}
                    <div className="lg:w-[260px] shrink-0">
                        {/* Icon box */}
                        <div className="w-11 h-11 border border-[#1a3a8a] flex items-center justify-center mb-5">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a5fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                        </div>
                        <p className="text-[#1a5fff] text-[10.5px] font-bold tracking-[0.22em] uppercase mb-4">
                            FAQs
                        </p>
                        <h2
                            className="text-white font-bold leading-[1.2] tracking-[-0.02em] mb-4"
                            style={{ fontSize: "clamp(26px, 2.5vw, 38px)" }}
                        >
                            Frequently Asked Questions
                        </h2>
                        <p className="text-[#555] text-[12.5px] leading-[1.8]">
                            Got questions around pre-production planning sheets, high-speed file
                            storage nodes, or editing timelines? Explore answers here.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex-1 w-full">
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div
                                    key={i}
                                    className={`border mb-2 overflow-hidden transition-colors duration-200 ${isOpen ? "border-[#252a3e]" : "border-[#1a1e2e]"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggle(i)}
                                        aria-expanded={isOpen}
                                        className="w-full bg-transparent px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                                    >
                                        <span
                                            className={`text-[13px] font-semibold transition-colors duration-200 ${isOpen ? "text-white" : "text-[#d0d0d0]"
                                                }`}
                                        >
                                            {faq.q}
                                        </span>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke={isOpen ? "#1a5fff" : "#555"}
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </button>

                                    {/* Animated body */}
                                    <div
                                        className="overflow-hidden transition-[max-height] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                                        style={{ maxHeight: isOpen ? "300px" : "0px" }}
                                    >
                                        <div className="px-6 pb-5 pt-4 border-t border-[#1a1e2e] text-[#666] text-[12px] leading-[1.8]">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default FAQSection;