import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Tag } from 'lucide-react';
import { useInView } from '../hooks/useHooks';
import { PROJECTS } from '../data/portfolio';

type Project = (typeof PROJECTS)[number];

// Warm palette — inline style objects used in JSX via `style` prop
const colorMap: Record<string, {
  bgStyle: React.CSSProperties;
  borderStyle: React.CSSProperties;
  textClass: string;
  badgeStyle: React.CSSProperties;
}> = {
  // Champagne gold
  violet: {
    bgStyle: { background: 'linear-gradient(135deg, rgba(201,168,76,0.09) 0%, transparent 100%)' },
    borderStyle: { borderColor: 'rgba(201,168,76,0.22)' },
    textClass: 'text-gold',
    badgeStyle: { background: 'rgba(201,168,76,0.08)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.22)' },
  },
  // Burnt amber
  blue: {
    bgStyle: { background: 'linear-gradient(135deg, rgba(204,107,44,0.09) 0%, transparent 100%)' },
    borderStyle: { borderColor: 'rgba(204,107,44,0.22)' },
    textClass: 'text-amber',
    badgeStyle: { background: 'rgba(204,107,44,0.08)', color: '#cc6b2c', border: '1px solid rgba(204,107,44,0.22)' },
  },
  // Mocha brown
  cyan: {
    bgStyle: { background: 'linear-gradient(135deg, rgba(139,99,85,0.09) 0%, transparent 100%)' },
    borderStyle: { borderColor: 'rgba(139,99,85,0.22)' },
    textClass: 'text-mocha',
    badgeStyle: { background: 'rgba(139,99,85,0.08)', color: '#c4a08a', border: '1px solid rgba(139,99,85,0.22)' },
  },
  // Warm emerald-gold blend
  emerald: {
    bgStyle: { background: 'linear-gradient(135deg, rgba(226,204,144,0.08) 0%, transparent 100%)' },
    borderStyle: { borderColor: 'rgba(226,204,144,0.18)' },
    textClass: 'text-champagne',
    badgeStyle: { background: 'rgba(226,204,144,0.07)', color: '#e2cc90', border: '1px solid rgba(226,204,144,0.18)' },
  },
  // Burnt amber (Student Management System)
  amber: {
    bgStyle: { background: 'linear-gradient(135deg, rgba(204,107,44,0.12) 0%, rgba(201,168,76,0.06) 100%)' },
    borderStyle: { borderColor: 'rgba(204,107,44,0.30)' },
    textClass: 'text-amber',
    badgeStyle: { background: 'rgba(204,107,44,0.10)', color: '#d4883e', border: '1px solid rgba(204,107,44,0.28)' },
  },
  // Mocha fallback
  mocha: {
    bgStyle: { background: 'linear-gradient(135deg, rgba(92,61,46,0.12) 0%, transparent 100%)' },
    borderStyle: { borderColor: 'rgba(139,99,85,0.25)' },
    textClass: 'text-mocha',
    badgeStyle: { background: 'rgba(92,61,46,0.10)', color: '#a8806e', border: '1px solid rgba(139,99,85,0.25)' },
  },
};

// Inline color tokens (used in place of Tailwind classes for custom palette)
const textTokens: Record<string, string> = {
  'text-gold':      '#c9a84c',
  'text-amber':     '#cc6b2c',
  'text-mocha':     '#c4a08a',
  'text-champagne': '#e2cc90',
};

function resolveTextColor(cls: string) {
  return textTokens[cls] ?? '#c9a84c';
}

/* ── Project modal ─────────────────────────────────────── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const c = colorMap[project.color] ?? colorMap.violet;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="glass rounded-3xl max-w-2xl w-full p-8 relative border border-white/10 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl glass hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-5xl mb-4">{project.icon}</div>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-1"
          style={{ color: resolveTextColor(c.textClass) }}
        >
          {project.subtitle}
        </p>
        <h3 className="text-2xl font-bold mb-4" style={{ color: '#faf7f2' }}>{project.title}</h3>
        <p style={{ color: '#a89585', lineHeight: 1.7 }} className="mb-6 text-sm">{project.longDescription}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono" style={c.badgeStyle}>
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm flex-1 justify-center"
            title={project.github === '#' ? 'GitHub link will be added soon' : undefined}
          >
            <Github className="w-4 h-4" />
            {project.github === '#' ? 'GitHub (Coming Soon)' : 'View on GitHub'}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center text-sm"
              title={project.demo === '#' ? 'Live demo will be added soon' : undefined}
            >
              <ExternalLink className="w-4 h-4" />
              {project.demo === '#' ? 'Demo (Coming Soon)' : 'Live Demo'}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Project card ─────────────────────────────────────── */
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const c = colorMap[project.color] ?? colorMap.violet;
  const accentColor = resolveTextColor(c.textClass);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
      style={{ border: '1px solid', ...c.borderStyle, ...c.bgStyle }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${project.title}`}
    >
      {/* Status badge */}
      <div className="flex items-start justify-between mb-5">
        <span className="text-4xl">{project.icon}</span>
        <span
          className="px-2.5 py-1 rounded-full text-xs font-semibold"
          style={project.status === 'In Progress'
            ? { background: 'rgba(204,107,44,0.12)', color: '#cc6b2c', border: '1px solid rgba(204,107,44,0.25)' }
            : { background: 'rgba(201,168,76,0.10)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.25)' }
          }
        >
          {project.status}
        </span>
      </div>

      {/* Title */}
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-1"
        style={{ color: accentColor, letterSpacing: '0.1em' }}
      >
        {project.subtitle}
      </p>
      <h3
        className="text-xl font-bold mb-3 transition-colors duration-200"
        style={{ color: '#faf7f2' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#faf7f2')}
      >
        {project.title}
      </h3>
      <p style={{ color: '#a89585', fontSize: '0.875rem', lineHeight: 1.6 }} className="mb-5 line-clamp-3">
        {project.description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded text-xs font-mono"
            style={{ background: 'rgba(201,168,76,0.06)', color: '#a89585', border: '1px solid rgba(201,168,76,0.12)' }}
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span
            className="px-2 py-0.5 rounded text-xs font-mono"
            style={{ background: 'rgba(139,99,85,0.08)', color: '#7a5040' }}
          >
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="btn-secondary text-xs py-2 px-4 flex-1 justify-center"
          title={project.github === '#' ? 'Coming Soon' : 'GitHub'}
        >
          <Github className="w-3.5 h-3.5" />
          GitHub
        </a>
        <button
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
        >
          <Tag className="w-3.5 h-3.5" />
          Details
        </button>
      </div>

    </motion.article>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* warm amber orb */}
      <div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(204,107,44,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

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
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#c9a84c' }} />
            Featured Work
          </span>
          <h2 className="section-title mx-auto">
            Projects & <span className="gradient-text">Creations</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A selection of projects I've built or am actively working on.
            Click any card for more details.
          </p>
        </motion.div>

        {/* Grid — 2 cols default, 3 cols on xl for 5 cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* Placeholder note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-slate-600 font-mono">
            ⚠️ GitHub and demo links marked "#" are placeholders — update them in{' '}
            <code className="text-slate-500">src/data/portfolio.ts</code>
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
