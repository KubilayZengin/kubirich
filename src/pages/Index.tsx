import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!href?.startsWith("#")) return;
      
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;