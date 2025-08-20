import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalContext";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export const Contact = () => {
  const { contactRef } = useContext(GlobalContext);

  const position = [-31.42797, -62.08266];

  return (
    <section
      ref={contactRef}
      className="w-full flex justify-center items-center min-h-[100dvh] px-6 py-20 bg-secondary"
    >
      <div className="flex items-center justify-center w-full max-w-notebook">
        <div className="flex flex-col justify-between w-full gap-8 p-8 rounded-lg bg-primary md:flex-row">
        <div className="flex flex-col justify-between w-full gap-6">
          <div className="flex flex-col">
            <h2 className="mb-2 text-lg tracking-widest text-primary">CONTACTO</h2>
            <h3 className="mb-6 text-4xl font-bold">ESTAMOS ANSIOSOS POR VERTE</h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              ¡Nos encantaría saber de ti! Si tienes preguntas, sugerencias o
              simplemente deseas conocernos mejor, no dudes en ponerte en
              contacto. Estamos aquí para ayudarte en cada paso de tu viaje
              fitness.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-4 py-3 transition-colors rounded-lg bg-secondary hover:bg-secondary/80">
              <FaWhatsapp className="text-2xl text-green-500" />
              <div>
                <p className="text-sm text-gray-400">WhatsApp</p>
                <p className="font-semibold">+54 3564 575274</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                <span className="text-sm text-white">📍</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Ubicación</p>
                <p className="font-semibold">Centro de la ciudad</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center w-full max-h-[500px] overflow-hidden">
          <div className="w-full h-[400px] rounded-lg overflow-hidden border-2 border-gray-700">
            <MapContainer
              center={position}
              style={{ width: "100%", height: "100%", zIndex: 0 }}
              zoom={14}
              minZoom={4}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution=""
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}></Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
