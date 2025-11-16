import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Building2, UserCircle, Users } from "lucide-react";

const roles = [
  {
    icon: Shield,
    title: "Admin",
    description: "Full system control with user management, reporting, and configuration capabilities",
    features: [
      "Manage all users and permissions",
      "System-wide analytics and reports",
      "Configure notifications and settings",
      "Monitor fleet performance"
    ],
    color: "text-blue-500"
  },
  {
    icon: Building2,
    title: "Fleet Owner",
    description: "Comprehensive fleet management for business operations and multiple vehicles",
    features: [
      "Add and manage multiple vehicles",
      "Assign drivers to vehicles",
      "Track expenses and analytics",
      "Generate custom reports"
    ],
    color: "text-cyan-500"
  },
  {
    icon: Users,
    title: "Driver",
    description: "Streamlined interface for logging trips, expenses, and receiving assignments",
    features: [
      "Log trip details and mileage",
      "Record fuel and toll expenses",
      "Receive vehicle assignments",
      "View service reminders"
    ],
    color: "text-green-500"
  },
  {
    icon: UserCircle,
    title: "Personal User",
    description: "Perfect for individuals managing their personal vehicles and maintenance",
    features: [
      "Track personal vehicle details",
      "Monitor service schedules",
      "Log expenses and mileage",
      "Receive maintenance alerts"
    ],
    color: "text-purple-500"
  }
];

const UserRoles = () => {
  return (
    <section id="roles" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for{" "}
            <span className="gradient-primary text-transparent bg-clip-text">Every User</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Role-based access ensures each user has the perfect tools and permissions for their needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 bg-card flex flex-col"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-muted">
                  <role.icon className={`h-8 w-8 ${role.color}`} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {role.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {role.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <div className={`mt-1 h-1.5 w-1.5 rounded-full ${role.color} bg-current`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRoles;
