import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const stack = ['React', 'CodeIgniter 4', 'Laravel', 'PHP', 'MySQL', 'REST APIs'];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#04080f]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col-reverse lg:flex-row items-center gap-16 w-full">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Disponible para proyectos
            </span>
          </div>

          <h1 className="animate-fade-in-up text-white font-extrabold tracking-tight mb-4">
            <span className="block text-[var(--text-secondary)] text-xl font-medium mb-1">Hola, soy</span>
            <span className="text-5xl sm:text-6xl lg:text-7xl leading-none">FullStack</span>
            <br />
            <span className="text-5xl sm:text-6xl lg:text-7xl leading-none text-gradient">Developer</span>
          </h1>

          <p className="animate-fade-in-up-delay-1 text-[var(--text-secondary)] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            Más de 2 años construyendo aplicaciones escalables. Especializado en
            React, CodeIgniter 4 y APIs REST. Integro IA y agentes de desarrollo
            para entregar soluciones completas más rápido.
          </p>

          {/* Stack pills */}
          <div className="animate-fade-in-up-delay-2 flex flex-wrap gap-2 justify-center lg:justify-start mb-10">
            {stack.map((tech) => (
              <span key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-surface border border-border text-[var(--text-secondary)] hover:border-accent hover:text-accent transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link to="/proyectos" className="btn-primary">
              Ver proyectos
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
            <a href="#contact" className="btn-ghost">
              <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
              Contactar
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-none flex justify-center animate-fade-in">
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary to-accent opacity-30 blur-lg" />
            {/* Ring border */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-[3px] bg-gradient-to-tr from-primary-light via-accent to-primary">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface">
                {/* Cambia el src por tu foto */}
                <img
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop"
                  alt="Desarrollador"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white text-xs font-medium">FullStack Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-secondary)] animate-pulse">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[var(--text-secondary)]" />
        <span className="text-xs">scroll</span>
      </div>
    </section>
  );
}
