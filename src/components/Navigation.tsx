import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const translations = {
  en: {
    about: "About",
    contact: "Contact",
    name: "Kubi Rich"
  },
  tr: {
    about: "Hakkımda",
    contact: "İletişim",
    name: "Kubi Rich"
  }
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: language === 'en' ? 'tr' : 'en' } }));
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
          <a href="#" className="text-xl font-bold text-primary dark:text-white">
            {translations[language].name}
          </a>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900 dark:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a
                href="#about"
                className="text-gray-900 dark:text-white hover:text-primary transition-colors"
              >
                {translations[language].about}
              </a>
            </li>
            <li>
              <button
                onClick={toggleLanguage}
                className="p-2 text-gray-900 dark:text-white hover:text-primary transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="w-5 h-5" />
              </button>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-900 dark:text-white hover:text-primary transition-colors"
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
                className="px-4 py-2 bg-primary text-white dark:text-black rounded-lg hover:bg-primary/90 transition-colors"
              >
                {translations[language].contact}
              </a>
            </li>
          </ul>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white dark:bg-navy shadow-lg md:hidden">
              <ul className="py-4 px-4 space-y-4">
                <li>
                  <a
                    href="#about"
                    className="block text-gray-900 dark:text-white hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {translations[language].about}
                  </a>
                </li>
                <li className="flex items-center justify-between">
                  <button
                    onClick={toggleLanguage}
                    className="p-2 text-gray-900 dark:text-white hover:text-primary transition-colors"
                    aria-label="Toggle language"
                  >
                    <Globe className="w-5 h-5" />
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="p-2 text-gray-900 dark:text-white hover:text-primary transition-colors"
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
                    className="block px-4 py-2 bg-primary text-white dark:text-black rounded-lg hover:bg-primary/90 transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {translations[language].contact}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;