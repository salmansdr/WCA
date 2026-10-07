import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { site } from "../config.js";

const empty = { name: "", email: "", phone: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.phone && !/^[+\d][\d\s-]{7,14}$/.test(v.phone)) e.phone = "Enter a valid phone number.";
  if (v.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // Replace with a real API call (e.g. fetch("/api/inquiry", { method: "POST", ... })).
    setSent(true);
    setValues(empty);
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {props.as === "textarea" ? (
        <textarea id={name} name={name} rows="5" value={values[name]} onChange={change} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} />
      ) : (
        <input id={name} name={name} type={props.type || "text"} value={values[name]} onChange={change} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} />
      )}
      {errors[name] && <span id={`${name}-err`} className="error">{errors[name]}</span>}
    </div>
  );

  return (
    <>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />
      <section className="section container grid two">
        <div>
          <h2>Get in touch</h2>
          <address>
            <p>{site.address}</p>
            <p>Phone: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></p>
            <p>Email: <a href={`mailto:${site.email}`}>{site.email}</a></p>
          </address>
          <iframe className="map" title="White Crescent Academy location map" src={site.mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
        <form onSubmit={submit} noValidate>
          <h2>Send an inquiry</h2>
          {sent && <p className="success" role="status">Thank you! Your inquiry has been received.</p>}
          {field("name", "Full name")}
          {field("email", "Email", { type: "email" })}
          {field("phone", "Phone (optional)", { type: "tel" })}
          {field("message", "Message", { as: "textarea" })}
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
