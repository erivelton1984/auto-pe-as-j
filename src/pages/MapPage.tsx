import Header from "@/components/Header";
import { products } from "@/data/products";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const MapPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <h1 className="font-heading font-bold text-3xl mb-2">Mapa de Anúncios</h1>
        <p className="text-muted-foreground text-sm mb-8">Encontre peças perto da sua localização</p>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map placeholder */}
          <div className="lg:col-span-2 aspect-video rounded-2xl bg-card border border-border flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-card" />
            <div className="relative text-center space-y-3 p-6">
              <MapPin className="w-12 h-12 text-primary mx-auto" />
              <p className="font-heading font-semibold text-lg text-foreground">Mapa Interativo</p>
              <p className="text-sm text-muted-foreground max-w-sm">
                O mapa interativo será habilitado com a integração do backend. Por enquanto, veja os anúncios mais próximos na lista ao lado.
              </p>
            </div>
            {/* Decorative dots */}
            {products.map((p, i) => (
              <div
                key={p.id}
                className="absolute w-3 h-3 rounded-full bg-primary animate-pulse-glow"
                style={{
                  top: `${20 + i * 12}%`,
                  left: `${15 + i * 14}%`,
                }}
              />
            ))}
          </div>

          {/* Nearby listings */}
          <div className="space-y-3">
            <h2 className="font-heading font-semibold text-lg mb-4">Próximos a você</h2>
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/peca/${p.id}`}
                className="flex gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <img src={p.images[0]} alt={p.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">{p.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {p.seller.location}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-heading font-bold text-primary">
                      R$ {p.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      {p.seller.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapPage;
