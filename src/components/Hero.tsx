import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const translations = {
  en: {
    welcome: "Welcome to my website!",
    greeting: "Hi, I'm Kubi Rich",
    description: "AI Operations at AI Operator. Mechatronics Engineer (B.Sc.) with a Minor in Computer Science from İzmir University of Economics. Focused on AI, robotics, automation, and creating practical software solutions.",
    contact: "Get in touch",
    learnMore: "Learn more"
  },
  tr: {
    welcome: "Web siteme hoş geldiniz!",
    greeting: "Merhaba, ben Kubilay Zengin",
    description: "AI Operator'da AI Operasyonları. İzmir Ekonomi Üniversitesi'nden Mekatronik Mühendisliği (B.Sc.) ve Bilgisayar Bilimleri yan dal mezunu. AI, robotik, otomasyon ve pratik yazılım çözümleri oluşturma konularında odaklanmış.",
    contact: "İletişime geç",
    learnMore: "Daha fazla"
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
    <section className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-navy-dark" aria-label="Hero section">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto rounded-full border-4 border-gray-200 dark:border-white/20 overflow-hidden profile-image">
            <img
              src="/lovable-uploads/094a9a30-8edf-4d70-acfb-45ae31ffe18d.png"
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 mb-6 text-sm bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white rounded-full"
        >
          {translations[language].welcome}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          {translations[language].greeting}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-lg"
        >
          {translations[language].description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-x-4"
        >
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-gray-800 dark:bg-white text-white dark:text-navy hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors rounded-lg font-medium"
            aria-label="Contact me"
          >
            {translations[language].contact}
          </a>
          <a 
            href="#about" 
            className="inline-block px-6 py-3 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors rounded-lg font-medium"
            aria-label="Learn more about me"
          >
            {translations[language].learnMore}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;