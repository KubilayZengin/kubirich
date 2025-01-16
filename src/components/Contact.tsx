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
    message: "Benimle buradan iletişime geçebilirsiniz.",
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
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-navy-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm bg-gray-300 dark:bg-white/10 text-gray-900 dark:text-white rounded-full">
            {translations[language].contact}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {translations[language].getInTouch}
          </h2>
          <p className="text-gray-800 dark:text-gray-300 mb-8">
            {translations[language].message}
          </p>
          <div className="space-y-4">
            <a
              href="mailto:kubi@aioperator.com"
              className="inline-block w-full sm:w-auto px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-navy hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors rounded-lg font-medium"
            >
              {translations[language].email}
            </a>
            <div className="flex justify-center gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/kubirich"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-transparent transition-colors flex items-center justify-center"
              >
                <img
                  src={theme === 'light' 
                    ? '/lovable-uploads/daa32f7a-64db-4cb5-897a-2e719e041451.png' 
                    : '/lovable-uploads/05418915-d897-4d1a-ade6-c00d885181fa.png'}
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