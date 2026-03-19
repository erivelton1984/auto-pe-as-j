import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, MapPin, User, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/pecas", label: "Peças" },
    { to: "/mapa", label: "Mapa", icon: MapPin },
    { to: "/anunciar", label: "Anunciar" },
    {to: "/api", label: "API"},
  ];

  return (
    <header className="sticky top-0 z-50 surface-glass">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">AP</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground hidden sm:block">
            Auto<span className="text-primary">Peças</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/pecas"
            className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Search className="w-5 h-5" />
          </Link>

          <Link to="/carrinho" className="relative p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            to="/auth"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <User className="w-4 h-4" />
            Entrar
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="container py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/auth"
                onClick={() => setMobileOpen(false)}
                className="sm:hidden px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
              >
                Entrar / Cadastrar
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
