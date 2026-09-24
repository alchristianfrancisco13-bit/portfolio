import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Certificates.css';

const certificates = [
  {
    id: 8,
    title: 'Orientation on the Student Internship Program',
    event: 'Student Internship Program Orientation (CARDSIS)',
    institution: 'Bulacan State University - Main Campus',
    type: 'Certificate of Participation',
    date: 'September 24, 2026',
    category: 'Internship',
    icon: '🎓',
    badge: 'SIP Orientation',
    instructor: 'Ramon M. Lazaro, MAEd & Joseph Roy F. Celestino',
    image: '/certificates/cert-8-internship-orientation.pdf',
    pdfFallback: '/certificates/cert-8-internship-orientation.pdf'
  },
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
    image: '/certificates/cert-6-cisco-packet-tracer.pdf',
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
    title: 'BulSU TECHKNOWS: Data Analytics',
    event: 'BulSU TECHKNOWS in partnership with Accenture Inc.',
    institution: 'Bulacan State University & Accenture Inc.',
    type: 'Certificate of Participation',
    date: 'October 3, 2024',
    category: 'Data Analytics',
    icon: '📊',
    badge: 'Accenture',
    instructor: 'Florraine Fernandez-Ilanan',
    image: '/certificates/cert-7-accenture-data-analytics.png'
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
  const [imgError, setImgError] = useState(false);
  const [canvasRendered, setCanvasRendered] = useState(false);
  const canvasRef = useRef(null);

  const openModal = (index = 0) => {
    setActiveIndex(index);
    setImgError(false);
    setCanvasRendered(false);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setImgError(false);
    setCanvasRendered(false);
    document.body.style.overflow = '';
  };

  const goNext = useCallback(() => {
    setImgError(false);
    setCanvasRendered(false);
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  }, []);

  const goPrev = useCallback(() => {
    setImgError(false);
    setCanvasRendered(false);
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  }, []);

  useEffect(() => {
    setImgError(false);
    setCanvasRendered(false);

    const active = certificates[activeIndex];
    const isPdf = active.image.endsWith('.pdf') || active.pdfFallback;

    if (isPdf && modalOpen && window.pdfjsLib) {
      const pdfUrl = active.image.endsWith('.pdf') ? active.image : active.pdfFallback;
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

      window.pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
        pdf.getPage(1).then(page => {
          const canvas = canvasRef.current;
          if (!canvas) return;
          const viewport = page.getViewport({ scale: 2.0 });
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const ctx = canvas.getContext('2d');
          page.render({ canvasContext: ctx, viewport }).promise.then(() => {
            setCanvasRendered(true);
          });
        });
      }).catch(err => {
        console.error('PDF.js render error:', err);
      });
    }
  }, [activeIndex, modalOpen]);

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
      <div className="section-header-center">
        <span className="section-tag">Credentials</span>
        <h2 className="section-title">
          Certifications & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="section-subtitle">
          Verified industry credentials, technical seminars, and academic summit participation. Click any button to inspect the official document.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <button 
            className="btn btn-primary main-view-all-btn"
            onClick={() => openModal(0)}
          >
            <span style={{ fontSize: '1.1rem', marginRight: '6px' }}>📜</span>
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
                <>
                  <canvas
                    ref={canvasRef}
                    className="cert-modal-image"
                    style={{
                      display: canvasRendered ? 'block' : 'none',
                      maxWidth: '100%',
                      maxHeight: '60vh',
                      objectFit: 'contain'
                    }}
                  />
                  {!canvasRendered && (
                    <iframe
                      src={`${activeCert.image}#toolbar=0`}
                      title={activeCert.title}
                      className="cert-modal-pdf"
                    />
                  )}
                </>
              ) : (
                <img
                  className="cert-modal-image"
                  src={activeCert.image}
                  alt={activeCert.title}
                  onError={() => {
                    if (activeCert.pdfFallback) {
                      setImgError(true);
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
                  href={activeCert.pdfFallback || activeCert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline cert-external-btn"
                >
                  Open Full File ↗
                </a>
              </div>
            </div>

            {/* Quick Thumbnails / Tabs for all certificates */}
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
