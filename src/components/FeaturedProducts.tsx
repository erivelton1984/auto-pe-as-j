import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section className="container py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl">Destaques</h2>
          <p className="text-muted-foreground text-sm mt-1">Peças mais recentes e populares</p>
        </div>
        <Link to="/pecas" className="text-primary text-sm font-semibold hover:underline">
          Ver mais →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.slice(0, 6).map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
