import { Link } from "react-router-dom";
import { categories } from "@/data/categories";
import { motion } from "framer-motion";

const CategoryGrid = () => {
  return (
    <section className="container py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl">Categorias</h2>
          <p className="text-muted-foreground text-sm mt-1">Encontre peças por categoria</p>
        </div>
        <Link to="/pecas" className="text-primary text-sm font-semibold hover:underline">
          Ver todas →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link
                to={`/pecas?categoria=${cat.id}`}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-heading font-semibold text-sm text-foreground">{cat.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{cat.count} anúncios</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryGrid;
