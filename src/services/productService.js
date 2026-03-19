import api from "./api";

export const getProducts = async () => {
  const response = await api.get("/api/product");
  return response.data;
};

export const searchProducts = async (term) => {
  const response = await api.get(`/api/product/search?term=${term}`);
  return response.data;
};