import Image from 'next/image';
import '../styles/team.scss';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alisher Khujanov',
      role: 'Full Stack Web engineer',
      image: '/images/Alisher.png',
      portfolio: 'https://github.com/AlisherXujanov',
      social: {
        github: 'https://github.com/AlisherXujanov',
        telegram: 'https://t.me/Alisher_Khujanov'
      }
    },
    {
      id: 2,
      name: 'Amir Sherov',
      role: 'Full Stack Web Developer',
      image: '/images/Amir.png',
      portfolio: 'https://amirdev.uz',
      social: {
        github: 'https://github.com/AmirSherov',
        telegram: 'https://t.me/noname_tcp'
      }
    },
    {
      id: 3,
      name: 'Sobiraliyev Alijon Azimovich',
      image: '/images/alijon.png',
      role: 'Full Stack Web Developer',
      social: {
        github: 'https://github.com/alik-web-develop',
        telegram: 'https://t.me/@zxcExit'
      }
    },
    {
      id: 4,
      name: 'Azim',
      image: '/images/alijon.jpg',
      role: 'Full Stack Web Developer',
      portfolio: 'https://azimont.uz',
      social: {
        github: 'https://github.com/azim0nt',
        telegram: 'https://t.me/@azim0nt'
      }
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h2>Наша Команда</h2>
          <p>Профессионалы с многолетним опытом работы над сложными проектами</p>
        </div>
        
        <div className="team__content">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="member-image">
                <div className="image-container">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={300} 
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <div className="member-social">
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href={member.social.telegram} target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </a>
                  {member.portfolio && (
                <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="member-portfolio">
                  <p 
                  >Подробнее</p>
                </a>
               )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 