"use client";

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-20 py-12 bg-gray-50"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        Resume
      </h2>

      <div className="w-full max-w-4xl h-[600px] md:h-[800px] shadow-lg rounded-lg overflow-hidden">
        {/* Embed PDF viewer */}
        <iframe
          src="/resume.pdf" // Use public folder URL path here
          className="w-full h-full"
          frameBorder="0"
          title="Resume PDF"
          loading="lazy"
        />
      </div>

      <a
        href="/resume.pdf" // Use public folder URL path here
        download
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
