import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faAngular,
  faPhp,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faBrain } from '@fortawesome/free-solid-svg-icons';
import TechChip from './TechChip';

const categories = [
  {
    title: 'Front-end',
    chips: [
      { icon: <FontAwesomeIcon icon={faHtml5} className="text-orange-400" />, label: 'HTML5', description: 'Maquetación semántica, accesibilidad y buenas prácticas HTML5.' },
      { icon: <FontAwesomeIcon icon={faCss3Alt} className="text-sky-400" />, label: 'CSS3', description: 'Responsive design, Flexbox, Grid y animaciones CSS3.' },
      { icon: <FontAwesomeIcon icon={faJs} className="text-yellow-400" />, label: 'JavaScript', description: 'ES6+, DOM, async/await y patterns comunes.' },
      { icon: <FontAwesomeIcon icon={faCode} className="text-gray-400" />, label: 'jQuery', description: 'Manipulación DOM, eventos y utilidades para proyectos legacy.' },
      { icon: <FontAwesomeIcon icon={faBootstrap} className="text-purple-400" />, label: 'Bootstrap', description: 'Layouts rápidos con componentes listos.' },
    ],
  },
  {
    title: 'Frameworks',
    chips: [
      { icon: <FontAwesomeIcon icon={faReact} className="text-cyan-400" />, label: 'React', description: 'SPA, hooks, componentes, estado y ecosistema (Vite, Router).' },
      { icon: <FontAwesomeIcon icon={faAngular} className="text-red-400" />, label: 'Angular', description: 'Arquitectura basada en componentes, TypeScript y RxJS.' },
    ],
  },
  {
    title: 'Back-end',
    chips: [
      { icon: <FontAwesomeIcon icon={faPhp} className="text-indigo-400" />, label: 'PHP', description: 'Desarrollo backend clásico, APIs y aplicaciones con PHP.' },
      { icon: <FontAwesomeIcon icon={faCode} className="text-gray-400" />, label: 'CodeIgniter 4', description: 'Framework ligero PHP, rendimiento óptimo para APIs.' },
    ],
  },
  {
    title: 'En proceso',
    accent: true,
    chips: [
      { icon: <FontAwesomeIcon icon={faCode} className="text-green-400" />, label: 'Laravel', description: 'Eloquent, routing, autenticación y API Resources.' },
      { icon: <FontAwesomeIcon icon={faDatabase} className="text-cyan-400" />, label: 'MySQL Server', description: 'Integración avanzada, ORM y optimización.' },
    ],
  },
  {
    title: 'Bases de datos & Herramientas',
    wide: true,
    chips: [
      { icon: <FontAwesomeIcon icon={faDatabase} className="text-gray-400" />, label: 'SQL / MySQL', description: 'Modelado, consultas, índices y optimización.' },
      { icon: <FontAwesomeIcon icon={faGithub} className="text-gray-200" />, label: 'Git / GitHub', description: 'Control de versiones, ramas, PRs y flujo colaborativo.' },
      { icon: <FontAwesomeIcon icon={faBrain} className="text-violet-400" />, label: 'IA y Agentes', description: 'Uso de agentes IA para acelerar desarrollo, refactorización y diseño de arquitecturas.' },
    ],
  },
];

export default function About() {
  return (
    <section className="section-padding bg-bg border-b border-border" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-accent text-xs font-medium mb-4">
            Acerca de mí
          </span>
          <h2 className="section-title mb-4">Mi perfil profesional</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Desarrollador FullStack con más de 2 años de experiencia creando aplicaciones
            escalables. Combino experiencia en CodeIgniter 4, React y SQL con el uso de IA
            y agentes de desarrollo para acelerar la construcción de software, generación
            de código, refactorización y diseño de arquitecturas — permitiendo entregar
            soluciones completas incluso en tecnologías nuevas como Laravel.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`card p-6 ${
                cat.wide ? 'sm:col-span-2 lg:col-span-3' : ''
              } ${
                cat.accent ? 'border-primary/40 bg-primary/5' : ''
              }`}
            >
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                {cat.accent && <span className="w-2 h-2 rounded-full bg-accent" />}
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.chips.map((chip) => (
                  <TechChip key={chip.label} icon={chip.icon} label={chip.label} description={chip.description} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
