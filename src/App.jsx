import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <footer style={{
        padding: '3rem 0', 
        borderTop: '1px solid var(--border)',
        marginTop: '6rem',
        background: 'rgba(5, 6, 8, 0.95)',
        color: 'var(--text-muted)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600' }}>
              Al Christian V. Francisco
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
              Front-End Developer & Web Developer Intern • Built with React 19 & Clean Architecture.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.75rem', fontSize: '0.88rem', alignItems: 'center' }}>
            <a href="https://github.com/alchristianfrancisco13-bit" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>GitHub</a>
            <a href="mailto:alchristianfrancisco13@gmail.com" style={{ color: 'var(--text-muted)' }}>Email</a>
            <a href="#home" style={{ color: 'var(--primary)', fontWeight: '600' }}>Back to Top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
