import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ArrowDown } from "lucide-react";
const translations = {
  en: {
    welcome: "Welcome to my website!",
    greeting: "Hi, I'm Kubi Rich",
    description: "AI Operations Lead at AI Operator. Mechatronics Engineer (B.Sc.) with a Minor in Computer Science from İzmir University of Economics. Focused on AI, robotics, automation, and creating practical software solutions.",
    contact: "Get in touch",
    learnMore: "Learn more"
  },
  tr: {
    welcome: "Web siteme hoş geldiniz!",
    greeting: "Merhaba, ben Kubilay Zengin",
    description: "AI Operator'da AI Operasyon Lideri. İzmir Ekonomi Üniversitesi'nden Mekatronik Mühendisliği (B.Sc.) ve Bilgisayar Bilimleri yan dal mezunu. AI, robotik, otomasyon ve pratik yazılım çözümleri oluşturma konularında odaklanmış.",
    contact: "İletişime geç",
    learnMore: "Daha fazla"
  }
};
const Hero = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const {
    theme
  } = useTheme();
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };
    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);
  return <section className="min-h-screen flex items-center justify-center px-4 bg-background relative" aria-label="Hero section">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full border-4 border-primary/30 overflow-hidden profile-image shadow-xl">
            <img alt="Kubi Rich - AI Operations" className="w-full h-full object-cover" src="/lovable-uploads/bbd0624c-1903-4146-b01e-83b32d4d3e73.jpg" />
          </div>
        </motion.div>
        
        <motion.span initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="inline-block px-4 py-1.5 mb-6 text-sm bg-primary/10 text-primary font-medium rounded-full">
          {translations[language].welcome}
        </motion.span>
        
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          {translations[language].greeting}
        </motion.h1>
        
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          {translations[language].description}
        </motion.p>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-lg font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30" aria-label="Contact me">
            {translations[language].contact}
          </a>
          <a href="#about" className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors rounded-lg font-medium border border-border" aria-label="Learn more about me">
            {translations[language].learnMore}
          </a>
        </motion.div>
      </div>
      
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.a href="#about" animate={{
        y: [0, 8, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }} className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>;
};
export default Hero;