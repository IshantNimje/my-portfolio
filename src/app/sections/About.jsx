"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white dark:bg-[#0a0a0a] px-6 py-20 flex flex-col items-center justify-center"
      aria-labelledby="about-heading"
    >
      {/* Heading */}
      <motion.h2
        id="about-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8"
      >
        About Me
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center leading-relaxed max-w-3xl mb-12"
      >
        I’m a Full Stack Developer with a passion for building modern web applications
        and a growing skillset in AWS and cloud technologies. I focus on clean code,
        performance, and scalability — and I’m always learning more.
      </motion.p>

      {/* Skill Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12"
      >
        {[
          {
            title: "Frontend",
            content: "React, Next.js, Tailwind CSS",
            emoji: "💻",
          },
          {
            title: "Backend",
            content: "Node.js, Express",
            emoji: "🛠",
          },
          {
            title: "Database",
            content: "MongoDB, MySQL",
            emoji: "🗃️",
          },
          {
            title: "Cloud",
            content: "AWS (Certified Cloud Practitioner)",
            emoji: "☁️",
            list: ["EC2, S3, IAM, Lambda", "CloudWatch, Route 53", "RDS, VPC"],
          },
          {
            title: "Tools",
            content: "Git, GitHub, Vercel",
            emoji: "🚀",
          },
          {
            title: "Learning",
            content: "CI/CD, Docker, System Design",
            emoji: "📚",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              {item.emoji} {item.title}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{item.content}</p>
            {item.list && (
              <ul className="mt-2 ml-4 list-disc text-sm text-gray-600 dark:text-gray-400">
                {item.list.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </motion.div>

      {/* Tech Stack Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 gap-6 text-4xl sm:text-5xl text-blue-600 dark:text-blue-400"
        role="list"
        aria-label="Technology stack icons"
      >
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaJs title="JavaScript" />
        <FaReact title="React" />
        <FaNodeJs title="Node.js" />
        <SiTailwindcss title="Tailwind CSS" />
        <SiMongodb title="MongoDB" />
        <SiMysql title="MySQL" />
        <SiNextdotjs title="Next.js" />
        <FaGithub title="GitHub" />
        <FaAws title="AWS" />
        <SiDocker title="Docker" />
      </motion.div>
    </section>
  );
}
