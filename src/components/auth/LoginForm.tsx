import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SocialLoginButtons } from "./SocialLoginButton";
import { AuthLayout } from "./AuthLayout";

interface LoginFormProps {
  onToggleAuth: () => void;
}

export const LoginForm = ({ onToggleAuth }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("hello@mimicdesign.co");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, keepLoggedIn });
  };

  const handleSocialLogin = (provider: "apple" | "google" | "linkedin") => {
    console.log("Social login:", provider);
  };

  return (
    <AuthLayout
      title="Login to your account"
      subtitle="Enter your details to login."
      showRegisterLink
      onToggleAuth={onToggleAuth}
    >
      <div className="space-y-8">
        {/* Social Login */}
        <SocialLoginButtons onSocialLogin={handleSocialLogin} />

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-7">
          {/* Email Field */}
          <div className="space-y-3 group">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email Address <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 h-5 w-5 text-auth-text-subtle transition-colors duration-200 group-focus-within:text-primary" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-14 border-auth-divider focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50 text-base placeholder:text-auth-text-subtle/70"
                placeholder="hello@mimicdesign.co"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-3 group">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
            >
              Password <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Lock className="absolute left-4 top-4 h-5 w-5 text-auth-text-subtle transition-colors duration-200 group-focus-within:text-primary" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 pr-12 h-14 border-auth-divider focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50 text-base placeholder:text-auth-text-subtle/70"
                placeholder="••••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-auth-text-subtle hover:text-foreground transition-all duration-200 hover:scale-110"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="keep-logged-in"
                checked={keepLoggedIn}
                onCheckedChange={(checked) => setKeepLoggedIn(!!checked)}
                className="transition-all duration-200 hover:scale-110"
              />
              <Label
                htmlFor="keep-logged-in"
                className="text-sm text-foreground cursor-pointer font-medium transition-colors duration-200 hover:text-primary"
              >
                Keep me logged in
              </Label>
            </div>
            <button
              type="button"
              className="text-sm text-auth-text-subtle hover:text-primary hover:underline transition-all duration-200 font-medium"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
          >
            Login
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};
