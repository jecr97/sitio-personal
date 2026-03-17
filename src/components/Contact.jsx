import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      setStatus({ ok: false, msg: 'Completa todos los campos' });
      return;
    }
    setSending(true);
    try {
      const res = await fetch('/send_mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      const data = await res.json();
      if (data.ok) setStatus({ ok: true, msg: 'Mensaje enviado, gracias.' });
      else setStatus({ ok: false, msg: data.error || 'Error al enviar' });
    } catch (err) {
      setStatus({ ok: false, msg: 'Error de red' });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="bg-[#181a1f] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="contact">
      {/* Fondo decorativo imitando código */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Info Contacto */}
        <div className="flex-1">
          <h2 className="text-white text-3xl font-bold mb-4">Contáctame</h2>
          <p className="text-gray-400 mb-10 pb-6 border-b border-gray-800">
            Ponte en contacto conmigo para oportunidades o colaboraciones.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="bg-gray-800 p-3 rounded-full">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-300 text-xl" />
              </div>
              <span className="text-gray-200 text-lg font-medium">it-support@je-innovate.com</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-blue-600 p-3 rounded-full">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
              </div>
              <span className="text-gray-200 text-lg font-medium">linkedin.com/in/tu-perfil</span>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="flex-1">
          <h2 className="text-white text-3xl font-bold mb-8">Enviar Mensaje</h2>
          <form name="contactForm" className="space-y-4" onSubmit={handleSubmit}>
            <input 
              name="name"
              type="text" 
              placeholder="Tu Nombre" 
              className="w-full bg-[#1e2126] border border-gray-700 text-gray-200 px-4 py-3 rounded focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input 
              name="email"
              type="email" 
              placeholder="Tu Email" 
              className="w-full bg-[#1e2126] border border-gray-700 text-gray-200 px-4 py-3 rounded focus:outline-none focus:border-blue-500 transition-colors"
            />
            <textarea 
              name="message"
              placeholder="Tu Mensaje" 
              rows="5"
              className="w-full bg-[#1e2126] border border-gray-700 text-gray-200 px-4 py-3 rounded focus:outline-none focus:border-blue-500 transition-colors resize-none"
            ></textarea>
            <div className="flex items-center justify-between pt-2">
              <div>
                {status && (
                  <span className={status.ok ? 'text-green-400' : 'text-red-400'}>{status.msg}</span>
                )}
              </div>
              <div>
                <button 
                  type="submit" 
                  disabled={sending}
                  className="border border-white/20 bg-white/5 text-white font-medium px-8 py-3 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition duration-200 hover:bg-white/10 hover:border-white/40 disabled:opacity-50"
                >
                  {sending ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
