import React from "react";
import "./index.css";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <AppRoutes />
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default App;
