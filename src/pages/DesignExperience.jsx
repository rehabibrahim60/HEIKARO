import React from 'react';
import StartWithClarity from '../components/START_WITH_CLARITY';


export default function DesignExperience() {
    const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    
    
  // 1. يجب تعريف المصفوفات هنا بالداخل قبل جملة return
  const services = [
    { id: "s1",title: "UX & UI Service", desc: "Design user journeys...", image: "/path-to-image.jpg" },
    {id: "s2", title: "Website Design", desc: "Create premium, responsive...", image: "/path-to-image.jpg" },
    { id: "s3",title: "App Design", desc: "Design and build app...", image: "/path-to-image.jpg" },
    { id: "s4",title: "Landing Pages", desc: "Build focused landing pages...", image: "/path-to-image.jpg" }
  ];

  const servicesData = [
    {
      id: "s1",
      chapter: "CHAPTER 01 // VALUE PROPOSITION",
      title: "UX & UI Service",
      desc: "We map precise user journey loops, organize information architectures, build low-fidelity interactive wireframes for performance testing, and design gorgeous, high-contrast, brand-aligned interfaces that make digital products clear and confidence-inspiring.",
      img: "/hero-bg.jpg.jpeg",
      items: [
        { n: "01", t: "STRATEGIC ROLE", d: "Minimizes onboarding friction and drops abandonment rates by aligning visual weights natively with user-retention targets. Brings aesthetic order to convoluted application data dashboards." },
        { n: "02", t: "How HEIKARO Approaches It", d: "We create interactive interface layouts and fully detailed user flow maps inside Figma. By designing comprehensive component systems and testing mobile-responsive scales, we deliver clear, developer-ready structures that reduce execution times." },
        { n: "03", t: "Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Target Audience Exploration</li>
        <li> Navigation Blueprint Outline</li>
        <li>Interactive Greyscale Prototype Run</li>
        <li>Elite Visual Element Styling</li>
        </ul>
    ) },
        { n: "04", t: "Outcomes & Use Cases", d: "Creates bulletproof SaaS layouts ready for dev handoff. Critical for tech founders needing to pitch clear product flows or traditional firms modernizing corporate customer portals." }
      ]
    },
    {
    id: "s2",
    chapter: "CHAPTER 02 // WEB DEVELOPMENT SYSTEMS",

    title: "Website Design & Development",

    desc: " We construct ultra-fast responsive corporate sites. By combining beautiful SEO structure with lightweight components (Tailwind, React), we make sure your primary digital window ranks quickly on crawlers while ensuring user experiences remain friction-free and conversion-centric.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: "Functions as the central anchor of your digital marketing setup. Establishes commercial status, highlights authority case studies, and drives corporate lead generation under strict page-performance benchmarks." },


      { n: "02", t: " How HEIKARO Approaches It", d: "We build lightweight React and Tailwind web deployments complete with Schema markup and custom CMS synchronization. Each page is engineered with integrated analytics tracking and fast-load optimization to guarantee elite performance." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Site-Map Content Outlining</li>
        <li> Widescreen & Tablet UI Proofing</li>
        <li>Semantic Code Compilation</li>
        <li> Performance Optimization Checks</li>
       </ul>
    ) },
     { n: "04", t: " Outcomes & Use Cases", d: "Maintains high-speed load profiles to support massive paid traffic runs. Designed for scale-ups re-engineering outdated web designs to capture market valuation and secure institutional credibility." },

    ]
  },
  {
    id: "s3",
    chapter: "CHAPTER 03 // MOBILE & WEB-APP SYSTEMS",
    title: "App Design & Development",
    desc: "Structuring native and cross-platform application matrices. We guide user experiences through micro-interaction designs, secure form frameworks, system grids, and database sync processes to build software layouts that feel smooth, stable, and highly responsive.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: "Drives persistent product utility. Keeps customers loyal by packaging interactive features, operations flows, and accounts management in a secure, intuitive mobile environment." },


      { n: "02", t: " How HEIKARO Approaches It", d: "We prototype app interactions using touch-target guidelines and structured inputs. By styling mobile form behaviors and coding device-ready layouts, we build systems that sync reliably across diverse viewport resolutions." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Experience Roadmap Setup</li>
        <li>  Standard Touch-Target Mapping</li>
        <li> Micro-Interaction Modeling</li>
        <li> Device Sandbox Compilation</li>
       </ul>
    ) },
     { n: "04", t: " Outcomes & Use Cases", d: "Standardizes user flows to limit customer support inquiries. Suited for premium wellness services, logistics agencies, and product startups launching active betas." },

    ]
  },
  {
    id: "s4",
    chapter: "CHAPTER 04 // TARGET CONVERSION ENGINES",

    title: "Landing Pages / Conversion UX",
    desc: "We engineer hyper-focused campaign landing environments. By stripping unnecessary menu options, amplifying value hierarchies, structuring clear lead captures, and prioritizing high-speed render layouts, we make sure your advertising traffic transforms into action.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: "Improves advertising return on investment (ROAS). Isolates target offerings to eliminate user choice overload, ensuring visitor attention is directed purely down the conversion funnel." },


      { n: "02", t: " How HEIKARO Approaches It", d: " We design high-converting single-pages complete with multi-step conversion forms and robust lead intake processes. By stripping design distractions, we establish clear CTA paths that translate traffic directly into customer bookings." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li> Campaign Goal Alignment</li>
        <li>  Distraction Stripping Run</li>
        <li> Conversion Copy Drafting</li>
        <li> Fast-load Build Packaging</li>
       </ul>
    ) },
     { n: "04", t: " Outcomes & Use Cases", d: "Maximizes cost-per-acquisition performance. Crucial for active marketing teams running Google Search ads, social media campaigns, or preparing limited product pre-sales." },

    ]
  },

  ];
  const stepsData = [
    { num: "01", title: "DISCOVERY & AUDIT", desc: "Understanding the business goals, current assets, user challenges, and target audience behavior." },
    { num: "02", title: "EXPERIENCE STRATEGY", desc: "Defining user personas, mapping user journeys, choosing key flows, and establishing conversion targets." },
    { num: "03", title: "INFORMATION ARCHITECTURE", desc: "Creating the site map, defining page structures, naming navigation items, and outlining content flow." },
    { num: "04", title: "STRUCTURAL WIREFRAMING", desc: "Building black-and-white layouts to test navigation usability, reading hierarchy, and element weight without styling." },
    { num: "05", title: "INTERFACE DESIGN", desc: "Designing premium visual layouts, selecting custom colors and fonts, and styling elements around HEIKARO's high-contrast style." },
    { num: "06", title: "DESIGN SYSTEM CREATION", desc: "Standardizing components, buttons, fields, icons, and sections into a reusable visual system for scale." },
    { num: "07", title: "TECHNICAL DEVELOPMENT", desc: "Coding experiences with clean, responsive, fast-loading, SEO-structured, and motion-interactive systems." },
    { num: "08", title: "QUALITY ASSURANCE & LAUNCH", desc: "Testing across screen sizes, validating form integrations, analyzing speed optimization, and going live." }
  ];
  const faqData = [
  { q: "Do you build custom websites or use general templates?", a: "Everything is built from scratch. We do not use generic templates. We construct tailor-made digital designs in Figma and compile them into fast-loading, SEO-optimized React/Vite interfaces or custom clean codebases." },
  { q: "What is a Design System, and why is it included?", a: "A Design System is a single-source-of-truth library of digital assets, color variables, typography scales, buttons, form fields, and layout cards. It ensures that when you build new screens or campaigns, your developers can move 5x faster while maintaining absolute brand consistency." },
  { q: "Do you design for both mobile devices and desktop monitors?", a: "Yes. Every experience is engineered with responsive fluidity, adapting layout densities, font dimensions, and interactive button sizes optimized for mobile touch targets (44px) and precise desktop mouse-hover states alike." },
  { q: "How do you optimize digital page loading speeds?", a: "We minimize system baggage. We avoid bulky visual plugins, optimize image compression, lazy load assets, structure clean HTML tags, and implement lightweight CSS frameworks (Tailwind) to keep index files incredibly slim for search indexing crawlers." }
];

  return (
    <>

    <section className="relative w-full h-[80vh] flex items-center px-[8%] text-white overflow-hidden">
      {/* الخلفية باستخدام Tailwind */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/hero-bg.jpg.jpeg')" }} // تأكدي أن الصورة في public
      ></div>
      
      {/* طبقة التعتيم */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-[700px]">
        <span className="block text-[0.9rem] tracking-[4px] uppercase mb-5 border border-white px-4 py-2 w-fit">
          DIGITAL EXPERIENCE SYSTEMS
        </span>
        <h1 className="text-[5rem] leading-[0.9] text-[#007bff] font-extrabold mb-8">
          DESIGN & <br /> EXPERIENCE
        </h1>
        <p className="text-[1.25rem] leading-relaxed text-gray-300">
          Digital experience systems designed to turn websites, apps, interfaces, 
          and landing pages into clear, usable, and conversion-ready brand touchpoints.
        </p>
      </div>
    </section>
   <section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* العمود الأيسر: النصوص والخدمات (7 أعمدة) */}
        <div className="lg:col-span-7">
          <p className="text-[#007bff] font-bold tracking-[3px] mb-4 text-sm">CLARITY & ACTION</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">What Design & Experience Means</h2>
          <p className="text-gray-400 mb-16 text-lg leading-relaxed max-w-2xl">
            Digital design is not just the surface of a screen. It is the way users move, 
            understand, decide, and act. HEIKARO builds digital experiences that combine UX 
            strategy, interface design, website structure, app flows, landing page conversion, 
            content hierarchy, and responsive execution into one clear experience system.
          </p>

          {/* شبكة الخدمات (4 كروت) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* تأثير خلفية الخطوط */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
            
            {[
              { icon: "🎯", title: "USER EXPERIENCE STRATEGY", desc: "We define how users move through the experience, what they need to understand, and what should happen next." },
              { icon: "🖼️", title: "INTERFACE & VISUAL DESIGN", desc: "We design clean, premium, brand-aligned interfaces that make digital products easier to use and trust." },
              { icon: "🧭", title: "WEBSITE & APP SYSTEMS", desc: "We structure websites and apps around navigation, content, responsiveness, performance, and real user behavior." },
              { icon: "↗️", title: "CONVERSION EXPERIENCE", desc: "We design landing pages, CTAs, forms, trust sections, and decision flows that support measurable action." }
            ].map((item, index) => (
              <div key={index} className="relative z-10 bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#333] transition-all duration-300 group">
                <div className="mb-6 text-2xl text-[#b0f200]">{item.icon}</div>
                <h4 className="text-white font-bold text-sm mb-3 tracking-[1.5px] uppercase group-hover:text-[#007bff] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* العمود الأيمن: الصورة (5 أعمدة) */}
        <div className="lg:col-span-5 bg-[#111] border border-[#222] h-[600px] sticky top-24 flex flex-col items-center justify-center p-10 text-center">
          
         <img src="/hero-bg.jpg.jpeg" /> 
        </div>

      </div>
    </section>
    <section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
  {/* العنوان العلوي */}
  <div className="text-center mb-16">
    <p className="text-[#ff3b30] font-bold tracking-[3px] text-xs uppercase mb-4">Erosion of Conversion</p>
    <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
      Why Most Digital Experiences Do Not Convert
    </h2>
    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
      When a website or app is built as simple screen layouts without structured conversion logic, user behavior suffers. Friction and lack of clarity drive visitors away.
    </p>
  </div>

  {/* شبكة المشاكل (3 أعمدة) */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { num: "01", text: "The website or app looks outdated, weak, or does not match the company's real value." },
      { num: "02", text: "Users arrive on the website or app but get confused about what the company actually offers." },
      { num: "03", text: "Navigation is complicated, requiring too many clicks or thinking to find basic details." },
      { num: "04", text: "Key messages are lost in large blocks of text without visual hierarchy or clear reading flow." },
      { num: "05", text: "The interface is difficult to use, with buttons, forms, and elements that look broken on mobile devices." },
      { num: "06", text: "Visitors do not know what actions to take because calls-to-action are weak, hidden, or confusing." },
      { num: "07", text: "Users start registration, purchase, or booking systems but drop off before finishing." },
      { num: "08", text: "The digital product has no design system, leading to inconsistent panels, pages, or components." },
      { num: "09", text: "The interface has no trust indicators, making potential clients hesitate to submit inquiries." }
    ].map((item, index) => (
      <div key={index} className="border border-[#222] p-8 hover:border-[#333] transition-colors bg-[#0f0f0f]">
        <div className="text-[#ff3b30] font-mono text-lg mb-4">[{item.num}]</div>
        <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>

  {/* الجملة الختامية في الأسفل */}
  <div className="mt-20 text-center max-w-3xl mx-auto">
    <p className="text-[#b0f200] font-bold tracking-[2px] uppercase text-sm leading-relaxed">
      WHEN DIGITAL DESIGN HAS NO EXPERIENCE LOGIC, ATTENTION DISAPPEARS. 
      HEIKARO BUILDS DIGITAL EXPERIENCES THAT TURN CLARITY, TRUST, AND USABILITY INTO ACTION.
    </p>
  </div>
</section>
<section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
      {/* العنوان */}
    <div className="mb-16 text-center flex flex-col items-center">
    <p className="text-[#007bff] font-bold tracking-[3px] text-xs uppercase mb-4">
      Unified Capabilities
    </p>
    <h2 className="text-4xl md:text-5xl font-bold">
      Included Capabilities
    </h2>
  </div>

      {/* الشبكة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((item, index) => (
          <div 
            key={index} 
            className="group border border-[#222] bg-[#111] transition-all duration-300 hover:border-[#007bff] cursor-pointer"
          >
            {/* الصورة */}
            <div className="h-[300px] w-full bg-[#1a1a1a] overflow-hidden">
              <img 
                src="/path-to-your-image.jpg" 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            {/* المحتوى */}
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{item.desc}</p>
              
              {/* الزر التفاعلي */}
              {/* استبدلي الـ div الخاص بالزر بهذا الكود */}
                <a 
                href={`#${item.id}`} // سيذهب إلى الـ ID المطابق
                className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#007bff] transition-colors cursor-pointer"
                >
                Explore Capabilities <span className="ml-2">→</span>
                </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className="flex flex-col gap-24 py-20 px-[8%] bg-[#0a0a0a]">
        <div className="px-[8%] mb-16">
  <p className="text-[#007bff] font-bold tracking-[3px] text-xs uppercase mb-4">
    FUNCTIONAL EXPERIENCE ARCHITECTURE
  </p>
  <h2 className="text-4xl md:text-5xl font-bold text-white">
    Capabilities In Detail
  </h2>
</div>
  {servicesData.map((service) => (
    /* هنا أضفنا البوردر والـ hover للـ section الكبير */
    <section 
    key={service.id} 
    id={service.id}
         className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border border-[#222] p-10 transition-all duration-300 hover:border-[#007bff] group"
    >
      
      {/* الجانب الأيسر (النصوص) */}
      <div className="lg:col-span-7">
        <p className="text-[#b0f200] text-xs font-bold uppercase tracking-[2px] mb-4">{service.chapter}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">{service.title}</h2>
        <p className="text-gray-400 mb-12 text-lg leading-relaxed">{service.desc}</p>

        {/* الشبكة الداخلية */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.items.map((item, idx) => (
            <div key={idx} className="border-l border-[#222] pl-6">
              <div className="text-white font-mono text-sm mb-2">{item.n} // {item.t}</div>
              <div className="text-gray-500 text-sm leading-relaxed">{item.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* الجانب الأيمن (الصورة) */}
      <div className="lg:col-span-5 h-[500px] sticky top-24">
        <img 
          src={service.img} 
          alt={service.title} 
          className="w-full h-full object-cover border border-[#222] transition-colors duration-300 group-hover:border-[#007bff]" 
        />
      </div>

    </section>
  ))}
</div>
<section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
    
    {/* الجانب الأيسر: النصوص */}
    <div className="lg:col-span-4">
      <p className="text-[#007bff] font-bold tracking-[3px] text-xs uppercase mb-4">
        OPERATIONAL ARCHITECTURE
      </p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
        What A Complete Experience System Includes
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed">
        We handle every detail of the interface matrix, designing and building elements 
        to perform synchronously. A complete system aligns strategy, usability, conversion, 
        structure, and code.
      </p>
    </div>

    {/* الجانب الأيمن: شبكة الخدمات (3 أعمدة × 5 صفوف) */}
    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        "Business Objective Setup", "User Persona Modeling", "User Journey Flowmapping",
        "Information Architecture", "Navigation System Mapping", "Responsive Wireframing",
        "Interface Styleboards", "Dynamic Component Design", "Design System Creation",
        "Responsive Testing", "Desktop Grid Mapping", "Micro-Interactions Design",
        "Lead Capture Funnel Design", "Trust Section Layout", "SEO Structure Verification",
        "Performance Checks", "Developer Package Hand-off", "Conversion Optimization Monitoring"
      ].map((item, index) => (
        <div 
          key={index} 
          className="border border-[#222] p-6 bg-[#0f0f0f] hover:border-[#333] transition-colors"
        >
          <p className="text-white text-sm font-medium">{item}</p>
        </div>
      ))}
    </div>
    
  </div>
</section>
{/* سكشن الخطوات الـ 8 */}
<section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
  {/* العنوان */}
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
    <p className="text-[#007bff] font-bold tracking-[3px] text-xs uppercase mb-4">
      SYSTEMATIC ENGINEERING
    </p>
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      How We Build Digital Experiences
    </h2>
    <p className="text-gray-400 text-lg leading-relaxed">
      Our 8-step operating process ensures strategic alignment from visual blueprint 
      to final developer sign-off and site launch.
    </p>
  </div>

  {/* الشبكة - تأكدي من ضبط المصفوفة (stepsData) في الأعلى */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {stepsData.map((step, index) => (
      <div 
        key={index} 
        className="relative p-8 border border-[#222] bg-[#0a0a0a] overflow-hidden group cursor-pointer transition-colors hover:border-[#333]"
      >
        {/* الخط الأزرق الذي يتحرك عند الـ Hover */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#007bff] transition-all duration-500 group-hover:w-full"></div>
        
        <div className="text-[#007bff] font-mono text-xs mb-4">{step.num}</div>
        <h4 className="text-white font-bold text-lg mb-4">{step.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
      </div>
    ))}
  </div>
</section>
<section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* العنوان على اليسار */}
        <div className="lg:col-span-4">
          <div className="w-12 h-12 border border-[#007bff] flex items-center justify-center mb-6">
        <span className="text-[#007bff] text-xl">?</span>
      </div>
          <p className="text-[#007bff] font-bold tracking-[3px] text-xs uppercase mb-4">FAQS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Got questions on Figma design templates, mobile scaling setups, or fast load optimizations? Explore answers here.</p>
        </div>

        {/* الأسئلة على اليمين */}
        <div className="lg:col-span-8">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#222]">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-8 text-left hover:text-[#007bff] transition-colors"
              >
                <span className="font-bold text-lg">{item.q}</span>
                <span className="ml-4 text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {/* تفاصيل الإجابة */}
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="bg-[#0a0a0a] py-24 px-[8%] text-center">
  {/* العنوان الصغير العلوي */}
  <div className="text-[#007bff] font-bold tracking-[4px] text-xs uppercase mb-6">
    STRUCTURED USABILITY
  </div>

  {/* العنوان الرئيسي */}
  <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
    CREATE FLUID DIGITAL<br /> EXPERIENCES
  </h1>

  {/* النص الوصفي */}
  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
    Transform outdated platforms. HEIKARO help you design and build web 
    experiences structured purely for high speed, absolute clarity, and 
    maximum action rates.
  </p>

  {/* حاوية الأزرار */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    {/* الزر الأول - أزرق */}
    <a 
      href="/contact" 
      className="bg-[#007bff] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
    >
      START YOUR EXPERIENCE BRIEF →
    </a>

    {/* الزر الثاني - شفاف بحدود */}
    <a 
      href="/services" 
      className="bg-transparent border border-[#333] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
    >
      BROWSE ALL SERVICES
    </a>
  </div>
</section>
      <StartWithClarity />

    </>
    
  );
}