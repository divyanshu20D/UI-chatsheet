import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import LandingPage from "@/components/mycomponents/landingpage";
import Pricing from "@/components/mycomponents/pricing";
import { AuthContainer } from "@/components/auth/AuthContainer";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "auth",
        element: <AuthContainer />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
