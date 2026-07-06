import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUser } from 'react-icons/fa';

const contactInfos = [
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+224 623 30 46 74',
    href: 'https://wa.me/224623304674',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'mamadoulaminedevdiallo@gmail.com',
    href: 'mailto:mamadoulaminedevdiallo@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Localisation',
    value: 'Mamou, Guinée',
    href: null,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVisible(e.isIntersecting)),
      { threshold: 0.1 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const validate = () => {
    const errs = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.trim().length < 2) errs.name = 'Entrez votre nom complet.';
    if (!emailRe.test(email)) errs.email = 'Adresse e-mail invalide.';
    if (message.trim().length < 20) errs.message = 'Message trop court (20 caractères minimum).';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`Message de ${name} — Portfolio`);
    const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`);
    window.location.href = `mailto:mamadoulaminedevdiallo@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className={`contact ${visible ? 'visible' : ''}`} ref={ref} id="contact">
      <div className="contact__head">
        <h2 className="section__title">Me Contacter</h2>
        <span className="section__title-line"></span>
        <p className="section__subtitle">Parlons de votre projet</p>
      </div>

      <div className="contact__wrap">
        {/* Left — info cards */}
        <div className="contact__left">
          {contactInfos.map((c, i) => (
            <div className="contact__card" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="contact__card-icon">{c.icon}</span>
              <div className="contact__card-text">
                <h4>{c.label}</h4>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer">{c.value}</a>
                ) : (
                  <p>{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <div className="contact__right">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form__group">
              <FaUser className="form__icon" />
              <input
                id="contact-name"
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`input ${errors.name ? 'input--error' : ''}`}
              />
            </div>
            {errors.name && <p className="error">{errors.name}</p>}

            <div className="form__group">
              <FaEnvelope className="form__icon" />
              <input
                id="contact-email"
                type="email"
                placeholder="Votre e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`input ${errors.email ? 'input--error' : ''}`}
              />
            </div>
            {errors.email && <p className="error">{errors.email}</p>}

            <textarea
              id="contact-message"
              placeholder="Votre message (20 caractères minimum)..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`textarea ${errors.message ? 'input--error' : ''}`}
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit" className="btn-submit">
              {sent ? '✅ Message envoyé !' : <><FaPaperPlane /> Envoyer le message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
