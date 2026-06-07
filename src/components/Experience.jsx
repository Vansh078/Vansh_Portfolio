import React from 'react';
import { Calendar, Building, CheckCircle, Zap, Shield, GitCommit } from 'lucide-react';

export default function Experience() {
  const achievements = [
    {
      metric: '30%',
      title: 'Less Maintenance',
      desc: 'Successfully migrated legacy Express.js backends to structured Spring Boot applications, reducing core codebase maintenance requirements.',
      icon: <Shield className="text-green" size={24} />
    },
    {
      metric: '40%',
      title: 'Faster Deployments',
      desc: 'Engineered streamlined CI/CD delivery pipelines utilizing Jenkins and GitHub Actions, speeding up release cycle speeds.',
      icon: <Zap className="text-blue" size={24} />
    },
    {
      metric: '1000+',
      title: 'Active Users',
      desc: 'Built, optimized, and tested robust Spring Boot RESTful APIs capable of scaling to over a thousand simultaneous active requests.',
      icon: <CheckCircle className="text-green" size={24} />
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">Timeline // Career</div>
          <h2 className="section-title">Work <span>Experience</span></h2>
        </div>

        <div className="experience-timeline">
          {/* Timeline Node */}
          <div className="timeline-node">
            <div className="timeline-dot-wrapper">
              <span className="timeline-dot"></span>
              <span className="timeline-line"></span>
            </div>

            <div className="timeline-content glass-card">
              <div className="timeline-header-block">
                <div className="role-company">
                  <h3 className="role-title font-display">Java Developer Intern</h3>
                  <div className="company-details font-mono">
                    <Building size={14} className="text-green" />
                    <span>Virtusa Software Systems</span>
                  </div>
                </div>
                
                <div className="duration font-mono">
                  <Calendar size={14} className="text-blue" />
                  <span>Jun 2024 – Dec 2025</span>
                </div>
              </div>

              <p className="timeline-description">
                As a backend engineering intern, I focused on migrating architecture, building performant endpoints, and orchestrating deployment infrastructure.
              </p>

              {/* Achievements Grid */}
              <div className="achievements-grid">
                {achievements.map((item, idx) => (
                  <div key={idx} className="metric-card glass-card green-hover">
                    <div className="metric-icon-row">
                      {item.icon}
                      <span className="metric-number font-display text-gradient">{item.metric}</span>
                    </div>
                    <h4 className="metric-title font-display">{item.title}</h4>
                    <p className="metric-desc text-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Responsibility Bullet Points */}
              <div className="responsibility-block">
                <ul className="resp-list font-mono">
                  <li>
                    <span className="text-blue">&gt;</span> Deployed scalable applications on AWS utilizing EC2 instances, S3 buckets, and CloudWatch log-monitoring.
                  </li>
                  <li>
                    <span className="text-blue">&gt;</span> Resolved active production tickets, troubleshot database bottlenecks, and performed bug fixes in agile sprints.
                  </li>
                  <li>
                    <span className="text-blue">&gt;</span> Collaborated closely with QA and frontend teams to optimize API response latency and payload formatting.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
