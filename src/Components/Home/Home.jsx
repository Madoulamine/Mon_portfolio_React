import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaLinkedin, FaFacebook, FaGithub, FaDownload, FaPaperPlane } from 'react-icons/fa';
import monCV from "../../Black Modern Professional Resume (2).pdf";

const roles = [
  'Full Stack Developer',
  'React Developer',
  'Problem Solver',
  'Passionné du Digital',
];

const Home = () => {
  const fullName = ' M LAMINE DIALLO ';
  const [typed, setTyped] = useState('');
  const [mounted, setMounted] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  // Typing animation for the name
  useEffect(() => {
    setMounted(true);
    let timer;

    const startTyping = () => {
      setTyped('');
      let i = 0;
      const speed = 120;
      clearInterval(timer);
      timer = setInterval(() => {
        setTyped((prev) => fullName.slice(0, i + 1));
        i += 1;
        if (i >= fullName.length) clearInterval(timer);
      }, speed);
    };

    startTyping();

    const handleReset = () => startTyping();
    window.addEventListener('reset-typewriter', handleReset);

    return () => {
      clearInterval(timer);
      window.removeEventListener('reset-typewriter', handleReset);
    };
  }, []);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIdx((prev) => (prev + 1) % roles.length);
        setRoleVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`home ${mounted ? 'visible' : ''}`}>
      <div className="home__container">
        <div className="home__left">
          <p className="home__greeting">Salut, <span aria-hidden>👋🏻</span></p>

          <h1 className="home__title">Je suis&nbsp;
            <span className="home__name">{typed}<span className="home__cursor">&nbsp;</span></span>
          </h1>

          {/* Animated role subtitle */}
          <p className={`home__role ${roleVisible ? 'role--visible' : 'role--hidden'}`}>
            {roles[roleIdx]}
          </p>

          <p className="home__tagline">Développer avec passion, livrer avec précision.</p>

          <div className="home__socials" aria-label="Réseaux sociaux">
            <a href="https://linkedin.com/in/mamadou-lamine-diallo-ba1636358" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social--linkedin">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social--facebook">
              <FaFacebook />
            </a>
            <a href="https://github.com/MadouLamine" target="_blank" rel="noreferrer" aria-label="Github" className="social--github">
              <FaGithub />
            </a>
          </div>

          <div className="home__cta">
            <a className="btn btn-primary" href={monCV} download>
              <FaDownload /> Télécharger CV
            </a>
            <a className="btn" href="#contact">
              <FaPaperPlane /> Me contacter
            </a>
          </div>
        </div>

        <div className="home__right">
          <div className="home__imgWrap">
            <img src="/Images/photo.jpg" alt="Lamine Diallo" className="home__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
