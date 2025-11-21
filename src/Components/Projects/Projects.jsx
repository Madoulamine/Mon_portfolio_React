import './Projects.css';

const Projects = () => {
  const projects = [
    { 
        title: 'Jeux', 
        img: '/Images/jeux.PNG', 
        desc: 'Jeu interactif développé avec HTML, CSS (Bootstrap) et JavaScript.' },
    { 
        title: 'Tic Tac', 
        img: '/Images/Tic_Tac.PNG', 
        desc: 'Jeu Tic Tac Toe réalisé en JavaScript et Bootstrap pour la structure.' 
    },
    { 
        title: 'Budget App', 
        img: '/Images/Budget.PNG', 
        desc: 'Application de gestion de budget en JavaScript et Bootstrapp.' 
    },

    { 
        title: "Gestion departement", 
        img: '/Images/G_departement.PNG', 
        desc: 'Projet professionnel (MySQL, PHP, Bootstrap).' 
    },
    { 
        title: 'WebAssurance', 
        img: '/Images/webAssurance.PNG', 
        desc: 'Application Web (MySQL, Node.js, Bootstrap, JS).' 
    },
    { 
        title: 'EduFLash (en cours)', 
        img: '/Images/EduFlash.PNG', 
        desc: 'Plateforme MERN pour apprentissage en ligne et quiz (en cours).' 
    }
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="projects__title">MES PROJETS PROFESSIONNELS</h1>

      <div className="projects__grid">
        {projects.map((p) => (
          <article
            className={`project-card ${/* active */ ''}`}
            key={p.title}
            onClick={(e) => {
              e.currentTarget.classList.toggle('active');
            }}
          >
            <div className="project-card__inner">
              <div className="project-card__imgWrap" aria-hidden="true">
                <img src={p.img} alt={p.title} className="project__img" />
                <div className="project-card__overlay">
                  <div className="overlay-content">
                    <h3>{p.title}</h3>
                    <p className="project-card__desc">{p.desc}</p>
                  </div>
                </div>
              </div>

              <div className="project-card__content" aria-hidden="true">
                <h3>{p.title}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
