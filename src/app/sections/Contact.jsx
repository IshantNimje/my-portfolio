'use client'

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      {submitted && (
        <div className="mb-6 text-green-600 text-center font-semibold">
          Thanks for reaching out! I'll get back to you soon.
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-xl mx-auto"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}
