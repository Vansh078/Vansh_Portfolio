import React from 'react';
import { Award, ShieldCheck, ExternalLink, Cloud } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      code: 'CLF-C02',
      issuer: 'Amazon Web Services (AWS)',
      focus: ['Cloud Architecture', 'AWS Core Services', 'Security & Compliance', 'Pricing & Support'],
      active: true
    },
    {
      title: 'AWS Cloud Technical Essentials',
      code: 'AWS-Essentials',
      issuer: 'Amazon Web Services (AWS)',
      focus: ['Compute & IAM', 'Database Integration', 'Storage (S3/EBS)', 'Networking (VPC)'],
      active: true
    }
  ];

  return (
    <section id="certs" className="certs-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Certifications <span>& Badges</span></h2>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card glass-card green-hover">
              <div className="cert-card-header">
                <div className="cert-badge-wrapper">
                  <Cloud size={24} className="text-blue" />
                  <Award size={36} className="text-green cert-award-icon" />
                </div>
                <div className="cert-code font-mono">{cert.code}</div>
              </div>
              
              <h3 className="cert-title font-display">{cert.title}</h3>
              <p className="cert-issuer font-mono text-secondary">{cert.issuer}</p>

              <div className="cert-focus font-mono">
                <div className="focus-tags">
                  {cert.focus.map((tag, i) => (
                    <span key={i} className="focus-tag badge badge-blue">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="cert-verification-row font-mono text-xs">
                <span className="status-ping"></span>
                <span className="text-green">VERIFIED_CREDENTIAL_ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
