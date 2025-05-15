export default function Projects() {
  // Example projects data — replace with your own projects later
  const projects = [
    {
      title: "Project One",
      description: "This is a cool project built with React and Next.js.",
      link: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description: "Another awesome project with Tailwind CSS styling.",
      link: "https://github.com/yourusername/project-two",
    },
    {
      title: "Project Three",
      description: "My portfolio website built using Next.js and Tailwind CSS.",
      link: "https://github.com/yourusername/my-portfolio",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
