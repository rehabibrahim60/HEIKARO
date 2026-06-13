import Hero from "../components/EventsExperiential/Hero";
import WhyEventsFallFlat from "../components/EventsExperiential/WhyEventsFallFlat";
import SpatialNarratives from "../components/EventsExperiential/SpatialNarratives";
import Targetpartners from "../components/EventsExperiential/Targetpartners";
import Includedcapabilities from "../components/common/Includedcapabilities";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import EventPackIncludes from "../components/EventsExperiential/EventPackIncludes";
import EventsFAQ from "../components/EventsExperiential/Eventsfaq";
import EventsCTA from "../components/EventsExperiential/Eventscta";


export default function EventsExperiential() {

    const eventsCapabilities = [
        {
            id: "01",
            title: "Event Strategy & Concept",
            desc: "Define the event objective, creative idea, audience journey, experience structure, and strategic direction.",
            tag: "Strategic event blueprints",
            image: null,
            anchor: "experience-strategy",
        },
        {
            id: "02",
            title: "Corporate Events",
            desc: "Design professional corporate experiences for teams, partners, clients, leadership, launches, and internal culture.",
            tag: "Enterprise event systems",
            image: null,
            anchor: "creative-event-concept",
        },
        {
            id: "03",
            title: "Exhibitions & Booths",
            desc: "Create exhibition and booth experiences that attract visitors, explain value, guide interaction, and support sales.",
            tag: "Trade show & expo builds",
            image: null,
            anchor: "audience-journey-design",
        },
        {
            id: "04",
            title: "Experiential Activations",
            desc: "Build live brand activations that turn audience participation into memorable brand moments.",
            tag: "Live brand experiences",
            image: null,
            anchor: "production-activation-logic",
        },
        {
            id: "05",
            title: "Conferences",
            desc: "Develop conference experiences with strong agendas, stage logic, content flow, and participant journeys.",
            tag: "Summit & speaker programs",
            image: null,
            anchor: "experience-strategy",
        },
        {
            id: "06",
            title: "Product Launch Events",
            desc: "Create launch experiences that introduce products, build anticipation, explain value, and generate market attention.",
            tag: "Launch event productions",
            image: null,
            anchor: "production-activation-logic",
        },
        {
            id: "07",
            title: "Cultural & Development Events",
            desc: "Design cultural, social, public, community, NGO, institutional, and development-focused events with meaningful narratives.",
            tag: "Community & cultural programs",
            image: null,
            anchor: "audience-journey-design",
        },
        {
            id: "08",
            title: "Hybrid & Digital Events",
            desc: "Create digital and hybrid event experiences that connect physical and remote audiences through content and interaction.",
            tag: "Digital event platforms",
            image: null,
            anchor: "production-activation-logic",
        },
    ];

    const eventManagementCapabilities = [
        {
            id: 1,
            anchorId: "event-strategy-concept",
            chapter: "CHAPTER 01 // STRATEGIC PROGRAMMING",
            title: "Event Strategy & Concept",
            description:
                "Defining high-value targets, brand narratives, spatial configurations, and visual concept blueprints before physical setups begin. We build concrete plans to make sure every event touches its commercial target.",
            competencyText: "EXPERIENTIAL MASTER PLANS",
            image: "",
            imageAlt: "Event Strategy & Concept",
            imagePosition: "right",
            details: [
                {
                    title: "01 // STRATEGIC ROLE",
                    text: "Anchors all event decisions to key objectives, brand mandates, and operational KPI causing downstream improvements to attendance conversion paths.",
                },
                {
                    title: "02 // HOW HEIKARO APPROACHES IT",
                    text: "We map interactive guest journeys, storyboard and messaging guidelines, and balance guest placement guidelines. We complete an operational KPI scoring directive.",
                },
                {
                    title: "03 // EXECUTION FLOW",
                    list: [
                        "Commercial Objectives Review",
                        "Attention & Report Drafting",
                        "Scenic Special Personas",
                        "Operational Control Handover",
                    ],
                },
                {
                    title: "04 // OUTCOMES & USE CASES",
                    text: "Creates clarity that aligns all production decisions across multiple production centers. Applied when launching new event ranges, flagship locations, or expanding product-brand formats.",
                },
            ],
        },
        {
            id: 2,
            anchorId: "corporate-events",
            chapter: "CHAPTER 02 // ENTERPRISE SOLUTION FRAMEWORKS",
            title: "Corporate Events",
            description:
                "Designing and orchestrating professional corporate summits, culture galas, board summits, and partner networking networks. We weave corporate brand standards seamlessly into fluid, high-engagement room agendas.",
            competencyText: "PREMIUM EVENTS & GALAS",
            image: "",
            imageAlt: "Corporate Events",
            imagePosition: "right",
            details: [
                {
                    title: "01 // STRATEGIC ROLE",
                    text: "Powers and amplifies. Positions motivational pride, builds trusted relations, and showcases optimal event scales clearly.",
                },
                {
                    title: "02 // HOW HEIKARO APPROACHES IT",
                    text: "We design, format, communicate, flow motion slides to budget promotional, and structure room leadership design. Every event is designed with integrated high-performance, so displays communicate high-investment board statements.",
                },
                {
                    title: "03 // EXECUTION FLOW",
                    list: [
                        "Internal Mission Flow planning",
                        "Executive Logistics Location",
                        "Agenda Panel Setup",
                        "Stage Control Preparation",
                    ],
                },
                {
                    title: "04 // OUTCOMES & USE CASES",
                    text: "Develops higher conversion partnership success by 3%. The ideal when executing key annual board meetings, leadership workshops, or financial annual summits.",
                },
            ],
        },
        {
            id: 3,
            anchorId: "exhibitions-booths",
            chapter: "CHAPTER 03 // TRADE HALL SHOWCASE",
            title: "Exhibitions & Booths",
            description:
                "Building premium, structurally optimized exhibition stands, booth architecture, wayfinding systems, and interactive panels that stand out from adjacent trade-hall noise.",
            competencyText: "BESPOKE EXHIBITION STANDS",
            image: "",
            imageAlt: "Exhibitions & Booths",
            imagePosition: "right",
            details: [
                {
                    title: "01 // STRATEGIC ROLE",
                    text: "All-in-event pushing high-visitor foot traffic. Frees real marketing exhibition outputs by actively drawing inbound conversion paths.",
                },
                {
                    title: "02 // HOW HEIKARO APPROACHES IT",
                    text: "We render detailed outputs for 3D CAD blueprints, wayfinding system designing guidelines, along with static signage conversion graphs, we translate premium solutions for heavy trade halls.",
                },
                {
                    title: "03 // EXECUTION FLOW",
                    list: [
                        "Booth Footprint Analysis",
                        "3D Spatial & Signage Mapping",
                        "Lighting & Storytelling Mapping",
                        "Setup Guidance Documentation",
                    ],
                },
                {
                    title: "04 // OUTCOMES & USE CASES",
                    text: "Increases booth foot traffic leads and audience retention by up to 65%. Vital for manufacturers, pharmaceutical companies, and product agencies at key trade shows.",
                },
            ],
        },
        {
            id: 4,
            anchorId: "experiential-activations",
            chapter: "CHAPTER 04 // ACTIVE AUDIENCE INTERACTION",
            title: "Experiential Activations",
            description:
                "We code and deploy physical interactive experiences that compel visitors to touch, configure, and share elements. We create memorable physical brand loops designed to foster audience participation.",
            competencyText: "UNIVERSAL BRAND ACTIVATIONS",
            image: "",
            imageAlt: "Experiential Activations",
            imagePosition: "right",
            details: [
                {
                    title: "01 // STRATEGIC ROLE",
                    text: "Triggers and boosts. Maximizes off-operation data operations positivity, transforming audience members into active live contributors and promoters of the brand.",
                },
                {
                    title: "02 // HOW HEIKARO APPROACHES IT",
                    text: "We offer the comprehensive activation playbooks, responsive engagement, status-reflective layouts, and animations page builds to complete multi-state client print installations serving trigger interactive participation.",
                },
                {
                    title: "03 // EXECUTION FLOW",
                    list: [
                        "Brand Meeting Loop Setup",
                        "Physical Outcome Prototyping",
                        "Gate-to-Venue Integration",
                        "Operational Floor Validation",
                    ],
                },
                {
                    title: "04 // OUTCOMES & USE CASES",
                    text: "Generates significant social media reach. Applied for brand launching activation stories, flagship exhibitions, or high-media discovery campaigns.",
                },
            ],
        },
        {
            id: 5,
            anchorId: "conferences",
            chapter: "CHAPTER 05 // MULTI-DAY AGENDA PACING",
            title: "Conferences",
            description:
                "Developing multi-day summit experiences. We set key panel segments, construct speaker slide guidelines, map stage visual sequences, and schedule networking blocks to keep rooms at engines.",
            competencyText: "STRUCTURED PANEL ORCHESTRATION",
            image: "",
            imageAlt: "Conferences",
            imagePosition: "right",
            details: [
                {
                    title: "01 // STRATEGIC ROLE",
                    text: "Expands and sustains. Positions regional leadership, social broadly. Drives scaled venue outcomes and leadership centers, positions the organization towards multi-category leadership.",
                },
                {
                    title: "02 // HOW HEIKARO APPROACHES IT",
                    text: "We plan, frame, work spatial guide corridors, flow motion stage agendas, and master a LUT badges, and complete multi-media television collections operating by Elasticity.",
                },
                {
                    title: "03 // EXECUTION FLOW",
                    list: [
                        "Plenary Directions Formulator",
                        "Speakers Agenda Tabulation Plans",
                        "Multi-room Television Collections",
                        "Operational Control Rigging",
                    ],
                },
                {
                    title: "04 // OUTCOMES & USE CASES",
                    text: "Drives meaningful on-session attendee outcomes. Ideal for tech road-ins, industrial association presentations, or financial and consulting services.",
                },
            ],
        },
        {
            id: 6,
            anchorId: "product-launch-events",
            chapter: "CHAPTER 06 // PRODUCT DROPS REVELATION",
            title: "Product Launch Events",
            description:
                "Creating a product launch reveal that introduces investors, build immersive anticipation, highlight key product benefits, and command widespread market attention.",
            competencyText: "HIGH-IMPACT REVEALS",
            image: "",
            imageAlt: "Product Launch Events",
            imagePosition: "right",
            details: [
                {
                    title: "01 // STRATEGIC ROLE",
                    text: "Captures conversion precision for per-launch. Under-performing output through measurable outcomes matrices, through media channels, and drives multiple commercial launches.",
                },
                {
                    title: "02 // HOW HEIKARO APPROACHES IT",
                    text: "We stage and optimize for media, setting product contexts inside multi-media profiles. Building point to create modular media builds, and align them to audience channel segments.",
                },
                {
                    title: "03 // EXECUTION FLOW",
                    list: [
                        "Theatrical Launch Flow Boarding",
                        "Cinematic Runway Mapping",
                        "Multi-zone Television Collections",
                        "Digital Press Distribution",
                    ],
                },
                {
                    title: "04 // OUTCOMES & USE CASES",
                    text: "Applied where every audience needs a live preview, 5-star media coverage, high visual retention, and press coverage for new commercial product launches.",
                },
            ],
        },
        {
            id: 7,
            anchorId: "cultural-development-events",
            chapter: "CHAPTER 07 // INSTITUTIONAL STORYTELLING",
            title: "Cultural & Development Events",
            description:
                "Designing public social forums, community, NGO, and cause-focused programs combining impactful storytelling with smooth logistics.",
            competencyText: "NARRATIVE SOCIAL SPACES",
            image: "",
            imageAlt: "Cultural and Development Events",
            imagePosition: "right",
            details: [
                {
                    title: "01 // STRATEGIC ROLE",
                    text: "Connects with institutional values and community goals. Positions marketable narratives within community walls, drives name mentions, and delivers major social experience.",
                },
                {
                    title: "02 // HOW HEIKARO APPROACHES IT",
                    text: "We design custom multi-cultural interactive, demo gate formats, backdrop-layout renders, and highlight audio logistics content, searching with philanthropic and community themes.",
                },
                {
                    title: "03 // EXECUTION FLOW",
                    list: [
                        "Social Target Presentations",
                        "Backstage Agenda Blueprints",
                        "Ambient Team Lighting Configuration",
                        "Partner Integration Logs",
                    ],
                },
                {
                    title: "04 // OUTCOMES & USE CASES",
                    text: "Boosts public support and donor funding targets. Powerful for LGBTQ+ chapters, cultural associations, and global institutions in financial initiatives.",
                },
            ],
        },
        {
            id: 8,
            anchorId: "hybrid-digital-events",
            chapter: "CHAPTER 08 // DISTRIBUTED NEXT STREAMS",
            title: "Hybrid & Digital Events",
            description:
                "Developing seamless virtual portals, interactive keynote streams, dynamic spatial Q&A lobbies, and real-time remote voting interfaces. We make sure virtual attendees feel active and engaged.",
            competencyText: "EPIC VIRTUAL PLATFORMS",
            image: "",
            imageAlt: "Hybrid and Digital Events",
            imagePosition: "right",
            details: [
                {
                    title: "01 // STRATEGIC ROLE",
                    text: "Reaches and multiplies. Enables spatial broadcasts, bridges global places and remote groups for seamless cross-country streaming.",
                },
                {
                    title: "02 // HOW HEIKARO APPROACHES IT",
                    text: "We build seamless digital agenda pages, digital event spatials, synchronized custom streaming outputs, multi-channel visualizations and interactive toolbar features, and database feature additions.",
                },
                {
                    title: "03 // EXECUTION FLOW",
                    list: [
                        "Virtual Channel References",
                        "Tandem Audio & Vision Balancing",
                        "Live Chat & Poll Systems Setup",
                        "Performance Log Stats",
                    ],
                },
                {
                    title: "04 // OUTCOMES & USE CASES",
                    text: "Raises live-virtual simultaneous capacity by 800%. Effective for hardware developers, strategy seminars, global medical multi-location, or international commercial ventures.",
                },
            ],
        },
    ];


    return (
        <>
            <Hero />
            <SpatialNarratives />
            <WhyEventsFallFlat />
            <Targetpartners />
            <Includedcapabilities
                label="SPATIAL COMPETENCY"
                title="Included Capabilities"
                capabilities={eventsCapabilities}
            />
            <CapabilitiesSection
                id="event-capabilities-section"
                eyebrow="TACTICAL EVENTS"
                title="Capabilities In Detail"
                cards={eventManagementCapabilities}
            />
            <EventPackIncludes />
            <EventsFAQ />
            <EventsCTA />
            <StartWithClarity />
        </>
    );
}
