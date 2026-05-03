import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const socials = [
  {
    icon: faEnvelope,
    label: 'Email',
    value: 'it-support@je-innovate.com',
    href: 'mailto:it-support@je-innovate.com',
    bg: 'bg-primary/20',
    color: 'text-accent',
  },
  {
    icon: faLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/eduardo-contreras-chivaa97/',
    href: 'https://linkedin.com/in/eduardo-contreras-chivaa97/',
    bg: 'bg-blue-500/20',
    color: 'text-blue-400',
  },
  {
    icon: faGithub,
    label: 'GitHub',
    value: 'jecr97',
    href: 'https://github.com/jecr97/',
    bg: 'bg-white/10',
    color: 'text-gray-300',
  },
];

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
      if (data.ok) { setStatus({ ok: true, msg: 'Mensaje enviado. ¡Gracias!' }); form.reset(); }
      else setStatus({ ok: false, msg: data.error || 'Error al enviar' });
    } catch {
      setStatus({ ok: false, msg: 'Error de red' });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section-padding bg-bg" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-accent text-xs font-medium mb-4">
            Contacto
          </span>
          <h2 className="section-title mb-3">Hablemos</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            ¿Tienes un proyecto o quieres colaborar? Escríbeme y te respondo pronto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: info */}
          <div className="flex flex-col gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href}
                className="card p-5 flex items-center gap-4 hover:border-accent/40 group transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center shrink-0`}>
                  <FontAwesomeIcon icon={s.icon} className={`${s.color} text-lg`} />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)] mb-0.5">{s.label}</p>
                  <p className="text-[var(--text-primary)] text-sm font-medium group-hover:text-accent transition-colors">{s.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Right: form */}
          <div className="card p-8">
            <form name="contactForm" className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Nombre</label>
                  <input name="name" type="text" placeholder="Tu nombre"
                    className="input-field" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Email</label>
                  <input name="email" type="email" placeholder="tu@correo.com"
                    className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Mensaje</label>
                <textarea name="message" rows="5" placeholder="Cuéntame sobre tu proyecto..."
                  className="input-field resize-none"></textarea>
              </div>

              <div className="flex items-center justify-between pt-1">
                {status ? (
                  <span className={`text-xs font-medium ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.msg}</span>
                ) : <span />}
                {/*
                <button type="submit" disabled={sending}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  {sending ? 'Enviando...' : 'Enviar mensaje'}
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                </button>
                */}
                <button type="button" className="btn-primary opacity-80 cursor-not-allowed" disabled>
                  En proceso
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
