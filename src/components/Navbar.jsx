import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#1e2126] border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl tracking-wider">
              Mi Portafolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/acerca" className="text-gray-300 hover:text-white transition-colors">Acerca de mi</Link>
              <Link to="/proyectos" className="text-gray-300 hover:text-white transition-colors">Mis Proyectos</Link>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
