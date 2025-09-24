import { Outlet } from "react-router-dom";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function RootLayout() {
  return (
    <div className="relative min-h-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
