import Link from 'next/link';
import '../styles/footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__bg"></div>
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <div className="logo">
              <Link href="/">
                <span className="logo-text">Web Team</span>
              </Link>
            </div>
            <p className="description">
              Команда профессиональных fullstack разработчиков,
              специализирующаяся на создании современных и 
              эффективных веб-приложений любой сложности.
            </p>
            <div className="social-links">
              <a href="https://github.com/AmirSherov" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://t.me/noname_tcp" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer__links">
            <div className="links-column">
              <h3>Навигация</h3>
              <ul>
                <li><Link href="/">Главная</Link></li>
                <li><Link href="#skills">Навыки</Link></li>
                <li><Link href="#team">Команда</Link></li>
                <li><Link href="#projects">Проекты</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="copyright">
            &copy; {currentYear} WebTeam. Все права защищены.
          </p>
          <div className="made-with">
            <span>Создано с</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ff2a75" stroke="#ff2a75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>в Узбекистане</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 