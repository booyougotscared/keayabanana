import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const blobs = node.querySelectorAll("[data-depth]");

    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      blobs.forEach((blob) => {
        const depth = parseFloat(blob.dataset.depth);
        blob.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="hero" ref={heroRef}>
      <div className="grain" />

      <div className="hero__blob hero__blob--blue" data-depth="18" />
      <div className="hero__blob hero__blob--gold" data-depth="30" />
      <div className="hero__blob hero__blob--sky" data-depth="12" />
      <div className="hero__ring" data-depth="24" />

      <div className={`container hero__inner ${loaded ? "is-loaded" : ""}`}>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="#projects">
            View projects
          </a>
          <a className="btn" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  );
}
