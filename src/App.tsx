import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "@/pages/Index";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import CartPage from "@/pages/CartPage";
import Auth from "@/pages/Auth";
import MapPage from "@/pages/MapPage";
import CreateListing from "@/pages/CreateListing";
import NotFound from "@/pages/NotFound";
import { AuthProvider } from "@/contexts/AuthContext";
import Dashboard from "@/pages/seller/Dashboard";
import MyProducts from "@/pages/seller/MyProducts";
import EditProduct from "@/pages/seller/EditProduct";
import PrivateRoute from "@/routes/PrivateRoutes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/pecas" element={<Products />} />
              <Route path="/peca/:id" element={<ProductDetail />} />
              <Route path="/auth" element={<Auth />} />            
              <Route path="/vendedor/produtos" element={<PrivateRoute role="COMPANY"><MyProducts /></PrivateRoute>} />
              <Route path="/vendedor/editar/:id" element={<PrivateRoute role="COMPANY"><EditProduct /></PrivateRoute>} />
              <Route path="/vendedor" element={<PrivateRoute role="COMPANY"><Dashboard /></PrivateRoute>} />
              <Route path="*" element={<NotFound />} />
              {/* 🔐 SOMENTE LOGADO */}
              <Route path="/carrinho" element={<PrivateRoute><CartPage /></PrivateRoute>} />
              {/* 🏪 SOMENTE VENDEDOR */}
              <Route path="/anunciar" element={<PrivateRoute role="COMPANY"><CreateListing /></PrivateRoute>} />
              {/* 🗺️ OPCIONAL (pode deixar aberto se quiser) */}
              <Route path="/mapa" element={<MapPage />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
