import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import useJson from "../useJson.js";

const icons = {
  home: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M9 7h6",
  users: "M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M21 20v-1a4 4 0 0 0-3-3.9M16 4.1a3.5 3.5 0 0 1 0 6.8",
  trophy: "M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3",
  bell: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21h4",
  pen: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  );
}

const stats = [
  ["5–12", "Classes taught"],
  ["WBBSE", "& WBCHSE curriculum"],
  ["24×7", "Residential care"],
  ["Barasat", "Dadpur, North 24 Parganas"],
];

const highlights = [
  { i: "home", t: "Residential Campus", d: "A safe, caring home away from home with supervised hostels and nutritious meals." },
  { i: "book", t: "West Bengal Board", d: "A structured curriculum for Classes 5 to 12 with regular assessments." },
  { i: "users", t: "Dedicated Faculty", d: "Experienced teachers who mentor every student personally." },
  { i: "trophy", t: "Holistic Growth", d: "Sports, arts and values alongside strong academics." },
];

const links = [
  { to: "/admissions", i: "pen", label: "Apply for Admission", d: "Process, forms and fees" },
  { to: "/events", i: "bell", label: "Latest Notices", d: "Circulars and exam updates" },
  { to: "/resources", i: "book", label: "Student Resources", d: "Study material and exam prep" },
  { to: "/contact", i: "phone", label: "Contact Us", d: "Visit, call or write to us" },
];

export default function Home() {
  const { data } = useJson("/data/events.json");
  const latest = [...data].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <>
      <Hero />

      <div className="container stats" role="list">
        {stats.map(([a, b]) => (
          <div className="stat" role="listitem" key={a}>
            <strong>{a}</strong>
            <span>{b}</span>
          </div>
        ))}
      </div>

      <section className="section container split">
        <div>
          <p className="kicker">Our Vision</p>
          <h2>Education with character, care and purpose</h2>
          <p>
            We aim to be a centre of excellence where every child grows into a confident, compassionate
            and capable citizen, rooted in strong values and guided by a love of learning.
          </p>
          <Link to="/about" className="more">Read about our mission →</Link>
        </div>
        <blockquote className="quote">
          “A school is not only where children learn — it is where they belong.”
        </blockquote>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="heading">
            <p className="kicker">Why choose us</p>
            <h2>Highlights</h2>
          </div>
          <div className="grid">
            {highlights.map((h) => (
              <article className="card feature" key={h.t}>
                <span className="icon-wrap"><Icon name={h.i} /></span>
                <h3>{h.t}</h3>
                <p>{h.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="heading">
          <p className="kicker">Get started</p>
          <h2>Quick Links</h2>
        </div>
        <div className="grid">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="card link-card">
              <span className="icon-wrap"><Icon name={l.i} /></span>
              <span><strong>{l.label}</strong><small>{l.d}</small></span>
            </Link>
          ))}
        </div>
      </section>

      {latest.length > 0 && (
        <section className="section alt">
          <div className="container">
            <div className="heading">
              <p className="kicker">News</p>
              <h2>Latest Updates</h2>
            </div>
            <ul className="plain updates">
              {latest.map((e) => (
                <li key={e.id}>
                  <time dateTime={e.date}>
                    {new Date(e.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </time>
                  <span>{e.title}</span>
                  <span className={`tag tag-${e.type}`}>{e.type}</span>
                </li>
              ))}
            </ul>
            <Link to="/events" className="more">View all notices →</Link>
          </div>
        </section>
      )}

      <section className="cta">
        <div className="container">
          <h2>Give your child a place to grow</h2>
          <p>Admissions are open for Classes 5 to 12. Visit our campus or get in touch today.</p>
          <div className="actions center">
            <Link className="btn btn-lg" to="/admissions">Start Admission</Link>
            <Link className="btn btn-outline btn-lg" to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
