import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ProductUI } from "@/types/ProductUI";
import { Link } from "react-router-dom";

interface Props {
  products: ProductUI[];
  userLocation?: {
    lat: number;
    lng: number;
  };
}


const ProductMap = ({ products, userLocation }: Props) => {
  const center = userLocation || { lat: -25.43, lng: -49.27 }; // Curitiba fallback

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={12}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 📍 USER */}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]}>
            <Popup>Você está aqui</Popup>
          </Marker>
        )}

        {/* 📦 PRODUTOS */}
        {products.map((product) => {
          if (!product.lat || !product.lng) return null;

          return (
            <Marker
              key={product.id}
              position={[product.lat, product.lng]}
            >
              <Popup>
                <div className="space-y-2">
                  <strong>{product.title}</strong>
                  <br />
                  R$ {product.price}

                  <br />

                  <Link
                    to={`/peca/${product.id}`}
                    className="text-blue-500 underline"
                  >
                    Ver produto
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default ProductMap;