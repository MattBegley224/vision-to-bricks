import { Heart, Shield, Users, Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const values = [
  { icon: Shield, label: "Quality First", description: "No shortcuts, no compromises" },
  { icon: Users, label: "Transparent Communication", description: "Honest, clear, always accessible" },
  { icon: Heart, label: "Integrity", description: "We do what we say we'll do" },
];

const About = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
  };

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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Build Your Dream Home?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Let's start with a conversation. Schedule your free consultation today and discover how we can bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-4 bg-primary-foreground/10 rounded-lg">
                    <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-2">Phone</p>
                      <a href="tel:5555555555" className="text-xl font-semibold hover:text-secondary transition-colors block mb-1">
                        (555) 555-5555
                      </a>
                      <p className="text-sm opacity-90">Monday-Friday: 8am-6pm</p>
                      <p className="text-sm opacity-90">Saturday: 9am-3pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-primary-foreground/10 rounded-lg">
                    <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-2">Email</p>
                      <a href="mailto:info@premierbuilders.com" className="text-xl font-semibold hover:text-secondary transition-colors block mb-1">
                        info@premierbuilders.com
                      </a>
                      <p className="text-sm opacity-90">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-primary-foreground/10 rounded-lg">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-2">Office</p>
                      <p className="text-lg">123 Builder's Lane</p>
                      <p className="text-lg">Your City, ST 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-primary-foreground/10 rounded-lg">
                    <MessageCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-2">Text Us</p>
                      <a href="sms:5555555555" className="text-xl font-semibold hover:text-secondary transition-colors block mb-1">
                        (555) 555-5555
                      </a>
                      <p className="text-sm opacity-90">Quick questions? Send us a text</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-primary-foreground/30">
                <p className="text-xl font-bold text-center">Licensed • Insured • Local • Trusted</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card text-card-foreground p-8 rounded-lg shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" required className="mt-1" placeholder="John Smith" />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required className="mt-1" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" required className="mt-1" placeholder="(555) 555-5555" />
                </div>

                <div>
                  <Label htmlFor="project-type">Project Type *</Label>
                  <Select>
                    <SelectTrigger id="project-type" className="mt-1">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-build">New Build</SelectItem>
                      <SelectItem value="addition">Addition</SelectItem>
                      <SelectItem value="renovation">Renovation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your project *</Label>
                  <Textarea 
                    id="message" 
                    required 
                    className="mt-1 min-h-32" 
                    placeholder="I'm interested in building a custom home..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" variant="default">
                  Submit Request
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
