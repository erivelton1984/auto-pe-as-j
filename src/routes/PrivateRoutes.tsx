import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

type PrivateRouteProps = {
  children: React.ReactNode;
  role?: "CLIENT" | "COMPANY";
};

const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  const { user } = useAuth();

  // ❌ não está logado
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // ❌ não tem permissão
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  // ✅ liberado
  return <>{children}</>;
};

export default PrivateRoute;