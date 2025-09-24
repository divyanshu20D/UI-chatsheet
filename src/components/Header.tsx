import React from "react";
import { AnimatedBackground } from "./motion-primitives/animated-background";
import { Button } from "./ui/button";

const Header = ({ tabs }: { tabs: string[] }) => {
  return (
    <header className="border-b border-gray-200 sticky top-4 bg-blur-smoke/50 mx-40 backdrop-blur-md rounded-full shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#55a630] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Chatsheet
            </span>
          </div>

          {/* Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                How it Works
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Templates
              </a>
            </nav> */}
          <div className="flex flex-row items-center space-x-2">
            <AnimatedBackground
              defaultValue={tabs[0]}
              className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.3,
              }}
              enableHover
            >
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  data-id={tab}
                  type="button"
                  className="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {tab}
                </button>
              ))}
            </AnimatedBackground>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-gray-900"
            >
              Log in
            </Button>
            <Button className="bg-[#55a630] hover:bg-[#4caf50] text-white">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
