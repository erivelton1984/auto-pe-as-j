import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Painel do Vendedor</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/vendedor/produtos"
          className="p-6 rounded-xl bg-secondary hover:bg-secondary/80 transition"
        >
          📦 Minhas Peças
        </Link>

        <Link
          to="/anunciar"
          className="p-6 rounded-xl bg-primary text-white hover:bg-primary/90 transition"
        >
          ➕ Nova Peça
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;