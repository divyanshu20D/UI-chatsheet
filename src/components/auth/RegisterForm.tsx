import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SocialLoginButtons } from "./SocialLoginButton";
import { AuthLayout } from "./AuthLayout";

interface RegisterFormProps {
  onToggleAuth: () => void;
}

export const RegisterForm = ({ onToggleAuth }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt:", formData);
  };

  const handleSocialLogin = (provider: "apple" | "google" | "linkedin") => {
    console.log("Social login:", provider);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Enter your details to register."
      showRegisterLink={false}
      onToggleAuth={onToggleAuth}
    >
      <div className="space-y-8">
        {/* Social Login */}
        <SocialLoginButtons onSocialLogin={handleSocialLogin} />

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Full Name Field */}
          <div className="space-y-3 group">
            <Label
              htmlFor="fullName"
              className="text-sm font-medium text-foreground"
            >
              Full Name <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <User className="absolute left-4 top-4 h-5 w-5 text-auth-text-subtle transition-colors duration-200 group-focus-within:text-primary" />
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => updateFormData("fullName", e.target.value)}
                className="pl-12 h-14 border-auth-divider focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50 text-base placeholder:text-auth-text-subtle/70"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

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
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="pl-12 h-14 border-auth-divider focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50 text-base placeholder:text-auth-text-subtle/70"
                placeholder="hello@example.com"
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
                value={formData.password}
                onChange={(e) => updateFormData("password", e.target.value)}
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

          {/* Confirm Password Field */}
          <div className="space-y-3 group">
            <Label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-foreground"
            >
              Confirm Password <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Lock className="absolute left-4 top-4 h-5 w-5 text-auth-text-subtle transition-colors duration-200 group-focus-within:text-primary" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) =>
                  updateFormData("confirmPassword", e.target.value)
                }
                className="pl-12 pr-12 h-14 border-auth-divider focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50 text-base placeholder:text-auth-text-subtle/70"
                placeholder="••••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-4 text-auth-text-subtle hover:text-foreground transition-all duration-200 hover:scale-110"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3 pt-2">
            <Checkbox
              id="accept-terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(!!checked)}
              className="mt-1 transition-all duration-200 hover:scale-110"
            />
            <Label
              htmlFor="accept-terms"
              className="text-sm text-foreground cursor-pointer font-medium leading-relaxed"
            >
              I agree to the{" "}
              <button
                type="button"
                className="text-primary hover:underline transition-colors duration-200 hover:text-primary/80"
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="text-primary hover:underline transition-colors duration-200 hover:text-primary/80"
              >
                Privacy Policy
              </button>
            </Label>
          </div>

          {/* Register Button */}
          <Button
            type="submit"
            disabled={!acceptTerms}
            className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 disabled:opacity-50 disabled:hover:scale-100"
          >
            Create Account
          </Button>

          {/* Login Link */}
          <div className="text-center pt-4">
            <span className="text-sm text-auth-text-subtle">
              Already have an account?{" "}
            </span>
            <button
              type="button"
              onClick={onToggleAuth}
              className="text-sm text-primary hover:underline font-medium transition-colors duration-200 hover:text-primary/80"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
