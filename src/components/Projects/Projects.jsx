import styles from "./Projects.module.css";
import intern from "../../assets/images/intern.jpg";
import emailImage from "../../assets/images/email-generator.jpg";
import churchImage from "../../assets/images/church-site.jpg";
import netflixImage from "../../assets/images/netflix.jpg";
import gpt from "../../assets/images/gpt.jpg";
import chatbotImage from "../../assets/images/chatbot-app.jpg";

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Digital Internship Platform",
      description:
        "A comprehensive internship platform connecting students with employers, facilitating internship discovery, application tracking, and interview scheduling.",
      image: intern,
      github: "https://github.com/Fiteh-21/Digital-Internship-Portal.git",
      live: "http://digital-internship.rf.gd/",
      tags: ["HTML", "CSS", "JS", "MySQL", "PHP"],
    },
    {
      id: 2,
      title: "AI Email Generator",
      description:
        "Leverages LLMs to automate professional email drafting based on specific user prompts and context.",
      image: emailImage,
      github: "https://github.com/Fiteh-21/resume-email-generator",
      live: "https://github.com/Fiteh-21/resume-email-generator",
      tags: ["React", "Laravel", "Python"],
    },
    {
      id: 3,
      title: "Addis Alem Mariam Church",
      description:
        "A professional community website built for digital outreach, featuring a responsive and modern design.",
      image: churchImage,
      github:
        "https://github.com/Fiteh-21/Addis-Alem-Mariam-Church-Website.git",
      live: "https://addis-alem-mariam-church.netlify.app/",
      tags: ["React", "JS", "Bootstrap"],
    },
    {
      id: 4,
      title: "Netflix Clone Project",
      description:
        "A Netflix clone project that replicates the core features and user interface of the popular streaming platform, allowing users to browse and watch movies and TV shows.",
      image: netflixImage,
      github: "https://github.com/Fiteh-21/moviedb.git",
      live: "https://moviedbcloneproject.netlify.app/",
      tags: ["React", "TMDB API"],
    },

    {
      id: 5,
      title: "ChatGPT Clone Project",
      description:
        "A modern chat interface that allows users to interact with an AI model in real-time.",
      image: gpt,
      github: "https://github.com/Fiteh-21/GPT-CLONE.git",
      live: "https://chatclone21.netlify.app/",
      tags: ["React", "LLM API", "Node.js", "Express", "MySQL"],
    },

    {
      id: 6,
      title: "Chatbot App",
      description:
        "A modern chat interface that allows users to interact with an AI model in real-time.",
      image: chatbotImage,
      github: "https://github.com/Fiteh-21/ChatBot-App",
      live: "https://github.com/Fiteh-21/ChatBot-App",
      tags: ["Java", "LLM API"],
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Title Block matching the Skills header alignment */}
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.titleLine}></div>
        </div>

        {/* 3-Column Card Layout Structure */}
        <div className={styles.projectsGrid}>
          {projectData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              {/* Image Frame Container */}
              <div className={styles.imageBox}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.cardImage}
                />
              </div>

              {/* Content Box containing Text, Icons, and Badges */}
              <div className={styles.contentBox}>
                {/* Header Row: Title + Action Icons aligned right */}
                <div className={styles.cardHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.actionIcons}>
                    {/* Source Code Repository Icon */}
                    <button
                      className={styles.iconBtn}
                      aria-label="View Source Code"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
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
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                    </button>
                    {/* Live Deployment External Link Icon */}
                    <button
                      className={styles.iconBtn}
                      aria-label="View Live Project"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
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
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </button>
                  </div>
                </div>

                {/* Project Brief Paragraph */}
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                {/* Horizontal row list for technology badges */}
                <div className={styles.tagList}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tagBadge}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
