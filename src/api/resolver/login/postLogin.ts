import type { ResponseResolver } from "msw";
import { delay, HttpResponse } from "msw";
import { getPostLoginResponseMock } from "../../generated/api.msw";
import { AuthResponse } from "../../generated/models";

export const loginSuccessResolver: ResponseResolver = async () => {
  await delay(2000);

  const response: AuthResponse = getPostLoginResponseMock({
    accessToken: "fixed-access-token",
    refreshToken: "fixed-refresh-token",
    expiresIn: 3600,
    userId: "123e4567-e89b-12d3-a456-426614174000",
    username: "johndoe",
    message: "User logged in successfully.",
  });

  return HttpResponse.json(response, { status: 200 });
};
