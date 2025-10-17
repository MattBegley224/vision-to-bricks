import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
  };

  return (
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
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:5555555555" className="text-lg hover:text-secondary transition-colors">
                      (555) 555-5555
                    </a>
                    <p className="text-sm opacity-80 mt-1">Monday-Friday: 8am-6pm | Saturday: 9am-3pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@premierbuilders.com" className="text-lg hover:text-secondary transition-colors">
                      info@premierbuilders.com
                    </a>
                    <p className="text-sm opacity-80 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Office</p>
                    <p className="text-lg">123 Builder's Lane</p>
                    <p className="text-lg">Your City, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Text Us</p>
                    <a href="sms:5555555555" className="text-lg hover:text-secondary transition-colors">
                      (555) 555-5555
                    </a>
                    <p className="text-sm opacity-80 mt-1">Quick questions? Send us a text</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-primary-foreground/20">
              <p className="text-lg font-semibold mb-2">Licensed • Insured • Local • Trusted</p>
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
  );
};

export default Contact;
