import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { ProductUI } from "@/types/ProductUI";
import { categories, brands } from "@/data/categories";
import { getProducts } from "@/services/productService";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

import { useGeolocation } from "@/hooks/useGeolocation";
import { getDistanceKm } from "@/utils/distance";
import ProductMap from "@/components/ProductMapa";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<ProductUI[]>([]);

  // ✅ USA SÓ O HOOK
  const userLocation = useGeolocation();

  // 🔥 BUSCAR API
  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    load();
  }, []);

  <ProductMap
  products={products}
  userLocation={userLocation}
/>

  // 🔥 FILTRO + DISTÂNCIA
  const filtered = useMemo(() => {
    if (!products) return [];

    let result = products.map((p) => {
      let distance = 9999;

      if (userLocation && p.lat && p.lng) {
        distance = getDistanceKm(
          userLocation.lat,
          userLocation.lng,
          p.lat,
          p.lng
        );
      }

      return { ...p, distance };
    });

    const searchLower = search.toLowerCase();

    result = result.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(searchLower) ||
        p.brand.toLowerCase().includes(searchLower);

      const matchBrand =
        !selectedBrand || p.brand === selectedBrand;

      const matchCategory =
        !selectedCategory || p.category === selectedCategory;

      return matchSearch && matchBrand && matchCategory;
    });

    // 🔥 ordena por distância
    result.sort((a, b) => (a.distance ?? 9999) - (b.distance ?? 9999));

    return result;
  }, [products, search, selectedBrand, selectedCategory, userLocation]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        {/* 🔎 BUSCA */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border focus-within:border-primary transition-colors">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar peças, marcas..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary text-sm md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
          </button>
        </div>

        <div className="flex gap-8">
          {/* 📂 FILTROS */}
          <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-56 space-y-6`}>
            
            {/* Categoria */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Categoria</h3>

              <button
                onClick={() => setSelectedCategory("")}
                className={`w-full text-left px-3 py-2 rounded ${
                  !selectedCategory ? "bg-primary/10 text-primary" : ""
                }`}
              >
                Todas
              </button>

              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`w-full text-left px-3 py-2 rounded ${
                    selectedCategory === c.id ? "bg-primary/10 text-primary" : ""
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Marca */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Marca</h3>

              <button
                onClick={() => setSelectedBrand("")}
                className={`w-full text-left px-3 py-2 rounded ${
                  !selectedBrand ? "bg-primary/10 text-primary" : ""
                }`}
              >
                Todas
              </button>

              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`w-full text-left px-3 py-2 rounded ${
                    selectedBrand === b ? "bg-primary/10 text-primary" : ""
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </aside>

          {/* 🛒 LISTA */}
          <div className="flex-1">
            <p className="text-sm mb-4">
              {filtered.length} resultado(s)
            </p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg">Nenhuma peça encontrada</p>
                <p className="text-sm">Tente ajustar os filtros</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;