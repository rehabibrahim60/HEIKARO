const steps = [
  {
    num: "Step 01",
    title: "Identity & Goal Sync",
    body: "We study your brand positioning, targeted channels, campaign deadlines, and product functions first.",
  },
  {
    num: "Step 02",
    title: "Concept Storyboarding",
    body: "Outlining exact scripts, shot plans, verbal pacing curves, and frame directions prior to booking crews.",
  },
  {
    num: "Step 03",
    title: "Logistics Coordination",
    body: "Managing locations, equipment matching, set directions, talent contracts, and schedules.",
  },
  {
    num: "Step 04",
    title: "On-Set Capturing",
    body: "Execution of video and photo shoots under standard cinema-grade criteria.",
  },
  {
    num: "Step 05",
    title: "Post-Production Sorting",
    body: "Cleansing raw takes, organizing top-tier selections, and arranging asset pools for editing.",
  },
  {
    num: "Step 06",
    title: "Pacing & Tone Grading",
    body: "Splicing narrative segments, styling color balances, balancing speech files, and embedding motion overlays.",
  },
  {
    num: "Step 07",
    title: "Platform Adaptation Runs",
    body: "Exporting matching aspect dimensions like vertical, widescreen, and timeline blocks cleanly.",
  },
  {
    num: "Step 08",
    title: "Modular Delivery",
    body: "Structuring clean archive packages and folders so marketing teams can easily reuse raw modules.",
  },
];

const gridStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
  backgroundSize: "60px 60px",
};

const HowWeProduceMediaAssets = () => {
  return (
    <section className="media-process-section relative w-full overflow-hidden bg-[#080808] py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={gridStyle}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-[6%]">
        <p className="media-process-label mb-4 text-center">
          Systematic Storytelling
        </p>

        <h2 className="media-process-title mb-4 text-center">
          How We Produce Media Assets
        </h2>

        <p className="media-process-desc mx-auto mb-12 max-w-[560px] text-center">
          Our 8-step operating process ensures strategic alignment from visual
          blueprint to final developer sign-off and site launch.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StepCard key={i} {...step} />
          ))}
        </div>
      </div>

      <style>{`
        .media-process-section .media-process-label {
          color: #0f33fe !important;
          font-size: 10.5px !important;
          font-weight: 900 !important;
          letter-spacing: 0.22em !important;
          text-transform: uppercase !important;
          line-height: 1.5 !important;
        }

        .media-process-section .media-process-title {
          color: #ffffff !important;
          font-size: clamp(28px, 5vw, 46px) !important;
          font-weight: 900 !important;
          line-height: 1.15 !important;
          letter-spacing: -0.02em !important;
          text-transform: uppercase !important;
        }

        .media-process-section .media-process-desc {
          color: #666666 !important;
          font-size: 13px !important;
          line-height: 1.8 !important;
          font-weight: 500 !important;
        }

        .media-process-section .step-num {
          color: #2a3060 !important;
          font-size: 9px !important;
          font-weight: 900 !important;
          letter-spacing: 0.2em !important;
          text-transform: uppercase !important;
          line-height: 1.5 !important;
        }

        .media-process-section .step-title {
          color: #cccccc !important;
          font-size: 12px !important;
          font-weight: 900 !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
          line-height: 1.45 !important;
          word-break: normal !important;
          overflow-wrap: normal !important;
        }

        .media-process-section .step-body {
          color: #666666 !important;
          font-size: 12px !important;
          line-height: 1.75 !important;
          font-weight: 500 !important;
          word-break: normal !important;
          overflow-wrap: normal !important;
        }

        @media (max-width: 480px) {
          .media-process-section .step-title {
            font-size: 12px !important;
          }

          .media-process-section .step-body {
            font-size: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

const StepCard = ({ num, title, body }) => {
  return (
    <div className="group relative min-h-[230px] overflow-hidden border border-[#1a1e2e] bg-[#0e1018] px-5 py-6 transition-colors duration-300 hover:border-[#252a3e] hover:bg-[#121624] sm:px-6 sm:py-7">
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0f33fe] transition-[width] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full" />

      <p className="step-num mb-[14px] transition-colors duration-300 group-hover:text-[#0f33fe]">
        {num}
      </p>

      <p className="step-title mb-3 transition-colors duration-300 group-hover:text-white">
        {title}
      </p>

      <p className="step-body">{body}</p>
    </div>
  );
};

export default HowWeProduceMediaAssets;
