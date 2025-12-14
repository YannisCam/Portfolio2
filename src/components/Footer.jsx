import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="footer-custom">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-4 col-md-6">
            <h3 className="mb-3">Yannis Camelin</h3>
            <p className="small">
              Développeur web passionné.
            </p>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h3 className="mb-3">Navigation</h3>
            <div className="d-flex flex-column gap-2">
              <a href="#accueil" className="small text-decoration-none">
                Accueil
              </a>
              <a href="#presentation" className="small text-decoration-none">
                À propos
              </a>
              <a href="#projets" className="small text-decoration-none">
                Projets
              </a>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h3 className="mb-3">Contact</h3>
            <div className="d-flex gap-3">
              <a
                href="https://linkedin.com/in/yannis-camelin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-decoration-none"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:yannis.camelin@example.com"
                className="social-icon text-decoration-none"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-top pt-4 text-center" style={{ borderColor: 'var(--navy-light) !important' }}>
          <p className="small d-flex align-items-center justify-content-center gap-2 mb-0">
            Fait par Yannis Camelin • @Copyright 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
