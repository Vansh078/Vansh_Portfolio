import React, { useEffect, useState } from 'react';
import { ArrowLeft, Shield, Terminal, Lock, Cpu, EyeOff, Server } from 'lucide-react';

export default function PrivacyPolicy() {
  const [decryptionTime, setDecryptionTime] = useState('');

  useEffect(() => {
    // Generate a simulated timestamp on mount
    const date = new Date();
    setDecryptionTime(date.toUTCString());
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      {/* Minimal Header */}
      <nav className="navbar privacy-navbar">
        <div className="navbar-container">
          <a href="#/" className="navbar-logo">
            <Cpu className="logo-icon text-green" />
            <span>VanshAgrawal<span className="text-blue">.java</span></span>
          </a>
          
          <a href="#/" className="btn btn-secondary privacy-back-btn">
            <ArrowLeft size={14} className="text-blue" />
            <span>Back to Mainframe</span>
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container privacy-content-wrapper">
        
        {/* Terminal Header Info */}
        <div className="terminal-window privacy-header-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <span className="terminal-title font-mono">system_decryption_log.sys</span>
          </div>
          <div className="terminal-body font-mono text-xs">
            <div className="terminal-line"><span className="text-green">[SUCCESS]</span> Security handshake established.</div>
            <div className="terminal-line"><span className="text-blue">[INFO]</span> Protocol: SECURE_HTTPS (SSL_TLS_v1.3)</div>
            <div className="terminal-line"><span className="text-blue">[INFO]</span> Document: Vansh Agrawal Portfolio Privacy Policy</div>
            <div className="terminal-line"><span className="text-blue">[INFO]</span> Last Compiled: July 2026</div>
            <div className="terminal-line"><span className="text-blue">[INFO]</span> Decryption Timestamp: {decryptionTime || 'LOADING_TIMESTAMP...'}</div>
            <div className="terminal-line"><span className="text-green">[READY]</span> Console decrypted. Protocol parameters loaded below.</div>
          </div>
        </div>

        {/* Page Title */}
        <div className="privacy-title-block">
          <span className="section-tag text-green">SECURITY PROTOCOL</span>
          <h1 className="privacy-main-title">Privacy <span>Policy</span></h1>
          <p className="privacy-subtitle font-mono text-muted text-sm">
            DOCUMENT IDENTIFIER: SEC-PRIV-POLICY-V1.0
          </p>
        </div>

        {/* Policy Grid */}
        <div className="privacy-sections-grid">
          
          {/* Card 1 */}
          <div className="glass-card protocol-card green-hover">
            <div className="protocol-card-header font-mono">
              <Terminal size={16} className="text-green" />
              <span>[PRT_01] DATA_INGESTION_POLICY</span>
            </div>
            <div className="protocol-card-body">
              <h3 className="protocol-section-heading font-display">What Data We Ingest</h3>
              <p className="protocol-text">
                This web application hosts a developer portfolio. We only ingest personal data that you voluntarily submit through our contact communication form:
              </p>
              <ul className="protocol-list font-mono text-sm text-secondary">
                <li><span className="text-green">&gt;</span> Name / Organization</li>
                <li><span className="text-green">&gt;</span> Email Address</li>
                <li><span className="text-green">&gt;</span> Message Contents</li>
              </ul>
              <p className="protocol-text text-muted text-xs font-mono mt-4">
                No telemetry, background location, or browser-profiling data is ingested.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card protocol-card">
            <div className="protocol-card-header font-mono">
              <Server size={16} className="text-blue" />
              <span>[PRT_02] DISPATCH_PIPELINE</span>
            </div>
            <div className="protocol-card-body">
              <h3 className="protocol-section-heading font-display">Processing & Hosting</h3>
              <p className="protocol-text">
                Ingested form communications do not persist on any local or server database managed by us. The transmission follows a direct processing pipeline:
              </p>
              <div className="terminal-body font-mono text-xs mb-3 bg-darker" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div><span className="text-blue">USER_FORM</span> --(HTTPS)--&gt; <span className="text-green">EMAILJS_API</span> --(SMTP)--&gt; <span className="text-blue">DEVELOPER_INBOX</span></div>
              </div>
              <p className="protocol-text text-sm">
                We utilize <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue underline-link">EmailJS</a> as our serverless transit pipeline. Their services route form content securely to our business mail inbox. No details are shared with secondary advertising networks.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card protocol-card">
            <div className="protocol-card-header font-mono">
              <EyeOff size={16} className="text-blue" />
              <span>[PRT_03] COOKIE_EXCLUSION_MANIFEST</span>
            </div>
            <div className="protocol-card-body">
              <h3 className="protocol-section-heading font-display">Tracking & Cookies</h3>
              <p className="protocol-text">
                We believe in clean web engineering. This application operates under an active cookie-exclusion manifest:
              </p>
              <ul className="protocol-list font-mono text-sm text-secondary">
                <li><span className="text-blue">&gt;</span> No marketing or tracking cookies are placed in your browser.</li>
                <li><span className="text-blue">&gt;</span> No third-party tracking scripts (such as Google Analytics or Meta Pixels) are run.</li>
                <li><span className="text-blue">&gt;</span> Local storage is strictly bypassed, leaving zero footprints on user hardware.</li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-card protocol-card green-hover">
            <div className="protocol-card-header font-mono">
              <Lock size={16} className="text-green" />
              <span>[PRT_04] RIGHTS_&_RECTIFICATION</span>
            </div>
            <div className="protocol-card-body">
              <h3 className="protocol-section-heading font-display">Your Rights & Compliance</h3>
              <p className="protocol-text">
                Your data belongs entirely to you. You maintain absolute authority over the transmission history. You have the right to request:
              </p>
              <ul className="protocol-list font-mono text-sm text-secondary">
                <li><span className="text-green">&gt;</span> Disclosure of any emails sent to the developer.</li>
                <li><span className="text-green">&gt;</span> Permanent deletion of the communication records from our inbox.</li>
              </ul>
              <p className="protocol-text mt-4">
                To issue a deletion directive, dispatch your command to: <a href="mailto:vanshagrawal068@gmail.com" className="text-green underline-link font-mono">vanshagrawal068@gmail.com</a>.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Navigation */}
        <div className="privacy-footer font-mono text-xs text-muted">
          <div>SYSTEM_PRIVACY_LOGS // STACK: React, Vite, CSS Grid</div>
          <div>
            <a href="#/" className="text-blue underline-link">Return to Mainframe</a>
          </div>
          <div>© {new Date().getFullYear()} Vansh Agrawal.</div>
        </div>

      </div>
    </div>
  );
}
