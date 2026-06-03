import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaBehance, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navLinkClass = ({ isActive }) =>
  `text-white text-[12px] font-bold uppercase tracking-[1px] no-underline transition-colors duration-300 ${
    isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-400'
  }`;

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-[45px] px-[5%] w-full fixed top-0 left-0 z-[1000] bg-black/40 backdrop-blur-[30px] transition-all duration-300 box-border">

      {/* Logo */}
      <div className="text-2xl font-black text-white uppercase tracking-wider">
        HEIKARO
      </div>

      {/* Nav Links */}
      <div className="flex gap-[50px]">
        <NavLink to="/"          className={navLinkClass}>Home</NavLink>
        <NavLink to="/about"     className={navLinkClass}>About</NavLink>
        <NavLink to="/services"  className={navLinkClass}>Services</NavLink>
        <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
        <NavLink to="/blog"      className={navLinkClass}>Blog</NavLink>
        <NavLink to="/contact"   className={navLinkClass}>Contact</NavLink>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5 items-center">
        {[
          { href: 'https://www.facebook.com',            icon: <FaFacebookF /> },
          { href: 'https://www.instagram.com',           icon: <FaInstagram /> },
          { href: 'https://twitter.com',                 icon: <FaXTwitter /> },
          { href: 'https://www.behance.net/heikaroagancy', icon: <FaBehance /> },
          { href: 'https://www.youtube.com',             icon: <FaYoutube /> },
          { href: 'https://www.linkedin.com',            icon: <FaLinkedinIn /> },
        ].map(({ href, icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-base transition-colors duration-300 hover:text-blue-500 cursor-pointer"
          >
            {icon}
          </a>
        ))}
      </div>

    </nav>
  );
}