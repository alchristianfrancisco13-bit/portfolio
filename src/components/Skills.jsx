import React from 'react';

const Skills = () => {
  const skills = [
    { 
      name: 'HTML5', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      fallback: 'https://cdn.simpleicons.org/html5/E34F26' 
    },
    { 
      name: 'CSS3', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      fallback: 'https://cdn.simpleicons.org/css/1572B6' 
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      fallback: 'https://cdn.simpleicons.org/javascript/F7DF1E' 
    },
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      fallback: 'https://cdn.simpleicons.org/python/3776AB' 
    },
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      fallback: 'https://cdn.simpleicons.org/react/61DAFB' 
    },
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      fallback: 'https://cdn.simpleicons.org/nodedotjs/339933' 
    },
    { 
      name: 'Tailwind', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      fallback: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' 
    },
    { 
      name: 'Java', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      fallback: 'https://cdn.simpleicons.org/openjdk/ED8B00' 
    },
    { 
      name: 'PHP', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      fallback: 'https://cdn.simpleicons.org/php/777BB4' 
    },
    { 
      name: 'SQL', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      fallback: 'https://cdn.simpleicons.org/mysql/4479A1' 
    },
    { 
      name: 'Cisco', 
      icon: 'https://cdn.simpleicons.org/cisco/1BA0D7',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' 
    },
    { 
      name: 'Unity', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
      fallback: 'https://cdn.simpleicons.org/unity/white' 
    },
    { 
      name: 'Android Studio', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
      fallback: 'https://cdn.simpleicons.org/androidstudio/3DDC84' 
    },
    {
      name: 'Vibe Coding',
      icon: 'https://cdn.simpleicons.org/lightning/F7DF1E',
      fallback: 'https://cdn.simpleicons.org/openai/10A37F'
    }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Technical Skills & Focus</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '-1.5rem', marginBottom: '2.5rem', fontSize: '1rem' }}>
        Specializing in modern <strong style={{ color: 'var(--primary)' }}>Front-End Development</strong>, responsive UI systems, and agile <strong style={{ color: 'var(--secondary)' }}>Vibe Coding</strong> workflows.
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
        marginTop: '1rem'
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
            cursor: 'default',
            padding: '10px'
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
              loading="lazy"
              onError={(e) => {
                if (skill.fallback && e.target.src !== skill.fallback) {
                  e.target.src = skill.fallback;
                }
              }}
              style={{ width: '48px', height: '48px', marginBottom: '0.75rem', objectFit: 'contain' }} 
            />
            <span style={{ fontWeight: '500', fontSize: '0.85rem', color: 'var(--text-main)', textAlign: 'center' }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
