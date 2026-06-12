const steps = [
    {
        step: "STEP 01",
        title: "Objectives Alignment",
        desc: "Defining what organizational behaviors, knowledge nodes, or technical-compliance guidelines must be altered.",
    },
    {
        step: "STEP 02",
        title: "Target Persona Exploration",
        desc: "Mapping student technical familiarity, device habits, daily study constraints, and drop-off risks.",
    },
    {
        step: "STEP 03",
        title: "Curriculum Map Outline",
        desc: "Drafting the macro directory of modules, chapter sizes, and logical sequential progression gates.",
    },
    {
        step: "STEP 04",
        title: "Grey-Screen Content Mocking",
        desc: "Structuring text modules, prompt sequences, and activity mechanics prior to visual asset styling.",
    },
    {
        step: "STEP 05",
        title: "Interactive Media Styling",
        desc: "Developing informative animations, high-contrast infographics, and structured talking-head tutorials.",
    },
    {
        step: "STEP 06",
        title: "Platform Interface Code",
        desc: "Building responsive web pages, dashboard components, progress checklists, and portal navigations.",
    },
    {
        step: "STEP 07",
        title: "Database & LMS Sync",
        desc: "Integrating progress-tracking triggers, SCORM compliance packages, and credentialing APIs.",
    },
    {
        step: "STEP 08",
        title: "Compliance QA Run",
        desc: "Stress testing interfaces across mobile systems, verifying scoring accuracy, and launching live academies.",
    },
];

const HowWeBuildPrograms = () => {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">

            {/* ── Centered header ── */}
            <div className="mb-16 flex flex-col items-center text-center">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">
                    Operational Methodology
                </p>
                <h2
                    className="mb-5 max-w-2xl font-bold leading-[1.1] text-white"
                    style={{ fontSize: "clamp(28px, 4vw, 54px)" }}
                >
                    How We Build Education Programs
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-[#666666]">
                    Our 8-step operating process ensures strategic alignment from visual
                    blueprint to final developer sign-off and site launch.
                </p>
            </div>

            {/* ── Steps grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {steps.map((item, index) => (
                    <div
                        key={index}
                        className="border border-[#1e1e1e] p-7 flex flex-col gap-4"
                    >
                        {/* Step label */}
                        <span className="text-[11px] font-bold tracking-[0.15em] text-[#1a5fff]">
                            {item.step}
                        </span>

                        {/* Title */}
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-white">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[12.5px] leading-relaxed text-[#666666]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default HowWeBuildPrograms;