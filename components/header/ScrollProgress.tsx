"use client";
import styles from "./header.module.css";
import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    console.log("Adding event listener");
    const handleScroll = () => {
      var winScroll = document.documentElement.scrollTop;
      console.log(`winScroll: ${winScroll}`);
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      console.log(`Scrollable height: ${height}`);
      var scrolled = (winScroll / height) * 100;
      console.log(`Scrolled: ${scrolled}%`);
      const scrollbar = document.getElementById("scrollbar");
      if (scrollbar) {
        scrollbar.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      console.log("Removing event listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div id="scrollbar" className={styles.scrollbar}></div>;
}
