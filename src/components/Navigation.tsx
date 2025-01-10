import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary">
            Kubi Rich
          </a>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a
                href="#about"
                className="text-secondary hover:text-primary transition-colors"
              >
                {language === 'en' ? 'About' : 'Hakkımda'}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-secondary hover:text-primary transition-colors"
              >
                {language === 'en' ? 'Projects' : 'Projeler'}
              </a>
            </li>
            <li>
              <button
                onClick={toggleLanguage}
                className="p-2 text-secondary hover:text-primary transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="w-5 h-5" />
              </button>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 text-secondary hover:text-primary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                {language === 'en' ? 'Contact' : 'İletişim'}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;