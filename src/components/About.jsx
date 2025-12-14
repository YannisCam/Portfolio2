import { Database, Smartphone, Palette } from 'lucide-react';

export default function About() {
  const profileImage = `${import.meta.env.BASE_URL}img/yannis_photo.jpg`;

  return (
    <section id="presentation" className="about-section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="mb-3">Présentation</h2>
          <div className="divider"></div>
        </div>

        <div className="row align-items-center g-7">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="profile-img-wrapper">
              <div className="profile-img-bg w-75"></div>
              <img
                src={profileImage}
                alt="Yannis Camelin"
                className="profile-img w-75"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <p className="mb-4">
              Je m'appelle <strong>Yannis Camelin</strong>, j'ai 21 ans. Développeur web passionné, 
              je m'oriente surtout vers le back-end : <strong>API</strong> et <strong>bases de données</strong>.
            </p>
            <p className="mb-5">
              Je suis <strong>rigoureux</strong> et <strong>sérieux</strong> dans ce que j'entreprends. 
              J'aime travailler sous pression et je déteste rendre en retard ou livrer un projet bâclé.
            </p>

            <h4 className="mb-4">Mes compétences principales</h4>

            <div className="row g-3">
              <div className="col-md-4 col-sm-6">
                <div className="feature-card h-100">
                  <Database className="feature-icon" size={40} />
                  <p className="mb-0 mt-2 small">API & Base de données</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="feature-card h-100">
                  <Smartphone className="feature-icon" size={40} />
                  <p className="mb-0 mt-2 small">React & Angular</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="feature-card h-100">
                  <Palette className="feature-icon" size={40} />
                  <p className="mb-0 mt-2 small">Figma</p>
                </div>
              </div>
            </div>

            {/* Bouton CV */}
            <div className="mt-4" data-aos="fade-up">
              <a 
                href="https://www.canva.com/design/DAGsUenrvKU/r72l0JSo5496hljhl-kH0Q/edit?utm_content=DAGsUenrvKU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-custom d-inline-flex align-items-center gap-2"
              >
                Voir mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
