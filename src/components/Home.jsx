import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faPhp, 
  faLaravel, 
  faGitAlt, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faCode, 
  faTerminal, 
  faLaptopCode, 
  faServer
} from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ==================== NAVBAR ====================
  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Herramientas', href: '#herramientas' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  // ==================== PROYECTOS ====================
  const projects = [
    {
      id: 1,
      name: 'Sistema Gestión Corte Textil',
      description: 'Sistema especializado en gestión de cortes textiles, alta de productos, control de inventario y generación de reportes.',
      technologies: ['React', 'PHP/Laravel', 'SQL Server', 'MySQL'],
      role: 'Desarrollo full stack',
    },
    {
      id: 2,
      name: 'Administrador de tarjeas',
      description: 'Aplicación web que permite registrar tarjetas, controlar deudas y pagos, asignar responsables y generar alertas por fechas de vencimiento, ofreciendo un seguimiento claro y organizado de las finanzas personales o grupales.',
      technologies: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript'],
      role: 'Desarrollo full stack',
    },
    {
      id: 3,
      name: 'Integración pasarela de pagos',
            description: 'Integración de pasarela de pagos para facilitar transacciones seguras y eficientes en aplicaciones web.',
            technologies: ['Stripe Checkout', 'Webhooks', 'Mercado Pago', 'React', 'Backend PHP'],
            paymentDetails: {
                stripe: 'Checkout para cobros seguros, validación server-side y webhooks para confirmar pagos, suscripciones y reembolsos.',
                mercadoPago: 'Preferencias de pago y webhooks para notificar cobros, aprobar transacciones y mantener conciliación automática.',
            },
      role: 'Desarrollo full stack',
    },
    // `{
    //   id: 4,
    //   name: 'Landing Page de Eventos',
    //   description: 'Landing page moderna para eventos deportivos o batallas de rap, con secciones informativas, inscripción y diseño responsivo.',
    //   technologies: ['React', 'Vite', 'Tailwind'],
    //   role: 'Desarrollo frontend',
    // },`
  ];

  // ==================== STACK ====================
  const stack = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: faReact, color: 'text-[#61DAFB]' },
        { name: 'JavaScript', icon: faJs, color: 'text-[#F7DF1E]' },
        { name: 'HTML5', icon: faHtml5, color: 'text-[#E34F26]' },
        { name: 'CSS3', icon: faCss3Alt, color: 'text-[#1572B6]' },
        { name: 'Tailwind', icon: faCode, color: 'text-[#06B6D4]' },
        { name: 'Material UI', icon: faLaptopCode, color: 'text-[#0081CB]' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'PHP', icon: faPhp, color: 'text-[#777BB4]' },
        { name: 'Laravel', icon: faLaravel, color: 'text-[#FF2D20]' },
        { name: 'CodeIgniter', icon: faCode, color: 'text-[#EE4323]' },
      ],
    },
    {
      category: 'Bases de Datos',
      items: [
        { name: 'MySQL', icon: faDatabase, color: 'text-[#4479A1]' },
        { name: 'SQL Server', icon: faServer, color: 'text-[#CC2927]' },
      ],
    },
        {
            category: 'Pagos',
            items: [
                { name: 'Stripe (Checkout + Webhooks)', icon: faCreditCard, color: 'text-[#6772e5]' },
                { name: 'Mercado Pago', icon: faCreditCard, color: 'text-[#009ee3]' },
            ],
        },
    {
      category: 'Herramientas',
      items: [
        { name: 'Git', icon: faGitAlt, color: 'text-[#F05032]' },
        { name: 'GitHub', icon: faGithub, color: 'text-[#181717]' },
        { name: 'Postman', icon: faTerminal, color: 'text-[#FF6C37]' },
        { name: 'VS Code', icon: faCode, color: 'text-[#007ACC]' },
      ],
    },
  ];
    // ==================== PROCESO ====================
    const process = [
        { step: 1, title: 'Análisis del problema', description: 'Identificar necesidades y objetivos.' },
        { step: 2, title: 'Diseño de solución', description: 'Definir procesos y arquitectura del sistema.' },
        { step: 3, title: 'Desarrollo del sistema', description: 'Programación y construcción de la solución.' },
        { step: 4, title: 'Pruebas y mejoras', description: 'Validación de resultados y corrección de errores.' },
        { step: 5, title: 'Entrega y optimización', description: 'Despliegue y optimización continua del sistema.' },
    ];

    // ==================== SOBRE MÍ - CARDS ====================
    const aboutCards = [
        {
            title: 'Sistemas empresariales',
            description: 'Desarrollo plataformas robustas para gestión integral de operaciones, inventarios, finanzas y más.',
            icon: '🏢',
        },
        {
            title: 'Integración de pagos',
            description: 'Implemento soluciones de pago seguras y eficientes para facilitar transacciones en línea.',
            icon: '💳',
        },
        {
            title: 'Generación de y consumo de APIs',
            description: 'Diseño y desarrollo APIs RESTful para integrar sistemas y facilitar la comunicación entre aplicaciones.',
            icon: '⚙️',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

            {/* ==================== NAVBAR ==================== */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="#inicio" className="text-xl font-bold text-[#0C3354] hover:text-cyan-600 transition-colors">
                            Eduardo Contreras
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-700 hover:text-[#0C3354] font-medium transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <svg
                                className="w-6 h-6 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0C3354] rounded-lg transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* ==================== HERO / INICIO ==================== */}
            <section id="inicio" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span className="px-4 py-2 bg-cyan-100 text-[#0C3354] rounded-full text-sm font-semibold">
                                    Disponible para proyectos
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Full Stack Developer & <span className="text-[#0C3354]">Solutions Developer</span>
                            </h1>

                            <div className="w-20 h-1.5 bg-[#0C3354] rounded-full"></div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="#proyectos"
                                    className="px-8 py-3 bg-[#0C3354] text-white rounded-lg font-semibold hover:bg-[#0a2942] hover:shadow-lg transform hover:scale-105 transition-all"
                                >
                                    Ver proyectos
                                </a>
                                <a
                                    href="#contacto"
                                    className="px-8 py-3 bg-white text-[#0C3354] border-2 border-[#0C3354] rounded-lg font-semibold hover:bg-[#0C3354] hover:text-white hover:shadow-lg transform hover:scale-105 transition-all"
                                >
                                    Contactarme
                                </a>
                            </div>
                        </div>

                        {/* Right Card - Quick Profile */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden group">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-cyan-50 rounded-full blur-3xl group-hover:bg-cyan-100 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#0C3354] to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                        <span className="text-3xl text-white font-bold">EC</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Eduardo Contreras</h3>
                                        <p className="text-[#0C3354] font-medium">Full Stack & Solutions</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed italic border-l-4 border-cyan-500 pl-4 py-1">
                                        "Desarrollo sistemas web modernos, dashboards empresariales y soluciones escalables para optimizar procesos."
                                    </p>

                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                                            <span className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">🚀</span>
                                            <span className="text-gray-700 font-medium">+2 años construyendo el futuro</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                                            <span className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">💼</span>
                                            <span className="text-gray-700 font-medium">Especialista en sistemas empresariales</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                                            <span className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">🛠️</span>
                                            <span className="text-gray-700 font-medium">React, Laravel & CodeIgniter</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== SOBRE MÍ ==================== */}
            <section id="sobre-mi" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Sobre mí</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Soy Desarrollador Web FullStack con experiencia en CodeIgniter 4 para backend y React/Angular en frontend. He trabajado en sistemas tipo ERP que integran control de movimientos, ingresos, gastos, inventarios y reportes financieros.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {aboutCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                <div className="text-5xl mb-4">{card.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== HERRAMIENTAS / STACK ==================== */}
            <section id="herramientas" className="py-16 px-4 sm:px-6 lg:px-8">
                                <div className="max-w-7xl mx-auto">
                                        <div className="text-center mb-16">
                                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Herramientas & Stack</h2>
                                                <p className="text-lg text-gray-600">Tecnologías con las que construyo soluciones</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                                {stack.map((group) => (
                                                        <div
                                                                key={group.category}
                                                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                                                        >
                                                                <h3 className="text-lg font-bold text-[#0C3354] mb-6 flex items-center gap-2">
                                                                        <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                                                                        {group.category}
                                                                </h3>

                                                                <div className="grid grid-cols-2 gap-4">
                                                                        {group.items.map((item) => (
                                                                                <div
                                                                                        key={item.name}
                                                                                        className="group flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                                                                                >
                                                                                        <div className={`text-3xl mb-2 transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                                                                                                <FontAwesomeIcon icon={item.icon} />
                                                                                        </div>
                                                                                        <span className="text-xs font-semibold text-gray-600 group-hover:text-[#0C3354]">
                                                                                                {item.name}
                                                                                        </span>
                                                                                </div>
                                                                        ))}
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
            </section>

            {/* ==================== PROYECTOS ==================== */}
            <section id="proyectos" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Proyectos destacados</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                {/* Header con gradiente */}
                                <div className="h-32 bg-gradient-to-br from-[#0C3354] to-cyan-600 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                        <span className="text-3xl text-white font-bold">{project.id}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-500 mb-2">Tecnologías:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-cyan-100 text-[#0C3354] rounded-full text-xs font-semibold"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {project.paymentDetails && (
                                        <div className="mb-4 rounded-xl border border-cyan-100 bg-cyan-50/60 p-4">
                                            <p className="text-sm font-semibold text-[#0C3354] mb-2">Integración de pagos</p>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                <li>
                                                    <span className="font-semibold text-gray-800">Stripe:</span> {project.paymentDetails.stripe}
                                                </li>
                                                <li>
                                                    <span className="font-semibold text-gray-800">Mercado Pago:</span> {project.paymentDetails.mercadoPago}
                                                </li>
                                            </ul>
                                        </div>
                                    )}

                                    {/* Role */}
                                    <p className="text-sm text-gray-500 mb-4">
                                        <span className="font-semibold">Rol:</span> {project.role}
                                    </p>

                                    {/* Button */}
                                    <button className="w-full py-2 bg-[#0C3354] text-white rounded-lg font-semibold hover:bg-[#0a2942] transition-colors">
                                        Ver detalles
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== PROCESO DE TRABAJO ==================== */}
            <section id="proceso" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Proceso de trabajo</h2>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">
                        {process.map((step, index) => (
                            <div key={step.step} className="relative">
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#0C3354] to-cyan-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <span className="text-xl text-white font-bold">{step.step}</span>
                                    </div>
                                    <h3 className="text-center font-bold text-gray-900 mb-2 text-sm">{step.title}</h3>
                                    <p className="text-center text-gray-600 text-xs leading-relaxed">{step.description}</p>
                                </div>

                                {/* Arrow connector for desktop */}
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== CONTACTO ==================== */}
            <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0C3354] to-cyan-900">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h2>
                        <p className="text-lg text-cyan-100">Trabajemos juntos para crear algo increíble</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h3 className="text-xl font-bold text-white mb-4">Información de contacto</h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-12 h-12 bg-gray-500/20 text-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FontAwesomeIcon icon={faGithub} className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-cyan-200/60 uppercase tracking-wider font-bold">GitHub</p>
                                            <a href="https://github.com/jecr97" className="text-white font-medium hover:text-cyan-300 transition-colors">
                                                github.com/jecr97
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FontAwesomeIcon icon={faLaptopCode} className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-cyan-200/60 uppercase tracking-wider font-bold">LinkedIn</p>
                                            <a href="https://linkedin.com/in/eduardo-contreras-chivaa97/" className="text-white font-medium hover:text-cyan-300 transition-colors">
                                                linkedin.com/in/...
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíame un mensaje</h3>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        placeholder="Tu nombre completo"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#0C3354] placeholder:text-sky-400/70 focus:ring-2 focus:ring-[#0C3354] focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Correo</label>
                                    <input
                                        type="email"
                                        placeholder="tu-correo@email.com"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#0C3354] placeholder:text-sky-400/70 focus:ring-2 focus:ring-[#0C3354] focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Cuéntame sobre tu proyecto..."
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#0C3354] placeholder:text-sky-400/70 focus:ring-2 focus:ring-[#0C3354] focus:border-transparent outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="w-full py-3 bg-[#0C3354] text-white rounded-lg font-semibold hover:bg-[#0a2942] hover:shadow-lg transform hover:scale-105 transition-all"
                                >
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== FOOTER ==================== */}
            <footer className="bg-gray-900 py-8 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2026 Eduardo Contreras. Todos los derechos reservados.
                    </p>
                </div>
            </footer>

        </div>
    );
}
