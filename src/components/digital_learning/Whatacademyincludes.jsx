const items = [
  "Instructional Script Mapping",
  "Persona Comfort Profiling",
  "Course Sitemaps Definition",
  "Module Sequential Pacing",
  "Applied Testing Sandboxes",
  "Explanatory Visual Assets",
  "Cognitive Friction Analysis",
  "Gamification Rules Pack",
  "Onboarding Progress Steps",
  "Instructor Manual Sheets",
  "Analytics Track Triggers",
  "LMS Database Adaptations",
];

const WhatAcademyIncludes = () => {
  return (
    <section className="academy-includes-section w-full overflow-hidden bg-[#0d0d0d] px-4 py-20 sm:px-6 lg:px-[6%] lg:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Left: text */}
        <div className="flex max-w-[560px] flex-col justify-center gap-5">
          <p className="academy-label">Educational Specs</p>

          <h2 className="academy-title">What A Complete Academy Includes</h2>

          <p className="academy-desc">
            We handle every detail of the lesson matrix, designing and building
            elements to perform synchronously. A complete system aligns
            strategy, usability, conversion, structure, and code.
          </p>
        </div>

        {/* Right: items grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {items.map((item, index) => (
            <div key={index} className="academy-item-card">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .academy-includes-section .academy-label {
          color: #0f33fe !important;
          font-size: 10.5px !important;
          font-weight: 900 !important;
          letter-spacing: 0.22em !important;
          text-transform: uppercase !important;
          line-height: 1.5 !important;
          margin: 0 !important;
        }

        .academy-includes-section .academy-title {
          color: #ffffff !important;
          font-size: clamp(28px, 6vw, 52px) !important;
          font-weight: 900 !important;
          line-height: 1.08 !important;
          letter-spacing: -0.035em !important;
          text-transform: uppercase !important;
          margin: 0 !important;
        }

        .academy-includes-section .academy-desc {
          color: #666666 !important;
          font-size: 14px !important;
          line-height: 1.85 !important;
          font-weight: 500 !important;
          max-width: 480px !important;
          margin: 0 !important;
        }

        .academy-includes-section .academy-item-card {
          min-height: 74px !important;
          border: 1px solid #1e1e1e !important;
          background: #0d0d0d !important;
          padding: 18px 20px !important;
          display: flex !important;
          align-items: center !important;
          transition: 0.25s ease !important;
        }

        .academy-includes-section .academy-item-card:hover {
          border-color: #0f33fe !important;
          background: #111318 !important;
        }

        .academy-includes-section .academy-item-card span {
          color: #aaaaaa !important;
          font-size: 12.5px !important;
          line-height: 1.55 !important;
          font-weight: 700 !important;
          word-break: normal !important;
          overflow-wrap: normal !important;
        }

        @media (max-width: 768px) {
          .academy-includes-section .academy-title {
            font-size: 30px !important;
            line-height: 1.1 !important;
          }

          .academy-includes-section .academy-desc {
            font-size: 14px !important;
            line-height: 1.75 !important;
          }

          .academy-includes-section .academy-item-card {
            min-height: auto !important;
            padding: 16px 18px !important;
          }

          .academy-includes-section .academy-item-card span {
            font-size: 13px !important;
          }
        }

        @media (max-width: 420px) {
          .academy-includes-section {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .academy-includes-section .academy-title {
            font-size: 28px !important;
          }

          .academy-includes-section .academy-item-card {
            padding: 15px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatAcademyIncludes;
