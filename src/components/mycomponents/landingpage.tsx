import { Button } from "@/components/ui/button";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import image1 from "@/assets/landingpage.jpg";
import ColourfulText from "../ui/colourful-text";
import Header from "../Header";
import { ShimmerButton } from "../ui/shimmer-button";

export default function Home() {
  const TABS = [
    "Home",
    "Features",
    "How It Works",
    "Resources",
    "Templates",
    "Pricing",
  ];

  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0">
          <BackgroundRippleEffect />
        </div>
        <div className="relative z-10">
          <Header tabs={TABS} />
          {/* Hero Section */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl font-medium text-gray-800 mb-6 text-balance">
                {/* <span className="relative">
              <span className="bg-green-500 text-white px-3 py-1 rounded-lg">Spreadsheets</span>
            </span> */}
                <LayoutTextFlip
                  text="Turn your "
                  words={[
                    "SpreadSheets",
                    "DataTracking",
                    "Calculations",
                    "GridAnalysis",
                  ]}
                />

                <br />
                <span className="mt-4 block font-semibold">
                  Into Your <ColourfulText text="AI Team" />
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl text-gray-400 mb-8 max-w-2xl text-center mx-auto text-balance">
                <TextGenerateEffect
                  words={
                    " Automate research, content, and tasks directly inside your spreadsheet and even more checks to follow up the basic needs"
                  }
                />
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ">
                <ShimmerButton variant="green">
                  
                  <span
                  className="text-white text-lg "
                >
                  {/* shadow-[0_10px_20px_rgba(0,215,0,0.4)] */}
                  Start Free Trial
                </span>
                </ShimmerButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 text-lg border-gray-300 bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mb-16">
                <p className="text-gray-500 text-sm mb-6">
                  Trusted by Teams Worldwide
                </p>
                <div className="flex items-center justify-center space-x-8 opacity-60">
                  <div className="text-gray-400 font-semibold">Felicis</div>
                  <div className="text-gray-400 font-semibold">Amplify</div>
                  <div className="text-gray-400 font-semibold">
                    Daniel Gross
                  </div>
                  <div className="text-gray-400 font-semibold">Bessemer</div>
                  <div className="text-gray-400 font-semibold">
                    Venture Partners
                  </div>
                </div>
              </div>

              {/* Product Demo */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
                  {/* <Image
                src="/images/chatsheet-demo.jpg"
                alt="Chatsheet spreadsheet interface demo"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              /> */}
                  <img
                    src={image1}
                    alt="Chatsheet spreadsheet interface demo"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
