"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Experience from "./sections/Experience";
import ScrollToTop from "./components/ScrollToTop";
import Education from "./sections/Education";

const About = dynamic(() => import("./sections/About"), { ssr: false });
const Projects = dynamic(() => import("./sections/Projects"), { ssr: false });
const Contact = dynamic(() => import("./sections/Contact"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
