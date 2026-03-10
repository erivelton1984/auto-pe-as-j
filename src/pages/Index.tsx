import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, Zap } from "lucide-react";

const features = [
  { icon: MapPin, title: "Perto de você", desc: "Encontre vendedores na sua região pelo mapa interativo." },
  { icon: ShieldCheck, title: "Compra segura", desc: "Transações protegidas e vendedores verificados." },
  { icon: Zap, title: "Rápido e fácil", desc: "Anuncie ou compre em poucos cliques." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />

        {/* Features */}
        <section className="container py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FeaturedProducts />

        {/* CTA */}
        <section className="container py-16">
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-card to-card border border-primary/20 p-10 md:p-16 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Tem peças para vender?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Cadastre-se gratuitamente e comece a anunciar suas peças para milhares de compradores. 12
            </p>
            <Link
              to="/auth"
              className="inline-flex px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-lg hover:bg-primary/90 transition-colors animate-pulse-glow"
            >
              Começar a vender
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 AutoPeças. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-foreground transition-colors">Termos</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Privacidade</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
