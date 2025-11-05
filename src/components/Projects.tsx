import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Palette, Car } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "Decentralized VPN",
    description: "A secure, peer-to-peer VPN concept powered by decentralization.",
    tech: ["Networking", "Security", "P2P"]
  },
  {
    icon: Palette,
    title: "Colour Detector",
    description: "A simple yet smart app that identifies colors through image analysis.",
    tech: ["Computer Vision", "Image Processing", "ML"]
  },
  {
    icon: Car,
    title: "Car Tracker",
    description: "Real-time vehicle tracking system with precision and data accuracy.",
    tech: ["IoT", "Real-time Data", "Geolocation"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Explore some of my cosmic creations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
