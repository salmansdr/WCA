import PageHeader from "../components/PageHeader.jsx";

const levels = [
  { t: "Classes 5–8 (Upper Primary / Middle)", s: ["Bengali", "English", "Mathematics", "Life Science", "Physical Science", "History", "Geography", "Computer Basics"] },
  { t: "Classes 9–10 (Secondary – Madhyamik)", s: ["Bengali", "English", "Mathematics", "Physical Science", "Life Science", "History", "Geography"] },
  { t: "Classes 11–12 (Higher Secondary)", s: ["English", "Bengali", "Streams as offered: Science / Arts / Commerce"] },
];

export default function Academics() {
  return (
    <>
      <PageHeader title="Academics" subtitle="West Bengal Board curriculum, Classes 5–12" />
      <section className="section container">
        <p className="narrow">
          Our teaching follows the syllabus prescribed by the West Bengal Board of Secondary Education
          (WBBSE) and the West Bengal Council of Higher Secondary Education (WBCHSE), supported by regular
          assessments, remedial classes and personal mentoring.
        </p>
        <div className="grid">
          {levels.map((l) => (
            <article className="card" key={l.t}>
              <h3>{l.t}</h3>
              <ul>{l.s.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>Learning Support</h2>
          <ul className="narrow">
            <li>Periodic unit tests, half-yearly and annual examinations</li>
            <li>Supervised evening study hours</li>
            <li>Library, science and computer laboratories</li>
            <li>Board examination preparation for Classes 10 and 12</li>
          </ul>
        </div>
      </section>
    </>
  );
}
