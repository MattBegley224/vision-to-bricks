import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Essential Build",
    subtitle: "Perfect for first-time builders",
    price: "Starting at $XXX per sq ft",
    popular: false,
    features: [
      "Standard floor plans with modifications",
      "Quality materials & finishes",
      "Project management included",
      "1-year warranty",
      "Energy-efficient construction",
    ],
  },
  {
    name: "Custom Build",
    subtitle: "Complete design freedom",
    price: "Starting at $XXX per sq ft",
    popular: true,
    features: [
      "Fully custom design",
      "Premium material options",
      "Dedicated project manager",
      "2-year warranty",
      "Smart home pre-wiring",
      "Landscaping consultation",
    ],
  },
  {
    name: "Luxury Build",
    subtitle: "Uncompromising quality & detail",
    price: "Starting at $XXX per sq ft",
    popular: false,
    features: [
      "Architectural collaboration",
      "Luxury materials & finishes",
      "White-glove service",
      "5-year warranty",
      "Full smart home integration",
      "Complete landscaping design",
      "Interior design consultation",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Flexible Options for Every Budget</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Every project is unique—let's discuss what works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative ${pkg.popular ? 'border-secondary border-2 shadow-2xl scale-105' : 'border-border'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                  <Star className="w-4 h-4 fill-current" />
                  MOST POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.subtitle}</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={pkg.popular ? "default" : "outline"} 
                  className="w-full" 
                  size="lg"
                  asChild
                >
                  <a href="#contact">
                    {pkg.popular ? "Schedule Consultation" : "Get a Quote"}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-card p-6 rounded-lg border">
          <p className="text-center text-muted-foreground leading-relaxed">
            <strong>Note:</strong> Every project is unique. Pricing varies based on size, location, materials, and customization. 
            Schedule a free consultation for an accurate estimate tailored to your specific needs.
          </p>
          <div className="mt-6 pt-6 border-t">
            <p className="text-center font-semibold mb-4">Additional Services:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-muted px-4 py-2 rounded-full">Home Additions & Extensions</span>
              <span className="bg-muted px-4 py-2 rounded-full">Major Renovations</span>
              <span className="bg-muted px-4 py-2 rounded-full">Accessory Dwelling Units (ADUs)</span>
              <span className="bg-muted px-4 py-2 rounded-full">Commercial Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
