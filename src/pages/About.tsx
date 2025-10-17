import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sun, DollarSign, Cpu } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const values = [
  { icon: Sun, label: "Basements", description: "Bright, high and dry" },
  { icon: DollarSign, label: "Increase Insulation", description: "Increase energy savings" },
  { icon: Cpu, label: "Technology", description: "Integrate the latest advances in household technology" },
];

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-24 justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80">
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Building Excellence
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Our company was founded on a simple principle: treat every home like we're building it for our own family. 
            What started as a small, local operation has grown into one of the region's trusted names in residential construction.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  As a locally-owned business, we're not just building houses in this community—we're raising our families here too. 
                  That's why we're committed to sustainable practices, supporting local suppliers, and delivering craftsmanship that makes us proud.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="font-bold mb-2">{value.label}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </div>
  );
};

export default About;
