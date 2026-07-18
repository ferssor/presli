import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { SlideManagement } from "./components/slide-management";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SlideManagement />
  </StrictMode>,
);
