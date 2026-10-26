import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, Code2, Brain, Layers, Coffee } from 'lucide-react';
import { useInView } from '../hooks/useHooks';
import { PERSONAL } from '../data/portfolio';

const highlights = [
  {
    icon: Coffee,
    label: 'Java & DSA',
    value: 'Problem Solver',
    color: 'from-amber-500/20 to-amber-600/10 border-amber-500/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: Brain,
    label: 'AI/ML',
    value: 'Enthusiast',
    color: 'from-violet-500/20 to-violet-600/10 border-violet-500/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: Code2,
    label: 'Python',
    value: 'Developer',
    color: 'from-blue-500/20 to-blue-600/10 border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Layers,
    label: 'Projects',
    value: '4+ Completed',
    color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* bg accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="container-max">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* ── Left: Bio ─────────────────────────────── */}
          <div>
            <motion.span variants={itemVariants} className="section-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              About Me
            </motion.span>

            <motion.h2 variants={itemVariants} className="section-title">
              Turning Ideas into{' '}
              <span className="gradient-text">Intelligent Code</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed mb-5">
              {PERSONAL.bio}
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed mb-8">
              Currently pursuing my <span className="text-white font-medium">B.Tech in Computer Science Engineering</span> at
              Sanjivani University, I am actively exploring the intersection of classical algorithms and modern AI/ML.
              I have worked as an <span className="text-violet-400 font-medium">AI Intern at Ethara AI</span>, where I
              contributed to LLM training and AI workflow optimization with multilingual datasets.
            </motion.p>

            {/* Meta info */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span>Nalegaon, Tq. Vaijapur, Maharashtra</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <a href={`mailto:${PERSONAL.email}`} className="hover:text-white transition-colors">
                  {PERSONAL.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Calendar className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span>B.Tech CSE 2024–2028 · Sanjivani University</span>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {['English', 'Hindi', 'Marathi'].map((lang) => (
                <span key={lang} className="skill-chip">
                  🌐 {lang}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Highlight cards ─────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, value, color, iconColor }, idx) => (
              <motion.div
                key={label}
                variants={itemVariants}
                custom={idx}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative glass rounded-2xl p-6 border bg-gradient-to-br ${color} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">{label}</p>
                <p className="text-base font-bold text-white">{value}</p>
              </motion.div>
            ))}

            {/* Stat card */}
            <motion.div
              variants={itemVariants}
              className="col-span-2 glass rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Current Status</p>
                  <p className="text-white font-bold">AI Intern · Ethara AI</p>
                  <p className="text-slate-400 text-sm mt-1">LLM Training & AI Workflow Optimization</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                  <span className="text-xs text-slate-600 font-mono">2026–2027</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
