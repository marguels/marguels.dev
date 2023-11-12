"use client";
import React, { useEffect, useState } from 'react';
import { TableOfContents } from "@/interfaces/post";

interface SidebarProps {
  toc: TableOfContents[];
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
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-70px 0px 0px 0px', // Adjust this value to the height of your header
        threshold: 0.8
      } // Adjust this value if needed
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
    <div className="sidebar">
      {toc.map((heading, index) => (
        <a
          href={`#${heading.id}`}
          key={index}
          onClick={(event) => handleClick(heading.id, event)}
          className={heading.id === activeId ? 'active-side-button' : ''}
        >
          {heading.text}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
