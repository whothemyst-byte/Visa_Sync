import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Shield, Clock, FileCheck, Globe, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "USA Visa",
    description: "Tourist, business, and student visa services with expert guidance through the entire application process.",
    price: "Starting from ₹11,800",
  },
  {
    icon: Plane,
    title: "Canada Visa",
    description: "Comprehensive visa solutions for tourism, work permits, and immigration to Canada.",
    price: "Starting from ₹12,500",
  },
  {
    icon: Shield,
    title: "Australia Visa",
    description: "Tourist and skilled migration visas with complete documentation support.",
    price: "Starting from ₹11,800",
  },
  {
    icon: FileCheck,
    title: "UK Visa",
    description: "Standard visitor visas, student visas, and work permits for the United Kingdom.",
    price: "Starting from ₹13,200",
  },
  {
    icon: Clock,
    title: "Express Processing",
    description: "Fast-track visa processing services for urgent travel requirements.",
    price: "Additional charges apply",
  },
  {
    icon: HeartHandshake,
    title: "Consultation Services",
    description: "One-on-one guidance with visa experts to plan your application strategy.",
    price: "Free initial consultation",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Visa Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional visa assistance for destinations worldwide. Fast, reliable, and hassle-free processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-primary font-semibold mb-4">{service.price}</p>
                  <Button className="w-full rounded-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
