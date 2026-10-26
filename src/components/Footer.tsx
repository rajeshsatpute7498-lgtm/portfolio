import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { PERSONAL } from '../data/portfolio';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/5 to-transparent pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.4)]">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-white">Tejas Satpute</p>
              <p className="text-xs text-slate-500">Software Developer · AI/ML Enthusiast</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scroll(href)}
                className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200 border border-white/5"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200 border border-white/5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200 border border-white/5"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            © {year} Tejas Satpute. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-rose-500" /> using React, TypeScript & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
