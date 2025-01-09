import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary">
            YourName
          </a>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a
                href="#about"
                className="text-secondary hover:text-primary transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-secondary hover:text-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;