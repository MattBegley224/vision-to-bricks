import { Heart, Shield, Users } from "lucide-react";
import logo from "@/assets/ane-logo.png";

const values = [
  { icon: Shield, label: "Quality First", description: "No shortcuts, no compromises" },
  { icon: Users, label: "Transparent Communication", description: "Honest, clear, always accessible" },
  { icon: Heart, label: "Integrity", description: "We do what we say we'll do" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <img src={logo} alt="Atlantic Northeast" className="w-64 h-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Building Excellence Since 1998</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                Our company was founded on a simple principle: treat every home like we're building it for our own family. 
                What started as a small, local operation has grown into one of the region's trusted names in residential construction, 
                but we've never lost sight of what matters most—quality, integrity, and the relationships we build with our clients.
              </p>
              <p className="text-lg leading-relaxed">
                As a locally-owned business, we're not just building houses in this community—we're raising our families here too. 
                That's why we're committed to sustainable practices, supporting local suppliers, and delivering craftsmanship that makes us proud.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h4 className="font-bold mb-2">{value.label}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
