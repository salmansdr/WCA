import { useCallback, useEffect, useState } from "react";
import useJson from "../useJson.js";

export default function Hero() {
  const { data } = useJson("/data/hero.json");
  const slides = data.slides || [];
  const seconds = data.intervalSeconds || 5;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    if (count < 2 || paused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = setTimeout(() => go(index + 1), seconds * 1000);
    return () => clearTimeout(id);
  }, [count, paused, index, seconds, go]);

  if (count === 0) return <section className="hero-carousel" aria-hidden="true" />;

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <img key={s.src} className={`hero-slide ${i === index ? "active" : ""}`} src={s.src} alt="" aria-hidden="true" loading={i === 0 ? "eager" : "lazy"} />
      ))}
      <h1 className="sr-only">White Crescent Academy, Dadpur, Barasat</h1>
      {count > 1 && (
        <>
          <button className="hero-arrow prev" onClick={() => go(index - 1)} aria-label="Previous slide">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button className="hero-arrow next" onClick={() => go(index + 1)} aria-label="Next slide">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="hero-dots">
            {slides.map((s, i) => (
              <button key={s.src} className={i === index ? "active" : ""} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} aria-current={i === index} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
