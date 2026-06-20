import Hero from "../components/digital_learning/Hero";
import BehavioralPerformance from "../components/digital_learning/Behavioralperformance";
import WhyTraditionalfails from "../components/digital_learning/Whytraditionalfails";
import Whoisitfor from "../components/digital_learning/Whoisitfor";
import IncludedCapabilities from "../components/common/Includedcapabilities";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";
import WhatAcademyIncludes from "../components/digital_learning/WhatAcademyIncludes";
import HowWeBuildPrograms from "../components/digital_learning/HowWeBuildPrograms";
import { FAQSection, CTASection } from "../components/digital_learning/Faqandcta";
import StartWithClarity from "../components/common/START_WITH_CLARITY";


const includedCapabilities = [
    {
        id: "01",
        title: "Learning Experience Design",
        desc: "Design the full learner journey, learning objectives, structure, modules, activities, and progress logic to trigger mastery.",
        tag: "Learner journey architecture",
        image: "/images/digital-learning/learning-experience-design.jpg",
        anchor: "learning-experience-design",
    },
    {
        id: "02",
        title: "Interactive Educational Content",
        desc: "Transform traditional learning material into interactive, visual, multimedia, and engagement-based digital content.",
        tag: "Multimedia & engagement systems",
        image: "/images/digital-learning/interactive-educational-content.jpg",
        anchor: "interactive-educational-content",
    },
    {
        id: "03",
        title: "Training & Capacity Building Programs",
        desc: "Build structured training frameworks that improve skills, institutional capacity, team performance, and compliance metrics.",
        tag: "Institutional training programs",
        image: "/images/digital-learning/training-capacity-building.jpg",
        anchor: "training-capacity-building",
    },
    {
        id: "04",
        title: "Learning Platforms UX & Content",
        desc: "Design learning platform flows, UX structures, content architecture, dashboards, onboarding, and learner navigation.",
        tag: "Platform UX & content flows",
        image: "/images/digital-learning/learning-platforms-ux.jpg",
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
            "Designing seamless visual learning spaces (LMS dashboards, portals, mobile screens, lesson streams). We build intuitive course checklists, smooth progress menus, clear video containers, and secure profile systems to reduce navigational friction.",
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
        <>
            <Hero />
            <BehavioralPerformance />
            <WhyTraditionalfails />
            <Whoisitfor />
            <IncludedCapabilities
                label="E-LEARNING COMPETENCIES"
                title="Included Capabilities"
                capabilities={includedCapabilities}
            />
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
        </>
    );
}
