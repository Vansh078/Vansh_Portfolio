import React from 'react';
import { User, GraduationCap, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">About <span>Me</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <h3 className="bio-greeting font-display">
              Building robust systems and efficient APIs from the ground up.
            </h3>
            <p className="bio-text">
              I am a passionate <strong>Java Backend Developer</strong> with hands-on experience in building, deploying, and maintaining secure RESTful APIs. My engineering approach balances structural integrity (using <strong>Spring Boot</strong> and <strong>Hibernate/JPA</strong>) with operational agility (leveraging <strong>AWS Cloud services</strong> and <strong>CI/CD automation</strong>).
            </p>
            <p className="bio-text">
              During my internship at Virtusa Software Systems, I worked directly on replacing legacy Express.js backends with robust Java services, reducing maintenance overhead by 30% and building streamlined delivery pipelines that boosted deployment speeds by 40%.
            </p>

            <div className="info-bullets">
              <div className="bullet-item">
                <MapPin className="bullet-icon text-green" />
                <div>
                  <h4 className="bullet-title">Location</h4>
                  <p className="bullet-desc">Ghaziabad, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="bullet-item">
                <GraduationCap className="bullet-icon text-blue" />
                <div>
                  <h4 className="bullet-title">Education</h4>
                  <p className="bullet-desc">B.Tech in EEE – AKTU (Jul 2027) — GPA: 8.27</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-code-card">
            <div className="terminal-window green-hover">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot red"></span>
                  <span className="terminal-dot yellow"></span>
                  <span className="terminal-dot green"></span>
                </div>
                <div className="terminal-title">DeveloperProfile.java</div>
                <span className="text-xs text-muted font-mono">JDK 17</span>
              </div>
              <div className="terminal-body font-mono text-sm">
                <div className="code-line"><span className="text-keyword">package</span> com.vansh.portfolio;</div>
                <div className="code-line"><span className="text-keyword">import</span> com.vansh.skills.Backend;</div>
                <div className="code-line"><span className="text-keyword">import</span> com.aws.cloud.CloudPractitioner;</div>
                <br />
                <div className="code-line"><span className="text-keyword">public class</span> <span className="text-class">DeveloperProfile</span> <span className="text-keyword">implements</span> <span className="text-interface">JavaDeveloper</span> &#123;</div>
                <div className="code-line">&nbsp;&nbsp;<span className="text-keyword">private final</span> String name = <span className="text-string">"Vansh Agrawal"</span>;</div>
                <div className="code-line">&nbsp;&nbsp;<span className="text-keyword">private final</span> String title = <span className="text-string">"Java Backend Developer"</span>;</div>
                <div className="code-line">&nbsp;&nbsp;<span className="text-keyword">private final</span> double gpa = <span className="text-number">8.27</span>;</div>
                <div className="code-line">&nbsp;&nbsp;<span className="text-keyword">private final</span> String status = <span className="text-string">"Active_Coding"</span>;</div>
                <br />
                <div className="code-line">&nbsp;&nbsp;<span className="text-annotation">@Override</span></div>
                <div className="code-line">&nbsp;&nbsp;<span className="text-keyword">public</span> List&lt;String&gt; getCoreFocus() &#123;</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-keyword">return</span> List.of(</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-string">"Spring Boot REST APIs"</span>,</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-string">"Cloud Optimization"</span>,</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-string">"CI/CD Pipelines"</span>,</div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-string">"Microservices Architecture"</span></div>
                <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;);</div>
                <div className="code-line">&nbsp;&nbsp;&#125;</div>
                <div className="code-line">&#125;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
