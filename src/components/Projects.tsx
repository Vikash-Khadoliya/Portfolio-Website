import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Database,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Full-stack e-commerce solution with modern design, secure payments, and admin dashboard. Built with React and Node.js.",
      image: "/assets/Screenshot 2025-07-15 171250.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "http://maxzoneclothing.com/",
      githubUrl: "#",
      category: "Full Stack",
      icon: Globe,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and intuitive UI.",
      image: "/assets/Screenshot 2025-07-15 172739.png",
      technologies: ["React", "Firebase", "Tailwind CSS", "WebSocket"],
      liveUrl: "https://www.officetimer.com/",
      githubUrl: "#",
      category: "Frontend",
      icon: Smartphone,
    },
    {
      title: "Restaurant Management System",
      description:
        "Complete restaurant management system with order tracking, inventory management, and customer dashboard.",
      image: "/assets/5600vk.png",
      technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      liveUrl: "https://www.delikopos.com/m",
      githubUrl: "#",
      category: "Backend",
      icon: Database,
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website with smooth animations, contact forms, and optimized performance.",
      image: "/assets/mukesh.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://mukesh-kumawat-portfolio.vercel.app/",
      githubUrl: "#",
      category: "Frontend",
      icon: Globe,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and the technologies behind them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-card/80 backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.liveUrl && (
                    <Button asChild variant="cta" size="sm" className="flex-1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
