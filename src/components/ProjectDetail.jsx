import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

export default function ProjectDetail(){
  const { id } = useParams();

  if (id) {
    const project = projects.find((p) => p.id === id);
    if (project) {
      const subject = encodeURIComponent(`Solicitud de demo - ${project.title}`);
      const body = encodeURIComponent(`Hola,%0D%0A%0D%0AMe gustaría solicitar más información sobre ${project.title}.%0D%0A%0D%0AGracias.`);

      return (
        <div className="bg-[#0f1113] py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
          <div className="max-w-5xl mx-auto bg-[#16171a] rounded-xl overflow-hidden shadow-xl relative">
            <Link to="/proyectos" aria-label="Cerrar" className="absolute top-4 right-4 bg-[#0b1220] hover:bg-[#0f1720] text-gray-300 rounded-full p-2 shadow">
              <span className="sr-only">Cerrar</span>
              ×
            </Link>
            <div className="md:flex">
              {project.img && (
                <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45)), url(${project.img})` }}>
                  <div className="p-8 h-full flex items-end">
                    <h1 className="text-3xl text-white font-bold">{project.title}</h1>
                  </div>
                </div>
              )}
              <div className={`${project.img ? 'md:w-1/2' : 'w-full'} p-8`}>
                <h2 className="text-xl text-gray-200 font-semibold mb-4">Resumen</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {project.id === 'tarjetas' && (
                  <>
                    <h3 className="text-gray-200 font-semibold mt-4">Funcionalidades clave</h3>
                    <ul className="list-disc ml-6 text-gray-300 mb-4">
                      <li>Registrar tarjetas y fechas de pago.</li>
                      <li>Añadir gastos y marcar si es tu deuda o te deben a ti.</li>
                      <li>Alertas antes de la fecha de pago.</li>
                      <li>Registro de pagos por persona y seguimiento por tarjeta.</li>
                    </ul>
                    <p className="text-gray-300 mb-6">Puedes solicitar acceso o una demo por correo:</p>
                  </>
                )}

                <div className="flex items-center gap-4">
                  <a href={`mailto:ventas@example.com?subject=${subject}&body=${body}`} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded shadow">Contactar por correo</a>
                  <Link to="/proyectos" className="text-gray-300 hover:underline">Volver a proyectos</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Si se especificó id pero no existe, mostrar lista detallada en lugar de error
    return (
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <Link to="/proyectos" aria-label="Volver a proyectos" className="absolute top-4 right-4 bg-[#0b1220] hover:bg-[#0f1720] text-gray-300 rounded-full p-2 shadow">
            <span className="sr-only">Volver a proyectos</span>
            ×
          </Link>
          <h2 className="text-2xl text-white mb-4">Proyecto no encontrado</h2>
          <p className="text-gray-300 mb-6">El proyecto solicitado no existe. A continuación se muestran todos los proyectos con su detalle.</p>
          <Link to="/proyectos" className="mt-6 inline-block text-blue-500 hover:underline">Volver a proyectos</Link>
        </div>
        <div className="max-w-5xl mx-auto mt-10 space-y-8">
          {projects.map((p) => (
            <div key={p.id} className="bg-[#16171a] rounded-xl overflow-hidden shadow p-6 md:flex">
              {p.img && <div className="md:w-1/3 bg-cover bg-center rounded-md mr-6" style={{ backgroundImage: `url(${p.img})`, minHeight: 120 }} />}
              <div className="md:flex-1">
                <h3 className="text-xl text-white font-semibold">{p.title}</h3>
                <p className="text-gray-300 mt-2">{p.description}</p>
                <div className="mt-4">
                  <Link to={`/proyectos/${p.id}`} className="text-blue-400 hover:underline">Ver detalle</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Si no hay id, mostrar la lista completa de proyectos detallados
  return (
    <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <Link to="/proyectos" aria-label="Volver a proyectos" className="absolute top-4 right-4 bg-[#0b1220] hover:bg-[#0f1720] text-gray-300 rounded-full p-2 shadow">
            <span className="sr-only">Volver a proyectos</span>
            ×
          </Link>
        <h2 className="text-2xl text-white mb-4">Todos los proyectos</h2>
        <p className="text-gray-300 mb-6">A continuación están los proyectos y su información detallada.</p>
      </div>
      <div className="max-w-5xl mx-auto mt-6 space-y-8">
        {projects.map((p) => (
          <div key={p.id} className="bg-[#16171a] rounded-xl overflow-hidden shadow p-6 md:flex">
            {p.img && <div className="md:w-1/3 bg-cover bg-center rounded-md mr-6" style={{ backgroundImage: `url(${p.img})`, minHeight: 120 }} />}
            <div className="md:flex-1">
              <h3 className="text-xl text-white font-semibold">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.description}</p>
              <div className="mt-4">
                <Link to={`/proyectos/${p.id}`} className="text-blue-400 hover:underline">Ver detalle</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
