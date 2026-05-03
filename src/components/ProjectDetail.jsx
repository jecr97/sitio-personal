import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ p }) {
  return (
    <Link to={`/proyectos/${p.id}`}
      className="group card overflow-hidden flex flex-col hover:shadow-card-hover transition-all duration-300">
      <div className="relative h-40 overflow-hidden bg-surface-2">
        {p.img ? (
          <>
            <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-[rgb(var(--text-primary-rgb)/0.18)]">{p.title.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
        <p className="text-[var(--text-secondary)] text-xs leading-relaxed flex-1 mb-3">{p.description}</p>
        <span className="inline-flex items-center gap-1 text-accent text-xs font-medium">
          Ver detalle <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();

  if (id) {
    const project = projects.find((p) => p.id === id);

    if (project) {
      const subject = encodeURIComponent(`Solicitud de demo - ${project.title}`);
      const body = encodeURIComponent(`Hola,\n\nMe gustaría solicitar más información sobre ${project.title}.\n\nGracias.`);

      return (
        <div className="min-h-screen bg-bg section-padding">
          <div className="max-w-5xl mx-auto">
            <Link to="/proyectos"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] text-sm hover:text-[var(--text-primary)] transition-colors mb-8">
              <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
              Volver a proyectos
            </Link>

            <div className="card overflow-hidden">
              {project.img && (
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <h1 className="text-3xl font-bold text-[var(--text-primary)]">{project.title}</h1>
                  </div>
                </div>
              )}

              <div className="p-8">
                {!project.img && <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">{project.title}</h1>}

                <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Resumen</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{project.description}</p>

                {project.id === 'tarjetas' && (
                  <>
                    <h3 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Funcionalidades clave</h3>
                    <ul className="space-y-1 mb-6">
                      {['Registrar tarjetas y fechas de pago.',
                        'Añadir gastos y marcar si es tu deuda o te deben a ti.',
                        'Alertas antes de la fecha de pago.',
                        'Registro de pagos por persona y seguimiento por tarjeta.',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
                  {project.id === 'payment' && (
                    <a href="https://payment.je-innovate.com/" target="_blank" rel="noopener noreferrer"
                      className="btn-primary">
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                      Visitar proyecto sitio
                    </a>
                  )}

                  {(project.id === 'maquila' || project.id === 'tarjetas') && (
                    <a href={`mailto:it-support@je-innovate.com?subject=${subject}&body=${body}`}
                      className="btn-primary">
                      <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                      Solicitar acceso / Contactar
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-bg section-padding">
        <div className="max-w-5xl mx-auto">
          <Link to="/proyectos" className="inline-flex items-center gap-2 text-[var(--text-secondary)] text-sm hover:text-[var(--text-primary)] transition-colors mb-8">
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" /> Volver
          </Link>
          <p className="text-[var(--text-secondary)] mb-10">Proyecto no encontrado.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-accent text-xs font-medium mb-4">Proyectos</span>
          <h2 className="section-title">Todos los proyectos</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </div>
  );
}
