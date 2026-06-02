import styles from "./Skills.module.css";

export default function Skills() {
  const skillData = [
    {
      id: 1,
      name: "HTML5",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "CSS3",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 6V12L16 14" />
        </svg>
      ),
    },

    {
      id: 3,
      name: "JavaScript",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "React",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <ellipse
            rx="11"
            ry="4.2"
            cx="12"
            cy="12"
            transform="rotate(0 12 12)"
          />
          <ellipse
            rx="11"
            ry="4.2"
            cx="12"
            cy="12"
            transform="rotate(60 12 12)"
          />
          <ellipse
            rx="11"
            ry="4.2"
            cx="12"
            cy="12"
            transform="rotate(120 12 12)"
          />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      id: 5,
      name: "Bootstrap",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9h5a3 3 0 0 1 0 6H9z" />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Node.js",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      id: 7,
      name: "Python",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Official Programmer Code Bracket Icon structure */}
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      id: 8,
      name: "Java",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <path d="M6 1v3" />
          <path d="M10 1v3" />
          <path d="M14 1v3" />
        </svg>
      ),
    },
    {
      id: 9,
      name: "SQL",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
    },
    {
      id: 10,
      name: "AI / LLM",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Precision Engineering Neural Node Vector */}
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6a6 6 0 0 1 6 6c0 1.74-1.03 2.53-1.63 3.1-.6.57-.87.9-.87 1.9H8.5c0-1 0-1.33-.87-1.9C7.03 14.53 6 13.74 6 12a6 6 0 0 1 6-6z" />
          <circle cx="10" cy="11" r="1" fill="currentColor" />
          <circle cx="14" cy="11" r="1" fill="currentColor" />
          <circle cx="12" cy="14" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 11,
      name: "Git",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 15V9a4 4 0 0 0-4-4H9" />
          <path d="M6 9v6" />
        </svg>
      ),
    },
    {
      id: 12, // Adjust id based on your array sequence
      name: "PHP",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Clean Elephant silhouette representing PHP */}
          <path d="M4 11a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v3a2 2 0 0 0 2 2h1a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1" />
          <path d="M9 16H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1" />
          <path d="M12 6c0-2-1.5-3-3.5-3S5 4 5 6" />
          <circle cx="7.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        {/* Underline interactive title layout */}
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <div className={styles.titleLine}></div>
        </div>

        {/* Clean, Uniform Grid Layout matching image_fe0dc9.png */}
        <div className={styles.skillsGrid}>
          {skillData.map((skill) => (
            <div key={skill.id} className={styles.skillCard}>
              <div className={styles.iconBox}>{skill.svg}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
