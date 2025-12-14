import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopeContextProvider from "./context/Shopcontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ShopeContextProvider>
  <App />
  </ShopeContextProvider>
  </BrowserRouter>
);
