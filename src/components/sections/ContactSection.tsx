import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin, Loader2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { PROFILE } from '../../data/profile';
import { useCursor } from '../../hooks/useCursor';

export const ContactSection = () => {
  const { setCursorVariant, setCursorText } = useCursor();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate submission / mailto integration trigger
    setTimeout(() => {
      setStatus('success');
      // Create mailto fallback trigger
      const mailtoUrl = `mailto:${PROFILE.socials.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open mail client as seamless fallback
      window.location.href = mailtoUrl;

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#070709]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="09"
          tagline="GET IN TOUCH"
          title="LET'S BUILD SOMETHING."
          description="Have a project, software requirement, opportunity, or technical inquiry? Let's connect and discuss practical technology solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white">
                Start a Conversation
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether it's web development, LMS workflows, Zoho CRM customization, or technical support, I'm always open to discussing collaborative opportunities.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${PROFILE.socials.email}`}
                className="glass-card rounded-xl p-4 border border-white/[0.08] hover:border-accent-cyan/40 flex items-center gap-4 transition-all duration-200 group block"
                onMouseEnter={() => {
                  setCursorVariant('hover');
                  setCursorText('MAIL');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
              >
                <div className="p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 group-hover:bg-accent-cyan group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-sm font-mono text-white group-hover:text-accent-cyan transition-colors truncate block">
                    {PROFILE.socials.email}
                  </span>
                </div>
              </a>

              <div className="glass-card rounded-xl p-4 border border-white/[0.08] flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent-sky/10 text-accent-sky border border-accent-sky/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Base Location
                  </span>
                  <span className="text-sm font-mono text-white">
                    {PROFILE.location}, {PROFILE.locationState}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Professional Networks
              </p>
              <div className="flex flex-wrap gap-3">
                {PROFILE.socials.github && (
                  <a
                    href={PROFILE.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-white/20 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {PROFILE.socials.linkedin && (
                  <a
                    href={PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-accent-sky hover:border-accent-sky/30 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-accent-sky" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 border border-white/15 relative">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Your Name <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Tripathi"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Your Email <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@gmail.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                    Subject / Project Domain
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Web App Development / Work Inquiry"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                    Your Message <span className="text-accent-cyan">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or inquiry..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors resize-none"
                  />
                </div>

                {/* Validation / Status Messages */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Thank you! Your message has been prepared and opened in your email client.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    No spam • Direct communication
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-[#070709] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
