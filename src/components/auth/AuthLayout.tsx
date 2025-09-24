import type { ReactNode } from "react";
import { Mountain } from "lucide-react";
import { TestimonialSection } from "./TestimonialSection";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showRegisterLink?: boolean;
  onToggleAuth?: () => void;
}

export const AuthLayout = ({
  children,
  title,
  subtitle,
  showRegisterLink = false,
  onToggleAuth,
}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-auth-bg flex">
      {/* Left Panel - Auth Form */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 max-w-md mx-auto lg:max-w-none animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-3 group">
            <div className="p-2 rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <Mountain className="h-6 w-6 text-primary" />
            </div>
            <span className="font-display font-semibold text-xl text-foreground">
              Lovable
            </span>
          </div>
          {showRegisterLink && (
            <div className="flex items-center space-x-2 text-sm animate-slide-up">
              <span className="text-auth-text-subtle font-light">
                Don't have an account?
              </span>
              <button
                onClick={onToggleAuth}
                className="text-primary hover:text-primary/80 font-medium transition-all duration-200 hover:underline"
              >
                Register
              </button>
            </div>
          )}
        </div>

        {/* Auth Form Content */}
        <div className="space-y-10">
          {/* User Icon */}
          <div className="flex justify-center animate-scale-in">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <svg
                className="w-10 h-10 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className="text-center space-y-4 animate-slide-up">
            <h1 className="text-4xl font-display font-semibold text-foreground tracking-tight">
              {title}
            </h1>
            <p className="text-auth-text-subtle text-lg font-light max-w-sm mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Form Content */}
          <div className="animate-fade-in">{children}</div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex items-center justify-between text-sm text-auth-text-subtle font-light">
          <span>© 2025 Lovable</span>
          <div className="flex items-center space-x-2 transition-all duration-200 hover:text-foreground cursor-pointer">
            <span>🌐</span>
            <span>ENG</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Testimonial */}
      <TestimonialSection />
    </div>
  );
};
