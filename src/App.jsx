import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer style={{
        textAlign: 'center', 
        padding: '2rem 0', 
        borderTop: '1px solid var(--border)',
        marginTop: '4rem',
        color: 'var(--text-muted)'
      }}>
        <p>© {new Date().getFullYear()} Al Christian V. Francisco. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
