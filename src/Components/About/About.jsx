import React, { useEffect, useRef, useState } from 'react';
import AboutImage from "../../../public/Images/lamine_a_jour.jpeg";
import './About.css';
import { FaBriefcase, FaProjectDiagram, FaCode } from 'react-icons/fa';

const stats = [
  { icon: <FaBriefcase />, value: '1+', label: "An d'expérience" },
  { icon: <FaProjectDiagram />, value: '6+', label: 'Projets réalisés' },
  { icon: <FaCode />, value: '12+', label: 'Technologies maîtrisées' },
];

const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => setVisible(e.isIntersecting)),
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`about ${visible ? 'visible' : ''}`} ref={ref} id="about">
      <div className="about__head">
        <h2 className="section__title">À Propos de Moi</h2>
        <span className="section__title-line"></span>
        <p className="section__subtitle">Qui suis-je ?</p>
      </div>

      <div className="about__container">
        <div className="about__left">
          <div className="about__imgWrap">
            <img src={AboutImage} alt="Mamadou Lamine Diallo" className="about__img" />
          </div>
        </div>

        <div className="about__right">
          <p className="about__text">
            Étudiant en <span className="accent">Licence 4 — Génie Informatique</span> à l'Institut Supérieur
            de Technologie de Mamou (IST-Mamou), je suis développeur <span className="accent">Full Stack</span> passionné
            par la création d'applications web et mobiles modernes, fiables et centrées sur l'utilisateur.
          </p>
          <p className="about__text">
            Attaché à la qualité du code et au travail d'équipe, je conçois des solutions digitales efficaces
            en utilisant des technologies comme <span className="accent">React, Node.js, Django et Flutter</span>.
            Mon objectif : transformer des idées en produits qui ont un vrai impact.
          </p>

          {/* Stats cards */}
          <div className="about__stats">
            {stats.map((s, i) => (
              <div className="about__stat-card" key={i} style={{ transitionDelay: `${i * 150 + 300}ms` }}>
                <span className="stat__icon">{s.icon}</span>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          <a className="btn btn-primary" href="#projects">Voir mes Projets</a>
        </div>
      </div>
    </section>
  );
};

export default About;
