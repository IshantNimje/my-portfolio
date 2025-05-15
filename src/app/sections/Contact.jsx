"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-white flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-10"
        >
          Have a question or want to work together? Fill out the form below or send me an email!
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 shadow-md rounded-lg p-6 space-y-6"
          action="mailto:nimjeishant3@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
