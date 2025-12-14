import { ExternalLink, Github, Paintbrush } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export function Projects({ onProjectClick }) {
  return (
    <section id="projets" className="projects-section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="mb-3">Mes Projets</h2>
          <div className="divider"></div>
          <p className="mt-4 mx-auto" style={{ maxWidth: '700px' }}>
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        <div className="row g-4">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div 
                className="project-card"
                onClick={() => onProjectClick(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-img-wrapper">
                  <div 
                    className="project-overlay" 
                    style={{ background: project.gradient }}
                  ></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="small mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="d-flex gap-3">
                    <a
                      href={project?.codeUrl || '#'}
                      onClick={(e) => e.stopPropagation()}
                      className="d-flex align-items-center gap-2 text-decoration-none"
                      style={{ color: 'var(--accent-blue)' }}
                    >
                      <Github size={18} />
                      <span className="small">Code</span>
                    </a>
                    <a
                      href={project?.demoUrl || '#'}
                      onClick={(e) => e.stopPropagation()}
                      className="d-flex align-items-center gap-2 text-decoration-none"
                      style={{ color: 'var(--accent-blue)' }}
                    >
                      <ExternalLink size={18} />
                      <span className="small">Démo</span>
                    </a>
                    <a
                      href={project?.designUrl || '#'}
                      onClick={(e) => e.stopPropagation()}
                      className="d-flex align-items-center gap-2 text-decoration-none"
                      style={{ color: 'var(--accent-blue)' }}
                    >
                      <Paintbrush size={18} />
                      <span className="small">Figma</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}