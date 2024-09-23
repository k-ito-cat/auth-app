import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

if (import.meta.env.VITE_ENVIRONMENT === "development") {
  const { worker } = await import("./api/mocks/browser");
  await worker.start({
    onUnhandledRequest: "bypass",
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
