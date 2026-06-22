import BehavioralPerformance from "../components/digital_learning/Behavioralperformance";
import WhyTraditionalfails from "../components/digital_learning/Whytraditionalfails";
import Whoisitfor from "../components/digital_learning/Whoisitfor";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";
import WhatAcademyIncludes from "../components/digital_learning/WhatAcademyIncludes";
import HowWeBuildPrograms from "../components/digital_learning/HowWeBuildPrograms";
import { FAQSection, CTASection } from "../components/digital_learning/Faqandcta";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import "./style/pageHero.css";

const includedCapabilities = [
  {
    id: "01",
    title: "Learning Experience Design",
    desc: "Design the full learner journey, learning objectives, structure, modules, activities, and progress logic to trigger mastery.",
    tag: "Learner journey architecture",
    anchor: "learning-experience-design",
  },
  {
    id: "02",
    title: "Interactive Educational Content",
    desc: "Transform traditional learning material into interactive, visual, multimedia, and engagement-based digital content.",
    tag: "Multimedia & engagement systems",
    anchor: "interactive-educational-content",
  },
  {
    id: "03",
    title: "Training & Capacity Building Programs",
    desc: "Build structured training frameworks that improve skills, institutional capacity, team performance, and compliance metrics.",
    tag: "Institutional training programs",
    anchor: "training-capacity-building",
  },
  {
    id: "04",
    title: "Learning Platforms UX & Content",
    desc: "Design learning platform flows, UX structures, content architecture, dashboards, onboarding, and learner navigation.",
    tag: "Platform UX & content flows",
    anchor: "learning-platforms-ux",
  },
];

const digitalLearningCapabilities = [
  {
    id: 1,
    anchorId: "learning-experience-design",
    chapter: "CHAPTER 01 // COGNITIVE PATHWAY DESIGN",
    title: "Learning Experience Design (LXD)",
    description:
      "Designing structural e-learning pathways from ground zero. We define terminal skills objectives, build module maps, sequence chapters strategically to balance cognitive load, and design locking progress gates to keep student progress clear and purposeful.",
    competencyText: "CURRICULUM BLUEPRINTS",
    image: "",
    imageAlt: "Learning Experience Design",
    imagePosition: "right",
    details: [
      {
        title: "01 // STRATEGIC ROLE",
        text: "Establishes instructional clarity. Combines behavioral psychology with clean curriculum structures, reducing student abandonment and boosting modular progress rates.",
      },
      {
        title: "02 // HOW HEIKARO APPROACHES IT",
        text: "We compile full curriculum strategic plans, detailed sequential chapter maps, and objective skills scoring matrices. By mapping accurate learner profiles, we align education flows to true industry performance needs.",
      },
      {
        title: "03 // EXECUTION FLOW",
        list: [
          "Competency Demands Analysis",
          "Modular Path Sequencing",
          "Milestone Verification Design",
          "Instruction Scripting",
        ],
      },
      {
        title: "04 // OUTCOMES & USE CASES",
        text: "Increases course completion metrics by up to 3x. Applied when traditional schools migrate degrees online or software firms set up partner training academies.",
      },
    ],
  },
  {
    id: 2,
    anchorId: "interactive-educational-content",
    chapter: "CHAPTER 02 // ENGAGING STUDY SESSIONS",
    title: "Interactive Educational Content",
    description:
      "We transform boring scripts and manuals into visual explanatory slides, interactive case challenges, scenario cards, responsive maps, and high-impact micro videos that help students learn concepts by experimenting in sandbox settings.",
    competencyText: "SENSORY MEDIA & SCORM ASSETS",
    image: "",
    imageAlt: "Interactive Educational Content",
    imagePosition: "right",
    details: [
      {
        title: "01 // STRATEGIC ROLE",
        text: "Addresses low student retention. Moves teaching from flat text blocks into active applied setups, which reinforces knowledge and cements skills mastery.",
      },
      {
        title: "02 // HOW HEIKARO APPROACHES IT",
        text: "We author premium SCORM-compatible HTML5 interactive modules, high-end vector educational graphics, and custom scenario frameworks. With cinema-grade explanatory audio/video, we make study sessions immersive.",
      },
      {
        title: "03 // EXECUTION FLOW",
        list: [
          "Complex Concept Auditing",
          "Interactive Scenario Storyboarding",
          "Vector Graphic Drafting",
          "SCORM System Packing",
        ],
      },
      {
        title: "04 // OUTCOMES & USE CASES",
        text: "Enables modular training across regional branches. Essential for franchising set-ups, up-skilling kitchen staffs, or hospitals standardizing equipment rules.",
      },
    ],
  },
  {
    id: 3,
    anchorId: "training-capacity-building",
    chapter: "CHAPTER 03 // INSTITUTIONAL ENHANCEMENT",
    title: "Training & Capacity Building Programs",
    description:
      "Building complete training programs optimized to up-skill massive partner groups, internal team divisions, or administrative bureaus under strict, trackable compliance metrics.",
    competencyText: "ENTERPRISE TALENT ACADEMIES",
    image: "",
    imageAlt: "Training and Capacity Building Programs",
    imagePosition: "right",
    details: [
      {
        title: "01 // STRATEGIC ROLE",
        text: "Guarantees group standards alignment. Brings structured educational logic to scattered HR training manuals to protect operational consistency.",
      },
      {
        title: "02 // HOW HEIKARO APPROACHES IT",
        text: "We create operational manuals, comprehensive facilitator kits, student study trackers, and detailed validation assessments. We build end-to-end training pathways that turn organizational knowledge into standard team actions.",
      },
      {
        title: "03 // EXECUTION FLOW",
        list: [
          "Operations Friction Analysis",
          "Curriculum Frame Planning",
          "Validation Material Scribing",
          "Program Rollout Support",
        ],
      },
      {
        title: "04 // OUTCOMES & USE CASES",
        text: "Standardizes talent capabilities. Vital for NGOs running local community education pathways or agencies training global customer service centers.",
      },
    ],
  },
  {
    id: 4,
    anchorId: "learning-platforms-ux",
    chapter: "CHAPTER 04 // INTERACTIVE ACADEMY INTERFACES",
    title: "Learning Platforms UX & Content",
    description:
      "Designing seamless visual learning spaces. We build intuitive course checklists, smooth progress menus, clear video containers, and secure profile systems to reduce navigational friction.",
    competencyText: "FRICTIONLESS LMS INTERFACES",
    image: "",
    imageAlt: "Learning Platforms UX and Content",
    imagePosition: "right",
    details: [
      {
        title: "01 // STRATEGIC ROLE",
        text: "Minimizes visual complexity. Avoids cluttered layouts that confuse users, and instead organizes resources logically so that learning path structures remain easy and intuitive.",
      },
      {
        title: "02 // HOW HEIKARO APPROACHES IT",
        text: "We design high-fidelity LMS interfaces and smooth lesson navigation menu flows inside Figma. Complete with custom video containers and responsive layout codes, we make studying intuitive on any device.",
      },
      {
        title: "03 // EXECUTION FLOW",
        list: [
          "Portal Nav Friction Auditing",
          "Lesson Check-off Layout Design",
          "Mobile Fluidity Testing Runs",
          "Dev-friendly Layout Specs Transfer",
        ],
      },
      {
        title: "04 // OUTCOMES & USE CASES",
        text: "Lowers platform support tickets by up to 50%. Essential for EdTech startups establishing primary brand interfaces or academies modernizing their student portals.",
      },
    ],
  },
];

export default function DigitalLearning() {
  return (
    <div
      className="digital-learning-page bg-[#0a0a0a] min-h-screen text-white"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
     <style>
  {`
    .digital-learning-page,
    .digital-learning-page * {
      font-family: "Aspekta", sans-serif !important;
    }

    .digital-learning-page h1 {
      font-size: clamp(44px, 6vw, 78px) !important;
      line-height: 0.95 !important;
      font-weight: 900 !important;
      letter-spacing: -0.04em !important;
      text-transform: uppercase !important;
    }

    .digital-learning-page h2 {
      font-size: clamp(34px, 4.2vw, 52px) !important;
      line-height: 1.12 !important;
      font-weight: 900 !important;
      letter-spacing: -0.035em !important;
      text-transform: uppercase !important;
    }

    .digital-learning-page h3,
    .digital-learning-page h4 {
      font-size: 21px !important;
      line-height: 1.3 !important;
      font-weight: 900 !important;
      letter-spacing: -0.02em !important;
      text-transform: uppercase !important;
    }

    .digital-learning-page p {
      font-size: 18px !important;
      line-height: 1.9 !important;
      font-weight: 500 !important;
    }

    .digital-learning-page li {
      font-size: 16px !important;
      line-height: 1.8 !important;
    }

    .digital-learning-page .text-sm,
    .digital-learning-page [class*="text-sm"] {
      font-size: 16px !important;
      line-height: 1.85 !important;
    }

    .digital-learning-page .text-xs,
    .digital-learning-page [class*="text-xs"] {
      font-size: 13px !important;
      line-height: 1.5 !important;
      font-weight: 900 !important;
    }

    .digital-learning-page .text-lg,
    .digital-learning-page [class*="text-lg"] {
      font-size: 18px !important;
      line-height: 1.9 !important;
    }

    .digital-learning-page a p {
      font-size: 16px !important;
      line-height: 1.85 !important;
    }

    .digital-learning-page a h3 {
      font-size: 20px !important;
      line-height: 1.3 !important;
    }

    .digital-learning-page a,
    .digital-learning-page button {
      font-size: 14px !important;
      font-weight: 900 !important;
      letter-spacing: 1.5px !important;
    }

    @media (max-width: 768px) {
      .digital-learning-page h1 {
        font-size: clamp(38px, 11vw, 56px) !important;
      }

      .digital-learning-page h2 {
        font-size: 31px !important;
      }

      .digital-learning-page h3,
      .digital-learning-page h4 {
        font-size: 19px !important;
      }

      .digital-learning-page p {
        font-size: 16px !important;
        line-height: 1.8 !important;
      }

      .digital-learning-page .text-sm,
      .digital-learning-page [class*="text-sm"] {
        font-size: 15px !important;
      }
    }
  `}
</style>

      {/* HERO زي Services */}
      <section
        className="unified-page-hero"
        style={{ "--hero-bg": "url('/hero-bg.jpg.jpeg')" }}
      >
        <div className="unified-page-hero-content">

          <h1 className="unified-page-title">
            DIGITAL <br />
            LEARNING
          </h1>

          <p className="unified-page-desc">
            — Learning experience systems designed to transform education,
            training, platforms, and content into structured digital growth
            environments.
          </p>
        </div>
      </section>

      <BehavioralPerformance />
      <WhyTraditionalfails />
      <Whoisitfor />

      {/* Included Capabilities - بدون صور */}
      <section className="bg-[#0a0a0a] text-white py-[95px] px-[8%] border-t border-[#111]">
        <div className="text-center mb-16">
          <p className="text-[#bbfe0f] font-black tracking-[4px] text-[12px] uppercase mb-5">
            CAPABILITIES SPECTRUM
          </p>

          <h2 className="text-[36px] md:text-[58px] font-black leading-[1.05] tracking-[-0.04em] text-white">
            Included Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {includedCapabilities.map((item) => (
            <a
              key={item.id}
              href={`#${item.anchor}`}
              className="group min-h-[360px] border border-[#222] bg-[#080808] p-8 flex flex-col justify-between hover:border-[#0f33fe] transition-all duration-300"
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
        eyebrow="E-LEARNING COMPETENCIES"
        title="Capabilities In Detail"
        cards={digitalLearningCapabilities}
      />

      <WhatAcademyIncludes />
      <HowWeBuildPrograms />
      <FAQSection />
      <CTASection />
      <StartWithClarity />
    </div>
  );
}