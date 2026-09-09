import { profile, aboutBio, skills, leadership } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className={`about__mark reveal ${visible ? "is-visible" : ""}`} ref={ref}>
          <div className="about__photo">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow about__eyebrow">01 · About</p>
          <h2 className="about__heading">
            A little about <span>me</span>.
          </h2>

          <div className="about__bio">
            {aboutBio.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="about__skills">
            {Object.entries(skills).map(([group, items]) => (
              <div className="about__skillgroup" key={group}>
                <p className="about__skillgroup-label">{group}</p>
                <div className="about__pills">
                  {items.map((item) => (
                    <span className="pill about__pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
