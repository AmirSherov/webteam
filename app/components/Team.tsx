'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import '../styles/team.scss';

const Team = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const [animatedCards, setAnimatedCards] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimatedCards(true);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const teamMembers = [
    {
      id: 1,
      name: 'Alisher Khujanov',
      role: 'Full Stack Web engineer',
      bio: 'Специалист с богатым опытом в разработке высоконагруженных сервисов и современных веб-приложений.',
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
      bio: 'Разработчик полного цикла с опытом создания комплексных веб-решений для бизнеса и индивидуальных проектов.',
      image: '/images/Amir.jpg',
      portfolio: 'https://amirdev.uz',
      social: {
        github: 'https://github.com/AmirSherov',
        telegram: 'https://t.me/noname_tcp'
      }
    },
    {
      id: 3,
      name: 'Sobiraliyev Alijon',
      image: '/images/alijon.jpg',
      role: 'Full Stack Web Developer',
      bio: 'Талантливый разработчик с фокусом на создание современных и производительных веб-приложений.',
      social: {
        github: 'https://github.com/alik-web-develop',
        telegram: 'https://t.me/@zxcExit'
      }
    }
  ];

  return (
    <section id="team" className="team" ref={sectionRef}>
      <div className="team__bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </div>
      
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Профессионалы</span>
          <h2>Наша Команда</h2>
          <div className="title-separator">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Высококвалифицированные специалисты с многолетним опытом работы над сложными проектами</p>
        </div>
        
        <div className="team__content">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={`team-member ${animatedCards ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="member-card">
                <div className="member-image">
                  <div className="image-wrapper">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={300} 
                      height={300}
                      className="member-img"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  
                  <div className="member-social">
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a href={member.social.telegram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Telegram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </a>
                    {member.portfolio && (
                      <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Portfolio">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  
                  <div className="member-bio">
                    <p>{member.bio}</p>
                  </div>        
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="member-portfolio">
                      Портфолио
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              <div className={`member-backdrop ${activeIndex === index ? 'active' : ''}`}></div>
            </div>
          ))}
        </div>
        
        <div className="team__cta">
          <h3>Присоединяйтесь к нашей команде</h3>
          <p>Мы всегда ищем талантливых и мотивированных специалистов</p>
          <a href="#contact" className="btn btn--primary">
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team; 