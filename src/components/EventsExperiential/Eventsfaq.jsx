import { useState } from "react";

const faqs = [
    {
        question: "Can you design custom 3D booths and spatial configurations?",
        answer:
            "Yes. Our spatial design team builds detailed 3D setups, backdrop geometries, wayfinding signage systems, and interactive panels, allowing your operational group to view and experience layouts prior to physical production.",
    },
    {
        question: "How does HEIKARO capture high-impact campaign content during the event?",
        answer:
            "We deploy embedded media crews throughout the event timeline, capturing cinematic b-roll, speaker moments, audience reactions, and brand activations. All footage is graded and delivered in platform-optimized formats.",
    },
    {
        question: "What is an Experiential Activation and when do we need it?",
        answer:
            "An experiential activation is a physical or digital branded interaction point designed to engage attendees beyond passive observation. You need it when you want audiences to participate, share, and emotionally connect with your brand on-site.",
    },
    {
        question: "Do you handle coordinates for hybrid physical and virtual channels?",
        answer:
            "Yes. We synchronize on-ground production with live-stream infrastructure, virtual lobbies, and real-time Q&A interfaces so both in-person and remote audiences experience the event simultaneously.",
    },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
    <div className="border border-[#1e1e1e]">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between px-6 py-5 text-left group"
        >
            <span className="text-[13px] font-semibold text-white leading-snug pr-6">
                {question}
            </span>
            <span className="flex-shrink-0 text-[#999999] text-lg leading-none">
                {isOpen ? "∧" : "∨"}
            </span>
        </button>

        {isOpen && (
            <div className="px-6 pb-6">
                <p className="text-[12.5px] leading-relaxed text-[#666666]">{answer}</p>
            </div>
        )}
    </div>
);

const EventsFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">
            <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-16">

                {/* ── Left ── */}
                <div className="flex flex-col lg:w-[34%]">

                    {/* Icon box */}
                    <div className="mb-7 flex h-11 w-11 items-center justify-center border border-[#1a5fff]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a5fff" strokeWidth="1.8">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
                        </svg>
                    </div>

                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1a5fff]">
                        FAQS
                    </p>

                    <h2
                        className="mb-5 font-bold leading-[1.1] text-white"
                        style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
                    >
                        Frequently Asked Questions
                    </h2>

                    <p className="text-[13px] leading-relaxed text-[#666666]">
                        Got questions around structural booth specifications, dynamic
                        keynote screen integrations, or highlight recording systems?
                        Explore parameters here.
                    </p>
                </div>

                {/* ── Right: accordion ── */}
                <div className="flex flex-1 flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EventsFAQ;