import { Phone, Pencil, DollarSign, HardHat, Home } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Free Consultation",
    subtitle: "Schedule a no-obligation meeting",
    description: "We discuss your vision, budget, timeline, and answer all your questions about the building process.",
  },
  {
    icon: Pencil,
    number: "2",
    title: "Design & Planning",
    subtitle: "Create your custom home plan",
    description: "Our team works with you to design every detail, from floor plans to finishes, with 3D renderings so you can visualize your home.",
  },
  {
    icon: DollarSign,
    number: "3",
    title: "Transparent Proposal",
    subtitle: "Receive detailed pricing",
    description: "Get a comprehensive, itemized estimate with no hidden fees. We explain every cost so you know exactly what you're investing in.",
  },
  {
    icon: HardHat,
    number: "4",
    title: "Construction",
    subtitle: "Watch your home come to life",
    description: "We handle permits, inspections, and quality control while keeping you updated with regular progress reports and site visits.",
  },
  {
    icon: Home,
    number: "5",
    title: "Move-In Ready",
    subtitle: "Welcome home",
    description: "Final walkthrough, warranty information, and ongoing support. We don't consider the job done until you're completely satisfied.",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">From Vision to Reality in 5 Simple Steps</h2>
          <p className="text-xl text-muted-foreground">
            Most custom homes completed in 8-12 months
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex gap-8 mb-12 last:mb-0">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-border" />
                )}

                {/* Icon Circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center relative z-10">
                    <Icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div className="absolute -top-2 -left-2 text-6xl font-bold text-muted/20">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{step.title}</h3>
                  <p className="text-secondary font-semibold mb-3">{step.subtitle}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
