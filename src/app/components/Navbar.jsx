"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active link on scroll
      const sections = ["hero", "about", "projects", "resume", "contact"];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll to section
  const handleLinkClick = (section) => {
    setActive(section);
    setMobileMenuOpen(false);

    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className={`text-2xl font-bold cursor-pointer select-none transition-colors duration-500 ${
            scrolled ? "text-blue-600" : "text-white"
          }`}
          onClick={() => handleLinkClick("hero")}
        >
          MyPortfolio
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 font-medium transition-colors duration-500 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {["hero", "about", "projects", "resume", "contact"].map((section) => (
            <li key={section}>
              <button
                className={`relative py-1 focus:outline-none transition-colors duration-300 ${
                  active === section
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
                }`}
                onClick={() => handleLinkClick(section)}
                aria-current={active === section ? "page" : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {active === section && (
                  <span
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full"
                    style={{
                      animation: "slideIn 0.3s ease forwards",
                    }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className={`md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-colors duration-500 ${
            scrolled ? "text-gray-800 hover:bg-gray-200" : "text-white hover:bg-gray-700"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col space-y-2 px-6 py-6 text-gray-800 font-medium">
            {["hero", "about", "projects", "resume", "contact"].map((section) => (
              <li key={section}>
                <button
                  className={`w-full text-left py-2 px-1 rounded focus:outline-none ${
                    active === section
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleLinkClick(section)}
                  aria-current={active === section ? "page" : undefined}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
}
