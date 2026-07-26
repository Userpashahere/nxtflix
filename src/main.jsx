import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WatchLaterProvider } from "./context/WatchLaterContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WatchLaterProvider>
      <App />
    </WatchLaterProvider>
  </StrictMode>
);
