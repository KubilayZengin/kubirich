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
              AI Operations Assistant at AI Operator
            </h2>
            <p className="text-secondary mb-6">
              Hello! I'm Kubi Rich, currently working as an AI Operations Assistant at AI Operator. 
              I hold a B.Sc. in Mechatronics Engineering from the İzmir University of Economics, 
              where I graduated as an honour student. Alongside my major, I completed a minor in Computer Science.
            </p>
            <p className="text-secondary">
              I am passionate about artificial intelligence, robotics, automation, embedded systems, 
              software development, and electrical systems. In my current role, I focus on optimizing 
              AI operations and implementing automation solutions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-primary/5 p-8">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h3 className="font-semibold">AI Operations</h3>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h3 className="font-semibold">Automation</h3>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h3 className="font-semibold">Robotics</h3>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h3 className="font-semibold">Software Dev</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;