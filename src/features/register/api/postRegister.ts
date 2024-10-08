import { getAuthenticationAPI } from "../../../api/generated/api";
import type { RegisterRequest } from "../../../api/generated/models";

export const postRegisterApi = async (data: RegisterRequest) => {
  const { postRegister } = getAuthenticationAPI();
  const response = await postRegister(data);
  return response;
};
