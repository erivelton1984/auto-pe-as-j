import { Disc3, Wrench, Gauge, Zap, Wind, CircleDot, ShieldCheck, Cog } from "lucide-react";

export const categories = [
  { id: "motor", name: "Motor", icon: Cog, count: 234 },
  { id: "freios", name: "Freios", icon: Disc3, count: 187 },
  { id: "suspensao", name: "Suspensão", icon: Wrench, count: 156 },
  { id: "eletrica", name: "Elétrica", icon: Zap, count: 312 },
  { id: "escapamento", name: "Escapamento", icon: Wind, count: 89 },
  { id: "rodas", name: "Rodas e Pneus", icon: CircleDot, count: 201 },
  { id: "carroceria", name: "Carroceria", icon: ShieldCheck, count: 145 },
  { id: "painel", name: "Painel e Interior", icon: Gauge, count: 178 },
];

export const brands = [
  "Volkswagen", "Fiat", "Chevrolet", "Ford", "Toyota", "Honda",
  "Hyundai", "Renault", "Jeep", "Nissan", "BMW", "Mercedes-Benz",
];
