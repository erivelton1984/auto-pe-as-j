import { useMyProducts } from "@/hooks/useMyProducts";
import { useNavigate } from "react-router-dom";

const MyProducts = () => {
  const { products, deleteProduct } = useMyProducts();
  const navigate = useNavigate();

  return (
    <div className="container py-6">
      <h1 className="text-xl font-bold mb-4">Minhas Peças</h1>

      <div className="grid gap-4">
        {products.map((p: any) => (
          <div
            key={p.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-muted-foreground">R$ {p.price}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => navigate(`/vendedor/editar/${p.id}`)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Editar
              </button>

              <button
                onClick={() => deleteProduct(p.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;