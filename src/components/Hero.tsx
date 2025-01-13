import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const translations = {
  en: {
    greeting: "Hi, I'm",
    name: "Kubi Rich",
    title: "Software Dev",
    description: "I'm a software developer specializing in building AI-powered applications and automation solutions.",
    contact: "Contact Me"
  },
  tr: {
    greeting: "Merhaba, Ben",
    name: "Kubi Rich",
    title: "Yazılım Geliştirici",
    description: "Yapay zeka destekli uygulamalar ve otomasyon çözümleri geliştirme konusunda uzmanlaşmış bir yazılım geliştiricisiyim.",
    contact: "İletişime Geç"
  }
};

const Hero = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-navy dark:to-navy-dark py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            {translations[language].greeting}
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            {translations[language].name}
          </h1>
          <p className="text-2xl md:text-3xl text-primary dark:text-gray-300 text-center w-full">
            {translations[language].title}
          </p>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            {translations[language].description}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://www.linkedin.com/in/kubi-rich-03962b242"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-white dark:text-black rounded-lg hover:bg-primary/90 transition-colors"
            >
              {translations[language].contact}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;