import { GraduationCap, Briefcase, Globe, UserCheck } from "lucide-react";

const audiences = [
    {
        icon: <GraduationCap size={22} />,
        title: "Educational Institutions",
        description:
            "Universities, colleges, and private academies transitioning legacy curricula to digital formats.",
    },
    {
        icon: <Briefcase size={22} />,
        title: "Corporate Academies",
        description:
            "Companies wanting to train partners, franchise units, and massive remote teams.",
    },
    {
        icon: <Globe size={22} />,
        title: "NGOs & Public Sector",
        description:
            "Global development organizations deploying capacity building courses internationally.",
    },
    {
        icon: <UserCheck size={22} />,
        title: "Coaches & Consultants",
        description:
            "Industry experts turning physical frameworks and books into digital academy assets.",
    },
];

const WhoIsItFor = () => {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">
            {/* Top centered text */}
            <div className="mb-16 flex flex-col items-center text-center">
                {/* Label */}
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1a5fff]">
                    Scale Directions
                </p>

                {/* Heading */}
                <h2
                    className="max-w-2xl font-bold leading-[1.1] text-white"
                    style={{ fontSize: "clamp(28px, 3vw, 54px)" }}
                >
                    Who This Service Is For
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {audiences.map((item, index) => (
                    <div
                        key={index}
                        className="border border-[#1e1e1e] p-7 flex flex-col gap-5"
                    >
                        {/* Icon */}
                        <span className="flex h-10 w-10 items-center justify-center bg-[#0d1a3a] text-[#1a5fff]">
                            {item.icon}
                        </span>

                        {/* Title */}
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="flex-1 text-sm leading-relaxed text-[#666666]">
                            {item.description}
                        </p>

                        {/* Dot */}
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#c8ff00]" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhoIsItFor;