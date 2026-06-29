import { Target, Layers, LayoutGrid } from "lucide-react";

const cards = [
  {
    icon: <Target size={32} strokeWidth={1.5} />,
    title: "Learning Strategy",
    description:
      "We define what learners need to achieve, how they should progress, and what the learning experience must change.",
  },
  {
    icon: <Layers size={32} strokeWidth={1.5} />,
    title: "Interactive Content",
    description:
      "We transform information into activities, visual explanations, scenarios, videos, quizzes, and applied learning moments.",
  },
  {
    icon: <LayoutGrid size={32} strokeWidth={1.5} />,
    title: "Platform Experience",
    description:
      "We design learning platforms and content flows that make navigation, progress, and engagement easier.",
  },
];

const BehavioralPerformance = () => {
  return (
    <section className="w-full bg-[#0d0d0d] px-[6%] py-20">
      {/* Top content + image */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left content */}
        <div>
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f33fe]">
            Behavioral Performance
          </p>

          <h2
            className="mb-8 max-w-4xl font-semibold uppercase leading-[1.05] text-white"
            style={{ fontSize: "clamp(28px, 3vw, 68px)" }}
          >
            Information is noise. Applied capability is mastery.
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-[#999999] lg:ml-12">
            HEIKARO engineers educational architectures based on modern
            cognitive sciences. We move beyond passive PDF repositories,
            building multi-sensorial learning pathways, applied decision-making
            sandboxes, and interactive interfaces designed to drive genuine
            student capability. Build your intellectual capital with modern
            scaling designs.
          </p>
        </div>

        {/* Right image */}
        <div className="relative h-[360px] w-full max-w-[470px] justify-self-center overflow-hidden border border-[#1e1e1e] lg:h-[560px]">
          <img
            src="/images/digital-learning/Information-is-noise.-Applied-capability-is-mastery..jpg"
            alt="Behavioral Performance"
            className="h-full w-full object-cover object-center"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(13,13,13,0.05), rgba(13,13,13,0.35))",
            }}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mx-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-[#1e1e1e] p-8 flex flex-col gap-5"
          >
            <span className="text-[#bbfe0f]">{card.icon}</span>

            <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-white">
              {card.title}
            </h3>

            <p className="text-sm leading-relaxed text-[#666666]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BehavioralPerformance;
