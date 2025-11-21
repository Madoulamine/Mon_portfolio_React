import React, { useEffect, useState } from 'react';
import AboutImage from "../../../public/Images/image1.jpg";
import './About.css';

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    // small entrance animation
    setMounted(true);
  },[]);

  return (
    <section className={`about ${mounted ? 'visible' : ''}`} id="about">
      <div className="about__container">
        <div className="about__left">
          <div className="about__imgWrap">
            <img src={AboutImage} alt="about" className="about__img" />
          </div>
        </div>

        <div className="about__right">
          <p className="about__text home__greeting">
            Développeur <span className="accent">FULL-STACK</span> spécialisé dans la création d’applications web fiables et faciles à utiliser.
            Attaché à la qualité et au travail d'équipe, je conçois des solutions digitales efficaces et vraiment pensées pour l’utilisateur.
          </p>

          <a className="btn btn-primary" href="#projects">Voir mes Projets</a>
        </div>
      </div>
    </section>
  );
}

export default About;
