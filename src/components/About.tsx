import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const translations = {
  en: {
    aboutMe: "About Me",
    title: "AI Operations Assistant at AI Operator",
    description1: "Hello! I'm Kubi Rich, currently working as an AI Operations Assistant at AI Operator. I hold a B.Sc. in Mechatronics Engineering from the İzmir University of Economics, where I graduated as an honour student. Alongside my major, I completed a minor in Computer Science.",
    description2: "I am passionate about artificial intelligence, robotics, automation, embedded systems, software development, and electrical systems. In my current role, I focus on optimizing AI operations and implementing automation solutions.",
    skills: {
      aiOps: "AI Operations",
      aiOpsDesc: "Optimizing and managing AI systems",
      automation: "Automation",
      automationDesc: "Implementing automated solutions",
      softwareDev: "Software Dev",
      softwareDevDesc: "Creating efficient software solutions"
    }
  },
  tr: {
    aboutMe: "Hakkımda",
    title: "AI Operator'da AI Operasyon Asistanı",
    description1: "Merhaba! Ben Kubi Rich, şu anda AI Operator'da AI Operasyon Asistanı olarak çalışıyorum. İzmir Ekonomi Üniversitesi'nden Mekatronik Mühendisliği B.Sc. derecemi onur öğrencisi olarak aldım. Ana dalımın yanı sıra, Bilgisayar Bilimi yan dalını tamamladım.",
    description2: "Yapay zeka, robotik, otomasyon, gömülü sistemler, yazılım geliştirme ve elektrik sistemleri konularında tutkulu biriyim. Mevcut rolümde, AI operasyonlarını optimize etmeye ve otomasyon çözümleri uygulamaya odaklanıyorum.",
    skills: {
      aiOps: "AI Operasyonları",
      aiOpsDesc: "AI sistemlerini optimize etme ve yönetme",
      automation: "Otomasyon",
      automationDesc: "Otomatik çözümler uygulama",
      softwareDev: "Yazılım Geliştirme",
      softwareDevDesc: "Verimli yazılım çözümleri oluşturma"
    }
  }
};

const About = () => {
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
    <section id="about" className="py-20 px-4 bg-white dark:bg-navy">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white rounded-full">
            {translations[language].aboutMe}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {translations[language].title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            {translations[language].description1}
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translations[language].description2}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-white/5 rounded-lg p-4 backdrop-blur-sm"
          >
            <img
              src="/lovable-uploads/40bafbbe-617f-46d8-8f3f-5e1154de3c27.png"
              alt="AI Operations"
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{translations[language].skills.aiOps}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{translations[language].skills.aiOpsDesc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 dark:bg-white/5 rounded-lg p-4 backdrop-blur-sm"
          >
            <img
              src="/lovable-uploads/315b1175-f5c0-49c6-8f26-1b418a50e885.png"
              alt="Automation"
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{translations[language].skills.automation}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{translations[language].skills.automationDesc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-white/5 rounded-lg p-4 backdrop-blur-sm"
          >
            <img
              src="/lovable-uploads/ec174f74-7633-4470-9d89-827a9666240d.png"
              alt="Software Development"
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{translations[language].skills.softwareDev}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{translations[language].skills.softwareDevDesc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;