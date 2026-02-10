import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl space-y-6"
        >
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight">
            Encontre a peça certa
            <br />
            <span className="text-gradient">perto de você</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Marketplace de autopeças com localização em tempo real. Compre peças novas e usadas dos melhores vendedores da sua região.
          </p>

          {/* Search bar */}
          <div className="flex gap-2 max-w-lg">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border focus-within:border-primary transition-colors">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Buscar peças, marcas, modelos..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
              />
            </div>
            <Link
              to="/pecas"
              className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center gap-2 shrink-0"
            >
              Buscar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {["Freios", "Motor", "Suspensão", "Elétrica"].map((tag) => (
              <Link
                key={tag}
                to="/pecas"
                className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
