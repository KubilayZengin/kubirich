import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Mail, Linkedin, Github } from "lucide-react";

const translations = {
  en: {
    contact: "Contact",
    getInTouch: "Get In Touch",
    message: "Interested in working together or have a question? Feel free to reach out.",
    email: "kubi@aioperator.com"
  },
  tr: {
    contact: "İletişim",
    getInTouch: "İletişime Geç",
    message: "Birlikte çalışmak veya bir sorunuz mu var? Benimle iletişime geçmekten çekinmeyin.",
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
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm bg-primary/10 text-primary font-medium rounded-full"
          >
            {translations[language].contact}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
          >
            {translations[language].getInTouch}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mb-10 text-lg max-w-xl mx-auto"
          >
            {translations[language].message}
          </motion.p>
          
          <motion.a
            href={`mailto:${translations[language].email}`}
            className="cta-button inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg shadow-primary/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            {translations[language].email}
          </motion.a>
          
          <div className="flex justify-center gap-6 mt-10">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/kubirich"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/kubirich"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;