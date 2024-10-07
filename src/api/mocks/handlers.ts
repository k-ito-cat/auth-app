import { http } from "msw";
import {
  loginSuccessResolver,
  registerSuccessResolver,
} from "../resolver/index";

const baseUrl = (path: string) =>
  `/${import.meta.env.VITE_API_BASE_URL}/${path}`;

export const handlers = [
  http.post(baseUrl("login"), loginSuccessResolver),
  http.post(baseUrl("register"), registerSuccessResolver),
];
