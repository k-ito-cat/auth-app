import type { ResponseResolver } from "msw";
import type { MessageResponse } from "../../generated/models";
import { delay } from "msw";
import { getPostRegisterResponseMock } from "../../generated/api.msw";

import { HttpResponse } from "msw";

/**
 * 新規登録成功時のレスポンスの固定値の返却
 */
export const registerSuccessResolver: ResponseResolver = async () => {
  await delay(2000);
  // MEMO: getPostRegisterResponseMock関数の引数のオーバーライドレスポンスを使用してレスポンスを上書き
  const response: MessageResponse = getPostRegisterResponseMock({
    accessToken: "fixed-access-token",
    refreshToken: "fixed-refresh-token",
    expiresIn: 3600,
    userId: "123e4567-e89b-12d3-a456-426614174000",
    username: "johndoe",
    message: "User registered successfully and logged in.",
  });
  return HttpResponse.json(response, { status: 201 });
};
