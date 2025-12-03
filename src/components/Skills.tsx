import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const translations = {
  en: {
    skills: "Technical Skills",
    technologies: "Technologies & Tools",
    techItems: [
      "Python", "JavaScript", "TypeScript", "React", "Node.js", 
      "PostgreSQL", "Git", "OpenAI API", "REST APIs", "n8n", 
      "Make.com", "Zapier", "MindStudio", "Framer", "Vector DB", 
      "Lovable", "Supabase"
    ]
  },
  tr: {
    skills: "Teknik Yetenekler",
    technologies: "Teknolojiler ve Araçlar",
    techItems: [
      "Python", "JavaScript", "TypeScript", "React", "Node.js", 
      "PostgreSQL", "Git", "OpenAI API", "REST APIs", "n8n", 
      "Make.com", "Zapier", "MindStudio", "Framer", "Vector DB", 
      "Lovable", "Supabase"
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
    <section id="skills" className="py-24 px-4 bg-card dark:bg-accent/30" aria-label="Skills section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm bg-primary/10 text-primary font-medium rounded-full">
            {translations[language].skills}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
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
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="tech-badge px-5 py-2.5 bg-card text-foreground rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default font-medium"
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