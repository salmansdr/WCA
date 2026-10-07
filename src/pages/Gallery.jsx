import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import useJson from "../useJson.js";

export default function Gallery() {
  const { data, loading, error } = useJson("/data/gallery.json");
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null);
  const cats = ["All", ...new Set(data.map((g) => g.category))];
  const items = data.filter((g) => cat === "All" || g.category === cat);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const Pic = ({ g }) =>
    g.src ? <img src={g.src} alt={g.title} loading="lazy" /> : <div className="ph" role="img" aria-label={g.title}>{g.title}</div>;

  return (
    <>
      <PageHeader title="Gallery" subtitle="Campus, classrooms and student activities" />
      <section className="section container">
        <div className="filters" role="group" aria-label="Filter gallery">
          {cats.map((c) => (
            <button key={c} className={`chip ${cat === c ? "active" : ""}`} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        {loading && <p>Loading…</p>}
        {error && <p role="alert">Unable to load gallery.</p>}
        <div className="gallery">
          {items.map((g) => (
            <button key={g.id} className="thumb" onClick={() => setActive(g)} aria-label={`View ${g.title}`}>
              <Pic g={g} />
              <span>{g.title}</span>
            </button>
          ))}
        </div>
      </section>
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <Pic g={active} />
            <p>{active.title}</p>
            <button className="btn" autoFocus onClick={() => setActive(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
