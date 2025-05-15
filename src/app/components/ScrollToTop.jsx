"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        p-3 rounded-full bg-blue-600 text-white
        shadow-lg hover:bg-blue-700 focus:outline-none
        transition-opacity duration-300
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        animate-fadeIn
      `}
      aria-label="Scroll to top"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
