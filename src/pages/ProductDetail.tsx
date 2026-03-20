import Header from "@/components/Header";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { MapPin, Star, ShoppingCart, ArrowLeft, Tag, Hash, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProductById } from "@/services/productService";
import type { ProductUI } from "@/types/ProductUI";

const conditionLabel: Record<string, string> = {
  novo: "Novo",
  seminovo: "Seminovo",
  usado: "Usado",
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState<ProductUI | null>(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <p className="text-2xl font-heading text-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <Link to="/pecas" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar para peças
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square rounded-2xl overflow-hidden bg-card border border-border"
          >
            <img
              src={product.image || "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600"}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                {product.brand} · {product.model} · {product.year}
              </p>
              <h1 className="font-heading font-bold text-3xl mt-2">{product.title}</h1>
            </div>

            <p className="font-heading font-bold text-4xl text-primary">
              R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium">
                <Tag className="w-3.5 h-3.5" />
                {conditionLabel[product.condition] || product.condition}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium">
                <Hash className="w-3.5 h-3.5" />
                {product.serialNumber || "N/A"}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {product.createdAt || "-"}
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description || "Sem descrição"}
            </p>

            <div className="p-4 rounded-xl bg-card border border-border space-y-2">
              <p className="font-heading font-semibold text-foreground">
                {product.sellerName || "Vendedor"}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {product.location || "Brasil"}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  {product.rating || 4.5}
                </span>
              </div>
            </div>

            <button
              onClick={() => addItem(product)}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-lg hover:bg-primary/90 transition-colors animate-pulse-glow"
            >
              <ShoppingCart className="w-5 h-5" />
              Adicionar ao Carrinho
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;