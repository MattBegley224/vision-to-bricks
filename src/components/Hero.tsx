import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Build the Home You've Always Imagined
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Expert residential construction with transparent pricing, quality craftsmanship, and a commitment to bringing your vision to life—on time and on budget.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="secondary" size="xl" asChild>
            <a href="/about">
              Start Your Project Today
              <ArrowRight className="ml-2" />
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="/icf">Learn About ICF</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="/about#contact" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
