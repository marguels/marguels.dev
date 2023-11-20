"use client";
import React, { useEffect, useRef } from "react";

export const PostContent = ({ contentHtml }: { contentHtml: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.matches(".post-image")) {
        target.classList.toggle("zoomed");
        if (overlayRef.current) {
          overlayRef.current.classList.toggle("active");
        }
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
      <div ref={overlayRef} className="overlay" />
    </>
  );
};
