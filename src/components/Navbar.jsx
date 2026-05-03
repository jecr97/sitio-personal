import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/acerca', label: 'Acerca de mí' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
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
      scrolled || open
        ? 'bg-[color:var(--nav-bg)] shadow-card supports-[backdrop-filter]:backdrop-blur-xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xs shadow-card">
              JE
            </span>
            <span className="text-[var(--text-primary)] font-semibold text-sm tracking-wide group-hover:text-accent transition-colors duration-200">
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
                      ? 'text-[var(--text-primary)] bg-primary/15'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-primary/10'
                  } ${isContact ? 'ml-3 btn-primary text-xs px-5 py-2' : ''}`}> 
                  {link.label}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={onToggleTheme}
              className="ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-surface/80 text-[var(--text-primary)] transition-all duration-200 hover:border-primary/60 hover:text-accent hover:shadow-card"
              aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none transition-colors"
            onClick={() => setOpen(v => !v)}
            aria-label="Menú">
            <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/40 bg-[color:var(--nav-bg)] supports-[backdrop-filter]:backdrop-blur-xl">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link)
                    ? 'text-[var(--text-primary)] bg-primary/15'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-primary/10'
                }`}>
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={onToggleTheme}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-border/60 bg-surface/80 px-4 py-3 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-primary/60 hover:text-accent"
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              {isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
