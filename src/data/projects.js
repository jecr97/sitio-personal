import maquilaImg from '../assets/proyectos/maquila/image.png';
import tarjetasImg from '../assets/proyectos/tarjetas/image.png';

const projects = [
  {
    id: 'maquila',
    title: 'Gestión de cortes - Maquila',
    description: 'Sistema para registrar tipos de prenda y cortes, asignar precios y generar reportes.',
    img: maquilaImg,
  },
  {
    id: 'tarjetas',
    title: 'Tarjetas & Deudas',
    description: 'App para registrar tarjetas, fechas de pago, añadir gastos y registrar quién te debe o a quién le debes. Alertas antes de la fecha y registro de pagos por persona.',
    img: tarjetasImg,
  },
  {
    id: 'api-dev',
    title: 'API Development',
    description: 'Diseño e implementación de una API REST segura para una aplicación financiera.',
  },
  {
    id: 'microservices',
    title: 'Arquitectura Microservicios',
    description: 'Construcción de un sistema escalable de microservicios con Docker y Kubernetes.',
  },
];

export default projects;
