import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A brief description of the first project and its key features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "Description of the second project highlighting main achievements.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Project Three",
    description: "Overview of the third project showcasing technical expertise.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    tags: ["Vue.js", "Express", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-sm bg-primary/10 text-primary rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;