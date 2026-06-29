import Hero from "../components/AiPowerd/Hero";
import FutureIntelligence from "../components/AiPowerd/FutureIntelligence";
import WhyFilmShootsStagnate from "../components/AiPowerd/WhyFilmShootsStagnate";
import WhoIsItFor from "../components/AiPowerd/Whoisitforaivideo";
import IncludedCapabilities from "../components/common/IncludedCapabilities";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";
import WhatRenderingSystemIncludes from "../components/AiPowerd/Whatrenderingsystemincludes";
import {
  FAQSection,
  CTASection,
} from "../components/AiPowerd/Faqandctaaivideo";

import StartWithClarity from "../components/common/START_WITH_CLARITY";
import HowWeProduceCinemaFiles from "../components/AiPowerd/Howweproducecinemafiles";

export default function AiPowerd() {
  const aiVideoCapabilities = [
    {
      id: "01",
      title: "AI Cinematic Video Production",
      desc: "Synthesis-first scripting, photorealistic video programming, and film environments with natural AI direction and prompt continuity.",
      tag: "Generative film systems",
      anchor: "cinematic-ai-direction",
    },
    {
      id: "02",
      title: "CGI & Hyper-Real Visual Experiences",
      desc: "Develop perfect, photorealistic 3D assets, environments, and simulations with Blender-based 3D rendering for seamlessly lifelike output.",
      tag: "Hyper-real 3D environments",
      anchor: "hyper-real-cgi-3d",
    },
    {
      id: "03",
      title: "AI Commercials & Brand Films",
      desc: "Our directors develop screenplays with narrative visual stories to produce high-system, concept-driven advertisements and brand films.",
      tag: "Concept-driven brand ads",
      anchor: "brand-film-commercials",
    },
    {
      id: "04",
      title: "Product Visualization (3D/CGI)",
      desc: "Create premium product models, packaging visualizations, and high-realism simulations before physical production shoot production lines.",
      tag: "Pre-shoot product renders",
      anchor: "hyper-real-cgi-3d",
    },
    {
      id: "05",
      title: "AI Motion & VFX",
      desc: "Inject fluid motion, cinematic kinetic typography, texture transitions, and complex visual-based elements for speed and precision.",
      tag: "Motion & VFX pipelines",
      anchor: "universal-vfx-craft",
    },
  ];

  const aiVideoCapabilitiesDetail = [
    {
      id: 1,
      anchorId: "cinematic-ai-direction",
      chapter: "CHAPTER 01 // NEURAL FILM CREATION",
      title: "AI Cinematic Video Production",
      description:
        "Synthesize breathtaking, photorealistic video sequences and filmic environments under strict artistic control. We preserve visual realism and directing emotion by applying localized regional displacement maps to mega-characters, locations, and styling parameters over complex story sequences.",
      competencyText: "ENTERTAINMENT & SCENE CGI",
      image: "/images/Ai/AICINEMATIC.jpg",
      imageAlt: "AI Cinematic Video Production",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Redirects production cost wells. Allows marketing departments to test and deploy non-physical presentations while bypassing multi-million dollar location impacts.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We compile cinematic-grade motion sequences inside structured formats, parameterized into layered synthetic systems to add conceptual depth layouts. Complete with a mixed-media workload assets, we deliver flawless creation with reality.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Script Mesh Mapping",
            "Sequential Plot Texturing Runs",
            "Character Generation & Acting",
            "Temporal Noise Cleanup",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Cinematic reconstruction catalogs with 90% budget savings. Key for entertainment studios, concept visual editors, or disruption campaign and films.",
        },
      ],
    },
    {
      id: 2,
      anchorId: "hyper-real-cgi-3d",
      chapter: "CHAPTER 02 // VIRTUAL LUXURY RENDERING",
      title: "CGI & Hyper-Real Visual Experiences",
      description:
        "We develop hyper-real, physics-compliant 3D environments, custom fluid dynamics simulations, and structured particle visuals. We construct palette scenes from raw CGI briefs to support premium commercial branding campaigns.",
      competencyText: "PHYSICAL BRAND RENDERING (PBR)",
      image: "/images/Ai/CGIHYPERREAL.jpg",
      imageAlt: "CGI and Hyper-Real Visual Experiences",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Pushes above visual standards. Projects customization ranges, trends, and transitions to maintain manipulating tactile details and perfect lighting layouts.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We create high-fidelity 3D modeling files and custom product masks with dynamic 360-degree spin assets. Rooted in industry visual realism environment protocols, we render luxury CGI imagery back to full production quality.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Geometry & Mesh Blueprinting",
            "PBR Material Texture Setup",
            "Sequential Rendering Setups",
            "Render Optimization Cycles",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Drives higher e-commerce values for luxury products. Vital for product-centered catalog systems digitally, or high-end brand presentations.",
        },
      ],
    },
    {
      id: 3,
      anchorId: "brand-film-commercials",
      chapter: "CHAPTER 03 // DISRUPTION ADVERTISING FILMS",
      title: "AI Commercials & Brand Films",
      description:
        "Combine high-end visual synthesis with structured marketing screenplays to deliver disruptive campaign films. We build high-persuasion visual storytelling structures designed to command immediate attention.",
      competencyText: "IMMERSIVE ACQUISITION FILMS",
      image: "/images/Ai/AICOMMERCIALS.jpg",
      imageAlt: "AI Commercials and Brand Films",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Fuels campaigns with hyper-impact video creation. Provides creative systems that allow teams to maximize and scale across performance channels.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We assemble collaborative reel and visual split-test systems, and deliver campaign-quality LUT profiles. Complete with market-run tools, our team builds symbolic and multi-dynamic edits.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Campaign Flow Mapping",
            "Character & Hyper Commission Setups",
            "Scene Compositing & Grading Loops",
            "Brand VFX Layer Additions",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Ideal for consumer hardware catalogs, campaign launches, or lifestyle e-commerce promotions requiring cinematic-grade brand storytelling.",
        },
      ],
    },
    {
      id: 4,
      anchorId: "product-visualization",
      chapter: "CHAPTER 04 // GLASS-LIKE CATALOG ARTWORK",
      title: "Product Visualization (3D/CGI)",
      description:
        "Create premium photorealistic product renders, packaging visualizations, and dynamic light studio loops. Allows category leaders to secure campaign materials before manufacturing runs are finalized.",
      competencyText: "PRECISION PRODUCT MODELING",
      image: "/images/Ai/PRODUCT.jpg",
      imageAlt: "Product Visualization 3D CGI",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Simplifies catalog rendering bottlenecks. Bypasses physical builds or prints, identifying filing delays to set up problems, platform print and product strategies.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We build high-impact product libraries inside 3D backgrounds, digital packaging maps, and key-faded product environment modules. With transparent background inserts, catalog workflows and filters are freed from common workarounds.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Individual Blueprint Outlining",
            "Surface Imperfection Modeling",
            "Studio Spotlight Axis Alignment",
            "Layered Smooth Stamps",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Perfect for electronic builders, premium beverages, heavy medical instruments, or computer material sets requiring launch-ready campaign assets.",
        },
      ],
    },
    {
      id: 5,
      anchorId: "universal-vfx-craft",
      chapter: "CHAPTER 05 // NEURAL KINETICS & EFFECTS",
      title: "AI Motion & VFX",
      description:
        "Develop fluid visual kinetics, luxury brand motion curves, digital transitions, and multi-track neural visual effects. We craft modern and impactful kinetic typography interfaces to capture and direct audience attention.",
      competencyText: "DYNAMIC VFX OVERLAYS",
      image: "/images/Ai/AIMOTION.jpg",
      imageAlt: "AI Motion and VFX",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Fine-focuses neural routing. Combines class design-grid time-framed triggers and kinetic transitions to maximize extraction of form-led experiences.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We design luxury typography sheet packages, cloud VFX signature transition overlays, and layered brand re-endings. Backed by sector-visual sampling and shape-powered brand treatment across digital systems.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Layered Typography Setup",
            "Hyper Motion Path Curving",
            "Particle Rendering Process",
            "Performance Optimization Checks",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Eliminates brand barriers in visual digital assets. Ideal for SaaS products centered on system digitizing, or high-end brand presentations requiring motion authority.",
        },
      ],
    },
  ];

  return (
    <div
      className="service-page ai-powered-page bg-[#0a0a0a] min-h-screen text-white"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <Hero />
      <FutureIntelligence />
      <WhyFilmShootsStagnate />
      <WhoIsItFor />
      <IncludedCapabilities
        label="INTERACTIVE ASSETS"
        title="Included Capabilities"
        capabilities={aiVideoCapabilities}
      />

      <CapabilitiesSection
        id="capabilities-section"
        eyebrow="SYNTHETIC CINEMA OPS"
        title="Capabilities In Detail"
        cards={aiVideoCapabilitiesDetail}
      />
      <WhatRenderingSystemIncludes />
      <HowWeProduceCinemaFiles />
      <FAQSection />
      <CTASection />
      <StartWithClarity />
    </div>
  );
}
