import { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll positioning to toggle visibility state
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth native scrolling animation
    });
  };

  return (
    <button
      className={`${styles.scrollTopBtn} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
