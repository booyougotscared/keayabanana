import { experience, education } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Experience.css";

function TimelineItem({ item, index }) {
  const [ref, visible] = useReveal();
  return (
    <li
      className={`timeline__item reveal ${visible ? "is-visible" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${(index % 4) * 0.06}s` }}
    >
      <span className="timeline__period">{item.period}</span>
      <div className="timeline__body">
        <h3 className="timeline__title">{item.title}</h3>
        <p className="timeline__org">{item.org}</p>
        {item.bullets && (
          <ul className="timeline__bullets">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function Experience() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className={`experience__head reveal ${headVisible ? "is-visible" : ""}`} ref={headRef}>
          <p className="eyebrow">02 · Experience and Education</p>
          <h2>Where I've worked &amp; studied</h2>
        </div>

        <div className="experience__grid">
          <div className="experience__col">
            <p className="experience__col-label">Work Experience</p>
            <ul className="timeline">
              {experience.map((item, i) => (
                <TimelineItem item={item} key={item.org} index={i} />
              ))}
            </ul>
          </div>

          <div className="experience__col">
            <p className="experience__col-label">Education</p>
            <ul className="timeline">
              {education.map((item, i) => (
                <TimelineItem item={item} key={item.org} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
