const problems = [
    {
        number: "01",
        description:
            "Content is uploaded without a real learning journey, causing cognitive overload.",
    },
    {
        number: "02",
        description:
            "Learners receive information but fail to apply it within dynamic work scenarios.",
    },
    {
        number: "03",
        description:
            "Online courses feel boring, passive, and like flat slide-deck turners.",
    },
    {
        number: "04",
        description:
            "Training materials are not structured for modern online interactive behaviors.",
    },
    {
        number: "05",
        description:
            "Platforms are confusing to navigate, causing users to drop off early.",
    },
    {
        number: "06",
        description:
            "Learning objectives are too vague, making skills testing impossible.",
    },
    {
        number: "07",
        description:
            "Assessments measure simple rote recall rather than real-world task mastery.",
    },
    {
        number: "08",
        description:
            "Organizations have zero clear analytics to track user progress or compliance scores.",
    },
];

const WhyTraditionalFails = () => {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">
            {/* Top centered text */}
            <div className="mb-16 flex flex-col items-center text-center">
                {/* Label */}
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cc2200]">
                    Erosion of Engagement
                </p>

                {/* Heading */}
                <h2
                    className="mb-6 max-w-2xl font-bold leading-[1.1] text-white"
                    style={{ fontSize: "clamp(28px, 3vw, 56px)" }}
                >
                    Why Traditional E-learning Fails
                </h2>

                {/* Description */}
                <p className="max-w-xl text-sm leading-relaxed text-[#777777]">
                    Uploading standard slides is not online education. Without engagement rules,
                    completion rates plummet and training is wasted:
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols- gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {problems.map((item) => (
                    <div
                        key={item.number}
                        className="border border-[#1e1e1e] p-7 flex flex-col gap-4"
                    >
                        {/* Number */}
                        <span className="text-[13px] font-bold text-[#cc2200]">
                            {item.number}
                        </span>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-[#aaaaaa]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyTraditionalFails;
