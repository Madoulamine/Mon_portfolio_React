import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.12 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const validate = () => {
    const errs = {};
    // simple email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) errs.email = 'Entrez une adresse e-mail valide.';
    if (message.trim().length < 20) errs.message = 'Le message doit contenir au moins 20 caractères.';
    if (message.trim().length > 30) errs.message = 'Le message ne doit pas dépasser 30 caractères.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Use mailto as simple solution to send to your mailbox
    const mailTo = `mailto:madoulamine227ld@gmail.com?subject=${encodeURIComponent('Message depuis portfolio')}&body=${encodeURIComponent('From: ' + email + '\n\n' + message)}`;
    window.location.href = mailTo;
  };

  return (
    <section className={`contact ${visible ? 'visible' : ''}`} ref={ref} id="contact">
      <div className="contact__wrap">
        <div className="contact__left">
          <h2>Contact</h2>

          <div className="contact__item">
            <FaWhatsapp className="contact__icon" />
            <div>
              <h4>Whatsapp</h4>
              <p>+224 623 30 46 74</p>
            </div>
          </div>

          <div className="contact__item">
            <FaEnvelope className="contact__icon" />
            <div>
              <h4>Email</h4>
              <p>madoulamine227ld@gmail.com</p>
            </div>
          </div>

          <div className="contact__item">
            <FaMapMarkerAlt className="contact__icon" />
            <div>
              <h4>Adresse</h4>
              <p>Mamou, GUINEE</p>
            </div>
          </div>
        </div>

        <div className="contact__right">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <input
              id="contact-email"
              type="email"
              placeholder="Votre e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <textarea
              id="contact-message"
              placeholder="Votre message (20-30 caractères)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={30}
              className="textarea"
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit" className="btn-submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
