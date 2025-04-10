'use client';
import { useState } from 'react';
import '../styles/hero.scss';
import Link from 'next/link';
import ContactModal from './ContactModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>
        <div className="hero__circles">
          <div className="circle circle--1"></div>
          <div className="circle circle--2"></div>
          <div className="circle circle--3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            Мы создаем <span className="gradient-text">современные</span> цифровые решения
          </h1>
          
          <p className="hero__description">
            Команда fullstack разработчиков, специализирующаяся на создании веб-сайтов и приложений любой сложности с использованием передовых технологий
          </p>
          
          <div className="hero__cta">
            <Link href="#projects" className="btn btn--primary">
              Наши проекты
            </Link>
            <a href="#contact" className="btn btn--secondary" onClick={openModal}>
              Связаться с нами
            </a>
          </div>
          <div className="hero__tech">
            <span className="tech-label">Технологии:</span>
            <div className="tech-stack">
              <div className="tech-item">React</div>
              <div className="tech-item">Next.js</div>
              <div className="tech-item">Node.js</div>
              <div className="tech-item">TypeScript</div>
              <div className="tech-item">PostgreSQL</div>
              <div className="tech-item">Django</div>
              <div className="tech-item">AWS</div>
              <div className="tech-item">Render</div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Hero; 