import styles from "./Resume.module.css";

export default function Resume() {
  const educationData = [
    {
      id: 1,
      title: "BSc in Software Engineering",
      date: "2023 - Present",
      institution: "Adama Science and Technology University, Ethiopia",
      details:
        "Data Structures, Algorithms, Databases, Web Development, Artificial Intelligence",
    },
    {
      id: 2,
      title: "AI-Powered Fullstack Development",
      date: "2025 - 2026", // Adjust dates as needed
      institution: "Evangadi",
      details:
        "Fullstack Architecture, API Integrations, AI Tooling, Modern Frameworks",
    },
  ];

  const experienceData = [
    {
      id: 1,
      title: "Full Stack Developer (Personal Projects)",
      date: "2024 - Present",
      institution: "", // Left blank to match screenshot layout
      details:
        "Built multiple full-stack web applications including AI chatbots, CMS systems, and database-driven platforms using modern web technologies.",
    },
  ];

  return (
    <section id="resume" className={styles.resumeSection}>
      <div className={styles.container}>
        {/* Header Section: Title + Download Resume Button */}
        <div className={styles.sectionHeader}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Education & Experience</h2>
            <div className={styles.titleLine}></div>
          </div>

          <a
            href="/Fiteh Tesfaye - Resume-2.pdf"
            download
            className={styles.downloadBtn}
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Two Column Grid Structural Split */}
        <div className={styles.resumeGrid}>
          {/* EDUCATION COLUMN */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.iconBox}>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <h3 className={styles.columnTitle}>Education</h3>
            </div>

            <div className={styles.cardsStack}>
              {educationData.map((item) => (
                <div key={item.id} className={styles.resumeCard}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <span className={styles.dateBadge}>{item.date}</span>
                  <p className={styles.institution}>{item.institution}</p>
                  <p className={styles.details}>{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE COLUMN */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.iconBox}>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className={styles.columnTitle}>Experience</h3>
            </div>

            <div className={styles.cardsStack}>
              {experienceData.map((item) => (
                <div key={item.id} className={styles.resumeCard}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <span className={styles.dateBadge}>{item.date}</span>
                  {item.institution && (
                    <p className={styles.institution}>{item.institution}</p>
                  )}
                  <p className={styles.details}>{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
