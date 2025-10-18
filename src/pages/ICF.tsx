import { Shield, DollarSign, Volume2, Thermometer, Leaf, Home } from "lucide-react";
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
    description: "Continuous insulation and airtight construction dramatically reduce heating and cooling costs. Many homeowners save $100s monthly on energy bills.",
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
    title: "Sustainability",
    description: "Resistant to rot, mold, pests, and deterioration. ICF homes maintain their value and require less maintenance over time.",
  },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80">
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            ICF: The Future of Home Building
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
                  className="border-2 hover:border-secondary hover:shadow-xl transition-all duration-300 group shadow-lg hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
      <section className="pt-12 pb-24 bg-muted">
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
              <a href="https://elementicf.com/?gad_source=1&gad_campaignid=21461721258&gbraid=0AAAAA9sjwG1eTw3HgmH9CTN6Hj1crMrUh&gclid=CjwKCAjw0sfHBhB6EiwAQtv5qbbuuRyRTRxT9xXWSq9UdxIYCL3B06vPN-Zyi8u8DEWahs5C7M8ExRoCtkgQAvD_BwE" target="_blank" rel="noopener noreferrer">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ICF;
