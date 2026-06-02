
import { useState } from "react";
import useActiveSection from "../../hooks/useActiveSection"; // Adjust path as needed
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Array of section IDs matching the id="" fields on your target HTML sections
  const navItems = ["home", "about", "skills", "projects", "resume", "contact"];

  // Call our scroll tracker hook
  const activeSection = useActiveSection(navItems);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Fiteh Tesfaye</div>

      {/* Desktop Navigation Links */}
      <ul className={styles.navLinks}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, item)}
              className={`${styles.navLink} ${
                activeSection === item ? styles.active : ""
              }`}
            >
              {/* Capitalize first letter */}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle between dark and light themes"
            aria-pressed={theme === "light"}
          >
            {theme === "light" ? (
              <FiMoon className={styles.themeToggleIcon} />
            ) : (
              <FiSun className={styles.themeToggleIcon} />
            )}
          </button>
        </li>
      </ul>

      {/* Hamburger Button (Mobile Only) */}
      <button
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-nav"
      >
        {isMobileMenuOpen ? (
          <FiX className={styles.hamburgerIcon} />
        ) : (
          <FiMenu className={styles.hamburgerIcon} />
        )}
      </button>

      {/* Mobile Navigation Drawer Overlay */}
      <div
        id="mobile-nav"
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <ul className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`${styles.mobileNavLink} ${
                  activeSection === item ? styles.activeMobile : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li className={styles.mobileThemeToggleItem}>
            <button
              onClick={toggleTheme}
              className={styles.mobileThemeToggle}
              aria-label="Toggle between dark and light themes"
              aria-pressed={theme === "light"}
            >
              {theme === "light" ? (
                <>
                  <FiMoon className={styles.themeToggleIcon} />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <FiSun className={styles.themeToggleIcon} />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
