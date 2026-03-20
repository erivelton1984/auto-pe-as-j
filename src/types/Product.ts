export interface Product {
  id: number;
  name: string;
  code: string;
  brand: string;
  description: string;
  inventories: {
    id: number;
    quantity: number;
    price: number;
  }[];
}