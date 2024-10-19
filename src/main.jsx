import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StoreContext from "./Context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <StoreContext>
    <App />
  </StoreContext>
);
