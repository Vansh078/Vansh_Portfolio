import React from 'react';
import { Users, Calendar, Radio, Users2 } from 'lucide-react';

export default function Leadership() {
  const leadershipRoles = [
    {
      role: 'Core Lead – Administration & Operations',
      organization: 'Innogeeks Technical Community',
      desc: 'Directed campus-wide operational pipelines, community programs, and resource allocation. Managed operations for technical developer bootcamps and collaborative coding events.',
      badge: 'MANAGEMENT_NODE'
    },
    {
      role: 'Organizing Committee Member',
      organization: 'NASA Space Apps Challenge & IWOC 3.0',
      desc: 'Co-organized flagship local hackathons and collaborative developer sprints. Coordinated participant operations, server logistics, and evaluation workflows.',
      badge: 'EVENT_COORDINATION'
    }
  ];

  return (
    <section id="leadership" className="leadership-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Leadership <span>& Impact</span></h2>
        </div>

        <div className="leadership-grid">
          {leadershipRoles.map((lead, idx) => (
            <div key={idx} className="leadership-card glass-card">
              <div className="lead-header">
                <div className="lead-org-wrapper">
                  <Users2 size={24} className="text-blue" />
                  <h3 className="lead-role font-display">{lead.role}</h3>
                </div>
                <div className="lead-badge font-mono badge badge-green">{lead.badge}</div>
              </div>

              <h4 className="lead-organization font-mono text-gradient">{lead.organization}</h4>
              <p className="lead-desc text-secondary">{lead.desc}</p>
              
              <div className="lead-footer font-mono text-xs text-muted">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
