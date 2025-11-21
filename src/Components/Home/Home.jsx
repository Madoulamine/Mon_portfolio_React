import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Home = () => {
  const fullName = ' M LAMINE DIALLO ';
  const [typed, setTyped] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger entrance animations
    setMounted(true);

    // typing animation for the name
    let i = 0;
    const speed = 120; // ms per character
    const timer = setInterval(() => {
      setTyped((prev) => prev + fullName.charAt(i));
      i += 1;
      if (i >= fullName.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`home ${mounted ? 'visible' : ''}`}>
      <div className="home__container">
        <div className="home__left">
          <p className="home__greeting">Salut, <span aria-hidden>👋🏻</span></p>

          <h1 className="home__title">Je suis&nbsp;
            <span className="home__name">{typed}<span className="home__cursor">&nbsp;</span></span>
          </h1>
          <p className="home__greeting">Développer avec passion, livrer avec précision</p>
          <div className="home__socials" aria-label="Réseaux sociaux">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github"><FaGithub /></a>
          </div>

          <div className="home__cta">
            <a className="btn" href="#contact">Contact Moi</a>
            <a className="btn btn-primary" href="/CV.pdf" download>Telecharge mon CV</a>
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
