import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, MapPin, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useHooks';
import { EDUCATION, EXPERIENCE, CERTIFICATIONS } from '../data/portfolio';

/* ── Timeline dot ─────────────────────────────────────── */
function TimelineDot({ current }: { current?: boolean }) {
  return (
    <div className="relative flex-shrink-0">
      <div
        className={`w-4 h-4 rounded-full border-2 z-10 relative ${
          current
            ? 'border-violet-400 bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.6)]'
            : 'border-slate-600 bg-dark-800'
        }`}
      />
      {current && (
        <div className="absolute inset-0 rounded-full bg-violet-400/30 animate-ping" />
      )}
    </div>
  );
}

/* ── Education timeline item ──────────────────────────── */
function EducationItem({ item, idx }: { item: (typeof EDUCATION)[number]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="flex gap-5"
    >
      <div className="flex flex-col items-center">
        <TimelineDot current={item.current} />
        <div className="flex-1 w-px bg-gradient-to-b from-violet-500/30 to-transparent mt-2" />
      </div>
      <div className="pb-10 flex-1">
        <div className="glass rounded-2xl p-5 border border-white/5 hover:border-violet-500/20 transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h4 className="font-bold text-white">{item.institution}</h4>
              <p className="text-violet-400 text-sm font-medium mt-0.5">{item.degree}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono justify-end">
                <Calendar className="w-3.5 h-3.5" />
                {item.period}
              </div>
              <div className="text-xs font-semibold text-emerald-400 mt-1">{item.grade}</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm">{item.description}</p>
          {item.current && (
            <span className="inline-flex items-center gap-1.5 mt-3 text-xs text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Currently Enrolled
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Experience item ──────────────────────────────────── */
function ExperienceItem({ item, idx }: { item: (typeof EXPERIENCE)[number]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl flex-shrink-0 border border-blue-500/20">
            {item.icon}
          </div>
          <div>
            <h4 className="font-bold text-white">{item.role}</h4>
            <p className="text-blue-400 text-sm font-medium">{item.company}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {item.type}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono justify-end mt-2">
            <Calendar className="w-3.5 h-3.5" />
            {item.period}
          </div>
        </div>
      </div>

      <ul className="space-y-2 mb-4">
        {item.description.map((d, i) => (
          <li key={i} className="text-slate-400 text-sm flex gap-2">
            <span className="text-violet-400 mt-1 flex-shrink-0">›</span>
            {d}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <span key={t} className="skill-chip text-xs">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Cert card ────────────────────────────────────────── */
function CertCard({ cert, idx }: { cert: (typeof CERTIFICATIONS)[number]; idx: number }) {
  const colorClasses: Record<string, string> = {
    violet: 'border-violet-500/20 bg-violet-500/5 text-violet-400',
    blue: 'border-blue-500/20 bg-blue-500/5 text-blue-400',
    cyan: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-400',
    emerald: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ y: -4 }}
      className={`glass rounded-2xl p-5 border transition-all duration-300 ${colorClasses[cert.color]}`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{cert.icon}</span>
        {cert.score && (
          <span className="text-xs font-mono text-slate-500">Score: {cert.score}</span>
        )}
      </div>
      <h4 className="font-bold text-white text-sm mb-1">{cert.name}</h4>
      <p className="text-slate-500 text-xs">{cert.issuer}</p>
      <p className="text-slate-600 text-xs font-mono mt-1">{cert.period}</p>
    </motion.div>
  );
}

export default function Journey() {
  const { ref, inView } = useInView();

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-violet-500/10 to-transparent pointer-events-none" />

      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Learning Journey
          </span>
          <h2 className="section-title mx-auto">
            Education &amp; <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            My academic background, internship experience, and certifications earned along the way.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20">
                <GraduationCap className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Education</h3>
            </div>
            <div>
              {EDUCATION.map((item, idx) => (
                <EducationItem key={item.id} item={item} idx={idx} />
              ))}
            </div>
          </div>

          {/* Experience + certs */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Briefcase className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Work Experience</h3>
            </div>
            <div className="space-y-4 mb-12">
              {EXPERIENCE.map((item, idx) => (
                <ExperienceItem key={item.id} item={item} idx={idx} />
              ))}
            </div>

            {/* Certs */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Certifications</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <CertCard key={cert.id} cert={cert} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
