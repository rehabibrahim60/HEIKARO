import { useState } from "react";
import freqImg from "/images/home/FrequencyAndLogic.jpg"; // ← غيري المسار

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
    <section
      className="bg-[#050505] text-white"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      {/* Image Header */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src={freqImg}
          alt="Frequency visual"
          className="h-full w-full object-cover opacity-70"
        />
        {/* gradient overlay من الأسفل عشان يتمزج مع الباقي */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]" />

        {/* العنوان فوق الصورة */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[13px] font-black uppercase tracking-[0.35em] text-white/50">
            Intelligence Disclosure
          </p>
          <h2 className="mt-5 text-[38px] font-black uppercase leading-[1.08] tracking-[-0.05em] text-white md:text-[48px] lg:text-[58px]">
            Frequency & Logic.
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[17px] font-medium leading-[1.9] text-slate-300">
            Providing clarity on our operating model, technical standards, and
            strategic approach to brand scaling.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="mx-auto max-w-[820px] px-6 pb-28 pt-10 lg:px-20">
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className="border border-white/10 bg-[#080808] transition duration-300 hover:border-[#0f33fe]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                >
                  <span className="max-w-[650px] text-[18px] font-black uppercase leading-[1.45] tracking-[-0.03em] text-white">
                    {item.q}
                  </span>

                  <span
                    className={`text-[28px] font-light ${isOpen ? "text-[#0f33fe]" : "text-white/40"
                      }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="border-t border-white/10 px-7 pb-8 pt-6 text-[17px] font-medium leading-[1.85] text-slate-400">
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
