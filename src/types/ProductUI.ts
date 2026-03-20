export interface ProductUI {
  id: string;
  title: string;
  price: number;
  brand: string;
  category?: string;
  lat?: number;
  lng?: number;
  distance?: number;
}