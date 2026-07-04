const items = [
  "Stable Prompt Pipelines",
  "Temporal Frame Interpolators",
  "Tactile Texturing Models",
  "3D Camera Geometry Mappings",
  "Post-production Splicing Layouts",
  "LUT Color Balancing Formulas",
  "SoundFX Scapes Matching",
  "Interactive Web Lottie Configs",
  "PBR Direct Material Properties",
  "Neural Resolution Upscalers",
  "Multi-Pass Alpha Compositors",
  "System Asset Databases",
];

const WhatRenderingSystemIncludes = () => {
  return (
    <section className="rendering-system-section w-full overflow-hidden bg-[#0d0d0d] px-4 py-20 sm:px-6 lg:px-[6%] lg:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Left: text */}
        <div className="flex max-w-[560px] flex-col justify-center gap-5">
          <p className="rendering-label">Platform Integration Specs</p>

          <h2 className="rendering-title">
            What A Complete Rendering System Includes
          </h2>

          <p className="rendering-desc">
            We handle every detail of the rendering matrix, designing and
            building elements to perform synchronously. A complete system aligns
            strategy, usability, conversion, structure, and code.
          </p>
        </div>

        {/* Right: items grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {items.map((item, index) => (
            <div key={index} className="rendering-item-card">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .rendering-system-section .rendering-label {
          color: #0f33fe !important;
          font-size: 10.5px !important;
          font-weight: 900 !important;
          letter-spacing: 0.22em !important;
          text-transform: uppercase !important;
          line-height: 1.5 !important;
          margin: 0 !important;
        }

        .rendering-system-section .rendering-title {
          color: #ffffff !important;
          font-size: clamp(28px, 6vw, 52px) !important;
          font-weight: 900 !important;
          line-height: 1.08 !important;
          letter-spacing: -0.035em !important;
          text-transform: uppercase !important;
          margin: 0 !important;
        }

        .rendering-system-section .rendering-desc {
          color: #666666 !important;
          font-size: 14px !important;
          line-height: 1.85 !important;
          font-weight: 500 !important;
          max-width: 480px !important;
          margin: 0 !important;
        }

        .rendering-system-section .rendering-item-card {
          min-height: 74px !important;
          border: 1px solid #1e1e1e !important;
          background: #0d0d0d !important;
          padding: 18px 20px !important;
          display: flex !important;
          align-items: center !important;
          transition: 0.25s ease !important;
        }

        .rendering-system-section .rendering-item-card:hover {
          border-color: #0f33fe !important;
          background: #111318 !important;
        }

        .rendering-system-section .rendering-item-card span {
          color: #aaaaaa !important;
          font-size: 12.5px !important;
          line-height: 1.55 !important;
          font-weight: 700 !important;
          word-break: normal !important;
          overflow-wrap: normal !important;
        }

        @media (max-width: 768px) {
          .rendering-system-section .rendering-title {
            font-size: 30px !important;
            line-height: 1.1 !important;
          }

          .rendering-system-section .rendering-desc {
            font-size: 14px !important;
            line-height: 1.75 !important;
          }

          .rendering-system-section .rendering-item-card {
            min-height: auto !important;
            padding: 16px 18px !important;
          }

          .rendering-system-section .rendering-item-card span {
            font-size: 13px !important;
          }
        }

        @media (max-width: 420px) {
          .rendering-system-section {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .rendering-system-section .rendering-title {
            font-size: 28px !important;
          }

          .rendering-system-section .rendering-item-card {
            padding: 15px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatRenderingSystemIncludes;
