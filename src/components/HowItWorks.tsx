import { Home, Zap, Cpu } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const values = [
  {
    icon: Home,
    label: "Basements",
    description: "Bright, high and dry",
  },
  {
    icon: Zap,
    label: "Increase Insulation",
    description: "Increase energy savings",
  },
  {
    icon: Cpu,
    label: "Technology",
    description: "Integrate the latest advances in household technology",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            We're committed to building smarter, not just bigger.
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              We understand the impact of rising energy costs and know that proper insulation is your home's best investment. 
              By incorporating advanced insulation techniques and materials, we help homeowners achieve up to 30% energy savings annually. 
              Enhanced insulation doesn't just keep you comfortable—it dramatically reduces heating and cooling costs, putting money back 
              in your pocket month after month while increasing your home's value.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{value.label}</CardTitle>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
