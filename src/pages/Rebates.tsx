import { DollarSign, TrendingDown, Thermometer, TrendingUp, Leaf, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: DollarSign,
    title: "Cash Rebates",
    description: "Receive generous cash rebates for energy-efficient construction",
  },
  {
    icon: TrendingDown,
    title: "Lower Utility Bills",
    description: "Enjoy reduced energy costs for years to come",
  },
  {
    icon: Thermometer,
    title: "Enhanced Comfort",
    description: "Superior insulation and systems for year-round comfort",
  },
  {
    icon: TrendingUp,
    title: "Increased Home Value",
    description: "Boost your home's value and marketability",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Reduce your carbon footprint and environmental impact",
  },
  {
    icon: Home,
    title: "Sustainability",
    description: "Build a durable, high-performance home designed for generations",
  },
];

const steps = [
  {
    number: "1",
    title: "Register Your Project",
    description: "Sign up before construction begins",
  },
  {
    number: "2",
    title: "Work with Advisors",
    description: "Partner with certified energy advisors",
  },
  {
    number: "3",
    title: "Build to Standards",
    description: "Construct to higher efficiency standards",
  },
  {
    number: "4",
    title: "Get Your Rebate",
    description: "Complete verification and receive your rebate",
  },
];

const Rebates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            EnergyForward New Homes
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-semibold animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Build Smarter. Save More. Live Better.
          </p>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Transform your new home into an energy-efficient haven with EnergyForward New Homes.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="pb-12 pt-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl leading-relaxed mb-4">
              Why settle for standard when you can build exceptional?<br />
              The EnergyForward New Homes program rewards you for going beyond basic building codes with generous rebates that put money back in your pocket.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-16 pb-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Your Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Qualifies Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Who Qualifies?</h2>
            <p className="text-xl text-muted-foreground">
              Builders, developers, and homeowners constructing new residential homes in Nova Scotia.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
            {steps.map((step, index) => (
              <Card key={index} className="relative border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <Card className="border-2 border-secondary bg-secondary/5">
              <CardContent className="p-8">
                <p className="text-xl font-semibold">
                  The more efficient your home, the bigger your rebate. It's that simple.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-primary/80 to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build Your Dream Home the Smart Way?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover how much you can save while creating a comfortable, sustainable home for your family.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <a href="https://www.efficiencyns.ca/programs-rebates/energyforward-new-homes" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rebates;
