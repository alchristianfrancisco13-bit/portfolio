import React from 'react';
import './About.css';

const About = () => {
  const educationData = [
    {
      period: '2023 – Present',
      level: 'College / Tertiary',
      school: 'Bulacan State University - Bustos Campus',
      degree: 'BS in Information Technology (Major in Web and Mobile Application Development)',
      location: 'Bustos, Bulacan'
    },
    {
      period: '2019 – 2021',
      level: 'Senior High School',
      school: 'Salapungan National High School',
      degree: 'Academic Track — General Academic Strand (GAS)',
      location: 'San Rafael, Bulacan'
    },
    {
      period: '2015 – 2019',
      level: 'Junior High School',
      school: 'Salapungan National High School',
      degree: 'Secondary Education',
      location: 'San Rafael, Bulacan'
    },
    {
      period: '2009 – 2015',
      level: 'Elementary',
      school: 'Upig Elementary School',
      degree: 'Primary Education',
      location: 'San Ildefonso, Bulacan'
    }
  ];

  return (
    <section id="about" className="section container">
      <div className="section-header-center">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">
          Engineering the Future with <span className="gradient-text">Clean Code & Intuitive Design</span>
        </h2>
        <p className="section-subtitle">
          Passionate about building modern, human-centric web applications with clean architecture and technical excellence.
        </p>
      </div>

      <div className="bento-grid">
        
        {/* Bento 1: Profile Spotlight */}
        <div className="bento-card bento-profile">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar-glow">
              <img
                src="/profile.jpeg"
                alt="Al Christian V. Francisco"
                className="profile-avatar-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <span className="avatar-badge-status" title="Active Developer">💻</span>
          </div>
          
          <div className="profile-details">
            <h3>Al Christian V. Francisco</h3>
            <p className="profile-tagline">Web Developer & Front-End Craftsman</p>
            <p className="profile-bio-text">
              An Information Technology student majoring in Web and Mobile Application Development at Bulacan State University - Bustos Campus. 
              I design and build dynamic, responsive web interfaces with strong attention to micro-interactions, 
              clean front-end architecture, and fluid user experiences.
            </p>
            <div className="profile-chips">
              <span className="profile-chip">📍 San Ildefonso, Bulacan</span>
              <span className="profile-chip">🎓 BulSU Bustos Campus</span>
              <span className="profile-chip">💼 Web Developer</span>
              <span className="profile-chip">🚀 Open for Opportunities</span>
            </div>
          </div>
        </div>

        {/* Bento 2: Technical Focus */}
        <div className="bento-card bento-philosophy">
          <div>
            <div className="bento-badge-icon">🎨</div>
            <h3 className="bento-card-title">Front-End & UI/UX Focus</h3>
            <p className="bento-card-desc">
              Dedicated to building fast, accessible, and user-centric web applications. 
              I combine robust modular component design with modern CSS and JavaScript frameworks to create clean, scalable digital experiences.
            </p>
          </div>
          <div className="focus-pills-list">
            <span className="focus-pill-item">🎨 Responsive Design</span>
            <span className="focus-pill-item">⚡ Component Architecture</span>
            <span className="focus-pill-item">🧩 State Management</span>
            <span className="focus-pill-item">🚀 Web Optimization</span>
          </div>
        </div>

        {/* Bento 3: Education Timeline */}
        <div className="bento-card bento-education">
          <h3 className="bento-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span>🎓</span> Academic Background
          </h3>
          <p className="bento-card-desc" style={{ marginBottom: '1rem' }}>
            Structured foundation in Information Technology, Web & Mobile Application Development, and General Academics.
          </p>
          
          <div className="education-timeline-modern">
            {educationData.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <span className="edu-year-badge">{edu.period}</span>
                <h4 className="edu-level-title">{edu.level}</h4>
                <p className="edu-institution-name"><strong>{edu.school}</strong></p>
                <p className="edu-program-desc">{edu.degree}</p>
                <p className="edu-location">📍 {edu.location}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
