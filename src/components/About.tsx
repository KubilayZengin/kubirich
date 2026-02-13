import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ExternalLink } from "lucide-react";

const translations = {
  en: {
    aboutMe: "About Me",
    title: "AI Operations Lead at AI Operator",
    description1: "Hi, I'm Kubi Rich, an AI Operations at AI Operator, where we help small and medium-sized businesses make AI work for them. With a B.Sc. in Mechatronics Engineering and a minor in Computer Science, I focus on streamlining AI processes and building automation that actually delivers.",
    description2: "I work with AI, robotics, and automation to solve real-world problems and create strategies that help businesses grow. Curious how AI could boost your operations? Let's connect or book a meeting through our website.",
    visitWebsite: "Visit AI Operator"
  },
  tr: {
    aboutMe: "Hakkımda",
    title: "AI Operator'da AI Operasyon Lideri",
    description1: "Merhaba, ben Kubilay Zengin. AI Operator'da AI Operasyonları olarak çalışıyorum ve küçük ve orta ölçekli işletmelerin yapay zekayı kendileri için çalıştırmasına yardımcı oluyorum. Mekatronik Mühendisliği (B.Sc.) ve Bilgisayar Bilimleri yan dal mezunuyum. AI süreçlerini düzenleme ve gerçekten sonuç veren otomasyonlar kurma konusunda odaklanıyorum.",
    description2: "Gerçek dünya problemlerini çözmek için AI, robotik ve otomasyon ile çalışıyorum ve işletmelerin büyümesine yardımcı olan stratejiler oluşturuyorum. AI'ın operasyonlarınızı nasıl artırabileceğini merak ediyorsanız, bağlantı kuralım veya web sitemizden bir toplantı ayarlayın.",
    visitWebsite: "AI Operator'ı Ziyaret Et"
  }
};

const About = () => {
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
    <section id="about" className="py-24 px-4 bg-muted" aria-label="About section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm bg-primary/10 text-primary font-medium rounded-full">
            {translations[language].aboutMe}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {translations[language].title}
          </h2>
          
          {/* AI Operator Logo */}
          <motion.a
            href="https://aioperator.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-block my-6"
          >
            <img
              src={theme === 'dark' ? '/aio-logo-horizontal-light.png' : '/aio-logo-horizontal-dark.png'}
              alt="AI Operator"
              className="h-12 md:h-16 w-auto mx-auto"
            />
          </motion.a>
          
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto text-lg leading-relaxed">
            {translations[language].description1}
          </p>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            {translations[language].description2}
          </p>
          
          <motion.a
            href="https://aioperator.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            {translations[language].visitWebsite}
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;