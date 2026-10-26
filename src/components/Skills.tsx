import { motion } from 'framer-motion';
import { useInView } from '../hooks/useHooks';
import { SKILLS } from '../data/portfolio';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ── Skill bar ──────────────────────────────────────────── */
function SkillBar({ name, level, icon }: { name: string; level: number; icon: string }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base leading-none">{icon}</span>
          <span className="text-sm font-medium text-slate-300">{name}</span>
        </div>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
        />
      </div>
    </div>
  );
}

/* ── Category card ────────────────────────────────────── */
function SkillCategory({
  title,
  emoji,
  gradient,
  children,
}: {
  title: string;
  emoji: string;
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="card relative overflow-hidden"
    >
      {/* corner accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-3xl ${gradient} opacity-20`} />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">{emoji}</span>
          <h3 className="font-bold text-white text-base">{title}</h3>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Skills & Technologies
          </span>
          <h2 className="section-title mx-auto">
            My <span className="gradient-text">Technical Stack</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Technologies and tools I use to build, analyse, and solve problems.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
        >
          {/* Programming Languages */}
          <SkillCategory
            title="Programming Languages"
            emoji="💻"
            gradient="bg-gradient-to-bl from-violet-500 to-transparent"
          >
            <div className="space-y-4">
              {SKILLS.languages.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </SkillCategory>

          {/* Core Concepts */}
          <SkillCategory
            title="Core Concepts"
            emoji="🧩"
            gradient="bg-gradient-to-bl from-blue-500 to-transparent"
          >
            <div className="flex flex-wrap gap-2">
              {SKILLS.core.map((s) => (
                <span key={s.name} className="skill-chip">
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
          </SkillCategory>

          {/* AI/ML */}
          <SkillCategory
            title="AI/ML & Data"
            emoji="🤖"
            gradient="bg-gradient-to-bl from-emerald-500 to-transparent"
          >
            <div className="flex flex-wrap gap-2">
              {SKILLS.aiml.map((s) => (
                <span key={s.name} className="skill-chip hover:text-emerald-300 hover:border-emerald-500/30">
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
          </SkillCategory>

          {/* Tools & Soft Skills */}
          <SkillCategory
            title="Tools & Soft Skills"
            emoji="🛠️"
            gradient="bg-gradient-to-bl from-amber-500 to-transparent"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {SKILLS.tools.map((s) => (
                <span key={s.name} className="skill-chip hover:text-amber-300 hover:border-amber-500/30">
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold mb-2">Soft Skills</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.soft.map((s) => (
                <span key={s.name} className="skill-chip hover:text-rose-300 hover:border-rose-500/30">
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
          </SkillCategory>
        </motion.div>

        {/* Bottom disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-slate-600 mt-4"
        >
          Skill levels reflect honest self-assessment — always learning and improving.
        </motion.p>
      </div>
    </section>
  );
}
