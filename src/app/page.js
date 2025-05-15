"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const About = dynamic(() => import("./sections/About"), { ssr: false });
const Projects = dynamic(() => import("./sections/Projects"), { ssr: false });
const Resume = dynamic(() => import("./sections/Resume"), { ssr: false });
const Contact = dynamic(() => import("./sections/Contact"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
