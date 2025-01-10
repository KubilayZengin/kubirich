import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const translations = {
  en: {
    welcome: "Welcome to my portfolio",
    greeting: "Hi, I'm Kubi Rich",
    role: "AI Operations Assistant",
    description: "AI Operations Assistant at AI Operator. B.Sc. in Mechatronics Engineering with a Minor in Computer Science from İzmir University of Economics. Passionate about AI, robotics, automation, and software development.",
    contact: "Get in touch",
    learnMore: "Learn more"
  },
  tr: {
    welcome: "Portfolyoma hoş geldiniz",
    greeting: "Merhaba, ben Kubi Rich",
    role: "AI Operasyon Asistanı",
    description: "AI Operator'da AI Operasyon Asistanı. İzmir Ekonomi Üniversitesi'nden Mekatronik Mühendisliği B.Sc. ve Bilgisayar Bilimi yan dal mezunu. Yapay zeka, robotik, otomasyon ve yazılım geliştirme konularında tutkulu.",
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
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/lovable-uploads/e8057136-d166-45d7-913b-7a1b64a1ac5d.png"
            alt="Kubilay Zengin"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary"
          />
        </motion.div>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 mb-6 text-sm bg-primary/10 text-primary rounded-full"
        >
          {translations[language].welcome}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {translations[language].greeting}
          <br />
          {translations[language].role}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-secondary max-w-2xl mx-auto mb-8 text-lg"
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
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            {translations[language].contact}
          </a>
          <a 
            href="#about" 
            className="inline-block px-6 py-3 bg-muted text-secondary rounded-lg hover:bg-muted/90 transition-colors"
          >
            {translations[language].learnMore}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;