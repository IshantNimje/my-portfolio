"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Grocery Website",
    description: "An e-commerce grocery store built using HTML, CSS, JavaScript, PHP, and MySQL. It allows users to browse, search, and purchase groceries online.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "#", // Replace with your hosted link
    githubUrl: "#", // Replace with your GitHub repo link
  },
  {
    title: "Portfolio Website",
    description: "My personal developer portfolio to showcase skills, projects, and contact information. Built using Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    liveUrl: "https://my-portfolio-green-sigma-40.vercel.app/",
    githubUrl: "https://github.com/your-username/your-portfolio-repo",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <FiExternalLink /> Live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-700 hover:underline"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
