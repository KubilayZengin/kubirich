import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const translations = {
  en: {
    contact: "Contact",
    getInTouch: "Get In Touch",
    message: "If you want to connect, feel free!",
    email: "kubi@aioperator.com"
  },
  tr: {
    contact: "İletişim",
    getInTouch: "İletişime Geç",
    message: "Bir sorunuz olsun veya sadece merhaba demek isteyin, size en kısa sürede dönmeye çalışacağım!",
    email: "kubi@aioperator.com"
  }
};

const Contact = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const { theme } = useTheme();

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
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-navy-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white rounded-full">
            {translations[language].contact}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {translations[language].getInTouch}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            {translations[language].message}
          </p>
          <div className="space-y-4">
            <a
              href="mailto:kubi@aioperator.com"
              className="inline-block w-full sm:w-auto px-6 py-3 bg-gray-800 dark:bg-white text-white dark:text-navy hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors rounded-lg font-medium"
            >
              {translations[language].email}
            </a>
            <div className="flex justify-center gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/kubilay-zengin-03962b242/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-transparent transition-colors flex items-center justify-center"
              >
                <img
                  src="/lovable-uploads/9db8d88f-d8f7-455a-b38c-33f1830b7535.png"
                  alt="LinkedIn"
                  className="w-full h-full object-contain"
                />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;