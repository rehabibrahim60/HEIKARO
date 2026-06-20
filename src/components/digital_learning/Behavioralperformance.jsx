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
            {/* Label */}
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f33fe]">
                Behavioral Performance
            </p>

            {/* Heading */}
            <h2
                className="mb-8 max-w-4xl font-semibold leading-[1.05] text-white"
                style={{ fontSize: "clamp(28px, 3vw, 68px)" }}
            >
                Information is noise. Applied capability is mastery.
            </h2>

            {/* Description */}
            <p className="max-w-2xl ml-20 text-sm leading-relaxed text-[#999999]">
                HEIKARO engineers educational architectures based on modern cognitive sciences. We move
                beyond passive PDF repositories, building multi-sensorial learning pathways, applied
                decision-making sandboxes, and interactive interfaces designed to drive genuine student
                capability. Build your intellectual capital with modern scaling designs.
            </p>

            {/* Cards */}
            <div className="mt-16 mx-20 grid grid-cols-1 gap-6 md:grid-cols-3">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="border border-[#1e1e1e] p-8 flex flex-col gap-5"
                    >
                        {/* Icon */}
                        <span className="text-[#bbfe0f]">{card.icon}</span>

                        {/* Title */}
                        <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-white">
                            {card.title}
                        </h3>

                        {/* Description */}
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
