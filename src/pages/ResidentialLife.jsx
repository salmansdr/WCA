import PageHeader from "../components/PageHeader.jsx";

const schedule = [
  ["5:30 AM", "Wake-up, prayers and personal care"],
  ["6:30 AM", "Exercise / physical training"],
  ["7:30 AM", "Breakfast"],
  ["8:30 AM", "School assembly and classes"],
  ["1:00 PM", "Lunch and rest"],
  ["2:00 PM", "Afternoon classes"],
  ["4:30 PM", "Snacks and games"],
  ["6:30 PM", "Evening study (supervised)"],
  ["8:30 PM", "Dinner"],
  ["9:30 PM", "Lights out"],
];

const facilities = [
  { t: "Comfortable Dormitories", d: "Clean, ventilated rooms with study areas and storage." },
  { t: "Nutritious Meals", d: "Hygienic kitchen with balanced, regularly reviewed menus." },
  { t: "Student Care", d: "Resident wardens, first-aid room and a visiting doctor." },
  { t: "Safety & Security", d: "Supervised premises, visitor register and parent communication." },
];

export default function ResidentialLife() {
  return (
    <>
      <PageHeader title="Residential Life" subtitle="A safe and caring home away from home" />
      <section className="section container">
        <h2>Boarding Facilities</h2>
        <div className="grid">
          {facilities.map((f) => (
            <article className="card" key={f.t}><h3>{f.t}</h3><p>{f.d}</p></article>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>Daily Schedule</h2>
          <div className="table-wrap">
            <table>
              <caption className="sr-only">Daily schedule for boarders</caption>
              <thead><tr><th scope="col">Time</th><th scope="col">Activity</th></tr></thead>
              <tbody>{schedule.map(([t, a]) => <tr key={t}><th scope="row">{t}</th><td>{a}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="note">Timings are indicative and may change seasonally.</p>
        </div>
      </section>
      <section className="section container">
        <h2>Student Care</h2>
        <p className="narrow">
          Wardens and teachers monitor each student's health, academic progress and well-being. Parents are
          kept informed through regular updates, scheduled calls and visiting days.
        </p>
      </section>
    </>
  );
}
