import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "From our first meeting to the final walkthrough, the team was professional, responsive, and dedicated to getting every detail right. Our home is absolutely perfect.",
    author: "Sarah & Mike Thompson",
    project: "Custom Home Build, 2023",
    rating: 5,
  },
  {
    quote: "We interviewed three builders and chose them because of their transparency and expertise. Best decision we made. They delivered exactly what they promised.",
    author: "Jennifer Rodriguez",
    project: "Home Addition & Renovation, 2024",
    rating: 5,
  },
  {
    quote: "Quality workmanship, fair pricing, and they actually finished on schedule. I've already recommended them to two friends who are now building with them too.",
    author: "David Chen",
    project: "Custom Home Build, 2023",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Homes Built" },
  { value: "25+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "4.9/5", label: "Average Rating" },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Hundreds of Happy Homeowners</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
