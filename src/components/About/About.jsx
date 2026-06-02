import styles from "./About.module.css";
import profileImage from "../../assets/images/profile-img.jpg";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Title Block with Expandable Underline interaction */}
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Side: Circular Rotating Glow Container */}
          <div className={styles.imageWrapper}>
            <img
              src={profileImage}
              alt="Fiteh Tesfaye"
              className={styles.profileImg}
            />
          </div>

          {/* Right Side: Attractive Engineered Profile Deck */}
          <div className={styles.textBlock}>
            <div className={styles.headerBlock}>
              {/* <h3 className={styles.subtitle}>
                Software Engineering Student & Web Developer
              </h3> */}
              <p className={styles.description}>
                Software Engineering student and AI-Powered Full-Stack Developer
                focused on building intelligent, scalable, and user-centric web
                applications through modern engineering practices and AI-driven
                solutions.
              </p>
            </div>

            <div className={styles.featuresList}>
              {/* Card Pillar 1 */}
              <div className={styles.featureItem}>
                <div className={styles.iconBox}>✓</div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Frontend Engineering</h4>

                  <p className={styles.featureDesc}>
                    Building responsive, high-performance interfaces with modern
                    frameworks and component-based architectures.
                  </p>
                </div>
              </div>

              {/* Card Pillar 2 */}
              <div className={styles.featureItem}>
                <div className={styles.iconBox}>✓</div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Backend Architecture</h4>

                  <p className={styles.featureDesc}>
                    Developing secure APIs, scalable services, and efficient
                    database systems.
                  </p>
                </div>
              </div>

              {/* Card Pillar 3 */}
              <div className={styles.featureItem}>
                <div className={styles.iconBox}>✓</div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>
                    AI & Intelligent Systems
                  </h4>

                  <p className={styles.featureDesc}>
                    Integrating AI capabilities, automation workflows, and cloud
                    technologies into modern applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
