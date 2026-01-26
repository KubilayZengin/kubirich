import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const translations = {
  en: {
    rights: "All rights reserved.",
    poweredBy: "Powered by"
  },
  tr: {
    rights: "Tüm hakları saklıdır.",
    poweredBy: "Destekleyen"
  }
};

const Footer = () => {
  const { theme } = useTheme();
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            © {currentYear} Kubi Rich. {translations[language].rights}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>{translations[language].poweredBy}</span>
            <a
              href="https://aioperator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={theme === 'dark' ? '/aio-logo-horizontal-light.png' : '/aio-logo-horizontal-dark.png'}
                alt="AI Operator"
                className="h-6 w-auto"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;