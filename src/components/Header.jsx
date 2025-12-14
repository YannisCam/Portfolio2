import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand fw-semibold" href="#accueil" style={{ color: 'var(--accent-blue)' }}>
          YC
        </a>
        
        <button 
          className="navbar-toggler border-0" 
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#accueil" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#presentation" onClick={() => setIsMenuOpen(false)}>
                À propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projets" onClick={() => setIsMenuOpen(false)}>
                Projets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
