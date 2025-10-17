import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useState, useRef } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectType, setProjectType] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      projectType: projectType,
      message: formData.get("message") as string,
    };

    try {
      console.log("Submitting contact form with data:", data);
      
      const { data: responseData, error } = await supabase.functions.invoke("send-sms", {
        body: data,
      });

      console.log("Edge function response:", { responseData, error });

      if (error) {
        console.error("Error from edge function:", {
          message: error.message,
          details: error,
          fullError: JSON.stringify(error, null, 2)
        });
        toast.error(`Failed to send: ${error.message || "Unknown error"}`);
      } else {
        console.log("SMS sent successfully:", responseData);
        toast.success("Thank you! We'll be in touch within 24 hours.");
        formRef.current?.reset();
        setProjectType("");
      }
    } catch (error: any) {
      console.error("Caught exception:", {
        message: error?.message,
        stack: error?.stack,
        fullError: JSON.stringify(error, Object.getOwnPropertyNames(error), 2)
      });
      toast.error(`Error: ${error?.message || "Unknown error occurred"}`);
    } finally {
      setIsSubmitting(false);
    }
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

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  name="name" 
                  required 
                  className="mt-1" 
                  placeholder="John Smith"
                  autoComplete="name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="mt-1" 
                  placeholder="john@example.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  required 
                  className="mt-1" 
                  placeholder="(555) 555-5555"
                  autoComplete="tel"
                />
              </div>

              <div>
                <Label htmlFor="project-type">Project Type *</Label>
                <Select name="project-type" value={projectType} onValueChange={setProjectType} required>
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
                  name="message" 
                  required 
                  className="mt-1 min-h-32" 
                  placeholder="I'm interested in building a custom home..."
                  autoComplete="off"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" variant="default" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Request"}
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
