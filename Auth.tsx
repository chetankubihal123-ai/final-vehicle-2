import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Car, ArrowLeft, Mail, Lock, CheckCircle2, Shield, Zap } from "lucide-react";
import { toast } from "sonner";
import { signUp, signIn, authSchema, getAuthErrorMessage } from "@/lib/auth";
import { useAuth } from "@/hooks/useAuth";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate input
      const validatedData = authSchema.parse({ email, password });

      // Perform authentication
      const { error } = isLogin
        ? await signIn(validatedData.email, validatedData.password)
        : await signUp(validatedData.email, validatedData.password);

      if (error) {
        toast.error(getAuthErrorMessage(error));
      } else {
        toast.success(isLogin ? "Welcome back!" : "Account created successfully!");
        navigate("/");
      }
    } catch (error: any) {
      if (error.errors) {
        // Zod validation errors
        error.errors.forEach((err: any) => {
          toast.error(err.message);
        });
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 gradient-hero opacity-10 animate-pulse" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left side - Branding & Features */}
          <div className="hidden lg:block space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="gap-2 mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="gradient-primary p-3 rounded-xl shadow-elegant">
                  <Car className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">VehicleTracker</h2>
                  <p className="text-sm text-muted-foreground">Smart Fleet Management</p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Manage Your Fleet With
                <span className="gradient-primary text-transparent bg-clip-text"> Intelligence</span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Join thousands of satisfied users managing their vehicles smarter with real-time tracking, 
                automated maintenance, and comprehensive analytics.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
                <div className="gradient-primary p-2 rounded-lg mt-1">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Bank-Level Security</h3>
                  <p className="text-sm text-muted-foreground">Your data is encrypted and protected with industry-standard security</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
                <div className="gradient-secondary p-2 rounded-lg mt-1">
                  <Zap className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instant Setup</h3>
                  <p className="text-sm text-muted-foreground">Get started in seconds with our intuitive onboarding process</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-2 rounded-lg mt-1">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">99% Uptime</h3>
                  <p className="text-sm text-muted-foreground">Reliable service you can count on, day and night</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Auth Form */}
          <div className="space-y-6 animate-slide-up">
            {/* Mobile header */}
            <div className="lg:hidden flex flex-col items-center gap-4 mb-6">
              <div className="gradient-primary p-3 rounded-xl shadow-elegant">
                <Car className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">VehicleTracker</h2>
                <p className="text-sm text-muted-foreground">Smart Fleet Management</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </div>

            <Card className="p-8 md:p-10 shadow-elegant border-border/50 bg-card backdrop-blur-xl">
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-4">
                    {isLogin ? (
                      <Lock className="h-8 w-8 text-primary-foreground" />
                    ) : (
                      <Mail className="h-8 w-8 text-primary-foreground" />
                    )}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {isLogin ? "Welcome Back!" : "Get Started"}
                  </h1>
                  <p className="text-muted-foreground text-base">
                    {isLogin
                      ? "Sign in to access your dashboard"
                      : "Create your account in seconds"}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        className="pl-10 h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                        className="pl-10 h-12 text-base"
                      />
                    </div>
                    {!isLogin && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3" />
                        Minimum 8 characters required
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full h-12 text-base font-semibold"
                    disabled={loading}
                  >
                    {loading
                      ? "Processing..."
                      : isLogin
                      ? "Sign In to Dashboard"
                      : "Create Account"}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-card px-4 text-muted-foreground font-medium">
                      {isLogin ? "New to VehicleTracker?" : "Already have an account?"}
                    </span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full h-12 text-base font-medium"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setEmail("");
                    setPassword("");
                  }}
                  disabled={loading}
                >
                  {isLogin ? "Create New Account" : "Sign In Instead"}
                </Button>
              </div>
            </Card>

            <p className="text-center text-xs text-muted-foreground px-4">
              By continuing, you agree to VehicleTracker's{" "}
              <a href="#" className="underline hover:text-primary">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="underline hover:text-primary">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
