import { useEffect, useState } from "react"
import wasabi from "@/assets/wasabi.png"
import bananaImage from "@/assets/events/banana.png"
import kickstartImage from "@/assets/events/kickstart.jpg"
import lexImage from "@/assets/events/lex.png"
import mcitsImage from "@/assets/events/mcits.jpg"
import olympiadImage from "@/assets/events/olympiad.jpg"
import stemazingImage from "@/assets/events/stemazing.jpg"
import tlnImage from "@/assets/events/tln.png"
import babaylanCertificate from "@/assets/certificates/babaylan.png"
import dictCertificate from "@/assets/certificates/dict.png"
import olympiadCertificate from "@/assets/certificates/olympiad.png"
import promptCertificate from "@/assets/certificates/prompt1.png"
import promptCourseCertificate from "@/assets/certificates/prompt2.png"
import svfoCertificate from "@/assets/certificates/svfo.png"
import tlnCertificate from "@/assets/certificates/tln.png"
import {
  ArrowUp,
  Award,
  BookOpen,
  Briefcase,
  Camera,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  FolderOpen,
  GraduationCap,
  Leaf,
  Mail,
  Menu,
  MessageCircle,
  Newspaper,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Wrench,
} from "lucide-react"

type ModalItem = {
  type: "event" | "project" | "certificate"
  title: string
  description: string
  meta?: string
  tags?: string[]
  image?: string
}

type EventItem = {
  title: string
  meta: string
  description: string
  accent: string
  badge?: string
  image: string
}

const nav = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Leadership", "leadership"],
  ["Achievements", "achievements"],
  ["Events", "events"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
]

const events: EventItem[] = [
  {
    title: "IT Olympiad 2026",
    meta: "Competition · Data Mining",
    description: "2nd Place",
    accent: "award",
    badge: "2nd Place",
    image: olympiadImage,
  },
  {
    title: "Mindanao Conference for IT Students",
    meta: "Conference · 2026",
    description: "Mindanao Conference for Information Technology Students.",
    accent: "conference",
    image: mcitsImage,
  },
  {
    title: "KickSTART Mindanao",
    meta: "Innovation / Startup · 2026",
    description: "Team1 Avalanche Conect @ START-DOST.",
    accent: "startup",
    image: kickstartImage,
  },
  {
    title: "TLN Cybersecurity Challenge",
    meta: "Hackathon · 2026",
    description: "DevPost Hackathon.",
    accent: "cyber",
    image: tlnImage,
  },
  {
    title: "LexHack 2026",
    meta: "Hackathon · 2026",
    description: "DevPost Hackathon.",
    accent: "hack",
    image: lexImage,
  },
  {
    title: "Banana Hacks",
    meta: "Hackathon · 2026",
    description: "DevPost Hackathon.",
    accent: "banana",
    image: bananaImage,
  },
  {
    title: "STEMazing 2024",
    meta: "Competition / Research · Davao de Oro Festival of Talents",
    description:
      "Applied research, data interpretation, critical thinking, and innovative problem-solving to develop and present a solution to a real-world problem.",
    accent: "research",
    image: stemazingImage,
  },
]

const projects = [
  {
    title: "Cuarta",
    year: "2026–2027",
    category: "Featured · FinTech",
    description:
      "Django-based personal finance project focused on budgeting, expense tracking, savings goals, and financial analytics using the 50/30/20 budgeting approach.",
    tags: ["Django", "Data", "Finance"],
    featured: true,
  },
  {
    title: "USeP ePark",
    year: "2026",
    category: "Information System",
    description:
      "QR-based parking management system featuring reservations, real-time occupancy tracking, and role-based access.",
    tags: ["QR", "Access control"],
  },
  {
    title: "RentaBike",
    year: "2026",
    category: "Management System",
    description:
      "QR-based bicycle rental and inventory management system for borrowing, fees, overtime, and rental status.",
    tags: ["QR", "Inventory"],
  },
  {
    title: "GeoPulse",
    year: "2026",
    category: "IoT",
    description:
      "Landslide and Earthquake Risk Disaster Alert System Using Arduino-Based IoT.",
    tags: ["Arduino", "IoT"],
  },
  {
    title: "Bus Route Monitoring System",
    year: "2025",
    category: "Java Simulation",
    description:
      "Java simulation using linked-list data structures and GUI visualization for bus movement and route traversal.",
    tags: ["Java", "GUI"],
  },
  {
    title: "Move Mabini Information System",
    year: "2024–2025",
    category: "Web",
    description:
      "Municipality information website concept organizing public information and services.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
]

const skillGroups: Record<string, string[]> = {
  Development: [
    "Java",
    "C#",
    "SQL",
    "PHP",
    "Python",
    "Laravel",
    "Django",
    ".NET",
  ],
  Data: [
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Microsoft Excel",
    "Jamovi",
    "MySQL",
  ],
  Cybersecurity: ["md5deep", "Nmap", "Kali Linux", "Cloudflared"],
  Tools: [
    "GitHub",
    "VSCode",
    "IntelliJ",
    "MySQL Workbench",
    "Jupyter Notebook",
    "Oracle VirtualBox",
    "Vercel",
    "Figma",
  ],
}

const certificates = [
  {
    title: "DICT XI",
    description:
      "20-hour Building Permit and Certificate of Occupancy Users Training",
    image: dictCertificate,
  },
  {
    title: "DOST-SEI",
    description: "Values Formation Orientation Webinar 2026",
    image: svfoCertificate,
  },
  {
    title: "Prompt Like an Engineer",
    description: "DICT-ITU DTC through Cisco Networking Academy",
    image: promptCertificate,
  },
  {
    title: "Prompt Like an Engineer — Course Completion",
    description: "Cisco Networking Academy",
    image: promptCourseCertificate,
  },
  {
    title: "TLN Cybersecurity Challenge 2026",
    description: "DevPost Hackathon by Tech Literacy Network",
    image: tlnCertificate,
  },
]

function Window({
  title,
  icon,
  children,
  className = "",
}: {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`window ${className}`}>
      <div className="titlebar">
        <span>
          {icon}
          {title}
        </span>
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </section>
  )
}

function Button({
  children,
  className = "",
  onClick,
  type = "button",
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}) {
  return (
    <button
      type={type}
      className={`aero-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function SectionHead({
  kicker,
  title,
  text,
}: {
  kicker: string
  title: string
  text?: string
}) {
  return (
    <div className="section-head">
      <span>{kicker}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export default function App() {
  const [menu, setMenu] = useState(false)
  const [filter, setFilter] = useState("All")
  const [modal, setModal] = useState<ModalItem | null>(null)
  const [query, setQuery] = useState("")
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && setModal(null)
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [])
  const skillList =
    filter === "All"
      ? Object.entries(skillGroups).flatMap(([group, items]) =>
          items.map((name) => ({ name, group })),
        )
      : skillGroups[filter].map((name) => ({ name, group: filter }))

  return (
    <div className="site-shell">
      <div className="sky-decor" aria-hidden="true">
        <span className="cloud c1" />
        <span className="cloud c2" />
        <span className="bubble b1" />
        <span className="bubble b2" />
        <span className="flare" />
      </div>
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-orb">
            <Leaf size={17} />
          </span>
          <span>
            <b>wasabi.sys</b>
            <small>personal desktop</small>
          </span>
        </a>
        <nav className={menu ? "nav open" : "nav"} aria-label="Main navigation">
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="top-actions">
          <a className="status-pill" href="#contact">
            <i /> Open to opportunities
          </a>
          <Button className="menu-button" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={15} /> Welcome to my personal corner of the
              internet
            </div>
            <h1>
              Hi, I’m <span>Trixy.</span>
            </h1>
            <p className="hero-role">
              BS Information Technology Student <i /> Developer <i />
              Data Science Enthusiast
            </p>
            <p className="hero-desc">
              Building useful systems, exploring data, and learning how
              technology can solve real-world problems.
            </p>
            <div className="hero-actions">
              <a className="aero-button primary" href="#projects">
                <FolderOpen /> View my projects
              </a>
              <a className="aero-button" href="#experience">
                <Briefcase /> Explore experience
              </a>
              <a className="aero-button soft" href="#contact">
                <Mail /> Contact me
              </a>
            </div>
            <a
              className="resume-link"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <Download /> Download résumé <small>(coming soon)</small>
            </a>
          </div>
          <div className="mascot-zone">
            <span className="orbit o1" />
            <span className="orbit o2" />
            <span className="spark s1">✦</span>
            <span className="spark s2">✧</span>
            <div className="mascot-frame">
              <div className="frame-gloss" />
              <img
                src={wasabi}
                alt="Pixel art portrait wearing a friendly wasabi mascot hat"
              />
            </div>
            <div className="mascot-label">
              <Leaf size={14} /> powered by wasabi
            </div>
          </div>
        </section>

        <div className="quick-grid">
          {[
            [GraduationCap, "Education", "BS Information Technology"],
            [ShieldCheck, "Focus", "Security · Development · Data"],
            [Trophy, "Achievement", "IT Olympiad — 2nd Place"],
            [Code2, "Projects", "6 selected systems"],
            [Users, "Leadership", "4 student roles"],
          ].map(([Icon, label, value]: any) => (
            <div className="quick-card" key={label}>
              <span>
                <Icon />
              </span>
              <div>
                <small>{label}</small>
                <b>{value}</b>
              </div>
            </div>
          ))}
        </div>

        <section id="about" className="content-section">
          <SectionHead
            kicker="01 / Profile"
            title="About my desktop"
            text="A curious technology student learning at the intersection of security, data, and useful software."
          />
          <div className="about-grid">
            <Window title="profile.txt" icon={<GraduationCap />}>
              <div className="profile-content">
                <div className="profile-avatar">
                  <img
                    src={wasabi}
                    alt="Pixel art portrait wearing a friendly wasabi mascot hat"
                  />
                </div>
                <div>
                  <span className="label">Education</span>
                  <h3>University of Southeastern Philippines</h3>
                  <p>
                    <strong>BS Information Technology</strong>
                    <br />
                    Major in Information Security
                  </p>
                  <div className="education-line">
                    <i />
                    <span>
                      Building a foundation in secure systems, development,
                      data, and digital innovation.
                    </span>
                  </div>
                </div>
              </div>
            </Window>
            <Window title="currently_exploring.app" icon={<Search />}>
              <div className="explore-list">
                {[
                  "Cybersecurity",
                  "Data Analysis",
                  "Web Development",
                  "Information Systems",
                  "Financial Technology",
                  "AI-assisted development",
                ].map((x, i) => (
                  <div key={x}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <b>{x}</b>
                    <i
                      style={
                        { "--p": `${72 + (i % 3) * 8}%` } as React.CSSProperties
                      }
                    />
                  </div>
                ))}
              </div>
            </Window>
          </div>
        </section>

        <section id="experience" className="content-section">
          <SectionHead kicker="02 / Journey" title="Work experiences" />
          <Window title="career_timeline.log" icon={<Briefcase />}>
            <div className="timeline">
              {[
                [
                  "2024",
                  "Encoder — Municipal Health Office",
                  "Data encoding and administrative support.",
                ],
                [
                  "2025",
                  "Administrative Aide — Municipal Treasurer's Office",
                  "Administrative and Excel-based recording work.",
                ],
                [
                  "2026",
                  "Administrative Aide — Information Technology Office",
                  "Administrative and technology-related support.",
                ],
              ].map(([year, role, desc]) => (
                <article key={year}>
                  <div className="time-node">{year}</div>
                  <div>
                    <span>DOLE SPES · Mabini, Davao de Oro</span>
                    <h3>{role}</h3>
                    <p>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </Window>
        </section>

        <section id="leadership" className="content-section">
          <SectionHead
            kicker="03 / Community"
            title="Student leadership"
            text="Learning to lead, listen, organize, and help ideas move forward."
          />
          <div className="leadership-grid">
            {[
              [
                Newspaper,
                "Editor-in-Chief",
                "The Brilliance Publication",
                "Senior High School · 2022–2024",
              ],
              [
                BookOpen,
                "Tutor",
                "Collaborative Orientation and Development in Essential Skills (CODES)",
                "2026–2027",
              ],
              [
                MessageCircle,
                "Secretary",
                "Society of Information Technology Students",
                "2025–2026",
              ],
              [
                Users,
                "Vice Governor",
                "Society of Information Technology Students",
                "2026–2027",
              ],
            ].map(([Icon, role, org, date]: any, i) => (
              <article className={`lead-card c${i}`} key={role}>
                <span>
                  <Icon />
                </span>
                <small>{date}</small>
                <h3>{role}</h3>
                <p>{org}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="events" className="content-section">
          <SectionHead
            kicker="04 / Field notes"
            title="Events & adventures"
            text="Hackathons, competitions, conferences, and places where ideas became practice."
          />
          <div className="event-grid">
            {events.map((event, i) => (
              <article
                className={`event-card ${i === 0 ? "wide" : ""}`}
                key={event.title}
              >
                <button
                  className={`event-image ${event.accent}`}
                  onClick={() => setModal({ type: "event", ...event })}
                  aria-label={`View ${event.title} photos`}
                >
                  <img src={event.image} alt={`${event.title} event`} />
                  {event.badge && (
                    <b className="award-badge">
                      <Trophy /> {event.badge}
                    </b>
                  )}
                </button>
                <div className="event-copy">
                  <small>{event.meta}</small>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <Button onClick={() => setModal({ type: "event", ...event })}>
                    <Camera /> View photos
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="content-section">
          <SectionHead
            kicker="05 / Achievements"
            title="Certificates & awards"
          />
          <div className="achievement-layout">
            <div className="cert-list">
              {certificates.map(({ title, description, image }) => (
                <button
                  key={title}
                  className="certificate"
                  onClick={() =>
                    setModal({ type: "certificate", title, description, image })
                  }
                >
                  <span>
                    <Award />
                  </span>
                  <div>
                    <small>Digital certificate</small>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <b>
                      View certificate <ExternalLink />
                    </b>
                  </div>
                </button>
              ))}
            </div>
            <div className="award-stack">
              <button
                className="featured-award"
                onClick={() =>
                  setModal({
                    type: "certificate",
                    title: "IT Olympiad 2026",
                    description: "Data Mining Competition · 2nd Place",
                    image: olympiadCertificate,
                  })
                }
              >
                <div className="trophy-orb">
                  <Trophy />
                </div>
                <small>Featured award · 2026</small>
                <h3>IT Olympiad</h3>
                <p>Data Mining Competition</p>
                <strong>2nd Place</strong>
                <b className="award-certificate-link">
                  View award certificate <ExternalLink />
                </b>
                <div className="shine" />
              </button>
              <button
                className="babaylan"
                onClick={() =>
                  setModal({
                    type: "certificate",
                    title: "Babaylan",
                    description: "USeP Outstanding Women Nominee",
                    image: babaylanCertificate,
                  })
                }
              >
                <Star />
                <div>
                  <small>Inclusive leadership</small>
                  <h3>Babaylan</h3>
                  <p>USeP Outstanding Women Nominee</p>
                </div>
                <b className="award-certificate-link">
                  View certificate <ExternalLink />
                </b>
              </button>
            </div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <SectionHead
            kicker="06 / Selected work"
            title="Project experience"
            text="Systems shaped by real needs, thoughtful structure, and a drive to keep improving."
          />
          <div className="project-grid">
            {projects.map((p, i) => (
              <article
                className={`project-card ${p.featured ? "featured" : ""}`}
                key={p.title}
              >
                <button
                  className={`project-visual pv${i}`}
                  onClick={() =>
                    setModal({
                      type: "project",
                      title: p.title,
                      description: p.description,
                      meta: `${p.category} · ${p.year}`,
                      tags: p.tags,
                    })
                  }
                >
                  <span className="screen-lines" />
                  <FolderOpen />
                  <small>Project preview</small>
                  {p.featured && <b>Featured</b>}
                </button>
                <div>
                  <span className="project-meta">
                    {p.category} · {p.year}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <Button
                    onClick={() =>
                      setModal({
                        type: "project",
                        title: p.title,
                        description: p.description,
                        meta: `${p.category} · ${p.year}`,
                        tags: p.tags,
                      })
                    }
                  >
                    View details <ChevronRight />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <SectionHead
            kicker="07 / Toolbox"
            title="Skills & technologies"
            text="Browse the tools I use and the technologies I’m learning."
          />
          <Window title="toolbox.exe" icon={<Wrench />}>
            <div className="filter-row">
              {["All", ...Object.keys(skillGroups)].map((x) => (
                <Button
                  key={x}
                  className={filter === x ? "active" : ""}
                  onClick={() => setFilter(x)}
                >
                  {x}
                </Button>
              ))}
            </div>
            <div className="skill-cloud">
              {skillList.map(({ name, group }) => (
                <div className="skill-chip" key={name} tabIndex={0}>
                  <span>
                    {group === "Data" ? (
                      <Database />
                    ) : group === "Cybersecurity" ? (
                      <ShieldCheck />
                    ) : group === "Tools" ? (
                      <Wrench />
                    ) : (
                      <Code2 />
                    )}
                  </span>
                  <b>{name}</b>
                  <small>{group}</small>
                </div>
              ))}
            </div>
          </Window>
        </section>

        <section id="contact" className="content-section contact-section">
          <SectionHead
            kicker="08 / Message center"
            title="Let’s connect"
            text="Interested in working together, discussing technology, or simply saying hello?"
          />
          <div className="contact-grid">
            <div className="contact-copy">
              <div className="mail-orb">
                <Mail />
              </div>
              <h3>My inbox is open.</h3>
              <p>
                Contact details and social links are ready for your information.
              </p>
              {[
                "Email address — placeholder",
                "GitHub profile — placeholder",
                "LinkedIn profile — placeholder",
              ].map((x) => (
                <div className="contact-link" key={x}>
                  <span>{x}</span>
                  <ExternalLink />
                </div>
              ))}
            </div>
            <Window title="new_message.mail" icon={<Mail />}>
              <form onSubmit={(e) => e.preventDefault()}>
                <label>
                  Name
                  <input required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input required type="email" placeholder="you@example.com" />
                </label>
                <label>
                  Message
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message here..."
                  />
                </label>
                <Button type="submit" className="primary">
                  <Send /> Send message
                </Button>
              </form>
            </Window>
          </div>
        </section>
      </main>

      <footer>
        <span>
          <Leaf /> © 2026 Fomalhaut Sanz
        </span>
        <p>Built with curiosity, code, and a little wasabi.</p>
      </footer>
      <a className="back-top" href="#home" aria-label="Back to top">
        <ArrowUp />
      </a>

      {modal && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={() => setModal(null)}
        >
          <div
            className="modal-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="titlebar">
              <span>
                {modal.type === "event" ? (
                  <Camera />
                ) : modal.type === "project" ? (
                  <Code2 />
                ) : (
                  <Award />
                )}
                {modal.type}_viewer.app
              </span>
              <button onClick={() => setModal(null)} aria-label="Close">
                <X />
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                {modal.image ? (
                  <img
                    src={modal.image}
                    alt={`${modal.title} ${modal.type === "certificate" ? "certificate" : "event"}`}
                  />
                ) : (
                  <div>
                    <Camera />
                    <span>
                      {modal.type === "certificate"
                        ? "Certificate image"
                        : "Image placeholder"}
                    </span>
                    <small>Add your image here later</small>
                  </div>
                )}
              </div>
              {modal.type === "project" && (
                <div className="thumbs">
                  <button className="selected" />
                  <button />
                  <button />
                </div>
              )}
              <small className="modal-meta">
                {modal.meta || "Details coming soon"}
              </small>
              <h2 id="modal-title">{modal.title}</h2>
              <p>{modal.description}</p>
              {modal.tags && (
                <div className="tags">
                  {modal.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              )}
              {modal.type === "project" && (
                <div className="detail-grid">
                  {[
                    "Problem — placeholder",
                    "Solution — placeholder",
                    "Key features — placeholder",
                  ].map((x) => (
                    <div key={x}>
                      <b>{x.split(" — ")[0]}</b>
                      <span>{x.split(" — ")[1]}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="modal-actions">
                <Button onClick={() => setModal(null)}>Close</Button>
                {modal.type === "certificate" && modal.image ? (
                  <a
                    className="aero-button primary"
                    href={modal.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink /> Open certificate
                  </a>
                ) : (
                  <Button className="primary">
                    <ExternalLink />{" "}
                    {modal.type === "project"
                      ? "GitHub placeholder"
                      : "Open placeholder"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
