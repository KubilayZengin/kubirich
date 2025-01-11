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
      automation: "Automation",
      robotics: "Robotics",
      softwareDev: "Software Dev"
    }
  },
  tr: {
    aboutMe: "Hakkımda",
    title: "AI Operator'da AI Operasyon Asistanı",
    description1: "Merhaba! Ben Kubi Rich, şu anda AI Operator'da AI Operasyon Asistanı olarak çalışıyorum. İzmir Ekonomi Üniversitesi'nden Mekatronik Mühendisliği B.Sc. derecemi onur öğrencisi olarak aldım. Ana dalımın yanı sıra, Bilgisayar Bilimi yan dalını tamamladım.",
    description2: "Yapay zeka, robotik, otomasyon, gömülü sistemler, yazılım geliştirme ve elektrik sistemleri konularında tutkulu biriyim. Mevcut rolümde, AI operasyonlarını optimize etmeye ve otomasyon çözümleri uygulamaya odaklanıyorum.",
    skills: {
      aiOps: "AI Operasyonları",
      automation: "Otomasyon",
      robotics: "Robotik",
      softwareDev: "Yazılım Geliştirme"
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
    <section id="about" className="py-20 px-4 bg-navy-light dark:bg-navy">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="inline-block px-3 py-1 mb-6 text-sm bg-white/10 text-white rounded-full">
              {translations[language].aboutMe}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {translations[language].title}
            </h2>
            <p className="text-gray-300 mb-6">
              {translations[language].description1}
            </p>
            <p className="text-gray-300">
              {translations[language].description2}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <img
                  src="/ai-operations.jpg"
                  alt="AI Operations"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-white">{translations[language].skills.aiOps}</h3>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <img
                  src="/automation.jpg"
                  alt="Automation"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-white">{translations[language].skills.automation}</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 mt-8"
            >
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <img
                  src="/robotics.jpg"
                  alt="Robotics"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-white">{translations[language].skills.robotics}</h3>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <img
                  src="/software-dev.jpg"
                  alt="Software Development"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-white">{translations[language].skills.softwareDev}</h3>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;