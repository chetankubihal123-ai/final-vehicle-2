import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-90" />
          
          <div className="relative px-8 py-20 md:py-24 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
              Ready to Transform Your Fleet Management?
            </h2>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join thousands of satisfied users managing their vehicles smarter with VehicleTracker. 
              Start your free trial today—no credit card required.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 shadow-elegant group"
              >
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-white/70">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
