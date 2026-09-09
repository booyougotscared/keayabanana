import { useCallback, useEffect, useState } from "react";
import { photography } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Photography.css";

export default function Photography() {
  const [headRef, headVisible] = useReveal();
  const [activeIndex, setActiveIndex] = useState(null);
  const photos = photography.photos;
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + photos.length) % photos.length),
    [photos.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, showPrev, showNext]);

  return (
    <section id="photography" className="photography">
      <div className="container">
        <div
          className={`photography__head reveal ${headVisible ? "is-visible" : ""}`}
          ref={headRef}
        >
          <p className="eyebrow">04 · Behind the Lens</p>
          <h2>Photography</h2>
          <p className="photography__intro">{photography.intro}</p>
        </div>

        <div className="photography__grid">
          {photos.map((photo, i) => (
            <PhotoTile
              photo={photo}
              index={i}
              key={photo.src}
              onOpen={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="lightbox__backdrop" onClick={close} aria-label="Close" />
          <button className="lightbox__close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={showPrev} aria-label="Previous photo">
            ‹
          </button>
          <figure className="lightbox__figure">
            <img src={photos[activeIndex].src} alt={photos[activeIndex].alt} />
            <figcaption>{photos[activeIndex].caption}</figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" onClick={showNext} aria-label="Next photo">
            ›
          </button>
        </div>
      )}
    </section>
  );
}

function PhotoTile({ photo, index, onOpen }) {
  const [ref, visible] = useReveal();
  return (
    <button
      className={`photo-tile photo-tile--${photo.orientation} reveal ${visible ? "is-visible" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${(index % 4) * 0.07}s` }}
      onClick={onOpen}
    >
      <img src={photo.src} alt={photo.alt} loading="lazy" />
      <span className="photo-tile__overlay">
        <span className="photo-tile__caption">{photo.caption}</span>
        <span className="photo-tile__expand" aria-hidden="true">
          ⤢
        </span>
      </span>
    </button>
  );
}
