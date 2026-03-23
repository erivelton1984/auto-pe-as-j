import Header from "@/components/Header";
import { useState } from "react";
import { Mail, Lock, User, Store, ArrowRight, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { register, login } from "@/services/auth";
import { useNavigate } from "react-router-dom";

type AuthMode = "login" | "register-buyer" | "register-seller";

const Auth = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    storeName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const titles: Record<AuthMode, string> = {
    login: "Entrar na sua conta",
    "register-buyer": "Criar conta de comprador",
    "register-seller": "Criar conta de vendedor",
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (mode === "login") {
        const data = await login({
          email: form.email,
          password: form.password,
        });

        localStorage.setItem("token", data.token);

        localStorage.setItem(
          "user",
          JSON.stringify({
            id: data.userId,
            name: data.name,
            email: data.email,
            role: data.role,
          })
        );

        navigate("/");
      } else {
        const role = mode === "register-seller" ? "COMPANY" : "CLIENT";

        const data = await register({
          name: mode === "register-seller" ? form.storeName : form.name,
          email: form.email,
          password: form.password,
          role,
        });

        localStorage.setItem("token", data.token);

        localStorage.setItem(
          "user",
          JSON.stringify({
            id: data.userId,
            name: data.name,
            email: data.email,
            role: data.role,
          })
        );

        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao autenticar");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12 flex justify-center">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-6"
        >
          <div className="text-center">
            <h1 className="font-heading font-bold text-3xl">{titles[mode]}</h1>
            <p className="text-muted-foreground text-sm mt-2">
              {mode === "login"
                ? "Acesse sua conta para comprar ou anunciar"
                : "Preencha seus dados para se cadastrar"}
            </p>
          </div>

          {mode === "login" && (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setMode("register-buyer")}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <User className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-foreground">
                  Sou comprador
                </span>
              </button>
              <button
                onClick={() => setMode("register-seller")}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <Store className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-foreground">
                  Sou vendedor
                </span>
              </button>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode !== "login" && (
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Nome completo
                </label>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border focus-within:border-primary transition-colors">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
                  />
                </div>
              </div>
            )}

            {mode === "register-seller" && (
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Nome da loja
                </label>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border focus-within:border-primary transition-colors">
                  <Store className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Nome do seu comércio"
                    value={form.storeName}
                    onChange={(e) =>
                      handleChange("storeName", e.target.value)
                    }
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">
                E-mail
              </label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border focus-within:border-primary transition-colors">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">
                Senha
              </label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border focus-within:border-primary transition-colors">
                <Lock className="w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) =>
                    handleChange("password", e.target.value)
                  }
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              {mode === "login" ? "Entrar" : "Cadastrar"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            {mode === "login" ? (
              <>
                Não tem conta?{" "}
                <button
                  onClick={() => setMode("register-buyer")}
                  className="text-primary font-medium hover:underline"
                >
                  Cadastre-se
                </button>
              </>
            ) : (
              <>
                Já tem conta?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-primary font-medium hover:underline"
                >
                  Entrar
                </button>
              </>
            )}
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Auth;