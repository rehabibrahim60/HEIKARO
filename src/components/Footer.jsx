import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import logo from "../assets/Logo.png";
const socialLinks = [
  { href: "https://www.facebook.com/heikaro", icon: <FaFacebookF /> },
  { href: "https://www.instagram.com/heikaro.agancy/", icon: <FaInstagram /> },
  { href: "https://x.com/heikaro_agancy", icon: <FaXTwitter /> },
  { href: "https://www.youtube.com/@Heikaro.Agancy", icon: <FaYoutube /> },
  { href: "https://www.linkedin.com/company/heikaro/", icon: <FaLinkedinIn /> },
  { href: "https://www.behance.net/heikaroagancy", icon: <FaBehance /> },
];

const families = [
  {href : "/services/brand-identity",item: "Brand & Identity"},
  {href : "/services/design-experience",item: "Design & Experience"},
  {href : "/services/content-storytelling",item: "Content & Storytelling"},
  {href : "/services/marketing-growth",item: "Marketing & Growth"},
  {href : "/services/media-production",item: "Media & Production"},
  {href : "/services/digital-learning-experience",item: "Digital Learning Experience"},
  {href : "/services/ai-video-cgi",item: "AI-Powered Video & CGI"},
  {href : "/services/events-experiential",item: "Events & Experiential"},
];

const Pages = [
  {href : "/","item": "Home"},
  {href : "/about","item": "About"},
  {href : "/portfolio","item": "Portfolio"},
  {href : "/blog","item": "Journal (Blog)"},
  {href : "/contact","item": "Contact"}
]

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white px-[5%] py-20">
      <div className="grid grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-16">

        {/* العمود الأول: اللوجو والوصف */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Heikaro" className="h-9 w-auto object-contain self-start mb-5" />
          <p className="text-[#a0a0a0] text-sm font-normal leading-relaxed pl-1">
            HEIKARO is a premium creative agency connecting brand strategy,
            visual identity, UX/UI design, media production, and AI-powered
            storytelling into one unified growth operating system for global brands.
          </p>
          <div className="flex gap-4 mt-1 pl-1">
            {socialLinks.map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] text-base transition-colors duration-300 hover:text-blue-500 cursor-pointer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        {/* العمود الثاني: الروابط */}
        <div className="flex flex-col">
          <h3 className="text-sm font-bold uppercase cking-[2px] text-white mb-6">
            COMPANY
          </h3>
          <ul className="flex flex-col gap-[15px] list-none p-0">
            {Pages.map(({item, href}) => (
              <li
                key={item}
                className="text-sm text-[#a0a0a0] cursor-pointer hover:text-white transition-colors duration-300"
              >
                <Link to={href}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث: الخدمات */}
        <div className="flex flex-col">
          <h3 className="text-sm font-bold uppercase  text-white mb-6">
            SERVICES
          </h3>
          <ul className="flex flex-col gap-[15px] list-none p-0">
            {families.map(({item, href}) => (
              <li
                key={item}
                className="text-sm text-[#a0a0a0] cursor-pointer hover:text-white transition-colors duration-300"
              >
                <Link to={href}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الرابع: معلومات الاتصال */}
        <div className="flex flex-col">
          <h3 className="text-sm font-bold uppercase  text-white mb-6">
            CONTACT
          </h3>
          <p className="text-[#a0a0a0] text-base font-normal leading-relaxed mb-4">
            EMAIL:<br />
            <strong className="text-white font-bold">HALLO@HEIKARO.COM</strong>
          </p>
          <p className="text-[#a0a0a0] text-base font-normal leading-relaxed mb-4">
            LOCATION:<br />
            <strong className="text-white font-bold">CAIRO, EGYPT</strong>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;