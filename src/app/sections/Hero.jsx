"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "/public/profile.jpg";
import Link from "next/link";
import { ArrowDownToLine, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-blue-600">Ishant Nimje <span role="img" aria-label="waving hand" className="ml-1">👋</span></span>

          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Full Stack Developer & Aspiring Cloud Engineer
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I build responsive web applications and am currently diving deep into AWS, Docker, and CI/CD pipelines to become a professional Cloud Engineer.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <ArrowDownToLine size={20} /> View Projects
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >
              <Download size={20} /> Resume (PDF)
            </Link>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72"
        >
          <Image
            src={profileImg}
            alt="Profile picture of Ishant Nimje"
            fill
            priority
            sizes="(max-width: 768px) 224px, 288px"
            className="object-cover rounded-full border-4 border-blue-600 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
