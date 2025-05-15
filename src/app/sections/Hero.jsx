"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "/public/profile.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Ishant Nimje</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            A passionate Full Stack Developer crafting web experiences.
          </p>
          <Link
            href="#projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
          style={{ width: "256px", height: "256px" }} // md:w-64 and h-64 = 256px
        >
          <Image
            src={profileImg}
            alt="Ishant Nimje Profile Picture"
            fill
            priority
            sizes="(max-width: 768px) 192px, 256px"
            className="object-cover rounded-full border-4 border-blue-600 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
