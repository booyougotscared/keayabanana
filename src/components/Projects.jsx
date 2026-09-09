import { projects } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Projects.css";

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();
  return (
    <article
      className={`project reveal is-${project.color} ${visible ? "is-visible" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div className="project__body">
        <div className="project__number">0{index + 1}</div>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__description">{project.description}</p>

        {project.bullets && (
          <ul className="project__bullets">
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        <div className="project__tech">
          {project.tech.map((t) => (
            <span className="pill project__pill" key={t}>
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a className="project__link" href={project.link} target="_blank" rel="noreferrer">
            View project →
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className={`projects__head reveal ${headVisible ? "is-visible" : ""}`} ref={headRef}>
          <p className="eyebrow">03 · Projects</p>
          <h2>Things I've built</h2>
        </div>

        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
