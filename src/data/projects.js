import maquilaImg from '../assets/proyectos/maquila/image.png';
import tarjetasImg from '../assets/proyectos/tarjetas/image.png';
import paymentImg from '../assets/proyectos/payment/image.png';

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
    id: 'payment',
    title: 'Sistema de Inscripción y Pago',
    description: 'Plataforma de inscripción a torneo con integración de pasarelas de pago, cupones de descuento, webhooks asincronos y confirmación con QR. Demostración ficticia con datos estáticos.',
    img: paymentImg,
  },
];

export default projects;
