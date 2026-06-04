import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaBehance, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navLinkClass = ({ isActive }) =>
  `text-white text-[11px] font-semibold uppercase tracking-[0.35em] transition-all duration-300 ${
    isActive ? 'text-blue-400 border-b-2 border-blue-400 pb-2' : 'hover:text-blue-300'
  }`;

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-[1000] w-full border-b border-white/10 bg-black/70 px-6 py-5 shadow-[0_24px_80px_-52px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/10 bg-white/5 text-xl font-black text-cyan-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
            H
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-slate-300">Studio</p>
            <p className="text-lg font-black uppercase tracking-[0.18em] text-white">Heikaro</p>
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>

        <div className="flex items-center gap-3 text-white text-base">
          {[
            { href: 'https://www.facebook.com', icon: <FaFacebookF /> },
            { href: 'https://www.instagram.com', icon: <FaInstagram /> },
            { href: 'https://twitter.com', icon: <FaXTwitter /> },
            { href: 'https://www.behance.net/heikaroagancy', icon: <FaBehance /> },
            { href: 'https://www.youtube.com', icon: <FaYoutube /> },
            { href: 'https://www.linkedin.com', icon: <FaLinkedinIn /> },
          ].map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-sm transition duration-300 hover:border-blue-400 hover:text-blue-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
