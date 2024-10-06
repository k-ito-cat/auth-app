import { http } from "msw";
import { registerSuccessResolver } from "../resolver/index";

export const handlers = [http.post("/v1/register", registerSuccessResolver)];
