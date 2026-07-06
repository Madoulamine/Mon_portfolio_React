import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaFigma,
  FaPhp, FaJava, FaGitAlt, FaCode, FaChrome, FaPaintBrush, FaServer,
  FaDatabase, FaTools, FaDocker, FaPython, FaCalculator, FaStar
} from 'react-icons/fa';
import {
  SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiOracle,
  SiTailwindcss, SiDjango, SiPostgresql, SiFirebase, SiCplusplus,
  SiJupyter
} from 'react-icons/si';

const cards = [
  {
    title: 'FRONT-END',
    icon: <FaPaintBrush />,
    color: '#e34c26',
    skills: [
      { icon: <FaHtml5 />, name: 'HTML 5', color: '#e34c26', stars: 5 },
      { icon: <FaCss3Alt />, name: 'CSS 3', color: '#264de4', stars: 5 },
      { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952b3', stars: 4 },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#38bdf8', stars: 4 },
      { icon: <FaJsSquare />, name: 'JavaScript', color: '#f0db4f', stars: 4 },
      { icon: <FaReact />, name: 'React', color: '#61dafb', stars: 4 },
      { icon: <FaFigma />, name: 'Figma', color: '#f24e1e', stars: 3 },
    ],
  },
  {
    title: 'BACK-END',
    icon: <FaServer />,
    color: '#4db5ff',
    skills: [
      { icon: <FaPhp />, name: 'PHP', color: '#8993be', stars: 4 },
      { icon: <FaJava />, name: 'Java', color: '#f89820', stars: 3 },
      { icon: <FaPython />, name: 'Python', color: '#3776ab', stars: 4 },
      { icon: <SiNodedotjs />, name: 'Node.js', color: '#8cc84b', stars: 4 },
      { icon: <SiExpress />, name: 'Express.js', color: '#aaa', stars: 3 },
      { icon: <SiDjango />, name: 'Django REST', color: '#092e20', stars: 4 },
    ],
  },
  {
    title: 'BASE DE DONNÉES',
    icon: <FaDatabase />,
    color: '#f89820',
    skills: [
      { icon: <SiMysql />, name: 'MySQL', color: '#00758f', stars: 5 },
      { icon: <SiMongodb />, name: 'MongoDB', color: '#4db33d', stars: 3 },
      { icon: <SiOracle />, name: 'Oracle', color: '#f80000', stars: 3 },
      { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791', stars: 4 },
      { icon: <SiFirebase />, name: 'Firebase', color: '#ffca28', stars: 3 },
    ],
  },
  {
    title: 'LANGAGES & OUTILS',
    icon: <FaTools />,
    color: '#a29bfe',
    skills: [
      { icon: <SiCplusplus />, name: 'C / C++', color: '#00599c', stars: 4 },
      { icon: <FaCode />, name: 'VS Code', color: '#007acc', stars: 5 },
      { icon: <FaGitAlt />, name: 'Git & GitHub', color: '#f05032', stars: 4 },
      { icon: <FaDocker />, name: 'Docker', color: '#2496ed', stars: 2 },
      { icon: <SiJupyter />, name: 'Jupyter / Spyder', color: '#f37626', stars: 4 },
      { icon: <FaChrome />, name: 'Chrome DevTools', color: '#4285f4', stars: 5 },
    ],
  },
  {
    title: 'MATHÉMATIQUES & ALGO',
    icon: <FaCalculator />,
    color: '#55efc4',
    skills: [
      { icon: <FaCalculator />, name: 'Algèbre linéaire', color: '#55efc4', stars: 4 },
      { icon: <FaCalculator />, name: 'Probabilités & Stats', color: '#55efc4', stars: 4 },
      { icon: <FaCalculator />, name: 'Algorithmique', color: '#55efc4', stars: 4 },
      { icon: <FaCalculator />, name: 'Analyse numérique', color: '#55efc4', stars: 4 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setVisible(true); }),
      { threshold: 0.1 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`skills ${visible ? 'visible' : ''}`} ref={ref} id="skills">
      <h2 className="section__title">Mes Compétences</h2>
      <span className="section__title-line"></span>
      <p className="section__subtitle">Technologies &amp; Outils que je maîtrise</p>

      <div className="skills__container">
        <div className="skills__grid">
          {cards.map((card, idx) => (
            <article
              key={card.title}
              className={`skill-card ${visible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${idx * 120}ms`,
                '--card-accent': card.color,
              }}
            >
              <div className="skill-card__header">
                <div className="skill-card__icon">{card.icon}</div>
                <h4>{card.title}</h4>
              </div>

              <ul className="skill-list">
                {card.skills.map((s) => (
                  <li key={s.name} className="skill-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                      <span className="skill-item__icon" style={{ color: s.color }}>{s.icon}</span>
                      <span className="skill-item__name">{s.name}</span>
                    </div>
                    <div className="skill-item__stars" style={{ display: 'flex', gap: '2px' }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} color={i < s.stars ? '#ffc107' : '#32325d'} size={12} />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
