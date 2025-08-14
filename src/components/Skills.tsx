import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const translations = {
  en: {
    skills: "Technical Skills",
    technologies: "Technologies & Tools",
    techItems: [
      "Python", "JavaScript", "TypeScript", "React", "Node.js", 
      "MongoDB", "PostgreSQL", "Docker", "AWS", "Git", 
      "TensorFlow", "OpenAI API", "Automation Tools", "REST APIs"
    ]
  },
  tr: {
    skills: "Teknik Yetenekler",
    technologies: "Teknolojiler ve Araçlar",
    techItems: [
      "Python", "JavaScript", "TypeScript", "React", "Node.js", 
      "MongoDB", "PostgreSQL", "Docker", "AWS", "Git", 
      "TensorFlow", "OpenAI API", "Otomasyon Araçları", "REST APIs"
    ]
  }
};

const Skills = () => {
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
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-navy-dark" aria-label="Skills section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white rounded-full">
            {translations[language].skills}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            {translations[language].technologies}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {translations[language].techItems.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;