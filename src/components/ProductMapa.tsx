import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ProductUI } from "@/types/ProductUI";
import { Link } from "react-router-dom";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

interface Props {
  products: ProductUI[];
  userLocation?: {
    lat: number;
    lng: number;
  };
  selectedProductId?: string | null;
  onSelectProduct?: (id: string) => void;
}

const ChangeView = ({
  center,
}: {
  center: [number, number];
}) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 14, {
      animate: true,
    });
  }, [center]);

  return null;
};

const ProductMap = ({
  products,
  userLocation,
  selectedProductId,
  onSelectProduct,
}: Props) => {
  const center: [number, number] = userLocation
    ? [userLocation.lat, userLocation.lng]
    : [-25.43, -49.27]; // Curitiba fallback

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border">
      <MapContainer center={center} zoom={12} className="w-full h-full">

        {selectedProductId && (() => {  
          const selected = products.find(p => p.id === selectedProductId);

          if (selected && selected.lat && selected.lng) {
            return (
              <ChangeView center={[selected.lat, selected.lng]} />
            );
          }

          return null;
        })()}
        
        <TileLayer
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

          const isSelected = product.id === selectedProductId;

          return (
            <Marker
              key={product.id}
              position={[product.lat, product.lng]}
              eventHandlers={{
                click: () => onSelectProduct?.(product.id),
              }}
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