import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { setZodErrorMap } from "./api/libs/zod-ja.ts";

if (import.meta.env.VITE_ENVIRONMENT === "development") {
  const { worker } = await import("./api/mocks/browser");
  await worker.start({
    onUnhandledRequest: "bypass",
  });
}
setZodErrorMap();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
