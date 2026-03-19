import { useEffect, useState } from "react";
import api from "../services/api";

interface Product {
  id: number;
  name: string;
  code: string;
  brand: string;
  description: string;
}

export default function TestApi() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/products")
      .then(res => {
        console.log("SUCESSO:", res.data);
        setProducts(res.data);
      })
      .catch(err => {
        console.error("ERRO:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Produtos</h1>

      {products.map(product => (
        <div key={product.id} style={{
          border: "1px solid #ccc",
          marginBottom: "10px",
          padding: "10px"
        }}>
          <h3>{product.name}</h3>
          <p><strong>Código:</strong> {product.code}</p>
          <p><strong>Marca:</strong> {product.brand}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}