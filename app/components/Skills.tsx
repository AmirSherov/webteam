'use client';
import { useState, useRef, ReactNode } from 'react';
import '../styles/skills.scss';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
}

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  
  const toggleCard = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const services: Service[] = [
    {
      id: 1,
      title: 'Веб-разработка',
      description: 'Создаем современные, быстрые и адаптивные веб-сайты с уникальным дизайном и отличной функциональностью.',
      features: ['Адаптивный дизайн', 'Высокая производительность', 'SEO-оптимизация', 'Современные технологии'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Мобильные приложения',
      description: 'Разрабатываем кроссплатформенные мобильные приложения для iOS и Android с современным интерфейсом.',
      features: ['React Native / Flutter', 'Нативная производительность', 'Интуитивный UX', 'Оффлайн режим'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: 3,
      title: 'UI/UX Дизайн',
      description: 'Создаем интуитивные интерфейсы и пользовательские сценарии, которые увлекают и вовлекают пользователей.',
      features: ['Прототипирование', 'Пользовательское тестирование', 'Анимации и микровзаимодействия', 'Согласованный дизайн'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
          <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Fullstack решения',
      description: 'Разрабатываем комплексные веб-приложения с мощным бэкендом и интерактивным фронтендом.',
      features: ['API разработка', 'Оптимизация баз данных', 'Облачная инфраструктура', 'Масштабируемость'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <path d="M18 10h-4v4h4v-4z"></path>
          <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills__bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="skills__grid">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="grid-line"></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Что мы предлагаем</span>
          <h2>Наши Услуги</h2>
          <div className="title-separator">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Мы создаем цифровые решения, которые вдохновляют и превосходят ожидания</p>
        </div>
        
        <div className="skills__content">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="service-card__front">
                <div className="service-icon">
                  {service.icon}
                  <div className="icon-bg"></div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-more">
                  <span>Узнать больше</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
              
              <div className="service-card__back">
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-action">
                  <button className="service-action-btn">
                    Заказать услугу
                  </button>
                </div>
                <div className="back-to-front">
                  <span>Вернуться</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills__banner">
          <div className="banner-bg"></div>
          <div className="banner-content">
            <h3>Нужен невероятный сайт или приложение?</h3>
            <p>Мы готовы реализовать ваш проект любой сложности с использованием передовых технологий</p>
            <div className="banner-actions">
              <a href="#projects" className="banner-btn">Посмотреть проекты</a>
              <a href="#contact" className="banner-link">
                Связаться с нами
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 