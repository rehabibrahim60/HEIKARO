import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import logo from "../assets/Logo.png"; 
const socialLinks = [
  { href: "https://www.facebook.com",              icon: <FaFacebookF /> },
  { href: "https://www.instagram.com",             icon: <FaInstagram /> },
  { href: "https://twitter.com",                   icon: <FaXTwitter /> },
  { href: "https://www.youtube.com",               icon: <FaYoutube /> },
  { href: "https://www.linkedin.com",              icon: <FaLinkedinIn /> },
  { href: "https://www.behance.net/heikaroagancy", icon: <FaBehance /> },
];

const families = [
  "Brand & Identity",
  "Design & Experience",
  "Content & Storytelling",
  "Marketing & Growth",
  "Media & Production",
  "Digital Learning Experience",
  "AI-Powered Video & CGI",
  "Events & Experiential",
];

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white px-[5%] py-20">
      <div className="grid grid-cols-4 gap-10">

        {/* العمود الأول: اللوجو والوصف */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Heikaro" className="logo" />
          <p className="text-[#a0a0a0] text-base font-normal leading-relaxed">
            HEIKARO is a premium creative agency connecting brand strategy,
            visual identity, UX/UI design, media production, and AI-powered
            storytelling into one unified growth operating system for global brands.
          </p>
          <div className="flex gap-4 mt-1">
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
            {["Home", "About", "Portfolio", "Journal (Blog)", "Contact"].map((item) => (
              <li
                key={item}
                className="text-sm text-[#a0a0a0] cursor-pointer hover:text-white transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث: الخدمات */}
        <div className="flex flex-col">
          <h3 className="text-sm font-bold uppercase  text-white mb-6">
            FAMILIES
          </h3>
          <ul className="flex flex-col gap-[15px] list-none p-0">
            {families.map((item) => (
              <li
                key={item}
                className="text-sm text-[#a0a0a0] cursor-pointer hover:text-white transition-colors duration-300"
              >
                {item}
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