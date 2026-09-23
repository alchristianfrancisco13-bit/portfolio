import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'iManage SDO',
      subtitle: 'Schools Division Office Management System',
      desc: 'A web-based document and management system designed for the Schools Division Office (SDO) to optimize administrative operations, records handling, and departmental coordination.',
      tags: ['Capstone Project', 'React', 'Vercel', 'SDO System', 'TailwindCSS'],
      category: 'Capstone Project',
      badge: '🟢 Live on Vercel',
      link: 'https://imanage-sdo.vercel.app/',
      github: 'https://github.com/alchristianfrancisco13-bit',
      img: '/imanage.png'
    },
    {
      id: 2,
      title: 'StayHub Web Application',
      subtitle: 'Accommodation & Property Management Platform',
      desc: 'A full-featured responsive web application for property accommodations, built with modular front-end architecture and deployed on Firebase Hosting with real-time database connectivity.',
      tags: ['React', 'Firebase', 'Web App', 'Responsive UI'],
      category: 'Web Application',
      badge: '🟢 Live on Firebase',
      link: 'https://final-proj-ed41d.web.app',
      github: 'https://github.com/alchristianfrancisco13-bit',
      img: '/webapp.png'
    },
    {
      id: 3,
      title: 'SKYCLASH: Arena of Legends',
      subtitle: '2D Action Game & Web Showcase',
      desc: 'An action-packed 2D game built with Unity & C# featuring dynamic combat, character abilities, enemy AI, and an immersive web portal showcase for characters and gameplay stages.',
      tags: ['Unity', 'C#', 'Game Dev', 'Vercel'],
      category: 'Game & Web Portal',
      badge: '🎮 2D Action Game',
      link: 'https://skyclash-website.vercel.app/',
      github: 'https://github.com/alchristianfrancisco13-bit',
      img: '/skyclash.png'
    },
    {
      id: 4,
      title: 'Student E-Handbook',
      subtitle: 'BulSU Bustos Official Mobile App & Web Showcase',
      desc: 'An official university mobile application and responsive web showcase for BulSU Bustos Campus students — providing instant offline and online access to academic guidelines, campus policies, and APK downloads.',
      tags: ['Android Studio', 'Java', 'Web Portal', 'Vercel'],
      category: 'Mobile App & Web Portal',
      badge: '📱 Android & Web',
      link: 'https://e-handbook-website.vercel.app/',
      github: 'https://github.com/alchristianfrancisco13-bit/Student-E-HandBook.git',
      img: '/studentapp.png?v=2'
    }
  ];

  return (
    <section id="projects" className="section container">
      <div className="section-header-center">
        <span className="section-tag">Portfolio Showcase</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects & Work</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications spanning academic capstone systems, interactive game design, and native mobile software.
        </p>
      </div>

      <div className="modern-projects-grid">
        {projects.map(project => (
          <div key={project.id} className="modern-project-card glass">
            {/* Image Preview with Hover Glow */}
            <div className="project-thumbnail-wrapper">
              <img 
                src={project.img} 
                alt={project.title} 
                className="project-thumb-img"
                loading="lazy"
                onError={(e) => {
                  if (project.fallbackImg && e.target.src !== project.fallbackImg) {
                    e.target.src = project.fallbackImg;
                  }
                }}
              />
              <div className="project-thumb-overlay">
                <span className="project-category-badge">{project.badge}</span>
              </div>
            </div>

            {/* Content */}
            <div className="modern-project-body">
              <div className="project-header-info">
                <span className="project-cat-label">{project.category}</span>
                <h3 className="project-main-title">{project.title}</h3>
                <p className="project-sub-title">{project.subtitle}</p>
              </div>

              <p className="project-main-desc">{project.desc}</p>

              {/* Tech Tags */}
              <div className="project-tech-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tech-tag">{tag}</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions-row">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary btn-sm"
                >
                  <span>Launch Live</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>

                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-outline btn-sm"
                  aria-label={`GitHub repo for ${project.title}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
