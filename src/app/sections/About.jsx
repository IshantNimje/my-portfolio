"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white px-6 py-20 flex flex-col items-center justify-center"
      aria-labelledby="about-heading"
    >
      <motion.h2
        id="about-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 text-center leading-relaxed max-w-4xl mb-12"
      >
        I am a passionate and detail-oriented Full Stack Developer with a strong foundation in frontend and backend technologies.
        I enjoy building responsive, user-friendly websites and solving real-world problems with clean code.
        My skill set includes React, Node.js, MongoDB, MySQL, and modern tools like Tailwind CSS and Next.js.
      </motion.p>

      {/* Tech Stack Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 gap-6 text-5xl text-blue-600"
        role="list"
        aria-label="Technology stack icons"
      >
        <FaHtml5 title="HTML5" role="listitem" aria-label="HTML5 icon" />
        <FaCss3Alt title="CSS3" role="listitem" aria-label="CSS3 icon" />
        <FaJs title="JavaScript" role="listitem" aria-label="JavaScript icon" />
        <FaReact title="React" role="listitem" aria-label="React icon" />
        <FaNodeJs title="Node.js" role="listitem" aria-label="Node.js icon" />
        <SiTailwindcss title="Tailwind CSS" role="listitem" aria-label="Tailwind CSS icon" />
        <SiMongodb title="MongoDB" role="listitem" aria-label="MongoDB icon" />
        <SiMysql title="MySQL" role="listitem" aria-label="MySQL icon" />
        <SiNextdotjs title="Next.js" role="listitem" aria-label="Next.js icon" />
        <FaGithub title="GitHub" role="listitem" aria-label="GitHub icon" />
      </motion.div>
    </section>
  );
}
