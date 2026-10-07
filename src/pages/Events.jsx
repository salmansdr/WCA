import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import useJson from "../useJson.js";

const tabs = [
  { id: "all", label: "All" },
  { id: "event", label: "Events" },
  { id: "circular", label: "Circulars" },
  { id: "exam", label: "Exam Updates" },
];

export default function Events() {
  const { data, loading, error } = useJson("/data/events.json");
  const [tab, setTab] = useState("all");
  const items = data
    .filter((e) => tab === "all" || e.type === tab)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader title="Events & Notices" subtitle="School events, circulars and exam updates" />
      <section className="section container">
        <div className="filters" role="group" aria-label="Filter notices">
          {tabs.map((t) => (
            <button key={t.id} className={`chip ${tab === t.id ? "active" : ""}`} aria-pressed={tab === t.id} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        {loading && <p>Loading…</p>}
        {error && <p role="alert">Unable to load notices. Please try again later.</p>}
        {!loading && !error && items.length === 0 && <p>No items to show.</p>}
        <ul className="plain stack">
          {items.map((e) => (
            <li key={e.id} className="card notice">
              <span className={`tag tag-${e.type}`}>{e.type}</span>
              <h3>{e.title}</h3>
              <time dateTime={e.date}>{new Date(e.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</time>
              <p>{e.description}</p>
              {e.file && <a href={e.file} target="_blank" rel="noopener noreferrer">Download PDF</a>}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
