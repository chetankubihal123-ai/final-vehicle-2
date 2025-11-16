import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, TrendingUp, Smartphone, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate reminders and tracking to reduce manual work by up to 80%"
  },
  {
    icon: TrendingUp,
    title: "Reduce Costs",
    description: "Optimize fuel usage and maintenance schedules to cut expenses by 30%"
  },
  {
    icon: Shield,
    title: "Stay Compliant",
    description: "Never miss insurance renewals or permit expirations with smart alerts"
  },
  {
    icon: Smartphone,
    title: "Access Anywhere",
    description: "Fully responsive web platform accessible from any device, anytime"
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Instant synchronization ensures your data is always current"
  },
  {
    icon: CheckCircle2,
    title: "Easy to Use",
    description: "Intuitive interface requires no technical expertise or training"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why Choose{" "}
              <span className="gradient-primary text-transparent bg-clip-text">
                VehicleTracker?
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Our comprehensive platform delivers measurable results through intelligent automation, 
              powerful analytics, and seamless user experience.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="gradient-primary p-1 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-medium">99% uptime guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="gradient-primary p-1 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-medium">Bank-level security with JWT authentication</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="gradient-primary p-1 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-medium">24/7 customer support</span>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur"
              >
                <benefit.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
