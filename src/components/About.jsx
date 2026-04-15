import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-2" style={{ alignItems: 'center' }}>
        <div className="about-image" style={{
          width: 'min(100%, 350px)',
          aspectRatio: '1 / 1',
          margin: '0 auto',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          border: '4px solid var(--primary)',
          boxShadow: '0 0 30px var(--primary-glow)'
        }}>
          <img
            src="/profile.jpeg"
            alt="Al Christian V. Francisco"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'var(--text-muted)'
          }}>
            <span style={{ fontSize: '3rem' }}>📸</span>
            <p>Save your picture as <br /><b>public/profile.jpeg</b></p>
          </div>
        </div>
        <div className="about-text">
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            An Developer Passionate about <span className="gradient-text">Web Technologies</span>
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            I am Al Christian V. Francisco, an Web Developer with a keen eye for modern design and performance.
            I am currently honing my skills in building dynamic applications and creating intuitive user interfaces.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            As an developer, my approach blends creativity with a strong desire to learn and achieve technical excellence. I am always eager to dive into the latest technologies, adopt best practices, and contribute to impactful projects.
          </p>
          <div className="stats grid grid-2">
            <div className="stat-card glass" style={{ padding: '1.5rem', textAlign: 'center', borderRadius: '15px' }}>
              <h4 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>5+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card glass" style={{ padding: '1.5rem', textAlign: 'center', borderRadius: '15px' }}>
              <h4 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>24/7</h4>
              <p>Passion for Coding</p>
            </div>
          </div>
        </div>
      </div>

      <div className="education-section" style={{ marginTop: '5rem' }}>
        <h3 className="section-title">Education</h3>
        <div className="education-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>

          <div className="education-item glass" style={{ display: 'flex', padding: '1.5rem', borderRadius: '15px', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="edu-left" style={{ flex: '1', minWidth: '200px' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>2009 &ndash; 2015</h4>
              <p style={{ color: 'var(--text-muted)' }}>Upig, San Ildefonso<br />Bulacan</p>
            </div>
            <div className="edu-right" style={{ flex: '2', minWidth: '300px' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Elementary</h4>
              <p style={{ color: 'var(--text-color)' }}>Upig Elementary School</p>
            </div>
          </div>

          <div className="education-item glass" style={{ display: 'flex', padding: '1.5rem', borderRadius: '15px', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="edu-left" style={{ flex: '1', minWidth: '200px' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>2015 &ndash; 2019</h4>
              <p style={{ color: 'var(--text-muted)' }}>Salapungan, San Rafael<br />Bulacan</p>
            </div>
            <div className="edu-right" style={{ flex: '2', minWidth: '300px' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Highschool</h4>
              <p style={{ color: 'var(--text-color)' }}>Salapungan National Highschool</p>
            </div>
          </div>

          <div className="education-item glass" style={{ display: 'flex', padding: '1.5rem', borderRadius: '15px', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="edu-left" style={{ flex: '1', minWidth: '200px' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>2019 &ndash; 2021</h4>
              <p style={{ color: 'var(--text-muted)' }}>Salapungan, San Rafael<br />Bulacan</p>
            </div>
            <div className="edu-right" style={{ flex: '2', minWidth: '300px' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Senior Highschool</h4>
              <p style={{ color: 'var(--text-color)' }}>Salapungan National Highschool<br /><span style={{ color: 'var(--text-muted)' }}>Academic Track - General Academic Strand</span></p>
            </div>
          </div>

          <div className="education-item glass" style={{ display: 'flex', padding: '1.5rem', borderRadius: '15px', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="edu-left" style={{ flex: '1', minWidth: '200px' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>2023 &ndash; Present</h4>
              <p style={{ color: 'var(--text-muted)' }}>Bustos, Bulacan</p>
            </div>
            <div className="edu-right" style={{ flex: '2', minWidth: '300px' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>College</h4>
              <p style={{ color: 'var(--text-color)' }}>Bulacan State University - Bustos Campus<br /><span style={{ color: 'var(--text-muted)' }}>Bachelor of Science in Information Technology Major in Web and Mobile Application Development</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
