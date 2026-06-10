import Hero from "../components/media_production/Hero";
import Overview from "../components/media_production/Overview";
import Failures from "../components/media_production/Failures";
import Audiences from "../components/media_production/Audiences";
import IncludedCapabilities from "../components/common/IncludedCapabilities";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";
import Specs from "../components/media_production/Specs";


const includedCapabilities = [
  {
    id: "01",
    title: "Commercial Production",
    desc: "Promotional film assets engineered to carry bold message directions, setting off product and brand launches cleanly.",
    tag: "Cinema-grade commercial ads",
    image: null,
    anchor: "commercial-production",
  },
  {
    id: "02",
    title: "Corporate & Brand Videos",
    desc: "Highlighting operational spaces, company culture, team stories, trust interviews, and core corporate capability summaries.",
    tag: "Executive interview profiles",
    image: null,
    anchor: "corporate-brand-videos",
  },
  {
    id: "03",
    title: "Motion Graphics",
    desc: "Custom branded static-to-animated layout systems designed to illustrate technical data and concepts smoothly.",
    tag: "2D/3D dynamic visual diagrams",
    image: null,
    anchor: "motion-graphics",
  },
  {
    id: "04",
    title: "Commercial Photography",
    desc: "High-contrast product, space, and lifestyle photography styled to elevate catalogs and website banners.",
    tag: "Studio assets & environmental shoots",
    image: null,
    anchor: "commercial-photography",
  },
  {
    id: "05",
    title: "Virtual Tour 360",
    desc: "Interactive spatial scanning capturing clinics, offices, and real estate properties in high detail.",
    tag: "Responsive spatial interface packages",
    image: null,
    anchor: "virtual-tour-360",
  },
  {
    id: "06",
    title: "Media Production Management",
    desc: "Full strategic planning, concept storyboarding, crew logistics, and modular content-library organization.",
    tag: "Comprehensive production oversight",
    image: null,
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
      image: "./../../public/images/media-production/hero-bg.jpg.jpeg",
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
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
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
    <>
      <Hero />
      <Overview />
      <Failures />
      <Audiences />
      <IncludedCapabilities
        label="PRODUCTION COMPETENCY"
        title="Included Capabilities"
        capabilities={includedCapabilities}
      />
      <CapabilitiesSection
        id="capabilities-section"
        eyebrow="TACTICAL PRODUCTIONS"
        title="Capabilities In Detail"
        cards={mediaProductionCapabilities}
      />
      <Specs />

    </>
  );
}