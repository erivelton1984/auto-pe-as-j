import { useEffect } from "react";
import { getProducts } from "../services/productService";

const TesteAPI = () => {

  useEffect(() => {
    console.log("Chamando API...");

    getProducts()
      .then((data) => {
        console.log("SUCESSO:", data);
      })
      .catch((err) => {
        console.error("ERRO:", err);
      });

  }, []);

  return <div>Teste API</div>;
};

export default TesteAPI;