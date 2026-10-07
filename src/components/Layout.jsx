import { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { site, nav } from "../config.js";

export function Logo({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#0A3D62" />
      <path d="M42 10a22 22 0 1 0 0 44 30 30 0 0 1 0-44z" fill="#fff" />
      <circle cx="46" cy="20" r="3.5" fill="#2ECC71" />
    </svg>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="topbar">
        <div className="container topbar-inner">
          <Link to="/" className="brand" aria-label={`${site.name} home`}>
            <Logo />
            <span>
              <strong>{site.name}</strong>
              <small>Dadpur, Barasat · Classes 5–12 · Residential</small>
            </span>
          </Link>
          <div className="topbar-contact">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>
      <header className="navbar">
        <div className="container navbar-inner">
          <button className="menu-btn" aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
          <nav id="main-nav" className={`nav ${open ? "open" : ""}`} aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"}>{n.label}</NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>{site.name}</h3>
            <p>{site.tagline}</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>{site.address}</p>
            <p><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
          <div>
            <h3>Follow us</h3>
            <ul className="plain">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </footer>
    </>
  );
}
