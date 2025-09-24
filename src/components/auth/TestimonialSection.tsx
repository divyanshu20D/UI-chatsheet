import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "The Marketing Management app has revolutionized our tasks. It's efficient and user-friendly, streamlining planning to tracking.",
    author: "Wei Chen",
    title: "CEO / Catalyst",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "Incredible platform that has transformed how we handle our marketing campaigns. The intuitive interface makes complex tasks simple.",
    author: "Sarah Johnson",
    title: "Marketing Director",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "Game-changing tool for our team productivity. The seamless workflow integration has boosted our efficiency by 300%.",
    author: "Michael Chen",
    title: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="hidden lg:flex flex-1 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-95"
        style={{ background: "var(--gradient-auth)" }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse-soft"></div>
      <div
        className="absolute bottom-32 left-16 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse-soft"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative flex flex-col justify-center px-16 py-20 max-w-lg mx-auto z-10">
        {/* Avatar */}
        <div className="mb-10 animate-scale-in">
          <div className="relative">
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.author}
              className="w-20 h-20 rounded-2xl object-cover transition-all duration-500 hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-foreground/20 to-transparent"></div>
          </div>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-2xl font-light leading-relaxed text-primary-foreground mb-10 animate-fade-in tracking-wide">
          "{currentTestimonial.text}"
        </blockquote>

        {/* Author Info */}
        <div className="space-y-2 mb-12 animate-slide-up">
          <div className="font-display font-semibold text-xl text-primary-foreground">
            {currentTestimonial.author}
          </div>
          <div className="text-primary-foreground/80 font-light text-lg">
            {currentTestimonial.title}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex
                  ? "bg-primary-foreground shadow-lg"
                  : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
