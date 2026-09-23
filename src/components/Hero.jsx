import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('profile.js');

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container grid grid-2">
        
        {/* Left Column: Headline & Intro */}
        <div className="hero-content animate-fade-in">
          <div className="status-indicator">
            <span className="status-ping"></span>
            Available for Web Dev Projects & Opportunities
          </div>

          <h2 className="hero-greeting">Hi, I am</h2>
          <h1 className="hero-name">
            Al Christian <span className="gradient-text">V. Francisco</span>
          </h1>
          
          <div className="hero-role-wrapper">
            <span className="role-title">Front-End Developer</span>
            <span className="role-separator">•</span>
            <span className="role-sub">Web Developer</span>
          </div>

          <p className="hero-bio">
            Crafting responsive, intuitive, and visually captivating web applications — blending 
            clean front-end architecture, interactive modern UI, and performance-driven development.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a 
              href="/Al_Christian_Francisco_CV.pdf" 
              download="Al_Christian_Francisco_CV.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
            </a>

            <a 
              href="https://github.com/alchristianfrancisco13-bit" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline btn-icon"
              aria-label="GitHub Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-tech-pills">
            <span className="pills-label">Core Tech:</span>
            <span className="pill">React</span>
            <span className="pill">JavaScript</span>
            <span className="pill">Tailwind</span>
            <span className="pill">Python</span>
            <span className="pill">Cisco</span>
            <span className="pill">Firebase</span>
          </div>
        </div>

        {/* Right Column: Futuristic Cyber Terminal / Bento Console */}
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="cyber-terminal glass">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'profile.js' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profile.js')}
                >
                  developer.ts
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'stats.json' ? 'active' : ''}`}
                  onClick={() => setActiveTab('stats.json')}
                >
                  systemMetrics.json
                </button>
              </div>
              <div className="terminal-badge">
                <span className="pulse-mini"></span> live
              </div>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body">
              {activeTab === 'profile.js' ? (
                <pre className="code-content">
                  <code>
                    <span className="c-comment">// Al Christian V. Francisco — Front-End Developer</span><br/>
                    <span className="c-keyword">const</span> <span className="c-var">frontEndDev</span> = {'{'}<br/>
                    &nbsp;&nbsp;<span className="c-prop">name</span>: <span className="c-string">'Al Christian V. Francisco'</span>,<br/>
                    &nbsp;&nbsp;<span className="c-prop">role</span>: <span className="c-string">'Front-End & Web Developer'</span>,<br/>
                    &nbsp;&nbsp;<span className="c-prop">education</span>: <span className="c-string">'BSIT @ BulSU Bustos'</span>,<br/>
                    &nbsp;&nbsp;<span className="c-prop">specialization</span>: <span className="c-string">'Responsive UI & Modern Web'</span>,<br/>
                    &nbsp;&nbsp;<span className="c-prop">coreSkills</span>: [<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-string">'React.js'</span>, <span className="c-string">'Tailwind/CSS'</span>, <span className="c-string">'Python'</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-string">'Android/Java'</span>, <span className="c-string">'Cisco Networking'</span><br/>
                    &nbsp;&nbsp;],<br/>
                    &nbsp;&nbsp;<span className="c-prop">availableForWork</span>: <span className="c-bool">true</span><br/>
                    {'}'};<br/><br/>
                    <span className="c-keyword">export default</span> <span className="c-var">frontEndDev</span>;
                  </code>
                </pre>
              ) : (
                <pre className="code-content">
                  <code>
                    <span className="c-comment">// Verified Metrics & Achievements</span><br/>
                    {'{'}<br/>
                    &nbsp;&nbsp;<span className="c-prop">"completedProjects"</span>: <span className="c-num">6</span>,<br/>
                    &nbsp;&nbsp;<span className="c-prop">"verifiedCertificates"</span>: <span className="c-num">7</span>,<br/>
                    &nbsp;&nbsp;<span className="c-prop">"ciscoCertification"</span>: <span className="c-string">"Packet Tracer"</span>,<br/>
                    &nbsp;&nbsp;<span className="c-prop">"asicsSummit"</span>: <span className="c-string">"AI & Machine Learning"</span>,<br/>
                    &nbsp;&nbsp;<span className="c-prop">"currentFocus"</span>: <span className="c-string">"Modern Web & Front-End UI"</span><br/>
                    {'}'}
                  </code>
                </pre>
              )}
            </div>

            {/* Quick Metrics Footer Bar */}
            <div className="terminal-footer">
              <div className="terminal-metric">
                <span className="metric-val">4+</span>
                <span className="metric-lbl">Live Apps</span>
              </div>
              <div className="terminal-divider"></div>
              <div className="terminal-metric">
                <span className="metric-val">7</span>
                <span className="metric-lbl">Certifications</span>
              </div>
              <div className="terminal-divider"></div>
              <div className="terminal-metric">
                <span className="metric-val">100%</span>
                <span className="metric-lbl">Dedication</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
