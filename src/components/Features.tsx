import { Hammer, MessageSquare, CheckCircle, Pencil } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import logo from "@/assets/ane-logo.png";

const features = [
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    description: "Every home we build meets the highest standards of construction excellence. We use premium materials and proven techniques that stand the test of time.",
    benefit: "A home built to last generations",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Stay informed every step of the way with regular updates, clear timelines, and direct access to your project manager.",
    benefit: "No surprises, no stress—just peace of mind",
  },
  {
    icon: CheckCircle,
    title: "On-Time, On-Budget",
    description: "We respect your time and investment with detailed planning, accurate estimates, and a proven track record of meeting deadlines.",
    benefit: "Move into your dream home exactly when planned",
  },
  {
    icon: Pencil,
    title: "Custom Design Flexibility",
    description: "From modern minimalist to classic traditional, we bring your unique style to life with fully customizable designs.",
    benefit: "A home that's uniquely yours",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center">
            <img src={logo} alt="Atlantic Northeast" className="w-64 h-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-12">Why Homeowners Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building your dream home starts with choosing the right partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-secondary hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-success flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {feature.benefit}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
