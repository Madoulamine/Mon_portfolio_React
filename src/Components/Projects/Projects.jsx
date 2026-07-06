import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Plateforme IST-Mamou',
    img: '/Images/IST_web.png',
    imgAlt: '/Images/IST_mobile.png',
    desc: 'Plateforme web & mobile de Gestion et Suivi des Projets des Étudiants de fin d\'études pour l\'Institut Supérieur de Technologie de Mamou (IST-Mamou). Projet de mémoire de fin de cycle universitaire.',
    tags: ['React', 'Django REST', 'Flutter', 'PostgreSQL', 'Supabase'],
    github: 'https://github.com/MadouLamine',
    demo: '#',
    featured: true,
  },
  {
    title: 'EduFlash (en cours)',
    img: '/Images/EduFlash.PNG',
    desc: 'Plateforme MERN pour apprentissage en ligne, quiz interactifs et communication entre apprenants.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    github: 'https://github.com/MadouLamine',
    demo: '#',
  },
  {
    title: 'Projet de Soutenance IST-Mamou',
    img: '/Images/IST_web.png',
    slides: ['/Images/IST_web.png', '/Images/IST_mobile.png'],
    desc: 'Plateforme centralisée de gestion des projets de fin de cycle pour l\'IST-Mamou. Permet aux étudiants, encadreurs et administrateurs de gérer les projets, les livrables, le suivi d\'avancement, la messagerie et l\'archivage documentaire.',
    tags: ['React', 'Django REST', 'Flutter', 'PostgreSQL', 'Supabase'],
    github: 'https://github.com/MadouLamine',
    demo: '#',
    hasSlider: true,
  },
  {
    title: 'Gestion Département',
    img: '/Images/G_departement.PNG',
    desc: 'Projet professionnel de gestion d\'un département universitaire — étudiants, cours et notes.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/MadouLamine',
    demo: '#',
  },
  {
    title: 'Budget App',
    img: '/Images/Budget.PNG',
    desc: 'Application de gestion de budget personnel avec suivi des dépenses et revenus en temps réel.',
    tags: ['JavaScript', 'Bootstrap', 'LocalStorage'],
    github: 'https://github.com/MadouLamine',
    demo: '#',
  },
  {
    title: 'Tic Tac Toe',
    img: '/Images/Tic_Tac.PNG',
    desc: 'Jeu Tic Tac Toe multijoueur local avec animaions et score.',
    tags: ['JavaScript', 'Bootstrap', 'CSS'],
    github: 'https://github.com/MadouLamine',
    demo: '#',
  },
  {
    title: 'Jeux Interactifs',
    img: '/Images/jeux.PNG',
    desc: 'Collection de mini-jeux interactifs développés avec HTML, CSS et JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/MadouLamine',
    demo: '#',
  },
];

/* ─── Slider card for the soutenance project ─── */
const SliderCard = ({ project, visible, index }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide(prev => (prev + 1) % project.slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [project.slides.length]);

  return (
    <article
      className={`project-card ${visible ? 'card--in' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="project-card__imgWrap project-card__slider">
        {project.slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${project.title} - vue ${i + 1}`}
            className={`project__img slider__img ${i === slide ? 'slider__img--active' : ''}`}
          />
        ))}
        {/* Slider dots */}
        <div className="slider__dots">
          {project.slides.map((_, i) => (
            <button
              key={i}
              className={`slider__dot ${i === slide ? 'slider__dot--active' : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="project-card__overlay">
          <div className="overlay-content">
            <p className="project-card__desc">{project.desc}</p>
            <div className="project-card__links">
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                <FaGithub /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-card__content">
        <h3>{project.title}</h3>
        <div className="project-card__tags">
          {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
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
    <section className={`projects ${visible ? 'visible' : ''}`} id="projects" ref={ref}>
      <h2 className="section__title">Mes Projets</h2>
      <span className="section__title-line"></span>
      <p className="section__subtitle">Ce que j'ai construit</p>

      <div className="projects__grid">

        {/* Featured project — projet de mémoire */}
        {projects.filter(p => p.featured).map((p) => (
          <article className="project-card project-card--featured" key={p.title}>
            <div className="project-card__imgs">
              <img src={p.img} alt={`${p.title} web`} className="feat__img feat__img--web" />
              <img src={p.imgAlt} alt={`${p.title} mobile`} className="feat__img feat__img--mobile" />
            </div>
            <div className="project-card__body">
              <span className="project-card__badge">⭐ Projet de Mémoire</span>
              <h3>{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="project-card__links">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* Other projects */}
        <div className="projects__others">
          {projects.filter(p => !p.featured).map((p, i) =>
            p.hasSlider ? (
              <SliderCard key={p.title} project={p} visible={visible} index={i} />
            ) : (
              <article
                className={`project-card ${visible ? 'card--in' : ''}`}
                key={p.title}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="project-card__imgWrap">
                  <img src={p.img} alt={p.title} className="project__img" />
                  <div className="project-card__overlay">
                    <div className="overlay-content">
                      <p className="project-card__desc">{p.desc}</p>
                      <div className="project-card__links">
                        <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                          <FaGithub /> GitHub
                        </a>
                        <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">
                          <FaExternalLinkAlt /> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-card__content">
                  <h3>{p.title}</h3>
                  <div className="project-card__tags">
                    {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </article>
            )
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;
