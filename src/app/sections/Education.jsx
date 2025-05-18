"use client";

import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaTimes } from "react-icons/fa";

const educationData = [
  {
    type: "Education",
    icon: <FaGraduationCap className="text-xl mr-2" />,
    title: "Secondary School Certificate (SSC)",
    institute: "Holy Cross English High School — 2018",
    image: null,
  },
  {
    type: "Education",
    icon: <FaGraduationCap className="text-xl mr-2" />,
    title: "Higher Secondary Certificate (HSC)",
    institute: "Ideal Junior College of Science & Commerce — 2020",
    image: null,
  },
  {
    type: "Education",
    icon: <FaGraduationCap className="text-xl mr-2" />,
    title: "Bachelor’s Degree in Information Technology",
    institute: "XYZ University, Mumbai — 2020 - 2023",
    image: "/certificates/graduation.jpg",
  },
];

const certificationsData = [
  {
    type: "Certification",
    icon: <FaCertificate className="text-xl mr-2" />,
    title: "AWS Certified Cloud Practitioner",
    institute: "Issued by Amazon Web Services — 2024",
    image: "/certificates/aws.jpg",
  },
  {
    type: "Certification",
    icon: <FaCertificate className="text-xl mr-2" />,
    title: "Full Stack Development Certificate",
    institute: "Issued by Insys Technologies Institute — 2023",
    image: "/certificates/fullstack.jpg",
  },
];

export default function Education() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    if (!img) return;
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section
      id="education"
      className="min-h-screen px-4 py-12 sm:px-6 sm:py-20 bg-white dark:bg-[#0a0a0a]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 sm:mb-12"
      >
        Education & Certifications
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-14">
        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {educationData.map((item, idx) => (
              <Tilt
                key={idx}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.02}
                transitionSpeed={1000}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-5"
              >
                <div
                  className={`cursor-pointer ${
                    item.image ? "" : "pointer-events-none"
                  }`}
                  onClick={() => openModal(item.image)}
                >
                  <div className="flex items-center mb-3 text-blue-600 dark:text-blue-400">
                    {item.icon}
                    <h4 className="text-lg sm:text-xl font-semibold">{item.title}</h4>
                  </div>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-md w-full object-cover max-h-48 mb-3"
                    />
                  )}
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    {item.institute}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-600 dark:text-green-400">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {certificationsData.map((item, idx) => (
              <Tilt
                key={idx}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.02}
                transitionSpeed={1000}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-5"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => openModal(item.image)}
                >
                  <div className="flex items-center mb-3 text-green-600 dark:text-green-400">
                    {item.icon}
                    <h4 className="text-lg sm:text-xl font-semibold">{item.title}</h4>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-md w-full object-cover max-h-48 mb-3"
                  />
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    {item.institute}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-3xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-xl z-50 cursor-pointer hover:text-red-500 transition-colors duration-200"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <img
                src={selectedImage}
                alt="Certificate Preview"
                className="rounded-lg w-full max-w-[90vw] max-h-[80vh] object-contain mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
