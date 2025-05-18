"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-white dark:bg-[#0a0a0a] flex items-center justify-center"
    >
      <div className="max-w-3xl w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          Contact Me
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-10"
        >
          I’m currently open to new opportunities. Feel free to reach out if you have a question or just want to connect!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-6"
          action="mailto:nimjeishant3@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-6 mt-10 text-3xl text-gray-700 dark:text-gray-300"
        >
          <a
            href="mailto:nimjeishant3@gmail.com"
            aria-label="Email"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
