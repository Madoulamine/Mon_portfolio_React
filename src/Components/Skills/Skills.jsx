import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaFigma, FaPhp, FaJava, FaGitAlt, FaCode, FaChrome, FaPaintBrush, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiOracle } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // toggle visible on every intersection change so animations replay
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const cards = [
    {
      title: 'FRONT-END',
      // icone de type 'paint' pour représenter le design/front
      icon: <FaPaintBrush />,
      skills: [
        { icon: <FaHtml5 />, name: 'HTML' },
        { icon: <FaCss3Alt />, name: 'CSS' },
        { icon: <FaBootstrap />, name: 'BOOTSTRAP' },
        { icon: <FaJsSquare />, name: 'JAVASCRIPT' },
        { icon: <FaReact />, name: 'REACT' },
        { icon: <FaFigma />, name: 'FIGMA' }
      ]
    },
    {
      title: 'BACK-END',
      // icone 'serveur' pour backend
      icon: <FaServer />,
      skills: [
        { icon: <FaPhp />, name: 'PHP' },
        { icon: <FaJava />, name: 'JAVA' },
        { icon: <SiNodedotjs />, name: 'NODE.JS' },
        { icon: <SiExpress />, name: 'EXPRESS.JS' }
      ]
    },
    {
      title: 'BASE DE DONNEES',
      // icone 'backup' / base de données
      icon: <FaDatabase />,
      skills: [
        { icon: <SiMysql />, name: 'MYSQL' },
        { icon: <SiMongodb />, name: 'MONGODB' },
        { icon: <SiOracle />, name: 'ORACLE' }
      ]
    },
    {
      title: 'OUTILS',
      // icone 'tools' pour la section outils
      icon: <FaTools />,
        skills: [
        { icon: <FaCode />, name: 'VSCODE' },
        { icon: <FaGitAlt />, name: 'GIT & GITHUB' },
        { icon: <FaChrome />, name: 'CHROME' }
      ]
    }
  ];

  return (
    <section className={`skills ${visible ? 'visible' : ''}`} ref={ref} id="skills">
      <h2 className="skills__title">MES COMPETENCES PROFESSIONNELLES</h2>

      <div className="skills__container">
        <div className="skills__grid">
          {cards.map((card, idx) => {
            // determine entrance direction
            let from = 'from-top';
            if (idx === 2) from = 'from-left';
            if (idx === 3) from = 'from-right';

            return (
              <article
                key={card.title}
                className={`skill-card ${from} ${visible ? 'visible' : ''}`}
                // increase stagger so animations are slower and more professional
                style={{ transitionDelay: `${idx * 300 + 120}ms` }}
              >
                <div className="skill-card__header">
                  <div className="skill-card__icon">{card.icon}</div>
                  <h4>{card.title}</h4>
                </div>

                <ul className="skill-list">
                  {card.skills.map((s) => (
                    <li key={s.name} className="skill-item">
                      <span className="skill-item__icon">{s.icon}</span>
                      <span className="skill-item__name">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
