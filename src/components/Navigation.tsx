import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const translations = {
  en: {
    about: "About",
    skills: "Skills",
    contact: "Contact",
    name: "Kubi Rich"
  },
  tr: {
    about: "Hakkımda",
    skills: "Yetenekler",
    contact: "İletişim",
    name: "Kubilay Zengin"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-xl font-bold text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {translations[language].name}
          </motion.a>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <ul className="hidden md:flex items-center space-x-6">
            <motion.li whileHover={{ y: -2 }}>
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {translations[language].about}
              </a>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {translations[language].skills}
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                onClick={toggleLanguage}
                className="language-switcher text-foreground"
                aria-label="Toggle language"
              >
                <Globe className="w-5 h-5" />
              </button>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                onClick={toggleTheme}
                className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                {translations[language].contact}
              </a>
            </motion.li>
          </ul>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 bg-card border-b border-border md:hidden"
              >
                <ul className="py-4 px-4 space-y-4">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <a
                      href="#about"
                      className="block text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {translations[language].about}
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <a
                      href="#skills"
                      className="block text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {translations[language].skills}
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-between"
                  >
                    <button
                      onClick={toggleLanguage}
                      className="language-switcher text-foreground"
                      aria-label="Toggle language"
                    >
                      <Globe className="w-5 h-5" />
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                      aria-label="Toggle theme"
                    >
                      {theme === 'light' ? (
                        <Moon className="w-5 h-5" />
                      ) : (
                        <Sun className="w-5 h-5" />
                      )}
                    </button>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <a
                      href="#contact"
                      className="block px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {translations[language].contact}
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;