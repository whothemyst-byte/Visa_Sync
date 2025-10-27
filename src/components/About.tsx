import { CheckCircle, Users, Award, Clock } from "lucide-react";
import aboutImage from "@/assets/about-visa.jpg";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified visa consultants with years of experience",
  },
  {
    icon: Award,
    title: "High Success Rate",
    description: "98% visa approval rate across all categories",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick turnaround times with express options available",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About VisaSync
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are your trusted partner in making international travel dreams come true. With years of expertise 
              in visa processing and immigration services, we've helped thousands of travelers successfully obtain 
              their visas.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified consultants stays up-to-date with the latest immigration policies and 
              requirements, ensuring your application is processed smoothly and efficiently. We pride ourselves 
              on our personalized approach and commitment to customer satisfaction.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">50K+</p>
                <p className="text-muted-foreground">Visas Processed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Professional visa consultation services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
