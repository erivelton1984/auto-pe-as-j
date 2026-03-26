export interface ProductUI {
  id: string;
  title: string;
  price: number;

  // básicos
  brand?: string;
  model?: string;
  year?: number;
  description?: string;

  // imagem
  image?: string;
  images?: string[];

  // vendedor
  sellerName?: string;
  seller?: {
    name?: string;
    location?: string;
    rating?: number;
  };

  // extras
  location?: string;
  rating?: number;
  condition?: string;
  serialNumber?: string;
  createdAt?: string;
  category?: string;

  lat: number;
  lng?: number;
}