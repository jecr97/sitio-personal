export default function Hero() {
  return (
    <div className="bg-[#181a1f] pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-gray-400 text-2xl font-medium mb-2">Hola, soy</h2>
          <h1 className="text-white text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
            Desarrollador Web
          </h1>
          <h3 className="text-gray-300 text-xl font-medium mb-6">
            Especialista en Frontend & Backend
          </h3>
          <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0">
            Con más de 2 años de experiencia en desarrollo FullStack, me especializo en crear aplicaciones escalables y centradas en el usuario. Domino CodeIgniter 4 para backend y React + Material UI para interfaces dinámicas, integrando soluciones como pasarelas de pago (Stripe, Mercado Pago), sistemas POS autoservicio y dashboards administrativos.
          </p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-gray-700 to-gray-500 rounded-full shadow-2xl overflow-hidden border-4 border-[#1e2126]">
            {/* Aquí puedes cambiar el src por tu propia foto */}
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop" 
              alt="Programador" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
