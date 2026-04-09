import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-2" style={{alignItems: 'center'}}>
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
             <p>Save your picture as <br/><b>public/profile.jpeg</b></p>
          </div>
        </div>
        <div className="about-text">
          <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>
             Passionate about <span className="gradient-text">Web Technologies</span>
          </h3>
          <p style={{color: 'var(--text-muted)', marginBottom: '1rem'}}>
            I am Al Christian V. Francisco, a dedicated Web Developer with a keen eye for aesthetics and performance. 
            I specialize in building dynamic, full-stack applications and creating intuitive user interfaces.
          </p>
          <p style={{color: 'var(--text-muted)', marginBottom: '2rem'}}>
            My approach blends creativity with technical excellence, ensuring that every project I touch is not only visually stunning but also technically robust. Always eager to learn the latest stack and implement best practices.
          </p>
          <div className="stats grid grid-2">
            <div className="stat-card glass" style={{padding: '1.5rem', textAlign: 'center', borderRadius: '15px'}}>
              <h4 style={{fontSize: '2.5rem', color: 'var(--primary)'}}>5+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card glass" style={{padding: '1.5rem', textAlign: 'center', borderRadius: '15px'}}>
              <h4 style={{fontSize: '2.5rem', color: 'var(--secondary)'}}>24/7</h4>
              <p>Passion for Coding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
