import { useState, useEffect } from "react";

export default function useActiveSection(
  sectionIds,
  options = { rootMargin: "-30% 0px -60% 0px" },
) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];

    const callback = (entries) => {
      entries.forEach((entry) => {
        // If the section takes up the designated sweet-spot area of the viewport
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeSection;
}
