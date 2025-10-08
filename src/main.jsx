import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ModeProvoider } from "./contextApi.jsx";
createRoot(document.getElementById("root")).render(
  <ModeProvoider>
    <App />
  </ModeProvoider>
);
