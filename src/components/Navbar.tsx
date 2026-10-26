import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { useActiveSection } from '../hooks/useHooks';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-dark shadow-[0_1px_0_rgba(255,255,255,0.05)]' : ''
        }`}
      >
        <div className="container-max px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-2 group"
              aria-label="Go to top"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.4)] group-hover:shadow-[0_0_24px_rgba(124,58,237,0.6)] transition-shadow duration-300">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white tracking-tight">
                Tejas<span className="gradient-text">.</span>
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = active === id;
                return (
                  <button
                    key={label}
                    onClick={() => handleNav(href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      isActive
                        ? 'text-violet-400'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-px rounded-full bg-violet-400 transition-all duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* CTA + Mobile hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:tejas.satpute24@sanjivani.edu.in"
                className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
              >
                Hire Me
              </a>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden p-2 rounded-lg glass text-white"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 glass-dark border-t border-white/5 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = active === id;
                return (
                  <button
                    key={label}
                    onClick={() => handleNav(href)}
                    className={`text-left py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-violet-400 bg-violet-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
              <a
                href="mailto:tejas.satpute24@sanjivani.edu.in"
                className="mt-3 btn-primary justify-center text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
