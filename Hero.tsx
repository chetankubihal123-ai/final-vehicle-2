import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 gradient-hero opacity-5 -z-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold gradient-primary text-transparent bg-clip-text">
                Complete Vehicle Management Solution
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Manage Your Fleet With
              <span className="gradient-primary text-transparent bg-clip-text"> Intelligence</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Streamline vehicle tracking, maintenance scheduling, expense monitoring, and driver management—all in one powerful platform designed for personal users and fleet owners.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="gap-3">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold gradient-primary text-transparent bg-clip-text">500+</div>
                <div className="text-sm text-muted-foreground">Active Fleets</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-primary text-transparent bg-clip-text">10K+</div>
                <div className="text-sm text-muted-foreground">Vehicles Tracked</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-primary text-transparent bg-clip-text">99%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="absolute -inset-4 gradient-hero opacity-20 blur-3xl rounded-3xl" />
            <img
              src={heroImage}
              alt="Vehicle Management Dashboard"
              className="relative rounded-2xl shadow-elegant w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
