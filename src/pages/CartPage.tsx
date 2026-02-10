import Header from "@/components/Header";
import { useCart } from "@/contexts/CartContext";
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CartPage = () => {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center space-y-4">
          <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto" />
          <h1 className="font-heading font-bold text-2xl">Carrinho vazio</h1>
          <p className="text-muted-foreground">Adicione peças ao seu carrinho para continuar</p>
          <Link
            to="/pecas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Ver peças
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <h1 className="font-heading font-bold text-3xl mb-8">Carrinho ({totalItems})</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                className="flex gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.title}
                  className="w-24 h-24 rounded-lg object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <Link to={`/peca/${item.product.id}`} className="font-heading font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
                    {item.product.title}
                  </Link>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.product.seller.name}</p>
                  <p className="font-heading font-bold text-primary mt-2">
                    R$ {item.product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => removeItem(item.product.id)} className="ml-auto p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="h-fit p-6 rounded-xl bg-card border border-border space-y-4">
            <h2 className="font-heading font-semibold text-lg">Resumo</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal ({totalItems} itens)</span>
                <span>R$ {totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Frete</span>
                <span className="text-success">A combinar</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border flex justify-between">
              <span className="font-heading font-semibold text-foreground">Total</span>
              <span className="font-heading font-bold text-xl text-primary">
                R$ {totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <Link
              to="/auth"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Finalizar compra
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-center text-muted-foreground">Você precisará fazer login para continuar</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
