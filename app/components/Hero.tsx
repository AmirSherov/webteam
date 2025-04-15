'use client';
import { useState, useEffect, useRef } from 'react';
import '../styles/hero.scss';
import Link from 'next/link';
import ContactModal from './ContactModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    setIsClient(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.3;
    }
  }, []);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="hero">
      <div className="hero__background">
        {isClient && (
          <video 
            ref={videoRef}
            className="hero__video" 
            autoPlay 
            muted 
            loop 
            playsInline
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            preload="none"
            poster="/poster.jpg"
          >
            <source src="/background.mp4" type="video/mp4" />
            <source src="/videoplayback.mp4" type="video/mp4" />
          </video>
        )}
        <div className="hero__video-overlay"></div>
        <div className="hero__overlay"></div>
        <div className="hero__circles">
          <div className="circle circle--1"></div>
          <div className="circle circle--2"></div>
          <div className="circle circle--3"></div>
          <div className="circle circle--4"></div>
          <div className="circle circle--5"></div>
        </div>
        <div className="hero__grid">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="grid-line"></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className={`hero__content ${isVisible ? 'visible' : ''}`}>
          <h2 className={`hero__title ${isVisible ? 'visible' : ''}`}>
            <div className="gradient-text">Команда разработчиков</div>
            <div className="animated-text">с опытом и креативом</div>
          </h2>
          
          <p className="hero__description">
            Команда <span className="highlight">fullstack</span> разработчиков, специализирующаяся на создании 
            веб-сайтов и приложений любой сложности с использованием <span className="highlight">передовых</span> технологий
          </p>
          
          <div className="hero__cta">
            <Link href="#projects" className="btn btn--primary animated-btn">
              Наши проекты
              <span className="btn-arrow">→</span>
            </Link>
            <a href="#contact" className="btn btn--secondary pulse-effect" onClick={openModal}>
              Связаться с нами
            </a>
          </div>
          <div className="hero__tech">
            <span className="tech-label">Технологии:</span>
            <div className="tech-stack">
              <div className="tech-item tech-animate">React</div>
              <div className="tech-item tech-animate">Next.js</div>
              <div className="tech-item tech-animate">Node.js</div>
              <div className="tech-item tech-animate">TypeScript</div>
              <div className="tech-item tech-animate">PostgreSQL</div>
              <div className="tech-item tech-animate">Django</div>
              <div className="tech-item tech-animate">AWS</div>
              <div className="tech-item tech-animate">Render</div>
            </div>
          </div>
          
          <div className="hero__3d-element">
            <div className="rotating-cube">
              <div className="cube-face face-front"></div>
              <div className="cube-face face-back"></div>
              <div className="cube-face face-right"></div>
              <div className="cube-face face-left"></div>
              <div className="cube-face face-top"></div>
              <div className="cube-face face-bottom"></div>
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