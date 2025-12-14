import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="accueil" className="hero-section position-relative overflow-hidden">
      {/* Particules animées */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}></div>
        ))}
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <span className="gradient-text">
                <TypeAnimation
                  sequence={[
                    'Yannis Camelin',
                  ]}
                  wrapper="span"
                  speed={150}
                  repeat={0}
                  cursor={false}
                />
              </span>
            </h1>
            
            <p className="lead mx-auto mb-5" style={{ maxWidth: '700px' }} data-aos="fade-up" data-aos-delay="400">
              Passionné par le développement back-end, rigoureux et perfectionniste.
            </p>
            
            <div data-aos="fade-up" data-aos-delay="600">
              <a href="#presentation" className="btn btn-custom d-inline-flex align-items-center gap-2">
                Découvrir mon profil
                <ArrowDown size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
