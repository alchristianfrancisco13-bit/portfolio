import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section glass">
      <div className="container hero-container grid grid-2">
        <div className="hero-content animate-fade-in">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Al Christian</h1>
          <h1 className="surname gradient-text">V. Francisco</h1>
          <h3 className="role">Professional Web Developer</h3>
          <p className="bio">
            I craft responsive, modern, and user-centric web experiences. 
            Transforming ideas into elegant, state-of-the-art digital realities.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="https://github.com/alchristianfrancisco13-bit" target="_blank" rel="noreferrer" className="btn btn-outline" style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
               GitHub Profile
            </a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="blob-shape">
             {/* A decorative shape instead of an image to look modern */}
             <div className="code-window glass">
               <div className="window-header">
                 <span className="dot red"></span>
                 <span className="dot yellow"></span>
                 <span className="dot green"></span>
               </div>
               <pre className="code-content">
                 <code>
<span style={{color: 'var(--primary)'}}>const</span> developer = {'{'}
<br/>  name: <span style={{color: "var(--secondary)"}}>'Al Christian V. Francisco'</span>,
<br/>  role: <span style={{color: "var(--secondary)"}}>'Web Developer'</span>,
<br/>  skills: [<span style={{color: "var(--secondary)"}}>'React'</span>, <span style={{color: "var(--secondary)"}}>'Vite'</span>, <span style={{color: "var(--secondary)"}}>'Node.js'</span>],
<br/>  isCreative: <span style={{color: 'var(--primary)'}}>true</span>
<br/>{'}'};
                 </code>
               </pre>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
