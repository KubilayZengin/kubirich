import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="inline-block px-3 py-1 mb-6 text-sm bg-primary/10 text-primary rounded-full">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate about creating impactful solutions
            </h2>
            <p className="text-secondary mb-6">
              With several years of experience in software development, I've had the
              opportunity to work on diverse projects that have shaped my expertise
              in creating efficient and scalable solutions.
            </p>
            <p className="text-secondary">
              My approach combines technical excellence with a deep understanding
              of user needs, ensuring that every project I undertake delivers
              meaningful value.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Working on laptop"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;