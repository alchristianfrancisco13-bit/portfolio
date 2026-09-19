import React, { useState, useEffect, useCallback } from 'react';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    title: 'Getting Started with Cisco Packet Tracer',
    event: 'Cisco Networking Academy Program',
    institution: 'Bulacan State University - Bustos Campus',
    type: 'Certificate of Completion',
    date: 'March 27, 2025',
    category: 'Networking',
    icon: '🌐',
    badge: 'Cisco Certified',
    instructor: 'Michael Angelo Agustin',
    certId: '9e34e462-60c6-40af-b76a-62a1fc13d02d',
    image: '/certificates/cert-6-cisco-packet-tracer.png',
    pdfFallback: '/certificates/cert-6-cisco-packet-tracer.pdf'
  },
  {
    id: 2,
    title: 'Fallacies of Azure AI Foundry and RAG using Azure',
    event: '2nd ASICS Summit — ReimAgIne Tomorrow',
    institution: 'Bulacan State University',
    type: 'Certificate of Participation',
    date: 'March 13, 2025',
    category: 'Cloud & AI',
    icon: '☁️',
    badge: 'Azure AI',
    image: '/certificates/cert-1-azure-ai-rag.png'
  },
  {
    id: 3,
    title: 'ReimAgIne Tomorrow: Decoding the Future of Technology through AI',
    event: '2nd ASICS Summit',
    institution: 'Bulacan State University',
    type: 'Certificate of Participation',
    date: 'March 13, 2025',
    category: 'Artificial Intelligence',
    icon: '🤖',
    badge: 'AI Summit',
    image: '/certificates/cert-5-reimagine-participation.png'
  },
  {
    id: 4,
    title: 'Machine Learning Seminar',
    event: '1st ASICS Summit — InnoVision: IT Insights for Tomorrow',
    institution: 'Bulacan State University',
    type: 'Certificate of Appearance',
    date: 'March 12, 2024',
    category: 'Machine Learning',
    icon: '🧠',
    badge: 'ML Seminar',
    image: '/certificates/cert-2-machine-learning.png'
  },
  {
    id: 5,
    title: 'Software Test Automation Seminar',
    event: '1st ASICS Summit — InnoVision: IT Insights for Tomorrow',
    institution: 'Bulacan State University',
    type: 'Certificate of Appearance',
    date: 'March 12, 2024',
    category: 'Quality Assurance',
    icon: '🧪',
    badge: 'Test Automation',
    image: '/certificates/cert-3-software-test.png'
  },
  {
    id: 6,
    title: 'Cybersecurity Seminar',
    event: '1st ASICS Summit — InnoVision: IT Insights for Tomorrow',
    institution: 'Bulacan State University',
    type: 'Certificate of Appearance',
    date: 'March 12, 2024',
    category: 'Cybersecurity',
    icon: '🛡️',
    badge: 'Cybersecurity',
    image: '/certificates/cert-4-cybersecurity.png'
  }
];

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index = 0) => {
    setActiveIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, goNext, goPrev]);

  const activeCert = certificates[activeIndex];

  return (
    <section id="certificates" className="section container">
      <div className="certificates-header-wrapper">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="certificates-subtitle">
          Verified academic and professional seminars, technical workshops, and industry credentials.
        </p>
        <div style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
          <button 
            className="btn btn-primary main-view-all-btn"
            onClick={() => openModal(0)}
          >
            <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>📜</span>
            View All Certificates ({certificates.length})
          </button>
        </div>
      </div>

      {/* Clean Dashboard List: Images are NOT displayed directly on the dashboard */}
      <div className="cert-list-grid">
        {certificates.map((cert, index) => (
          <div key={cert.id} className="cert-summary-card glass">
            <div className="cert-card-top">
              <div className="cert-badge-pill">
                <span className="cert-emoji">{cert.icon}</span>
                <span>{cert.badge}</span>
              </div>
              <span className="cert-year-tag">{cert.date.split(', ')[1] || cert.date}</span>
            </div>

            <h3 className="cert-card-heading">{cert.title}</h3>
            
            <p className="cert-card-issuer">
              <strong>{cert.event}</strong>
              <br />
              <span>{cert.institution}</span>
            </p>

            <div className="cert-card-footer">
              <span className="cert-type-label">{cert.type}</span>
              <button
                className="btn-view-cert"
                onClick={() => openModal(index)}
                aria-label={`View certificate: ${cert.title}`}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Certificate Viewer Modal: Certificates appear ONLY when button is clicked */}
      {modalOpen && (
        <div
          className="cert-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="cert-modal-content">
            {/* Modal Header */}
            <div className="cert-modal-top-bar">
              <div className="cert-modal-top-info">
                <span className="cert-modal-badge">{activeCert.badge}</span>
                <span className="cert-counter-tag">{activeIndex + 1} of {certificates.length}</span>
              </div>
              <button className="cert-modal-close" onClick={closeModal} aria-label="Close modal">
                ✕
              </button>
            </div>

            {/* Navigation Arrows */}
            {certificates.length > 1 && (
              <>
                <button className="cert-modal-nav cert-modal-prev" onClick={goPrev} aria-label="Previous certificate">
                  ‹
                </button>
                <button className="cert-modal-nav cert-modal-next" onClick={goNext} aria-label="Next certificate">
                  ›
                </button>
              </>
            )}

            {/* Certificate Display Area */}
            <div className="cert-modal-body">
              {activeCert.image.endsWith('.pdf') ? (
                <iframe
                  src={activeCert.image}
                  title={activeCert.title}
                  className="cert-modal-pdf"
                />
              ) : (
                <img
                  className="cert-modal-image"
                  src={activeCert.image}
                  alt={activeCert.title}
                  onError={(e) => {
                    if (activeCert.pdfFallback && e.target.src !== activeCert.pdfFallback) {
                      e.target.src = activeCert.pdfFallback;
                    }
                  }}
                />
              )}
            </div>

            {/* Modal Info Footer */}
            <div className="cert-modal-info">
              <div className="cert-modal-text-group">
                <p className="cert-modal-event">{activeCert.event} • {activeCert.institution}</p>
                <h3 className="cert-modal-title">{activeCert.title}</h3>
                <p className="cert-modal-meta">
                  <span>📅 {activeCert.date}</span>
                  <span>•</span>
                  <span>🏆 {activeCert.type}</span>
                  {activeCert.certId && (
                    <>
                      <span>•</span>
                      <span className="cert-id-code">ID: {activeCert.certId}</span>
                    </>
                  )}
                </p>
              </div>

              {/* Action buttons */}
              <div className="cert-modal-actions">
                <a
                  href={activeCert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline cert-external-btn"
                >
                  Open Full File ↗
                </a>
              </div>
            </div>

            {/* Quick Thumbnails / Tabs for all 6 certificates */}
            <div className="cert-modal-thumbnails">
              {certificates.map((c, i) => (
                <button
                  key={c.id}
                  className={`cert-thumb-pill ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <span>{c.icon}</span>
                  <span className="thumb-title">{c.badge}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
