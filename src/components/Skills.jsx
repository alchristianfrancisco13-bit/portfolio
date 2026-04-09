import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'Unity', icon: 'https://cdn.simpleicons.org/unity/white' },
    { name: 'Android Studio', icon: 'https://cdn.simpleicons.org/androidstudio/3DDC84' }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Technical Skills</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-card glass" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            borderRadius: '20px',
            transition: 'var(--transition)',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(16, 185, 129, 0.2)';
            e.currentTarget.style.borderColor = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}>
            <img 
              src={skill.icon} 
              alt={`${skill.name} icon`} 
              style={{ width: '50px', height: '50px', marginBottom: '1rem', objectFit: 'contain' }} 
            />
            <span style={{ fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-main)' }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
