import { Brain, Code2, Users, Layers } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "Analytical problem-solving approach"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Collaborative development mindset"
  },
  {
    icon: Code2,
    title: "OOP Mastery",
    description: "Clean, maintainable architectures"
  },
  {
    icon: Layers,
    title: "System Design",
    description: "Algorithms & data structures"
  }
];

const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          My Journey
        </h2>
        
        <p className="text-lg md:text-xl text-center mb-16 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          My journey revolves around critical thinking, team leadership, and object-oriented programming — 
          blending algorithms, data structures, and engineering logic to create something truly extraordinary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-[var(--glow-primary)] hover:-translate-y-2 duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-semibold text-primary italic">
            "Building systems that feel alive — one line of code at a time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
