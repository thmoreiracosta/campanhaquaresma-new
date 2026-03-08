import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { shareOn } from "./utils/shareOn";
import App from "./App";
import "./index.css";

// 👇 Tipando extensão do objeto Window
declare global {
  interface Window {
    shareOn: typeof shareOn;
  }
}

window.shareOn = shareOn;

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);