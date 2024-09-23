// TODO: Orvalで生成したハンドラーを指定
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
