import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, href: 'https://github.com/MadouLamine', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/mamadou-lamine-diallo', label: 'LinkedIn' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/224623304674', label: 'WhatsApp' },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__brand">Mamadou Lamine Diallo</p>

                <nav className="footer__links">
                    {['#', '#about', '#projects', '#skills', '#contact'].map((href, i) => {
                        const labels = ['Accueil', 'À Propos', 'Projets', 'Skills', 'Contact'];
                        return (
                            <a key={i} href={href} className="footer__link">{labels[i]}</a>
                        );
                    })}
                </nav>

                <div className="footer__socials">
                    {socials.map((s, i) => (
                        <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="footer__social">
                            {s.icon}
                        </a>
                    ))}
                </div>

                <p className="footer__copy">
                    © {year} · Conçu avec <FaHeart className="footer__heart" /> par Mamadou Lamine Diallo
                </p>
            </div>
        </footer>
    );
};

export default Footer;
