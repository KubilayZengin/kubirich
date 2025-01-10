import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted dark:bg-accent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm bg-primary/10 text-primary dark:text-white rounded-full">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Get In Touch</h2>
          <p className="text-secondary dark:text-gray-300 mb-8">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-4">
            <a
              href="mailto:kubilayzenginn@gmail.com"
              className="inline-block w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              kubilayzenginn@gmail.com
            </a>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/kubilay-zengin-03962b242/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors dark:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/KubilayZengin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors dark:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="/Kubilay_Zengin_CV_EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors dark:text-white"
                title="CV (EN)"
              >
                <FileText className="w-6 h-6" />
              </a>
              <a
                href="/Kubilay_Zengin_CV_TR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors dark:text-white"
                title="CV (TR)"
              >
                <FileText className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;