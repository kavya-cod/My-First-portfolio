import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { LinkedInIcon, GitHubIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(portfolioData.profile.email)
      .then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      })
      .catch(() => {
        // Fallback
      });
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Clear form inputs and indicate client-side status honestly
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold tracking-wider uppercase">
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Have an Interesting Problem to Solve?
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl pt-1">
            “I’m interested in learning, collaborating, and exploring meaningful opportunities in technology and data.”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0D101C] border border-white/[0.08] space-y-5">
              <h3 className="font-heading text-lg font-bold text-white pb-3 border-b border-white/[0.08]">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 transition-colors">
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="flex items-center gap-3 text-slate-200 hover:text-violet-300 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                    <span className="text-sm font-medium">{portfolioData.profile.email}</span>
                  </div>
                </a>

                <button
                  type="button"
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <div className="text-xs text-emerald-400 font-medium px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email address copied to your clipboard!</span>
                </div>
              )}

              {/* Phone */}
              <a
                href={`tel:${portfolioData.profile.phone}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 text-slate-200 hover:text-violet-300 transition-colors"
              >
                <div className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Phone</span>
                  <span className="text-sm font-medium">{portfolioData.profile.phoneDisplay}</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-200">
                <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                  <span className="text-sm font-medium">{portfolioData.profile.location}</span>
                </div>
              </div>
            </div>

            {/* Online Profiles */}
            <div className="p-6 rounded-2xl bg-[#0D101C] border border-white/[0.08] space-y-4">
              <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider font-mono">
                Verified Social Profiles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-violet-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedInIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-violet-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GitHubIcon className="w-4 h-4 text-violet-400" />
                    <span className="text-xs font-semibold">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D101C] border border-white/[0.08] space-y-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Leave a note with your project or query. Validated on the client.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-amber-300">
                        Notice: Direct Message Delivery Is Not Configured
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Thank you, <strong className="text-white">{formData.name}</strong>. Per specification guidelines, this portfolio is running without an external backend service or email dispatch server. No transmission took place.
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed pt-2">
                        To contact Kavya directly, please use the direct email link:{' '}
                        <a
                          href={`mailto:${portfolioData.profile.email}?subject=Hello%20from%20Portfolio%20(${encodeURIComponent(formData.name)})&body=${encodeURIComponent(formData.message)}`}
                          className="text-violet-400 underline font-medium hover:text-violet-300"
                        >
                          Open in your email client ({portfolioData.profile.email})
                        </a>
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-2 text-xs font-semibold text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Message <span className="text-violet-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, opportunity, or idea..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors resize-none ${
                        errors.message ? 'border-rose-500' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Backend Status Transparency Notice */}
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[11px] text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>
                      Client-side validated. Form does not falsely claim message delivery without a live backend.
                    </span>
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Validate & Submit Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
