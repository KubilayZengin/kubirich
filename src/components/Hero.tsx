import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 mb-6 text-sm bg-primary/10 text-primary rounded-full"
        >
          Welcome to my portfolio
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-primary">Your Name</span>
          <br />
          I build things for the web
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-secondary max-w-2xl mx-auto mb-8 text-lg"
        >
          I'm a software developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;