'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import '../styles/projects.scss';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [animateCards, setAnimateCards] = useState(false);
  const sectionRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: 'Asad Bassseny',
      description: 'Сайт по сборке бань с современным дизайном и удобной навигацией для лучшего пользовательского опыта.',
      image: '/images/asadbasseyn.png',
      technologies: ['Django', 'Amazon Web Services', 'Render', 'PostgreSQL'],
      link: 'https://asadbasseyn.uz',
      category: 'web'
    },
    {
      id: 2,
      title: 'Grow Fast Grow Deep',
      description: 'Интерактивная платформа для изучения английского и турецкого языка с адаптивным AI-обучением.',
      image: '/images/growfast.png',
      technologies: ['Django', 'DRF', 'GCP', 'Nuxt.js', 'AI', 'Data Science', 'PWD', 'TWD', 'Pyhton'],
      link: 'https://www.growfastgrowdeep.com/en/splash',
      category: 'education'
    },
    {
      id: 3,
      title: 'Web Time Tracker',
      description: 'Современное решение для управления временем и задачами с аналитикой и интеграцией с популярными сервисами.',
      image: '/images/webtracker.png',
      technologies: ['Django', 'DRF', 'GCP', 'Nuxt.js', 'AI', 'Data Science', 'PWD', 'TWD', 'Pyhton'],
      link: 'https://www.webwork-tracker.com/',
      category: 'saas'
    },
    {
      id: 4,
      title: 'Asad Basseyn Company',
      description: 'Корпоративный сайт для компании по строительству бань с онлайн-конфигуратором и заказом услуг.',
      image: '/images/asadcompany.png',
      technologies: ['Django', 'Amazon Web Services', 'Render', 'PostgreSQL'],
      link: 'https://asadqr.netlify.app',
      category: 'web'
    }
  ];
  
  const filters = [
    { value: 'all', label: 'Все проекты' },
    { value: 'web', label: 'Веб-сайты' },
    { value: 'education', label: 'Образование' },
    { value: 'saas', label: 'SaaS' }
  ];
  
  useEffect(() => {
    setAnimateCards(true);
    
    // Intersection Observer для анимации при скролле
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimateCards(true);
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
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === activeFilter);
      setVisibleProjects(filtered);
    }
    
    // Сбрасываем анимацию при смене фильтра и запускаем её снова
    setAnimateCards(false);
    setTimeout(() => setAnimateCards(true), 50);
  }, [activeFilter]);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects__bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </div>
      
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Наши работы</span>
          <h2>Наши Проекты</h2>
          <div className="title-separator">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Некоторые примеры наших работ, демонстрирующие наш опыт и подход к созданию цифровых решений</p>
        </div>
        
        <div className="projects__filters">
          {filters.map((filter) => (
            <button 
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
              {activeFilter === filter.value && <span className="active-indicator"></span>}
            </button>
          ))}
        </div>
        
        <div className="projects__grid">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${animateCards ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={600}
                  className="project-img"
                />
                <div className="project-overlay">
                  <Link href={project.link} className="view-project" target="_blank" rel="noopener noreferrer">
                    <span>Посмотреть проект</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge more-badge">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects__cta">
          <div className="cta-content">
            <h3>Готовы обсудить ваш проект?</h3>
            <p>Мы поможем воплотить вашу идею в жизнь с использованием самых современных технологий</p>
            <Link href="#contact" className="btn btn--primary">
              Начать проект с нами
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 