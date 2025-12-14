import { ArrowLeft, Calendar, Users, Code, Figma, ExternalLink, Github } from 'lucide-react';

export default function ProjectDetail({ project, onBack }) {
  if (!project) return null;

  return (
    <div className="min-vh-100">
      <section className="about-section">
        <div className="container">
                <div className="container py-4">
        <button 
          onClick={onBack}
          className="btn btn-custom d-inline-flex align-items-center gap-2 mb-4"
        >
          <ArrowLeft size={20} />
          Retour aux projets
        </button>
      </div>

          <h1 className="mb-5 text-center">{project.title}</h1>
          
          <div className="row g-5 align-items-stretch">
            {/* Image principale */}
            <div className="col-lg-7 d-flex">
              <div className="detail-img-frame position-relative w-100 rounded-3 shadow-lg overflow-hidden">
                <div 
                  className="detail-img-overlay position-absolute rounded rounded-3"
                  style={{
                    background: project.gradient
                  }}
                ></div>
                <img
                  src={project.detailImage}
                  alt={project.title}
                  className="detail-img rounded-3 position-relative shadow-lg"
                />
              </div>
            </div>

            {/* Informations du projet */}
            <div className="col-lg-5 d-flex flex-column">
              <div className="feature-card mb-4 text-start">
                <div className="d-flex align-items-start gap-3 mb-3">
                  <Calendar className="feature-icon flex-shrink-0" size={24} />
                  <div>
                    <h3 className="h6 mb-2">Date</h3>
                    <p className="mb-0 small">{project.date}</p>
                  </div>
                </div>
              </div>

              <div className="feature-card mb-4 text-start">
                <div className="d-flex align-items-start gap-3 mb-3">
                  <Users className="feature-icon flex-shrink-0" size={24} />
                  <div>
                    <h3 className="h6 mb-2">Collaborateurs</h3>
                    <ul className="mb-0 ps-3">
                      {project.collaborateurs.map((collab, index) => (
                        <li key={index} className="small mb-1">{collab}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="feature-card text-start">
                <div className="d-flex align-items-start gap-3">
                  <Code className="feature-icon flex-shrink-0" size={24} />
                  <div className="w-100">
                    <h3 className="h6 mb-3">Compétences</h3>
                    <div className="d-flex flex-wrap gap-2">
                      {project.competences.map((skill, index) => (
                        <span key={index} className="tech-badge">
                          {skill}
                        </span>
                      ))}
                    </div>

                  
                  </div>
                </div>
              </div>
              {/* Boutons Figma & Site */}
                    <div className="d-flex gap-3 mt-4">
                      <a
                        href={project?.codeUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-custom d-inline-flex align-items-center gap-2"
                        onClick={(e) => { if (!project?.codeUrl) e.preventDefault(); }}
                      >
                        <Github size={18} />
                        <span className="small">Code</span>
                      </a>
                      <a
                        href={project?.designUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-custom d-inline-flex align-items-center gap-2"
                        onClick={(e) => { if (!project?.designUrl) e.preventDefault(); }}
                      >
                        <Figma size={18} />
                        <span className="small">Figma</span>
                      </a>
                      <a
                        href={project?.demoUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-custom d-inline-flex align-items-center gap-2"
                        onClick={(e) => { if (!(project?.demoUrl)) e.preventDefault(); }}
                      >
                        <ExternalLink size={18} />
                        <span className="small">Site Web</span>
                      </a>
                    </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section détails du projet */}
      <section className="projects-section">
        <div className="container">
          <div className="row g-5">
            {/* Contexte */}
            <div className="col-12">
              <div className="project-card p-4">
                <h2 className="h3 mb-3">Contexte</h2>
                <p className="mb-0">{project.contexte}</p>
              </div>
            </div>

            {/* Objectifs */}
            <div className="col-lg-6">
              <div className="project-card p-4 h-100">
                <h2 className="h3 mb-4">Objectifs</h2>
                <ul className="mb-0">
                  {project.objectifs.map((objectif, index) => (
                    <li key={index} className="mb-3">
                      <p className="mb-0">{objectif}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Livrables */}
            <div className="col-lg-6">
              <div className="project-card p-4 h-100">
                <h2 className="h3 mb-4">Livrables</h2>
                <ul className="mb-0">
                  {project.livrables.map((livrable, index) => (
                    <li key={index} className="mb-3">
                      <p className="mb-0">{livrable}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Défis */}
            <div className="col-lg-6">
              <div className="project-card p-4 h-100">
                <h2 className="h3 mb-4">Défis rencontrés</h2>
                <p className="mb-0">{project.defis}</p>
              </div>
            </div>

            {/* Résultats */}
            <div className="col-lg-6">
              <div className="project-card p-4 h-100">
                <h2 className="h3 mb-4">Résultats</h2>
                <p className="mb-0">{project.resultats}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
