export interface Product {
  id: string;
  title: string;
  description: string;
  serialNumber: string;
  price: number;
  category: string;
  brand: string;
  model: string;
  year: string;
  condition: "novo" | "seminovo" | "usado";
  images: string[];
  seller: {
    name: string;
    rating: number;
    location: string;
    lat: number;
    lng: number;
  };
  createdAt: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Alternador Bosch 90A - Gol G5",
    description: "Alternador original Bosch 90A em excelente estado, compatível com VW Gol G5 1.0 e 1.6. Funcionando perfeitamente, testado.",
    serialNumber: "BSH-ALT-90A-2847",
    price: 450,
    category: "eletrica",
    brand: "Volkswagen",
    model: "Gol G5",
    year: "2012",
    condition: "seminovo",
    images: ["https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600"],
    seller: { name: "AutoPeças Silva", rating: 4.8, location: "São Paulo, SP", lat: -23.5505, lng: -46.6333 },
    createdAt: "2026-02-08",
  },
  {
    id: "2",
    title: "Kit Pastilha de Freio Dianteira - Civic",
    description: "Kit de pastilhas de freio dianteiras novas para Honda Civic 2017-2021. Marca Cobreq, alta performance.",
    serialNumber: "CBQ-PFD-HC-1923",
    price: 189.90,
    category: "freios",
    brand: "Honda",
    model: "Civic",
    year: "2019",
    condition: "novo",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600"],
    seller: { name: "Freios & Cia", rating: 4.9, location: "Rio de Janeiro, RJ", lat: -22.9068, lng: -43.1729 },
    createdAt: "2026-02-07",
  },
  {
    id: "3",
    title: "Amortecedor Traseiro Monroe - Corolla",
    description: "Par de amortecedores traseiros Monroe Reflex para Toyota Corolla 2015-2019. Garantia de 1 ano.",
    serialNumber: "MNR-AT-CRL-5512",
    price: 620,
    category: "suspensao",
    brand: "Toyota",
    model: "Corolla",
    year: "2017",
    condition: "novo",
    images: ["https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600"],
    seller: { name: "Suspensão Total", rating: 4.6, location: "Belo Horizonte, MG", lat: -19.9167, lng: -43.9345 },
    createdAt: "2026-02-06",
  },
  {
    id: "4",
    title: "Farol Dianteiro LED - Onix 2020",
    description: "Farol dianteiro lado esquerdo com LED DRL para Chevrolet Onix 2020+. Original GM, sem detalhes.",
    serialNumber: "GM-FDL-ONX-7734",
    price: 890,
    category: "eletrica",
    brand: "Chevrolet",
    model: "Onix",
    year: "2020",
    condition: "seminovo",
    images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600"],
    seller: { name: "Elétrica Automotiva JR", rating: 4.7, location: "Curitiba, PR", lat: -25.4284, lng: -49.2733 },
    createdAt: "2026-02-05",
  },
  {
    id: "5",
    title: "Radiador de Água - Fiat Toro",
    description: "Radiador de água completo para Fiat Toro 1.8 e 2.0 diesel. Marca Visconde, novo na caixa.",
    serialNumber: "VSC-RAD-FT-3301",
    price: 540,
    category: "motor",
    brand: "Fiat",
    model: "Toro",
    year: "2021",
    condition: "novo",
    images: ["https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600"],
    seller: { name: "Radiadores Express", rating: 4.5, location: "Porto Alegre, RS", lat: -30.0346, lng: -51.2177 },
    createdAt: "2026-02-04",
  },
  {
    id: "6",
    title: "Jogo de Rodas Liga Leve Aro 17",
    description: "Jogo com 4 rodas de liga leve aro 17, furação 5x100, offset 40. Estilo esportivo, sem marcas.",
    serialNumber: "RLL-17-5100-0088",
    price: 2200,
    category: "rodas",
    brand: "Volkswagen",
    model: "Golf",
    year: "2018",
    condition: "seminovo",
    images: ["https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=600"],
    seller: { name: "Rodas Premium SP", rating: 4.9, location: "São Paulo, SP", lat: -23.5631, lng: -46.6544 },
    createdAt: "2026-02-03",
  },
];
