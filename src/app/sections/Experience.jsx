"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "QualityKiosk Technologies Pvt. Ltd.",
    role: "Application Support Engineer",
    period: "Aug 2024 – Present",
    location: "Mumbai, India",
    description: [
      "Handled L1/L2 support tasks and resolved technical issues.",
      "Monitor systems, troubleshoot issues, and coordinate with internal teams to resolve incidents.",
      "Reduced application downtime by 15% through proactive issue tracking and escalation.",
    ],
    logo: "/companies/qk.png", // ✅ Place your logo in public/companies/
  },
//   {
//     company: "Freelance Projects",
//     role: "Full Stack Developer",
//     period: "2022 – Present",
//     location: "Remote",
//     description: [
//       "Built full-stack applications using MERN stack.",
//       "Created responsive, optimized UIs using Tailwind CSS.",
//       "Deployed apps on Vercel and AWS Free Tier for clients.",
//     ],
//     logo: "/companies/freelance.png", // Optional logo
//   },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white dark:bg-[#0a0a0a] px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col sm:flex-row gap-6"
          >
            {/* Logo */}
            {exp.logo && (
              <div className="w-16 h-16 flex-shrink-0">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={64}
                  height={64}
                  className="rounded-full object-contain"
                />
              </div>
            )}

            {/* Info */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {exp.role}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.company} — <span className="italic">{exp.location}</span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {exp.period}
              </p>
              <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
