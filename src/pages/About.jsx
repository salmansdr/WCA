import PageHeader from "../components/PageHeader.jsx";

const leaders = [
  { name: "Name Surname", role: "Principal" },
  { name: "Name Surname", role: "Vice Principal" },
  { name: "Name Surname", role: "Hostel Superintendent" },
];

const faculty = [
  { dept: "Languages", names: ["Bengali", "English", "Hindi / Arabic"] },
  { dept: "Mathematics & Science", names: ["Mathematics", "Physics", "Chemistry", "Biology"] },
  { dept: "Humanities", names: ["History", "Geography"] },
  { dept: "Co-curricular", names: ["Computer Science", "Physical Education", "Art & Craft"] },
];

export default function About() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Our story, purpose and people" />
      <section className="section container">
        <h2>History</h2>
        <p className="narrow">
          White Crescent Academy was founded in Dadpur, Barasat with the aim of offering quality
          education in a disciplined, nurturing residential setting. Over the years it has grown into a
          school trusted by families across the district. (Replace with the school's official history.)
        </p>
      </section>
      <section className="section alt">
        <div className="container grid two">
          <article className="card"><h3>Mission</h3><p>To provide accessible, value-based education that develops knowledge, character and leadership.</p></article>
          <article className="card"><h3>Vision</h3><p>To shape responsible citizens who contribute positively to society.</p></article>
        </div>
      </section>
      <section className="section container">
        <h2>Leadership</h2>
        <div className="grid">
          {leaders.map((l, i) => (
            <article className="card" key={i}>
              <div className="avatar" aria-hidden="true">{l.role[0]}</div>
              <h3>{l.name}</h3>
              <p>{l.role}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>Faculty</h2>
          <div className="grid">
            {faculty.map((f) => (
              <article className="card" key={f.dept}>
                <h3>{f.dept}</h3>
                <ul>{f.names.map((n) => <li key={n}>{n}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
