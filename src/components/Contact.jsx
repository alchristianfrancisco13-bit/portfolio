import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('alchristianfrancisco13@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header-center">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">
          Let's Build Something <span className="gradient-text">Exceptional</span>
        </h2>
        <p className="section-subtitle">
          Whether you have an internship opportunity, a project to collaborate on, or simply want to connect, my inbox is always open.
        </p>
      </div>

      <div className="glass" style={{
        maxWidth: '850px',
        margin: '0 auto',
        padding: '3rem 2.5rem',
        borderRadius: '24px',
        border: '1px solid var(--border)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(16, 185, 129, 0.08)'
      }}>
        {/* Quick Contact Chips */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}>
          <a 
            href="mailto:alchristianfrancisco13@gmail.com" 
            className="btn btn-outline" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.65rem 1.3rem' }}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            alchristianfrancisco13@gmail.com
          </a>

          <button 
            type="button" 
            onClick={copyEmail} 
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.65rem 1.3rem' }}
          >
            {copied ? '✓ Copied!' : '📋 Copy Email'}
          </button>

          <a 
            href="tel:09398507188" 
            className="btn btn-outline" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.65rem 1.3rem' }}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            09398507188
          </a>
        </div>

        {/* Message Form */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const msg = e.target.message.value;
            window.location.href = `mailto:alchristianfrancisco13@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}`;
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '550px', margin: '0 auto' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              style={inputStyle} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              style={inputStyle} 
            />
          </div>
          <textarea 
            name="message" 
            placeholder="Tell me about your project or opportunity..." 
            rows="5" 
            required 
            style={inputStyle}
          ></textarea>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
            <span>Send Message via Email</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem 1.25rem',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--border)',
  borderRadius: '12px',
  color: '#fff',
  fontFamily: 'inherit',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'all 0.3s ease'
};

export default Contact;
