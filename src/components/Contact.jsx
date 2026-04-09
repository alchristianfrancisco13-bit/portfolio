import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="glass" style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3rem',
        borderRadius: '20px',
        textAlign: 'center'
      }}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>Ready to start your next project?</h3>
        <p style={{color: 'var(--text-muted)', marginBottom: '2rem'}}>
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
           <a href="mailto:alchristianfrancisco13@gmail.com" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.6rem 1.2rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              alchristianfrancisco13@gmail.com
           </a>
           <a href="tel:09691104833" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.6rem 1.2rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              09691104833
           </a>
        </div>

        <form style={{display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', margin: '0 auto'}}>
          <input type="text" placeholder="Name" className="form-input" style={inputStyle} />
          <input type="email" placeholder="Email" className="form-input" style={inputStyle} />
          <textarea placeholder="Message" rows="5" className="form-input" style={inputStyle}></textarea>
          <button type="button" className="btn btn-primary" style={{marginTop: '1rem'}}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  background: 'rgba(0, 0, 0, 0.2)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  color: 'white',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border 0.3s ease'
};

export default Contact;
