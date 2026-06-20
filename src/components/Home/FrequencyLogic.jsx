import { useState } from "react";

const faqs = [
    {
        q: "What makes HEIKARO different from a traditional creative agency?",
        a: "Most agencies focus on delivering isolated assets: a logo, a video, a website. HEIKARO builds integrated creative systems. We ensure that every piece of content, design, and strategy is engineered to connect and fuel measurable business growth.",
    },
    {
        q: "How do you integrate AI into your production process?",
        a: "We use AI to accelerate ideation, scripting, visual exploration, prototyping, and production workflows while keeping creative direction and quality control human-led.",
    },
    {
        q: "Which industries do you specialize in?",
        a: "We work with brands across technology, education, real estate, hospitality, retail, corporate services, and growth-stage businesses.",
    },
    {
        q: "Do you handle local marketing in Egypt and the Middle East?",
        a: "Yes. We build culturally aware creative and marketing systems for Egypt, the Middle East, and global-facing brands.",
    },
    {
        q: "How do we start a project with HEIKARO?",
        a: "Start with a clear brief. We review your goals, define the creative system needed, then structure the scope, timeline, and execution path.",
    },
];

export default function FrequencyLogic() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-[#050505] px-6 py-24 text-white lg:px-20">
            <div className="mx-auto max-w-[620px]">
                <div className="text-center">
                    <p className="text-[8px] font-black uppercase tracking-[0.45em] text-white/30">
                        Intelligence Disclosure
                    </p>

                    <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] lg:text-[34px]">
                        Frequency & Logic.
                    </h2>

                    <p className="mx-auto mt-5 max-w-[520px] text-sm leading-6 text-slate-500">
                        Providing clarity on our operating model, technical standards, and
                        strategic approach to brand scaling.
                    </p>
                </div>

                <div className="mt-16 space-y-3">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={item.q} className="border border-white/10 bg-[#080808]">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                                >
                                    <span className="max-w-[500px] text-sm font-black uppercase leading-5 tracking-[-0.03em]">
                                        {item.q}
                                    </span>

                                    <span className={isOpen ? "text-[#0f33fe]" : "text-white/40"}>
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {isOpen && (
                                    <p className="border-t border-white/10 px-6 pb-7 pt-5 text-sm leading-6 text-slate-400">
                                        {item.a}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
