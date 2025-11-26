import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with payment integration, inventory management, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/mtrong100/ProLaptop-Shop",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Meme Storage",
      description:
        "A web application for uploading, storing, and sharing memes with user authentication and categorization.",
      image:
        "https://images.unsplash.com/photo-1601382270349-49c15bddf738?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/mtrong100/Meme-Storage",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Medical Dashboard",
      description:
        "A dashboard for visualizing patient data, medical records, and health statistics using interactive charts and graphs.",
      image:
        "https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React.js", "JavaScript", "Chart.js", "API"],
      github: "https://github.com/mtrong100/Medical-Care",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="lg:w-1/2 relative group">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div
                  className={`absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl -z-10 transform ${
                    index % 2 === 0 ? "rotate-3" : "-rotate-3"
                  } group-hover:rotate-0 transition-transform duration-300`}
                />
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 group/btn"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Source Code
                    </a>
                  </Button>
                  <Button
                    className="bg-gradient-primary hover:shadow-glow text-primary-foreground group/btn"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
