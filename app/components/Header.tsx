'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../styles/header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <Link href="/">
              <div className="logo">
                <span className="logo-bracket">{`{`}</span>
                <span className="logo-text">Web<span className="logo-highlight">Team</span></span>
                <span className="logo-bracket">{`}`}</span>
              </div>
            </Link>
          </div>
          
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'is-active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`header__nav ${isMobileMenuOpen ? 'is-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  <span className="nav-text">Главная</span>
                  <span className="nav-hover-effect"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about" className="nav-link">
                  <span className="nav-text">О нас</span>
                  <span className="nav-hover-effect"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#team" className="nav-link">
                  <span className="nav-text">Команда</span>
                  <span className="nav-hover-effect"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#skills" className="nav-link">
                  <span className="nav-text">Навыки</span>
                  <span className="nav-hover-effect"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#projects" className="nav-link">
                  <span className="nav-text">Проекты</span>
                  <span className="nav-hover-effect"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link contact-link">
                  <span className="nav-text">Связаться</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 