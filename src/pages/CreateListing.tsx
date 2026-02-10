import Header from "@/components/Header";
import { Camera, Plus, X } from "lucide-react";
import { categories, brands } from "@/data/categories";
import { useState } from "react";
import { motion } from "framer-motion";

const CreateListing = () => {
  const [images, setImages] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading font-bold text-3xl mb-2">Criar Anúncio</h1>
          <p className="text-muted-foreground text-sm mb-8">Preencha as informações da peça que deseja vender</p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Images */}
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Fotos da peça</label>
              <div className="flex gap-3 flex-wrap">
                {images.map((img, i) => (
                  <div key={i} className="relative w-24 h-24 rounded-xl overflow-hidden bg-card border border-border">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setImages(images.filter((_, idx) => idx !== i))}
                      className="absolute top-1 right-1 p-1 rounded-full bg-background/80 text-foreground"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="w-24 h-24 rounded-xl border-2 border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Camera className="w-5 h-5" />
                  <span className="text-[10px] font-medium">Adicionar</span>
                </button>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Título do anúncio</label>
              <input
                type="text"
                placeholder="Ex: Alternador Bosch 90A - Gol G5"
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none text-sm text-foreground placeholder:text-muted-foreground transition-colors"
              />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Descrição</label>
              <textarea
                rows={4}
                placeholder="Descreva a peça com detalhes sobre estado, compatibilidade, garantia..."
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none text-sm text-foreground placeholder:text-muted-foreground transition-colors resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Serial */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Número de série</label>
                <input
                  type="text"
                  placeholder="Ex: BSH-ALT-90A-2847"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                />
              </div>

              {/* Price */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Preço (R$)</label>
                <input
                  type="number"
                  placeholder="450.00"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Category */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Categoria</label>
                <select className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none text-sm text-foreground transition-colors">
                  <option value="">Selecione</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* Condition */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Condição</label>
                <select className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none text-sm text-foreground transition-colors">
                  <option value="novo">Novo</option>
                  <option value="seminovo">Seminovo</option>
                  <option value="usado">Usado</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Brand */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Marca do veículo</label>
                <select className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none text-sm text-foreground transition-colors">
                  <option value="">Selecione</option>
                  {brands.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Model */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Modelo</label>
                <input
                  type="text"
                  placeholder="Ex: Gol G5"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                />
              </div>
            </div>

            {/* Year */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Ano do veículo</label>
              <input
                type="text"
                placeholder="2020"
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none text-sm text-foreground placeholder:text-muted-foreground transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Publicar Anúncio
            </button>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default CreateListing;
