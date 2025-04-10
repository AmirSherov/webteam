import Image from 'next/image';
import Link from 'next/link';
import '../styles/projects.scss';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Сайт по баням',
      description: 'Сайт по сборке бань!',
      image: '/images/asadbasseyn.png',
      technologies: ['Django', 'Amazon Web Services', 'Render', 'PostgreSQL'],
      link: 'https://asadbasseyn.uz'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Наши Проекты</h2>
          <p>Некоторые примеры наших работ, демонстрирующие наш опыт и подход</p>
        </div>
        
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={350}
                  style={{ objectFit: 'cover' }}
                />
                <div className="project-overlay">
                  <Link href={project.link} className="view-project">
                    Посмотреть проект
                  </Link>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects__cta">
          <Link href="#" className="btn btn--primary">
            Начать проект с нами
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 