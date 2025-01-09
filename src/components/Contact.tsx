import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm bg-primary/10 text-primary rounded-full">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-secondary mb-8">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;