import React, { useState, useEffect, useCallback } from 'react';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    title: 'Fallacies of Azure AI Foundry and RAG using Azure',
    event: '2nd ASICS Summit — ReimAgIne Tomorrow',
    type: 'Certificate of Participation',
    date: 'March 13, 2025',
    institution: 'Bulacan State University',
    image: '/certificates/cert-1-azure-ai-rag.png'
  },
  {
    id: 2,
    title: 'Machine Learning Seminar',
    event: '1st ASICS Summit — InnoVision: IT Insights for Tomorrow',
    type: 'Certificate of Appearance',
    date: 'March 12, 2024',
    institution: 'Bulacan State University',
    image: '/certificates/cert-2-machine-learning.png'
  },
  {
    id: 3,
    title: 'Software Test Automation Seminar',
    event: '1st ASICS Summit — InnoVision: IT Insights for Tomorrow',
    type: 'Certificate of Appearance',
    date: 'March 12, 2024',
    institution: 'Bulacan State University',
    image: '/certificates/cert-3-software-test.png'
  },
  {
    id: 4,
    title: 'Cybersecurity Seminar',
    event: '1st ASICS Summit — InnoVision: IT Insights for Tomorrow',
    type: 'Certificate of Appearance',
    date: 'March 12, 2024',
    institution: 'Bulacan State University',
    image: '/certificates/cert-4-cybersecurity.png'
  },
  {
    id: 5,
    title: 'ReimAgIne Tomorrow: Decoding the Future of Technology through AI',
    event: '2nd ASICS Summit',
    type: 'Certificate of Participation',
    date: 'March 13, 2025',
    institution: 'Bulacan State University',
    image: '/certificates/cert-5-reimagine-participation.png'
  }
];

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
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
      <h2 className="section-title">Certificates</h2>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={cert.id} className="cert-card glass">
            <div className="cert-image-wrapper">
              <img src={cert.image} alt={cert.title} loading="lazy" />
              <div className="cert-overlay">
                <button
                  className="cert-view-btn"
                  onClick={() => openModal(index)}
                  aria-label={`View certificate: ${cert.title}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View Certificate
                </button>
              </div>
            </div>
            <div className="cert-info">
              <p className="cert-event">{cert.event}</p>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-date">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {cert.date} • {cert.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {modalOpen && (
        <div
          className="cert-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="cert-modal-content">
            <button className="cert-modal-close" onClick={closeModal} aria-label="Close modal">
              ✕
            </button>

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

            <img
              className="cert-modal-image"
              src={activeCert.image}
              alt={activeCert.title}
            />

            <div className="cert-modal-info">
              <p className="cert-modal-event">{activeCert.event}</p>
              <h3 className="cert-modal-title">{activeCert.title}</h3>
              <p className="cert-modal-date">{activeCert.date} • {activeCert.type} • {activeCert.institution}</p>
            </div>

            <div className="cert-counter">
              {activeIndex + 1} / {certificates.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
