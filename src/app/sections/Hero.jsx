const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm [Your Name]
      </h1>
      <p className="text-lg md:text-2xl mb-6">
        A passionate Full Stack Developer building modern web applications
      </p>
      <a
        href="#projects"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
