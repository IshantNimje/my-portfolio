"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Left side - copyright */}
        <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Ishant Nimje. All rights reserved.
        </p>

        {/* Right side - social icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nimjeishant3@gmail.com"
            className="hover:text-blue-600 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
