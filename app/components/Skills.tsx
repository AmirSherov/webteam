import '../styles/skills.scss';

const Skills = () => {
  const services = [
    {
      id: 1,
      title: 'Веб-разработка',
      description: 'Создаем современные, быстрые и адаптивные веб-сайты с уникальным дизайном и отличной функциональностью.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Мобильные приложения',
      description: 'Разрабатываем кроссплатформенные мобильные приложения для iOS и Android с современным интерфейсом.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: 3,
      title: 'UI/UX Дизайн',
      description: 'Создаем интуитивные интерфейсы и пользовательские сценарии, которые увлекают и вовлекают пользователей.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-4v4h4v-4z"></path>
          <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Наши Услуги</h2>
          <p>Мы создаем цифровые решения, которые вдохновляют и превосходят ожидания</p>
        </div>
        
        <div className="skills__content">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="skills__banner">
          <div className="banner-content">
            <h3>Нужен невероятный сайт или приложение?</h3>
            <p>Мы готовы реализовать ваш проект любой сложности с использованием передовых технологий</p>
            <a href="#projects" className="banner-btn">Посмотреть проекты</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 