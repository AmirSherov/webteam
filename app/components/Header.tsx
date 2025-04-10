import Link from 'next/link';
import '../styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <Link href="/">
              <span className="logo-text">Web Team</span>
            </Link>
          </div>
          
          <nav className="header__nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/" className="nav-link">Главная</Link>
              </li>
              <li className="nav-item">
                <Link href="#about" className="nav-link">О нас</Link>
              </li>
              <li className="nav-item">
                <Link href="#team" className="nav-link">Команда</Link>
              </li>
              <li className="nav-item">
                <Link href="#skills" className="nav-link">Навыки</Link>
              </li>
              <li className="nav-item">
                <Link href="#projects" className="nav-link">Проекты</Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 