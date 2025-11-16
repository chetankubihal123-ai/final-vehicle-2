import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Email validation schema
export const emailSchema = z
  .string()
  .trim()
  .email({ message: "Please enter a valid email address" })
  .max(255, { message: "Email must be less than 255 characters" });

// Password validation schema
export const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .max(100, { message: "Password must be less than 100 characters" });

// Combined auth schema
export const authSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type AuthFormData = z.infer<typeof authSchema>;

// Sign up function with proper redirect
export const signUp = async (email: string, password: string) => {
  const redirectUrl = `${window.location.origin}/`;
  
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: redirectUrl,
    },
  });
  
  return { error };
};

// Sign in function
export const signIn = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  return { error };
};

// Sign out function
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Get user-friendly error message
export const getAuthErrorMessage = (error: any): string => {
  if (!error) return "";
  
  const message = error.message?.toLowerCase() || "";
  
  if (message.includes("invalid login credentials")) {
    return "Invalid email or password. Please try again.";
  }
  if (message.includes("user already registered")) {
    return "This email is already registered. Please sign in instead.";
  }
  if (message.includes("email not confirmed")) {
    return "Please confirm your email address before signing in.";
  }
  if (message.includes("invalid email")) {
    return "Please enter a valid email address.";
  }
  
  return error.message || "An error occurred. Please try again.";
};
