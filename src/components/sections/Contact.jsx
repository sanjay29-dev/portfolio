import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, MapPin, Send, Loader2, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profile.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _gotcha: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._gotcha) {
      // Spam detected via honeypot
      setFormSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    if (profileData.formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${profileData.formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });

        if (response.ok) {
          setFormSubmitted(true);
        } else {
          const data = await response.json();
          setErrorMessage(data?.error || 'Failed to deliver message. Please use direct email.');
        }
      } catch (err) {
        setErrorMessage('Network error while sending. Please use direct email.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Simulated delivery fallback when Formspree ID is not yet provided
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      }, 700);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="07"
            title="Let's build something reliable."
            subtitle="I'm open to Java Full Stack and back-end developer roles. The fastest way to reach me is email."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Communication & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <Card className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                    // Direct Communication
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text mb-1">
                    Get in touch directly
                  </h3>
                  <p className="text-sm text-text-muted">
                    Feel free to write for full-time opportunities, technical interviews, or project discussions.
                  </p>
                </div>

                {/* Email with copy button */}
                <div className="p-4 rounded-xl border border-border bg-bg-subtle flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono text-text-muted">EMAIL ADDRESS</div>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-sm font-mono text-text hover:text-accent truncate block"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-border bg-bg-elevated hover:bg-accent-soft hover:text-accent text-text-muted transition-colors shrink-0"
                    aria-label="Copy email address"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location & Socials */}
                <div className="space-y-3 pt-2 border-t border-border/60 text-sm">
                  <div className="flex items-center gap-3 text-text-muted">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span>{profileData.location}</span>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-bg-subtle text-text-muted hover:text-accent hover:border-accent/40 text-xs font-mono transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-accent" />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-bg-subtle text-text-muted hover:text-accent hover:border-accent/40 text-xs font-mono transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-3.5 h-3.5 text-accent" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <Card className="p-6 sm:p-8">
                {formSubmitted ? (
                  <div className="p-8 rounded-xl bg-bg-subtle border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-success mx-auto flex items-center justify-center font-mono text-xl">
                      ✓
                    </div>
                    <h4 className="font-heading font-bold text-xl text-text">
                      Message dispatched
                    </h4>
                    <div className="font-mono text-xs sm:text-sm text-text-muted bg-bg p-3.5 rounded-lg border border-border inline-block">
                      <span className="text-success font-semibold">✓ message sent</span> — I'll reply soon to <span className="text-accent">{formData.email}</span>.
                    </div>
                    <div className="pt-2">
                      <Button
                        variant="subtle"
                        size="sm"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ name: '', email: '', message: '', _gotcha: '' });
                        }}
                      >
                        Send another note
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Hidden Honeypot Field */}
                    <input
                      type="text"
                      name="_gotcha"
                      className="hidden"
                      tabIndex="-1"
                      autoComplete="off"
                      value={formData._gotcha}
                      onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                    />

                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Hiring Manager / Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-subtle text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-body text-sm transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-subtle text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-body text-sm transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows="4"
                        placeholder="Hi Sanjay, we have an open role for a Java Full Stack Developer..."
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-subtle text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-body text-sm transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      icon={isSubmitting ? Loader2 : Send}
                      disabled={isSubmitting}
                      className="w-full justify-center"
                    >
                      {isSubmitting ? 'Transmitting message...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </Card>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
