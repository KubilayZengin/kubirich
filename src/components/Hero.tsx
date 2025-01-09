import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/lovable-uploads/e8057136-d166-45d7-913b-7a1b64a1ac5d.png"
            alt="Kubilay Zengin"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary"
          />
        </motion.div>
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
          Hi, I'm <span className="text-primary">Kubilay Zengin</span>
          <br />
          Mechatronics Engineer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-secondary max-w-2xl mx-auto mb-8 text-lg"
        >
          B.Sc. in Mechatronics Engineering with a Minor in Computer Science from İzmir University of Economics. 
          Passionate about robotics, automation, and software development.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-x-4"
        >
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
          <a 
            href="#about" 
            className="inline-block px-6 py-3 bg-muted text-secondary rounded-lg hover:bg-muted/90 transition-colors"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;