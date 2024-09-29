import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

if (import.meta.env.VITE_ENVIRONMENT === "development") {
  const { worker } = await import("./api/mocks/browser");
  await worker.start({
    onUnhandledRequest: "bypass",
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
