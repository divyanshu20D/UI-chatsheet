import React, { useState } from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { Card } from "../ui/card";
import { AnimatedNumber } from "../motion-primitives/animated-number";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div>
      <section id="pricing" className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-in fade-in duration-700">
            <h2 className="text-4xl font-bold text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your team. All plans include our core
              features with no hidden fees.
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <span
                className={`text-sm font-medium ${
                  !isYearly ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                  isYearly ? "bg-cyan-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${
                  isYearly ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Yearly{" "}
                <span className="text-green-600 font-semibold">(Save 20%)</span>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 flex flex-col justify-between border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-500">
              <div>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">
                      <span>$</span>
                      <AnimatedNumber
                        className="inline-flex items-center font-mono text-zinc-800 dark:text-zinc-50"
                        springOptions={{
                          bounce: 0,
                          duration: 2000,
                        }}
                        value={isYearly ? 8 : 10} // 👈 Animates between 8 and 10
                      />
                      <span className="text-lg font-normal text-gray-600">
                        /month
                      </span>
                    </div>

                    {isYearly && (
                      <div className="text-sm text-green-600 font-medium">
                        <span>$</span>
                        <AnimatedNumber
                          className="inline-flex font-mono"
                          springOptions={{
                            bounce: 0,
                            duration: 2000,
                          }}
                          value={96} // 👈 Animates yearly total too
                        />
                        <span> billed annually</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600">
                    Perfect for small teams and startups
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  {[
                    "Up to 10 participants",
                    "40-minute meeting limit",
                    "HD video quality",
                    "Screen sharing",
                    "Chat messaging",
                    "Mobile apps",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-8 bg-gray-900 hover:bg-gray-800 text-white hover:scale-105 transition-all duration-200">
                Get Started
              </Button>
            </Card>

            {/* Pro Plan - Featured */}
            <Card className="p-8 border-2 border-[#55a630] relative flex flex-col justify-between hover:border-[#4caf50] transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-500 delay-100 shadow-lg">
              <div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#55a630] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">
                      <span>$</span>
                      <AnimatedNumber
                        className="inline-flex items-center font-mono text-zinc-800 dark:text-zinc-50"
                        springOptions={{
                          bounce: 0,
                          duration: 2000,
                        }}
                        value={isYearly ? 20 : 25} // 👈 Animates between 20 and 25
                      />
                      <span className="text-lg font-normal text-gray-600">
                        /month
                      </span>
                    </div>

                    {isYearly && (
                      <div className="text-sm text-green-600 font-medium">
                        <span>$</span>
                        <AnimatedNumber
                          className="inline-flex font-mono"
                          springOptions={{
                            bounce: 0,
                            duration: 2000,
                          }}
                          value={240} // 👈 Animates yearly total too
                        />
                        <span> billed annually</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600">Ideal for growing businesses</p>
                </div>

                <div className="space-y-4 mt-8">
                  {[
                    "Up to 100 participants",
                    "Unlimited meeting duration",
                    "HD video quality",
                    "Screen sharing & recording",
                    "Advanced chat features",
                    "Mobile & desktop apps",
                    "Meeting analytics",
                    "Priority support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-8 bg-cyan-600 hover:bg-cyan-700 text-white hover:scale-105 transition-all duration-200">
                Start Free Trial
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 border-2 border-gray-200 flex flex-col justify-between hover:border-amber-300 transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-500 delay-200">
              <div>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Enterprise
                  </h3>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">
                      <span>$</span>
                      <AnimatedNumber
                        className="inline-flex items-center font-mono text-zinc-800 dark:text-zinc-50"
                        springOptions={{
                          bounce: 0,
                          duration: 2000,
                        }}
                        value={isYearly ? 40 : 50} // 👈 Animates between 8 and 10
                      />
                      <span className="text-lg font-normal text-gray-600">
                        /month
                      </span>
                    </div>

                    {isYearly && (
                      <div className="text-sm text-green-600 font-medium">
                        <span>$</span>
                        <AnimatedNumber
                          className="inline-flex font-mono"
                          springOptions={{
                            bounce: 0,
                            duration: 2000,
                          }}
                          value={480} // 👈 Animates yearly total too
                        />
                        <span> billed annually</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600">For large organizations</p>
                </div>

                <div className="space-y-4 mt-8">
                  {[
                    "Unlimited participants",
                    "Unlimited meeting duration",
                    "4K video quality",
                    "Advanced recording & storage",
                    "Custom branding",
                    "API access",
                    "Advanced analytics",
                    "Dedicated support",
                    "SSO integration",
                    "Admin controls",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-8 bg-amber-600 hover:bg-amber-700 text-white hover:scale-105 transition-all duration-200">
                Contact Sales
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12 animate-in fade-in duration-700 delay-500">
            <p className="text-gray-600 mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <span className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Cancel anytime</span>
              </span>
              <span className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>24/7 support</span>
              </span>
              <span className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>99.9% uptime SLA</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
