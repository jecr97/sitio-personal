import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNodeJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faAngular,
  faPhp,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import TechChip from './TechChip';

export default function About() {
  return (
    <div className="bg-[#181a1f] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* About Info */}
        <div className="flex-1">
          <h2 className="text-white text-3xl font-bold mb-6">Acerca de Mi</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Además de mi experiencia en desarrollo con CodeIgniter 4, React y SQL, utilizo agentes de inteligencia artificial para optimizar procesos de programación. Esto me permite generar código más rápido, automatizar tareas repetitivas y enfocarme en la arquitectura y seguridad de los sistemas. Gracias a esta metodología, reduzco tiempos de desarrollo y entrego soluciones más eficientes y escalables. Utilizo IA y agentes de desarrollo para acelerar la construcción de software, generación de código, refactorización y diseño de arquitecturas, permitiendo desarrollar soluciones completas incluso en tecnologías nuevas como Laravel.
          </p>
        </div>

        {/* Skills (categorías) */}
        <div className="flex-1">
          <h2 className="text-white text-3xl font-bold mb-8">Mis Tecnologías</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Front-end */}
            <div className="bg-[#1e2126] p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-4 text-center">Front-end</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <TechChip
                  icon={<FontAwesomeIcon icon={faHtml5} className="text-orange-500" />}
                  label="HTML5"
                  description="Maquetación semántica, accesibilidad y buenas prácticas HTML5."
                />
                <TechChip
                  icon={<FontAwesomeIcon icon={faCss3Alt} className="text-blue-500" />}
                  label="CSS3"
                  description="Responsive design, Flexbox, Grid y animaciones con CSS3."
                />
                <TechChip
                  icon={<FontAwesomeIcon icon={faJs} className="text-yellow-400" />}
                  label="JavaScript"
                  description="ES6+, DOM, asincronía (Promises/async-await) y patterns comunes."
                />
                <TechChip
                  icon={<FontAwesomeIcon icon={faCode} className="text-gray-300" />}
                  label="jQuery"
                  description="Manipulación DOM, eventos y utilidades rápidas para proyectos legacy."
                />
                <TechChip
                  icon={<FontAwesomeIcon icon={faBootstrap} className="text-purple-400" />}
                  label="Bootstrap"
                  description="Layouts rápidos con utilidades y componentes listos."
                />
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-[#1e2126] p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-4 text-center">Frameworks</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <TechChip
                  icon={<FontAwesomeIcon icon={faReact} className="text-blue-400" />}
                  label="React"
                  description="SPA, hooks, componentes, estado y ecosistema (Vite, Router)."
                />
                <TechChip
                  icon={<FontAwesomeIcon icon={faAngular} className="text-red-500" />}
                  label="Angular"
                  description="Arquitectura basada en componentes, TypeScript y RxJS."
                />
              </div>
            </div>

            {/* Back-end */}
            <div className="bg-[#1e2126] p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-4 text-center">Back-end</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <TechChip
                  icon={<FontAwesomeIcon icon={faPhp} className="text-indigo-400" />}
                  label="PHP"
                  description="Desarrollo backend clásico, APIs y aplicaciones con PHP."
                />
                <TechChip
                  icon={<FontAwesomeIcon icon={faCode} className="text-gray-300" />}
                  label="CodeIgniter 4"
                  description="Framework ligero PHP, buen rendimiento para APIs y apps rápidas."
                />
              </div>
            </div>

            {/* En proceso / Curso (sitúa al lado de Back-end) */}
            <div className="bg-[#1e2126] p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-4 text-center">En proceso / Curso</h3>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <TechChip
                  icon={<FontAwesomeIcon icon={faCode} className="text-green-400" />}
                  label="Laravel"
                  description="Avanzando en desarrollo con Laravel: Eloquent, routing y autenticación."
                />
                <TechChip
                  icon={<FontAwesomeIcon icon={faDatabase} className="text-cyan-400" />}
                  label="MySQL Server"
                  description="Integración y acceso a MySQL desde C# (.NET), consultas y ORM." 
                />
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="bg-[#1e2126] p-6 rounded-xl border border-gray-800 col-span-1 sm:col-span-2">
              <h3 className="text-white font-semibold mb-4 text-center">Bases de Datos y Herramientas</h3>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <TechChip
                  icon={<FontAwesomeIcon icon={faDatabase} className="text-gray-400" />}
                  label="SQL / MySQL"
                  description="Modelado, consultas, índices y optimización de bases de datos."
                />
                <TechChip
                  icon={<FontAwesomeIcon icon={faGithub} className="text-gray-200" />}
                  label="Git / GitHub"
                  description="Control de versiones, ramas, Pull Requests y flujo colaborativo."
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
