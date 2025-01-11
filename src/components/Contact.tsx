import { motion } from "framer-motion";
import { Linkedin, Github, FileText } from "lucide-react";
import { useState, useEffect } from "react";

const translations = {
  en: {
    contact: "Contact",
    getInTouch: "Get In Touch",
    message: "Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    email: "kubilayzenginn@gmail.com"
  },
  tr: {
    contact: "İletişim",
    getInTouch: "İletişime Geç",
    message: "Bir sorunuz olsun veya sadece merhaba demek isteyin, size en kısa sürede dönmeye çalışacağım!",
    email: "kubilayzenginn@gmail.com"
  }
};

const Contact = () => {
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
    <section id="contact" className="py-20 px-4 bg-navy dark:bg-navy-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm bg-white/10 text-white rounded-full">
            {translations[language].contact}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {translations[language].getInTouch}
          </h2>
          <p className="text-gray-300 mb-8">
            {translations[language].message}
          </p>
          <div className="space-y-4">
            <a
              href="mailto:kubilayzenginn@gmail.com"
              className="inline-block w-full sm:w-auto px-6 py-3 bg-white text-navy hover:bg-gray-100 transition-colors rounded-lg font-medium"
            >
              {translations[language].email}
            </a>
            <div className="flex justify-center gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/kubilay-zengin-03962b242/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <Linkedin className="w-6 h-6" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/KubilayZengin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <Github className="w-6 h-6" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="/Kubilay_Zengin_CV_EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
                title="CV (EN)"
              >
                <FileText className="w-6 h-6" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="/Kubilay_Zengin_CV_TR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
                title="CV (TR)"
              >
                <FileText className="w-6 h-6" strokeWidth={1.5} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;