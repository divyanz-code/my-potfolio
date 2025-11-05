import heroImage from "@/assets/cosmic-hero.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 text-center animate-[fadeInUp_1s_ease-out]">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-[glow_2s_ease-in-out_infinite]">
          Divyansh Pali
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A passionate tech explorer who believes in turning imagination into intelligent systems.
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-foreground/80 max-w-4xl mx-auto">
          Step into my cosmic-themed 3D universe, where creativity meets computation. From AI & ML to Rust and Java, 
          I love crafting efficient systems and solving real-world problems through elegant code and futuristic design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--glow-primary)] transition-all hover:scale-105"
            onClick={scrollToProjects}
          >
            Explore Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 transition-all hover:scale-105"
            asChild
          >
            <a href="#connect">Connect with Me</a>
          </Button>
        </div>

        <button 
          onClick={scrollToProjects}
          className="animate-bounce inline-block text-primary"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
