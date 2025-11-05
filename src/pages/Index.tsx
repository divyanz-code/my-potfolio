import CosmicBackground from "@/components/CosmicBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <CosmicBackground />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
