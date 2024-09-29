import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import { getAuthenticationAPIMock } from "../generated/api.msw";

export const worker = setupWorker(...handlers, ...getAuthenticationAPIMock());
