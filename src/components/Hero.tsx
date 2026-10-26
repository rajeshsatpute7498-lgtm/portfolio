import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download, ChevronRight } from 'lucide-react';
import { useTypingEffect } from '../hooks/useHooks';
import { PERSONAL } from '../data/portfolio';

/* ── Particle canvas ──────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles: {
      x: number; y: number;
      vx: number; vy: number;
      r: number; alpha: number;
    }[] = [];

    const COUNT = 70;
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.alpha})`;
        ctx.fill();

        // Lines between nearby
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,58,237,${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      frame = requestAnimationFrame(draw);
    };
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

/* ── Avatar / Code card ───────────────────────────────── */
function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative flex items-center justify-center"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/30 to-blue-600/20 blur-3xl" />

      {/* Main card */}
      <div className="relative w-72 h-80 md:w-80 md:h-96 gradient-border rounded-2xl glass flex flex-col overflow-hidden">
        {/* Terminal bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-slate-500 font-mono">tejas.java</span>
        </div>

        {/* Code snippet */}
        <div className="flex-1 p-5 font-mono text-xs leading-relaxed">
          <div className="text-slate-500">// Hello, World!</div>
          <div className="mt-2">
            <span className="text-violet-400">public class </span>
            <span className="text-blue-400">Tejas </span>
            <span className="text-white">{'{'}</span>
          </div>
          <div className="mt-1 ml-4">
            <span className="text-violet-400">String </span>
            <span className="text-white">name = </span>
            <span className="text-emerald-400">"Tejas Satpute"</span>
            <span className="text-white">;</span>
          </div>
          <div className="ml-4">
            <span className="text-violet-400">String </span>
            <span className="text-white">role = </span>
            <span className="text-emerald-400">"Developer"</span>
            <span className="text-white">;</span>
          </div>
          <div className="mt-2 ml-4">
            <span className="text-slate-500">// Skills</span>
          </div>
          <div className="ml-4">
            <span className="text-violet-400">String[] </span>
            <span className="text-white">skills = </span>
            <span className="text-white">{'{'}</span>
          </div>
          <div className="ml-8 text-emerald-400">"Java", "Python",</div>
          <div className="ml-8 text-emerald-400">"AI/ML", "DSA"</div>
          <div className="ml-4 text-white">{'}'};</div>
          <div className="mt-2 ml-4">
            <span className="text-blue-400">void </span>
            <span className="text-yellow-400">build</span>
            <span className="text-white">(</span>
            <span className="text-violet-400">Future </span>
            <span className="text-white">f) {'{'}</span>
          </div>
          <div className="ml-8 text-slate-400">f.setGoal(</div>
          <div className="ml-12 text-emerald-400">"Impact"</div>
          <div className="ml-8 text-slate-400">);</div>
          <div className="ml-4 text-white">{'}'}</div>
          <div className="text-white">{'}'}</div>
          <div className="mt-3 flex items-center gap-1">
            <span className="text-violet-400">$</span>
            <span className="text-white">javac Tejas.java</span>
            <span className="typing-cursor" />
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-mono text-violet-400 border border-violet-500/20"
      >
        🤖 AI/ML
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-mono text-blue-400 border border-blue-500/20"
      >
        ☕ Java
      </motion.div>
    </motion.div>
  );
}

/* ── Hero ─────────────────────────────────────────────── */
export default function Hero() {
  const typed = useTypingEffect(PERSONAL.typingRoles);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Bg layers */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <ParticleCanvas />

      {/* Gradient orbs */}
      <div className="orb w-96 h-96 bg-violet-600/20 -top-24 -left-24 animate-pulse-slow" />
      <div className="orb w-80 h-80 bg-blue-600/15 -bottom-16 -right-16 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container-max section-padding flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left column */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-4"
          >
            Tejas{' '}
            <span className="gradient-text">Satpute</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 h-8 flex items-center justify-center lg:justify-start gap-2"
          >
            <span className="gradient-text">{typed}</span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            B.Tech CSE student building intelligent applications and solving real-world
            problems through code. Specializing in <span className="text-violet-400">Java</span>,{' '}
            <span className="text-blue-400">Python</span>, and{' '}
            <span className="text-emerald-400">AI/ML</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              id="hero-explore-btn"
            >
              Explore My Work <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="/resume_placeholder.pdf"
              download
              id="hero-download-resume-btn"
              className="btn-secondary"
              title="Resume will be available once uploaded to /public/resume_placeholder.pdf"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-5"
          >
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="text-slate-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-link"
              className="text-slate-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              id="hero-email-link"
              className="text-slate-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-xs text-slate-600 font-mono">{PERSONAL.email}</span>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="flex-shrink-0">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-violet-400 transition-colors duration-200 flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
