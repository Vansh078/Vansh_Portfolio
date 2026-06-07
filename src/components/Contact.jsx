import React, { useState } from 'react';
import { Mail, Phone, Send, Terminal, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Github = ({ className, size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className, size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [apiState, setApiState] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Proactively clear error message for this field when typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
        isValid = false;
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setApiState('sending');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setApiState('error');
      setErrorMessage('EmailJS environment variables are missing in your .env configuration.');
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim()
        },
        publicKey
      );

      if (result.status === 200) {
        setApiState('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.text || 'Unexpected API response status');
      }
    } catch (err) {
      console.error('[EmailJS Client] Transmission failed:', err);
      setApiState('error');
      setErrorMessage(err.text || err.message || 'Failed to dispatch email via EmailJS.');
    }
  };

  const handleReset = () => {
    setApiState('idle');
    setErrorMessage('');
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Contact <span>Me</span></h2>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-details">
            <h3 className="contact-heading font-display">Let's build something scalable.</h3>
            <p className="contact-subtext">
              I am open to discussions regarding full-time Java roles, internship opportunities, and technical projects. Reach out via email, phone, or any social channel.
            </p>

            <div className="contact-info-list">
              <a href="mailto:vanshagrawal068@gmail.com" className="contact-info-card glass-card green-hover">
                <Mail className="contact-card-icon text-green" />
                <div className="contact-card-content font-mono">
                  <span className="card-label">Email</span>
                  <span className="card-value">vanshagrawal068@gmail.com</span>
                </div>
              </a>

              <a href="tel:+919528387308" className="contact-info-card glass-card green-hover">
                <Phone className="contact-card-icon text-blue" />
                <div className="contact-card-content font-mono">
                  <span className="card-label">Phone</span>
                  <span className="card-value">+91 9528387308</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/vansh-agrawalsql" target="_blank" rel="noreferrer" className="contact-info-card glass-card green-hover">
                <Linkedin className="contact-card-icon text-blue" />
                <div className="contact-card-content font-mono">
                  <span className="card-label">LinkedIn</span>
                  <span className="card-value">in/vansh-agrawalsql</span>
                </div>
              </a>

              <a href="https://github.com/Vansh078" target="_blank" rel="noreferrer" className="contact-info-card glass-card green-hover">
                <Github className="contact-card-icon text-green" />
                <div className="contact-card-content font-mono">
                  <span className="card-label">GitHub</span>
                  <span className="card-value">github/Vansh078</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Container */}
          <div className="contact-form-container">
            {apiState === 'success' ? (
              <div className="contact-form glass-card success-card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', justifyContent: 'center', minHeight: '380px' }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  <CheckCircle2 size={64} className="text-green glow-green-icon" />
                </div>
                <h3 className="contact-heading font-display" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Message Dispatched!</h3>
                <p className="contact-subtext" style={{ fontSize: '0.9rem', marginBottom: '2rem', textAlign: 'center', maxWidth: '300px' }}>
                  Thank you! Your message has been sent successfully. Vansh will review your message and reach out shortly.
                </p>
                <button onClick={handleReset} className="btn btn-primary" style={{ padding: '0.7rem 1.5rem' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form glass-card">
                <div className="form-header font-mono">
                  <Terminal size={14} className="text-green" />
                  <span>Send Message Client (EmailJS)</span>
                </div>

                {apiState === 'error' && (
                  <div className="font-mono text-xs text-red glass-card" style={{ borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.05)', padding: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', borderRadius: '4px' }}>
                    <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Transmission Error:</div>
                      <div>{errorMessage}</div>
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name" className="font-mono text-sm">Sender Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={apiState === 'sending'}
                    placeholder="e.g. Jane Doe"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="font-mono text-sm">Sender Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={apiState === 'sending'}
                    placeholder="e.g. jane@company.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="font-mono text-sm">Message Content</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={apiState === 'sending'}
                    placeholder="Describe your project, role, or proposal..."
                    rows="4"
                    className={`form-input ${errors.message ? 'input-error' : ''}`}
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={apiState === 'sending'}
                  className="btn btn-primary w-full justify-center"
                  style={{ gap: '0.75rem' }}
                >
                  {apiState === 'sending' ? (
                    <>
                      Sending Message <Loader2 size={14} className="animate-spin text-green" />
                    </>
                  ) : (
                    <>
                      Execute Request <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <footer className="footer font-mono text-xs text-muted">
          <div>© {new Date().getFullYear()} Vansh Agrawal. All systems operational.</div>
          <div>Compiled with React, Vite & pure CSS.</div>
        </footer>
      </div>
    </section>
  );
}
