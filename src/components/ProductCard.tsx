import { MapPin, Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const conditionLabel: Record<string, string> = {
  novo: "Novo",
  seminovo: "Seminovo",
  usado: "Usado",
};

const conditionStyle: Record<string, string> = {
  novo: "bg-success/20 text-success",
  seminovo: "bg-primary/20 text-primary",
  usado: "bg-muted text-muted-foreground",
};

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-amber"
    >
      <Link to={`/peca/${product.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img

            src={product.image || "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600"}

            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />


          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-primary/20 text-primary">
            Peça

          </span>
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
            {product.brand} · {product.model} · {product.year}
          </p>
          <Link to={`/peca/${product.id}`}>
            <h3 className="mt-1 font-heading font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {product.title}
            </h3>
          </Link>
        </div>

        {/* Localização simples (placeholder backend futuro) */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <span>{product.location || "Brasil"}</span>

          <span className="ml-auto flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            {product.rating || 4.5}
          </span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="font-heading font-bold text-xl text-primary">
            {/*R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}*/}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="p-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Adicionar ao carrinho"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
