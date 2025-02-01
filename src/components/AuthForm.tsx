import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

type AuthMode = "login" | "register";

export const AuthForm = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: mode === "login" ? "Welcome back!" : "Registration successful!",
      description: "This is a demo - no actual authentication is performed.",
    });
  };

  return (
    <div className="glass w-full max-w-md p-8 rounded-lg animate-fade-up">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {mode === "login" ? "Welcome Back" : "Join Mement"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/5 border-white/10"
            required
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/5 border-white/10"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          {mode === "login" ? "Sign In" : "Create Account"}
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-400">
        {mode === "login" ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={() => setMode(mode === "login" ? "register" : "login")}
          className="ml-1 text-primary hover:underline"
        >
          {mode === "login" ? "Sign up" : "Sign in"}
        </button>
      </p>
    </div>
  );
};