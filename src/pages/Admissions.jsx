import PageHeader from "../components/PageHeader.jsx";

const steps = [
  "Collect or download the application form.",
  "Submit the completed form with required documents.",
  "Attend the admission interaction / assessment.",
  "Receive the admission decision and pay the fees.",
  "Complete enrolment and hostel allotment (for boarders).",
];

const forms = [
  { label: "Admission Application Form", href: "/library/admissions/admission-form.pdf" },
  { label: "Hostel Application Form", href: "/library/admissions/hostel-form.pdf" },
  { label: "Prospectus", href: "/library/admissions/prospectus.pdf" },
];

const fees = [
  ["Admission fee (one time)", "₹ —"],
  ["Tuition fee (per month)", "₹ —"],
  ["Hostel & meals (per month)", "₹ —"],
  ["Annual development fee", "₹ —"],
];

export default function Admissions() {
  return (
    <>
      <PageHeader title="Admissions" subtitle="Join the White Crescent family" />
      <section className="section container">
        <h2>Admission Process</h2>
        <ol className="narrow">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
      </section>
      <section className="section alt">
        <div className="container grid two">
          <article className="card">
            <h3>Eligibility</h3>
            <ul>
              <li>Admission is open for Classes 5 to 12.</li>
              <li>Age appropriate to the class applied for.</li>
              <li>Previous class marksheet and transfer certificate.</li>
              <li>Birth certificate, address proof and photographs.</li>
            </ul>
          </article>
          <article className="card">
            <h3>Downloadable Forms</h3>
            <ul className="plain">
              {forms.map((f) => (
                <li key={f.href}><a className="btn btn-sm" href={f.href} download>{f.label}</a></li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <section className="section container">
        <h2>Fee Structure</h2>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">Fee structure</caption>
            <thead><tr><th scope="col">Item</th><th scope="col">Amount</th></tr></thead>
            <tbody>{fees.map(([a, b]) => <tr key={a}><th scope="row">{a}</th><td>{b}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="note">Fees are indicative; please confirm amounts with the school office.</p>
      </section>
    </>
  );
}
