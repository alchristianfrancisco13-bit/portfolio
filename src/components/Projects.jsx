import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SkyClash Game',
      desc: 'A game development project featuring dynamic mechanics and an engaging website.',
      tags: ['Unity', 'Game Dev'],
      link: 'https://skyclash-website.vercel.app/',
      img: '/skyclash.png'
    },
    {
      id: 2,
      title: 'Web Final Project',
      desc: 'A comprehensive web application demonstrating frontend and backend development skills.',
      tags: ['Web App', 'React', 'Node.js'],
      link: 'https://final-proj-ed41d.web.app',
      img: '/webapp.png'
    },
    {
      id: 3,
      title: 'Student E-HandBook',
      desc: 'An Android handbook application designed for students to easily access school resources.',
      tags: ['Android Studio', 'Java'],
      link: 'https://github.com/alchristianfrancisco13-bit/Student-E-HandBook.git',
      img: '/studentapp.png'
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="grid grid-3">
        {projects.map(project => (
          <div key={project.id} className="project-card glass">
            <div className="project-img" style={{ borderBottom: '1px solid var(--border)' }}>
               <img 
                 src={project.img} 
                 alt={project.title} 
                 style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} 
               />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="btn btn-outline" style={{marginTop: '1rem', display: 'block', textAlign: 'center'}}>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
