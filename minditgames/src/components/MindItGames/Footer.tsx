import { Link } from "react-router-dom";
import { Brain, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const SOCIALS = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Twitter, href: "#", label: "X / Twitter" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="border-t border-brand-border bg-brand-ink">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue via-brand-violet to-brand-orange">
                <Brain size={18} className="text-white" />
              </span>
              <span className="font-display text-lg font-extrabold text-white">
                MindIt Games
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-500">
              Creating engaging mobile experiences through innovation,
              creativity, and immersive gameplay.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Company
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-slate-400">
                <li>
                  <a href="/#about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#games" className="hover:text-white">
                    Games
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Legal
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-slate-400">
                <li>
                  <Link to="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Follow Us
              </h4>
              <div className="mt-4 flex gap-2.5">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border text-slate-400 transition-colors hover:border-brand-blue/50 hover:text-brand-blue-soft"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-border pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} MindIt Games. All rights reserved.</p>
          <p>Made with care for curious minds.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
