import { api } from "./api";
import { Product } from "@/types/Product";
import { ProductUI } from "@/types/ProductUI";



const mapProduct = (p: Product): ProductUI => {
  return {
    id: String(p.id),
    title: p.name,
    price: p.inventories?.[0]?.price ?? 0,
    brand: p.brand,
    category: "geral",
    // 🔥 TEMPORÁRIO (simulando localização)
    lat: -25.4284,
    lng: -49.2733,
  };
};

export const getProducts = async (): Promise<ProductUI[]> => {
  const response = await api.get("/products");
  return response.data;
};

export const getProductById = async (id: string): Promise<ProductUI> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};


/*export const getProducts = async (): Promise<ProductUI[]> => {
  const response = await api.get("/products");
  return response.data.map(mapProduct);
};*/