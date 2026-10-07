import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import useJson from "../useJson.js";

const types = ["all", "pdf", "image", "video"];

function Item({ r }) {
  return (
    <article className="card">
      <span className="tag">{r.type}</span>
      <h3>{r.title}</h3>
      {r.description && <p>{r.description}</p>}
      {r.type === "image" && <img className="media" src={r.url} alt={r.title} loading="lazy" />}
      {r.type === "video" && <video className="media" src={r.url} controls preload="metadata" aria-label={r.title} />}
      <a className="btn btn-sm" href={r.url} target="_blank" rel="noopener noreferrer" {...(r.type === "pdf" ? { download: true } : {})}>
        {r.type === "pdf" ? "Download PDF" : "Open"}
      </a>
    </article>
  );
}

export default function Resources() {
  const { data, loading, error } = useJson("/data/resources.json");
  const [cat, setCat] = useState("All");
  const [type, setType] = useState("all");
  const [q, setQ] = useState("");
  const cats = ["All", ...new Set(data.map((r) => r.category))];
  const items = data.filter(
    (r) =>
      (cat === "All" || r.category === cat) &&
      (type === "all" || r.type === type) &&
      r.title.toLowerCase().includes(q.trim().toLowerCase())
  );

  return (
    <>
      <PageHeader title="Student Resources" subtitle="Study materials, notices and exam preparation" />
      <section className="section container">
        <div className="toolbar">
          <label>
            <span className="sr-only">Search resources</span>
            <input type="search" placeholder="Search resources" value={q} onChange={(e) => setQ(e.target.value)} />
          </label>
          <label>
            Category{" "}
            <select value={cat} onChange={(e) => setCat(e.target.value)}>{cats.map((c) => <option key={c}>{c}</option>)}</select>
          </label>
          <label>
            Type{" "}
            <select value={type} onChange={(e) => setType(e.target.value)}>{types.map((t) => <option key={t}>{t}</option>)}</select>
          </label>
        </div>
        {loading && <p>Loading…</p>}
        {error && <p role="alert">Unable to load resources.</p>}
        {!loading && !error && items.length === 0 && <p>No resources found.</p>}
        <div className="grid">{items.map((r) => <Item key={r.id} r={r} />)}</div>
      </section>
    </>
  );
}
