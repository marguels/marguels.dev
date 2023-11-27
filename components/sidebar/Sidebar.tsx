"use client";
import React, { useEffect, useState } from "react";
import { TocItem } from "@/interfaces/post";
import styles from "./sidebar.module.css";

interface SidebarProps {
  toc: TocItem[];
}

const handleClick = (id: string, event: React.MouseEvent) => {
  event.preventDefault();
  const element = document.getElementById(id);
  const headerHeight = document.querySelector("header")?.clientHeight || 0;
  const elementPosition = element ? element.offsetTop : 0;
  const offsetPosition = elementPosition - headerHeight - 10;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const Sidebar = ({ toc }: SidebarProps) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "50% 0px 0px 0px",
        threshold: 0.5,
      }
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      toc.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [toc]);

  return (
    <div className={styles.sidebarContainer}>
      <h3 className={styles.tocTitle}>Table of content</h3>
      <div className={styles.outline} />
      <div className={styles.tocItems}>
        {toc.map((heading, index) => {
          const headingClass = `side-button-h${heading.depth + 1}`;
          return (
            <a
              href={`#${heading.id}`}
              key={index}
              onClick={(event) => handleClick(heading.id, event)}
              className={`${styles.sidebarButton} ${
                heading.id === activeId ? styles.activeSideButton : ""
              } ${styles[headingClass]}`}
            >
              {heading.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
