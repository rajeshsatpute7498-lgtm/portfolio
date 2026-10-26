import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ── Scroll progress bar ─────────────────────────────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 origin-left z-[100]"
    />
  );
}

/* ── Back to top ─────────────────────────────────────── */
function BackToTop() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-violet-400 hover:text-white hover:border-violet-500/40 transition-all duration-200 shadow-card"
      aria-label="Back to top"
      id="back-to-top-btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </motion.button>
  );
}

export default function App() {
  return (
    <div className="relative bg-[#020206] min-h-screen">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
