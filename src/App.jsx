import { useEffect, useRef, useState } from "react";
import resume from "./data/resume.js";

const Icon = ({ d, size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d.map((p, i) => <path key={i} d={p} />)}
  </svg>
);

const icons = {
  mail: ["M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z", "M3 7l9 6 9-6"],
  phone: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"],
  linkedin: ["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z", "M2 9h4v12H2z", "M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"],
  file: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6", "M8 13h8", "M8 17h5"],
  pin: ["M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z", "M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  sun: ["M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z", "M12 1v2", "M12 21v2", "M4.2 4.2l1.4 1.4", "M18.4 18.4l1.4 1.4", "M1 12h2", "M21 12h2", "M4.2 19.8l1.4-1.4", "M18.4 5.6l1.4-1.4"],
  moon: ["M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"],
};

// Renders **bold** segments inside a string.
const Rich = ({ text }) =>
  text.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* ignore */ }
  }, [theme]);
  return [theme, setTheme];
}

function ThemeSwitch({ theme, setTheme }) {
  return (
    <div className="theme-switch" role="group" aria-label="Colour theme">
      <button aria-pressed={theme === "light"} onClick={() => setTheme("light")}>
        <Icon d={icons.sun} size={15} /> Light
      </button>
      <button aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>
        <Icon d={icons.moon} size={15} /> Dark
      </button>
    </div>
  );
}

function Tabs({ items, value, onChange, label, size = "md" }) {
  const refs = useRef([]);
  const onKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (i + (e.key === "ArrowRight" ? 1 : items.length - 1)) % items.length;
    onChange(n);
    refs.current[n]?.focus();
  };
  return (
    <div className={`tabs ${size}`} role="tablist" aria-label={label}>
      {items.map((t, i) => (
        <button key={t} ref={(el) => (refs.current[i] = el)} role="tab"
                aria-selected={i === value} tabIndex={i === value ? 0 : -1}
                className={`tab ${i === value ? "on" : ""}`}
                onClick={() => onChange(i)} onKeyDown={(e) => onKey(e, i)}>
          {t}
        </button>
      ))}
    </div>
  );
}

const MAIN_TABS = ["Overview", "Experience", "Skills", "Education & Awards"];

export default function App() {
  const [theme, setTheme] = useTheme();
  const [tab, setTab] = useState(0);
  const [area, setArea] = useState(0);
  const { name, title, location, contact, summary, highlights, experience, skills, education, awards } = resume;

  const pdfUrl = `${import.meta.env.BASE_URL}${resume.resumePdf}`;
  const phoneHref = contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, "")}` : "";
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <div className="page">
      <div className="topbar">
        <ThemeSwitch theme={theme} setTheme={setTheme} />
      </div>

      <div className="shell">
        <aside className="side">
          <div className="avatar" aria-hidden="true">{initials}</div>
          <div className="identity">
            <h1>{name}</h1>
            <p className="role">{title}</p>
            <p className="meta"><Icon d={icons.pin} size={15} /> {location}</p>
          </div>

          <nav className="ctas" aria-label="Contact">
            <a className="btn primary" href={pdfUrl} target="_blank" rel="noopener noreferrer">
              <Icon d={icons.file} /> View Resume
            </a>
            {contact.email && (
              <a className="btn" href={`mailto:${contact.email}`}>
                <Icon d={icons.mail} /> <span>{contact.email}</span>
              </a>
            )}
            {contact.phone && (
              <a className="btn" href={phoneHref}>
                <Icon d={icons.phone} /> <span>{contact.phone}</span>
              </a>
            )}
            {contact.linkedin && (
              <a className="btn" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon d={icons.linkedin} /> <span>LinkedIn</span>
              </a>
            )}
          </nav>
        </aside>

        <main className="main">
          <Tabs items={MAIN_TABS} value={tab} onChange={setTab} label="Resume sections" />

          <div className="panel" role="tabpanel" key={tab}>
            {tab === 0 && (
              <>
                <h2>Personal Summary</h2>
                <p className="summary"><Rich text={summary} /></p>
                <div className="stats">
                  {highlights.map((h) => (
                    <div key={h.value} className="stat">
                      <strong>{h.value}</strong>
                      <span>{h.label}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {tab === 1 && (
              <>
                <div className="job-head">
                  <div>
                    <h2>{experience.role}</h2>
                    <p className="company">{experience.company}, {experience.location}</p>
                  </div>
                  <span className="period">{experience.period}</span>
                </div>
                <Tabs items={experience.sections.map((s) => s.title)} value={area}
                      onChange={setArea} label="Experience areas" size="sm" />
                <ul className="points" key={area}>
                  {experience.sections[area].points.map((p) => (
                    <li key={p}><Rich text={p} /></li>
                  ))}
                </ul>
              </>
            )}

            {tab === 2 && (
              <>
                <h2>Skills</h2>
                <dl className="skills">
                  {skills.map((s) => (
                    <div key={s.group} className="skill-row">
                      <dt>{s.group}</dt>
                      <dd>{s.items.map((i) => <span key={i} className="chip">{i}</span>)}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}

            {tab === 3 && (
              <>
                <h2>Education</h2>
                <div className="edu-grid">
                  {education.map((e) => (
                    <div key={e.degree} className="edu">
                      <h3>{e.degree}</h3>
                      <p className="company">{e.school}</p>
                      <p className="period">{e.period} · {e.score}</p>
                    </div>
                  ))}
                </div>
                <h2 className="gap">Awards</h2>
                <ul className="points">
                  {awards.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
