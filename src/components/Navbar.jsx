import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/acerca', label: 'Acerca de mí' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  function isActive(link) {
    if (link.isHash) return false;
    if (link.exact) return location.pathname === link.to;
    return location.pathname.startsWith(link.to);
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-card' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xs">JE</span>
            <span className="text-white font-semibold text-sm tracking-wide group-hover:text-accent transition-colors duration-200">
              Mi Portafolio
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isContact = link.to === '/contacto';
              return (
                <Link key={link.label} to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link)
                      ? 'text-white bg-white/10'
                      : 'text-[var(--text-secondary)] hover:text-white hover:bg-white/5'
                  } ${isContact ? 'ml-3 btn-primary text-xs px-5 py-2' : ''}`}> 
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-[var(--text-secondary)] hover:text-white focus:outline-none transition-colors"
            onClick={() => setOpen(v => !v)}
            aria-label="Menú">
            <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) =>
              link.isHash ? (
                <Link key={link.label} to={link.to} onClick={scrollToContact}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-white hover:bg-white/5 transition-all">
                  {link.label}
                </Link>
              ) : (
                <Link key={link.label} to={link.to}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(link) ? 'text-white bg-white/10' : 'text-[var(--text-secondary)] hover:text-white hover:bg-white/5'
                  }`}>
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
