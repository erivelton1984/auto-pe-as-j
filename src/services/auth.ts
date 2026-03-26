import {api} from "./api";

export const register = async (data: any) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const login = async (data: any) => {
  const response = await api.post("/auth/signin", data);
  return response.data;
};