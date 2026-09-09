import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="grain" />
      <div className="container footer__inner">
        <div className="footer__top">
          <p className="eyebrow footer__eyebrow">05 · Contact</p>
          <h2 className="footer__heading">
            Let's build something <span>together</span>.
          </h2>

          <div className="footer__links">
            <a className="btn btn--solid" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn--solid" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

        </div>

        <div className="footer__bottom">
          <p>© {year} {profile.name}</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
