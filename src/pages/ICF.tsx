import { Shield, DollarSign, Volume2, Thermometer, Leaf, Home, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Shield,
    title: "Superior Strength & Safety",
    description: "Concrete walls reinforced with steel provide exceptional resistance to hurricanes, tornadoes, earthquakes, and fire. ICF homes can withstand winds up to 250 mph.",
  },
  {
    icon: DollarSign,
    title: "Energy Savings Up to 60%",
    description: "Continuous insulation and airtight construction dramatically reduce heating and cooling costs. Many homeowners save $200-400 monthly on energy bills.",
  },
  {
    icon: Volume2,
    title: "Exceptional Soundproofing",
    description: "Concrete walls reduce outside noise by up to 75%, creating a peaceful, quiet living environment.",
  },
  {
    icon: Thermometer,
    title: "Consistent Comfort",
    description: "Eliminate hot and cold spots. ICF construction maintains even temperatures throughout your home year-round.",
  },
  {
    icon: Leaf,
    title: "Environmentally Friendly",
    description: "Reduced energy consumption means lower carbon footprint. ICF homes qualify for green building certifications and tax incentives.",
  },
  {
    icon: Home,
    title: "Long-Term Durability",
    description: "Resistant to rot, mold, pests, and deterioration. ICF homes maintain their value and require less maintenance over time.",
  },
];

const features = [
  "Hurricane & tornado resistant (250+ mph winds)",
  "4-hour fire rating",
  "50-60% energy savings",
  "Superior soundproofing (STC 50+ rating)",
  "Mold & pest resistant",
  "Qualifies for insurance discounts",
  "LEED & Energy Star certification eligible",
  "Disaster-resilient construction",
];

const comparisonData = [
  { metric: "Energy Efficiency", icf: "50-60% more efficient", traditional: "Standard" },
  { metric: "Strength", icf: "10x stronger", traditional: "Standard" },
  { metric: "Fire Rating", icf: "4-hour fire resistance", traditional: "1-hour" },
  { metric: "Noise Reduction", icf: "75%", traditional: "30%" },
  { metric: "Insurance Savings", icf: "Up to 25% lower premiums", traditional: "Standard rates" },
];

const ICF = () => {
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
            The Future of Home Building: Insulated Concrete Forms
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Insulated Concrete Form (ICF) construction combines the strength of reinforced concrete with continuous insulation, creating homes that are stronger, more energy-efficient, and more comfortable than traditional building methods.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="pb-24 pt-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover why ICF construction is the smart choice for your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="border-2 hover:border-secondary hover:shadow-xl transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{benefit.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">ICF vs. Traditional Wood Frame</h2>
            
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {comparisonData.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b last:border-b-0">
                      <div className="font-semibold text-lg">{item.metric}:</div>
                      <div className="text-success font-medium">ICF: {item.icf}</div>
                      <div className="text-muted-foreground">Traditional: {item.traditional}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 bg-secondary/10 rounded-lg border-2 border-secondary">
              <p className="text-xl font-semibold text-center">
                ICF construction costs only 3-5% more upfront but delivers a lifetime of savings, comfort, and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">ICF Home Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build Your ICF Home?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover the advantages of ICF construction and start building your dream home today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="xl" asChild>
              <a href="/about">Get Your ICF Quote</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/about">See ICF Homes in Action</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ICF;
