"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ishant Nimje. All rights reserved.</p>

        <div className="flex space-x-5 text-xl">
          <Link
            href="https://github.com/ishantnimje"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/ishantnimje"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="mailto:nimjeishant3@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>
    </footer>
  );
}
