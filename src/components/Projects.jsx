import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Projects() {

  return (
    <div className="bg-[#181a1f] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-bold mb-10">Proyectos Recientes</h2>

        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Featured: first two projects - two-column cards (text left, image right) */}
          {projects.slice(0, 2).map((p) => (
            <Link key={p.id} to={`/proyectos/${p.id}`} className="block">
              <div className="group relative rounded-xl overflow-hidden shadow-lg h-56 md:h-72 flex flex-col md:flex-row transition-transform duration-200 hover:shadow-xl hover:scale-[1.02]">
                {/* Left: text */}
                <div className="w-full md:w-1/2 bg-[#1e2126] p-6 flex flex-col justify-center">
                  <h3 className="text-3xl text-white font-bold mb-4">{p.title}</h3>
                  <p className="text-gray-300 mb-6 max-w-xl">{p.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full border border-white/30 bg-white/5 text-white transition duration-200 hover:bg-white/10 hover:text-white hover:scale-[1.01]">
                      Ver detalle
                    </span>
                  </div>
                </div>

                {/* Right: image with gradient starting from the middle */}
                <div className="w-full md:w-1/2 relative">
                  {p.img ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                      style={{
                        backgroundImage: `linear-gradient(90deg, rgba(24,26,31,0.15) 0%, rgba(24,26,31,0.08) 40%, rgba(24,26,31,0) 100%), url(${p.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-r from-[#111214] via-[#16181b] to-transparent" />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Removed fixed project cards — featured projects are shown above and detailed views are available */}
      </div>
    </div>
  );
}
