import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="connect" className="py-16 px-4 border-t border-border relative">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Connect Beyond the Stars
        </h2>
        
        <p className="text-muted-foreground mb-8 text-lg">
          Let's build something extraordinary together
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--glow-primary)] transition-all hover:scale-105"
            asChild
          >
            <a 
              href="https://github.com/divyanshpali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 transition-all hover:scale-105"
            asChild
          >
            <a 
              href="https://linkedin.com/in/divyanshpali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Divyansh Pali. All rights reserved.</p>
          <p className="mt-2">Crafted with passion in the cosmic void ✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
