import Overview from "../components/media_production/Overview";
import Failures from "../components/media_production/Failures";
import Audiences from "../components/media_production/Audiences";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";
import Specs from "../components/media_production/Specs";
import HowWeProduceMediaAssets from "../components/media_production/Howweproducemediaassets";
import FAQSection from "../components/media_production/Faqsection";
import CTASection from "../components/media_production/Ctasection";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import "./style/pageHero.css";

const includedCapabilities = [
  {
    id: "01",
    title: "Commercial Production",
    desc: "Promotional film assets engineered to carry bold message directions, setting off product and brand launches cleanly.",
    tag: "Cinema-grade commercial ads",
    anchor: "commercial-production",
  },
  {
    id: "02",
    title: "Corporate & Brand Videos",
    desc: "Highlighting operational spaces, company culture, team stories, trust interviews, and core corporate capability summaries.",
    tag: "Executive interview profiles",
    anchor: "corporate-brand-videos",
  },
  {
    id: "03",
    title: "Motion Graphics",
    desc: "Custom branded static-to-animated layout systems designed to illustrate technical data and concepts smoothly.",
    tag: "2D/3D dynamic visual diagrams",
    anchor: "motion-graphics",
  },
  {
    id: "04",
    title: "Commercial Photography",
    desc: "High-contrast product, space, and lifestyle photography styled to elevate catalogs and website banners.",
    tag: "Studio assets & environmental shoots",
    anchor: "commercial-photography",
  },
  {
    id: "05",
    title: "Virtual Tour 360",
    desc: "Interactive spatial scanning capturing clinics, offices, and real estate properties in high detail.",
    tag: "Responsive spatial interface packages",
    anchor: "virtual-tour-360",
  },
  {
    id: "06",
    title: "Media Production Management",
    desc: "Full strategic planning, concept storyboarding, crew logistics, and modular content-library organization.",
    tag: "Comprehensive production oversight",
    anchor: "media-production-management",
  },
];

export default function MediaProduction() {
  const mediaProductionCapabilities = [
    {
      id: 1,
      anchorId: "commercial-production",
      chapter: "CHAPTER 01 // HIGH-CONVERTING ADVERTISING",
      title: "Commercial Production",
      description:
        "Promotional film assets engineered to carry bold message directions, setting off product and brand launches cleanly. By structuring dynamic opening hooks and high-persuasion visual storytelling sequences, we make sure pay-per-click traffic converts.",
      competencyText: "LAUNCH ADS & PRODUCT FILMS",
      image: "/images/media-production/COMMERCIALPRODUCTION.jpg",
      imageAlt: "Commercial Production",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Fuels targeted marketing campaigns. Increases hook rates and retention sweeps, setting a premium authority standard that justifies higher product pricing.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We capture cinema-grade advertising assets and modular variant hook clips inside multi-format profiles. Complete with custom sound design and platform-optimized thumbnails, we deliver commercial films built to convert.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Target Hook Scripting",
            "High-end Lens Framing Shoot",
            "Post-Production Pacing Mix",
            "Platform Margin Exports",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Reduces customer acquisition costs by up to 40%. Vital for brands launching new products, luxury entities, or driving seasonal paid traffic conversions.",
        },
      ],
    },
    {
      id: 2,
      anchorId: "corporate-brand-videos",
      chapter: "CHAPTER 02 // TRUST-BUILDING PROFILES",
      title: "Corporate & Brand Videos",
      description:
        "Highlighting company culture, scale assets, executive visions, and operational structures. We create premium brand documentaries and test testimonials that build deep institutional credibility with clients, investors, and prospective partners.",
      competencyText: "BRAND PROFILES & DOCU-STORIES",
      image: "/images/media-production/CORPORATEVIDEOS.jpg",
      imageAlt: "Corporate and Brand Videos",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Establishes immediate pedigree. Functions as a silent sales representative on home offices or investor decks, validating infrastructure scales.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We produce complete corporate documentaries and executive profiles suited for investor presentations. Every video asset is designed with standard acoustic mixes and caption overlay files to speak with absolute authority.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Brand Mission Storyboarding",
            "Location Environment Capturing",
            "Dialogue Pacing Compilation",
            "LUT Grading Sweep",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Drives higher conversion rates on enterprise inquiry pipelines. Essential for medical centers, real estate developers, or consulting groups needing to project professional weight.",
        },
      ],
    },
    {
      id: 3,
      anchorId: "motion-graphics",
      chapter: "CHAPTER 03 // DYNAMIC LAYOUT ANIMATION",
      title: "Motion Graphics",
      description:
        "Custom branded animated layouts designed to illustrate technical data, operations pipelines, and abstract product structures. We animate complex vectors under unified grid systems, keeping visual flows elite, consistent, and educational.",
      competencyText: "2D/3D DATA VECTOR SYSTEMS",
      image: "/images/media-production/MOTIONGRAPHICS.jpg",
      imageAlt: "Motion Graphics",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Bridges difficult knowledge gaps. Translates complex code algorithms, financial tables, or mechanical pipelines into beautiful loops, maintaining high audience retention rates.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We animate custom branded layouts and 2D/3D explainers built to simplify convoluted service concepts. By pairing motion intros and exits with responsive web animation files, we build clear visual guides.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Complex Concept Outlining",
            "Vector Element Design Sweep",
            "Keyframe Dynamic Animation Runs",
            "Render Optimization Check",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Speeds up client decision times by simplifying information. Fits energy firms, medical manufacturers, and SaaS startups requiring high-converting explainer screens.",
        },
      ],
    },
    {
      id: 4,
      anchorId: "commercial-photography",
      chapter: "CHAPTER 04 // ELITE STILLS VISUALIZATION",
      title: "Commercial Photography",
      description:
        "High-contrast product modeling, space capturing, and targeted lifestyle compositions. We use professional studio light directions and custom styling scopes to construct premium stills that populate high-end catalog sheets and modern e-commerce arrays.",
      competencyText: "PRODUCT & ARCHITECTURAL STILLS",
      image: "/images/media-production/COMMERCIALPHOTOGRAPHY.jpg",
      imageAlt: "Commercial Photography",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Solves low visual trust. Prevents looking like cheap competitors by showcasing material qualities, intricate craft features, and operations scales in detailed resolutions.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We shoot high-resolution product styling sets, environmental spaces, and corporate lifestyle portrait files. By retouches and grading each asset professionally, we construct premium still assets for global catalog campaigns.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Framing & Styling Concept Setup",
            "Studio Light Capture Session",
            "Lens Artifact Sweep Cleansing",
            "Retouching Contrast Sweeps",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Raises average checkout values on premium online channels. Essential for cosmetics companies, luxury jewelry networks, custom builders, and hospitality retreats.",
        },
      ],
    },
    {
      id: 5,
      anchorId: "virtual-tour-360",
      chapter: "CHAPTER 05 // SPATIAL INTERACTIVE MAPS",
      title: "Virtual Tour 360",
      description:
        "Interactive clinical, real estate, and office space spatial scans. We compile high-resolution 360 panorama nodes into fluid digital interfaces, allowing visitors to walk through and examine your physical environments remotely.",
      competencyText: "PANORAMIC SPATIAL SCANS",
      image: "/images/media-production/360.jpg",
      imageAlt: "Virtual Tour 360",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Overcomes customer facility hesitation. Highlights cleanliness, high-tech installations, and hospitality configurations immediately, shifting spatial validation into home environments.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We build modular HTML 360 virtual tours and mobile-responsive panorama nodes. Configured with interactive information hotspots and maps integrations, we enable digital viewers to walk through spaces realistically.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Space Mapping & Placement Logging",
            "HDR Nodular Lens Capture Runs",
            "Dynamic Node Stitch Processing",
            "Interface Anchor Programming",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Secures online bookings for high-end properties and clinics. Suited for premium dental clinics, rehabilitation centers, wellness spots, and luxury real estate properties.",
        },
      ],
    },
    {
      id: 6,
      anchorId: "media-production-management",
      chapter: "CHAPTER 06 // SYNCED PRODUCTION MANAGEMENT",
      title: "Media Production Management",
      description:
        "Complete strategic pre-production planning, concept storyboard designs, team logistics management, crew direction, and raw-asset library metadata curation. We keep shoots focused on commercial goals and on-time delivery benchmarks.",
      competencyText: "END-TO-END PROJECT LOGISTICS",
      image: "/images/media-production/MEDIAPRODACTION.jpg",
      imageAlt: "Media Production Management",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Saves budget by preventing planning friction. Outlines schedules and camera setups beforehand, maximizing output volume during captured hours.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We coordinate pre-production concepts, location casting, shot list tracking, and raw asset digital registries. We manage development stages meticulously to guarantee assets remain aligned to primary business goals.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Asset Scoping & Shoot Outlining",
            "Crew Scheduling & Location Lock",
            "Production Progress Supervision",
            "File Organizing & Digital Archiving",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Ensures high-level consistency across multiple branch shoots. Vital for marketing groups needing clear, modular video modules that internal staff can reuse across multiple timelines.",
        },
      ],
    },
  ];

  return (
    <div
      className="service-page media-production-page bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <style>
        {`
    .media-production-page {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
    }

    .media-production-page,
    .media-production-page * {
      font-family: "Aspekta", sans-serif !important;
      box-sizing: border-box;
    }

    .media-production-page img,
    .media-production-page video {
      max-width: 100%;
      display: block;
    }

    .media-production-page h1 {
      font-size: clamp(44px, 6vw, 78px) !important;
      line-height: 0.95 !important;
      font-weight: 900 !important;
      letter-spacing: -0.04em !important;
      text-transform: uppercase !important;
    }

    .media-production-page h2 {
      font-size: clamp(34px, 4.2vw, 52px) !important;
      line-height: 1.12 !important;
      font-weight: 900 !important;
      letter-spacing: -0.035em !important;
      text-transform: uppercase !important;
    }

    .media-production-page h3,
    .media-production-page h4 {
      font-size: 21px !important;
      line-height: 1.3 !important;
      font-weight: 900 !important;
      letter-spacing: -0.02em !important;
      text-transform: uppercase !important;
    }

    .media-production-page p {
      font-size: 18px !important;
      line-height: 1.9 !important;
      font-weight: 500 !important;
      overflow-wrap: anywhere;
    }

    .media-production-page li {
      font-size: 16px !important;
      line-height: 1.8 !important;
    }

    .media-production-page a,
    .media-production-page button {
      max-width: 100%;
      font-size: 14px !important;
      font-weight: 900 !important;
      letter-spacing: 1.5px !important;
    }

    .media-production-page .grid {
      min-width: 0 !important;
    }

    .media-production-page .unified-page-title {
      font-size: clamp(44px, 7vw, 90px) !important;
    }

    .media-production-page .unified-page-desc {
      font-size: clamp(16px, 2vw, 21px) !important;
      line-height: 1.7 !important;
    }

    .media-production-page a p {
      font-size: 16px !important;
      line-height: 1.85 !important;
    }

    .media-production-page a h3 {
      font-size: 20px !important;
      line-height: 1.3 !important;
    }

    @media (max-width: 1024px) {
      .media-production-page section:not(.unified-page-hero) {
        padding-left: 40px !important;
        padding-right: 40px !important;
      }
    }

    @media (max-width: 768px) {
      .media-production-page section:not(.unified-page-hero) {
        padding-top: 70px !important;
        padding-bottom: 70px !important;
        padding-left: 18px !important;
        padding-right: 18px !important;
      }

      .media-production-page .unified-page-title {
        font-size: clamp(38px, 12vw, 58px) !important;
        line-height: 0.95 !important;
      }

      .media-production-page .unified-page-desc {
        font-size: 15px !important;
        line-height: 1.8 !important;
        max-width: 100% !important;
      }

      .media-production-page h1 {
        font-size: clamp(34px, 10vw, 48px) !important;
        line-height: 1.05 !important;
      }

      .media-production-page h2 {
        font-size: clamp(28px, 9vw, 36px) !important;
        line-height: 1.12 !important;
      }

      .media-production-page h3,
      .media-production-page h4 {
        font-size: 18px !important;
        line-height: 1.35 !important;
      }

      .media-production-page p {
        font-size: 15px !important;
        line-height: 1.8 !important;
      }

      .media-production-page li {
        font-size: 14px !important;
      }

      .media-production-page .text-lg,
      .media-production-page [class*="text-lg"] {
        font-size: 15px !important;
        line-height: 1.8 !important;
      }

      .media-production-page .text-sm,
      .media-production-page [class*="text-sm"] {
        font-size: 14px !important;
        line-height: 1.75 !important;
      }

      .media-production-page .text-xs,
      .media-production-page [class*="text-xs"] {
        font-size: 11px !important;
        line-height: 1.5 !important;
        letter-spacing: 1.2px !important;
      }

      .media-production-page .tracking-\\[4px\\],
      .media-production-page .tracking-\\[3px\\],
      .media-production-page .tracking-\\[-0\\.04em\\] {
        letter-spacing: 1.3px !important;
      }

      .media-production-page .min-h-\\[360px\\] {
        min-height: auto !important;
      }

      .media-production-page .p-8 {
        padding: 24px !important;
      }

      .media-production-page .mb-16 {
        margin-bottom: 42px !important;
      }

      .media-production-page .mb-12 {
        margin-bottom: 28px !important;
      }

      .media-production-page .mt-8 {
        margin-top: 24px !important;
      }

      .media-production-page .pt-7 {
        padding-top: 20px !important;
      }
    }

    @media (max-width: 420px) {
      .media-production-page section:not(.unified-page-hero) {
        padding-left: 16px !important;
        padding-right: 16px !important;
      }

      .media-production-page .unified-page-title {
        font-size: 40px !important;
      }

      .media-production-page h1 {
        font-size: 34px !important;
      }

      .media-production-page h2 {
        font-size: 30px !important;
      }

      .media-production-page h3,
      .media-production-page h4 {
        font-size: 17px !important;
      }

      .media-production-page p {
        font-size: 14px !important;
      }

      .media-production-page .p-8 {
        padding: 20px !important;
      }
    }
  `}
      </style>

      {/* HERO زي Services */}
      <section
        className="unified-page-hero"
        style={{
          "--hero-bg": "url('/images/media-production/cover.jpg')",
        }}
      >
        <div className="unified-page-hero-content">
          <h1 className="unified-page-title">
            MEDIA <br /> PRODUCTION
          </h1>

          <p className="unified-page-desc">
            — Cinema-grade visual assets designed to turn products, spaces,
            people, and brand stories into premium high-performing media
            systems.
          </p>
        </div>
      </section>

      <Overview />
      <Failures />
      <Audiences />

      {/* Included Capabilities - بدون صور */}
      <section className="bg-[#0a0a0a] text-white py-20 px-4 sm:px-6 lg:px-[8%] lg:py-[95px] border-t border-[#111]">
        <div className="text-center mb-16">
          <p className="text-[#bbfe0f] font-black tracking-[4px] text-[12px] uppercase mb-5">
            CAPABILITIES SPECTRUM
          </p>

          <h2 className="text-[36px] md:text-[58px] font-black leading-[1.05] tracking-[-0.04em] text-white">
            Included Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {includedCapabilities.map((item) => (
  <a
    key={item.id}
    href={`#${item.anchor}`}
    className="group min-h-auto lg:min-h-[360px] border border-[#222] bg-[#080808] p-6 sm:p-7 lg:p-8 flex flex-col justify-between hover:border-[#0f33fe] transition-all duration-300"
  >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="text-[#8da2c0] text-[13px] font-mono">
                    {item.id}
                  </span>

                  <span className="text-[#8da2c0] text-2xl group-hover:text-[#0f33fe] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    ↗
                  </span>
                </div>

                <h3 className="text-white text-[18px] leading-[1.3] font-black mb-5 tracking-[-0.02em] group-hover:text-[#0f33fe] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#8b9bb3] text-[15px] leading-[1.75]">
                  {item.desc}
                </p>
              </div>

              <div className="pt-7 mt-8 border-t border-[#222]">
                <p className="text-[#bbfe0f] text-[13px] leading-[1.5] font-black">
                  {item.tag}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <CapabilitiesSection
        id="capabilities-section"
        eyebrow="TACTICAL PRODUCTIONS"
        title="Capabilities In Detail"
        cards={mediaProductionCapabilities}
      />

      <Specs />
      <HowWeProduceMediaAssets />
      <FAQSection />
      <CTASection />
      <StartWithClarity />
    </div>
  );
}
