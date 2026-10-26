import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Phone, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useHooks';
import { PERSONAL } from '../data/portfolio';

type FormState = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/tejassatpute',
    href: PERSONAL.github,
    color: 'text-slate-300',
    bg: 'bg-white/5 border-white/10',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tejassatpute',
    href: PERSONAL.linkedin,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone}`,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose mailto link as frontend-only approach (no backend configured)
    const mailto = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Hi Tejas,\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`
    )}`;
    window.location.href = mailto;
    setFormState('success');
    setTimeout(() => setFormState('idle'), 5000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const inputClasses = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl text-sm bg-white/5 border text-white placeholder-slate-600 outline-none transition-all duration-200 focus:bg-white/8 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 ${
      errors[field] ? 'border-red-500/50 bg-red-500/5' : 'border-white/8'
    }`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-violet-600/8 blur-3xl pointer-events-none" />

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
            Get In Touch
          </span>
          <h2 className="section-title mx-auto">
            Let's <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Whether you have a project idea, an internship opportunity, or just want to connect —
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-400 mb-8 leading-relaxed">
              I'm currently a Third-Year B.Tech student actively seeking internship opportunities,
              collaborative projects, and open-source contributions. Feel free to reach out — I typically
              respond within 24 hours.
            </p>

            <div className="space-y-4 mb-10">
              {contactLinks.map(({ icon: Icon, label, value, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl border glass ${bg} hover:border-opacity-60 transition-all duration-300 hover:-translate-x-1 group`}
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{label}</p>
                    <p className={`text-sm font-medium ${color}`}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-500">
              <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0" />
              <span>Nalegaon, Tq. Vaijapur, Maharashtra, India</span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass rounded-3xl p-8 border border-white/5">
              {/* Demo notice */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 mb-6">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-400/80">
                  <strong>Frontend Demo:</strong> This form opens your email client (mailto). To receive messages
                  directly, connect a backend or email service like EmailJS.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5" id="contact-form">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="text-xs text-slate-400 font-medium block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={inputClasses('name')}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="text-xs text-slate-400 font-medium block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={inputClasses('email')}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="text-xs text-slate-400 font-medium block mb-1.5">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Internship Opportunity / Project Collaboration"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className={inputClasses('subject')}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-xs text-red-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-xs text-slate-400 font-medium block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Hi Tejas, I'd love to discuss..."
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`${inputClasses('message')} resize-none`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={formState === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening Email...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success */}
                {formState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                    role="alert"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <p className="text-sm text-emerald-400">
                      Your email client has been opened. Thank you for reaching out!
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
