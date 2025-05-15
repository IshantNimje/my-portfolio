import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ishant Nimje. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-gray-400" />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope className="text-xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
