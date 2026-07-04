import React from "react";

const items = [
  "Shot Concept Storyboards",
  "Production Location Scopes",
  "Camera Gear Matrix Matching",
  "Studio Light Configurations",
  "Post-production Pacing Guides",
  "Color Palette LUT Standards",
  "Audio Narrative Cleansing",
  "Sound FX Library",
  "Motion Frame Intros",
  "Mobile Vertical Aspect Adapts",
  "Product Detail Studio Arrays",
  "Atmosphere Lens Profiles",
  "Technical Metadata Tagging",
  "Asset Library Structuring",
  "Usage Licensure Deliveries",
];

const gridStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
  backgroundSize: "60px 60px",
};

const MediaProductionSpecs = () => {
  return (
    <section className="media-specs-section relative w-full overflow-hidden bg-[#080808] py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={gridStyle}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-[6%]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="media-specs-label mb-5">Asset Blueprint Specs</p>

            <h2 className="media-specs-title mb-6">
              What A Complete Production Package Includes
            </h2>

            <p className="media-specs-desc">
              We handle every detail of the capture matrix, designing and
              building elements to perform synchronously. A complete system
              aligns strategy, usability, conversion, structure, and code.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <div key={i} className="media-spec-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .media-specs-section .media-specs-label {
          color: #0f33fe !important;
          font-size: 10.5px !important;
          font-weight: 900 !important;
          letter-spacing: 0.22em !important;
          text-transform: uppercase !important;
          line-height: 1.5 !important;
        }

        .media-specs-section .media-specs-title {
          color: #ffffff !important;
          font-size: clamp(28px, 5vw, 44px) !important;
          font-weight: 900 !important;
          line-height: 1.15 !important;
          letter-spacing: -0.02em !important;
          text-transform: uppercase !important;
        }

        .media-specs-section .media-specs-desc {
          color: #666666 !important;
          font-size: 13px !important;
          line-height: 1.8 !important;
          font-weight: 500 !important;
          max-width: 520px !important;
        }

        .media-specs-section .media-spec-card {
          background: #111318 !important;
          border: 1px solid #1e2030 !important;
          padding: 16px 18px !important;
          color: #aaaaaa !important;
          font-size: 12.5px !important;
          line-height: 1.55 !important;
          font-weight: 600 !important;
          transition: 0.2s ease !important;
          word-break: normal !important;
          overflow-wrap: normal !important;
        }

        .media-specs-section .media-spec-card:hover {
          background: #181c26 !important;
          color: #ffffff !important;
          border-color: #0f33fe !important;
        }

        @media (max-width: 480px) {
          .media-specs-section .media-spec-card {
            font-size: 12.5px !important;
            padding: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MediaProductionSpecs;
