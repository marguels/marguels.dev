"use client";
import styles from "./header.module.css";
import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const handleScroll = () => {
      var winScroll = document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      const scrollbar = document.getElementById("scrollbar");
      if (scrollbar) {
        scrollbar.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div id="scrollbar" className={styles.scrollbar}></div>;
}
