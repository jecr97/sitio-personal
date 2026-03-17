import { Link } from 'react-router-dom';
import projects from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  return (
    <section className="section-padding bg-surface border-b border-border" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-accent text-xs font-medium mb-4">
              Proyectos
            </span>
            <h2 className="section-title">Proyectos Recientes</h2>
          </div>
          <Link to="/proyectos"
            className="text-sm text-[var(--text-secondary)] hover:text-accent transition-colors flex items-center gap-1 group shrink-0">
            Ver todos
            <FontAwesomeIcon icon={faArrowRight} className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((p) => (
            <Link key={p.id} to={`/proyectos/${p.id}`}
              className="group card overflow-hidden flex flex-col hover:shadow-card-hover transition-all duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-surface-2">
                {p.img ? (
                  <>
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                    <span className="text-4xl text-white/20 font-bold">{p.title.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1 mb-4">
                  {p.description}
                </p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-medium">
                  Ver detalle
                  <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
