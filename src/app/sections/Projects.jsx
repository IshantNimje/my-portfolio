"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import ProjectModal from "../components/ProjectModal";
import Image from "next/image";

const projects = [
  {
    title: "Grocery Website",
    description:
      "An online grocery platform built with HTML, CSS, JS, PHP, and MySQL. Includes product listing, cart, and checkout functionality.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/your-username/grocery-website",
    live: "https://your-grocery-site.freehost.com",
    image: "/projects/grocery.png",
  },
  {
    title: "Notes App (MERN)",
    description:
      "A full-stack notes app with CRUD operations, search functionality, and a MongoDB backend.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/your-username/notes-app",
    live: "",
    image: "/projects/notes.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern one-page developer portfolio built with Next.js and Tailwind CSS. Includes animations, responsive layout, and dark mode.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/your-username/portfolio",
    live: "https://my-portfolio-green-sigma-40.vercel.app/",
    image: "/projects/portfolio.jpg",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 dark:bg-[#0b0b0b] px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              transitionSpeed={1000}
              className="h-full"
            >
              <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto text-blue-600 dark:text-blue-400 text-lg">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
