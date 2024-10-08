import { getAuthenticationAPI } from "../../../api/generated/api";
import { LoginRequest } from "../../../api/generated/models";

export const postLoginApi = async (data: LoginRequest) => {
  const { postLogin } = getAuthenticationAPI();
  const response = await postLogin(data);
  return response;
};
