import { Card } from "@/components/ui/card";
import { 
  Car, 
  TrendingUp, 
  Bell, 
  Users, 
  MapPin, 
  FileText,
  Wrench,
  DollarSign 
} from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Vehicle Management",
    description: "Add, update, and track all vehicle details including registration, insurance, and service history in one centralized system.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Driver Assignment",
    description: "Efficiently assign and manage drivers across your fleet with role-based access and performance tracking.",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: MapPin,
    title: "Trip Logging",
    description: "Record trip details including distance, duration, and purpose for comprehensive fleet analytics and reporting.",
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: DollarSign,
    title: "Expense Tracking",
    description: "Monitor fuel costs, tolls, repairs, and maintenance expenses with detailed reports and budget insights.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Automated SMS and email notifications for service schedules, insurance renewals, and permit expirations.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Visual insights into mileage trends, expense patterns, and fleet performance with interactive charts.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Wrench,
    title: "Maintenance Tracking",
    description: "Schedule and track all maintenance activities with service history logs and predictive maintenance alerts.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: FileText,
    title: "Comprehensive Reports",
    description: "Generate detailed reports for expenses, trips, and vehicle performance with export capabilities.",
    gradient: "from-pink-500 to-rose-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful Features for{" "}
            <span className="gradient-primary text-transparent bg-clip-text">Complete Control</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to efficiently manage your vehicles, from personal cars to enterprise fleets
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
