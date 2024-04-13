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
      className="flex items-center justify-center w-full min-h-screen px-6 py-20 bg-secondary"
    >
      <div className="flex flex-col justify-between w-full p-6 rounded-lg bg-primary max-w-notebook md:flex-row">
        <div className="flex flex-col justify-between w-full gap-4">
          <div className="flex flex-col">
            <h2 className="text-primary">CONTACTO</h2>
            <h3 className="text-3xl">ESTAMOS ANSIOSIOS POR VERTE</h3>
            <p>
              ¡Nos encantaría saber de ti! Si tienes preguntas, sugerencias o
              simplemente deseas conocernos mejor, no dudes en ponerte en
              contacto. Estamos aquí para ayudarte en cada paso de tu viaje
              fitness. ¡Esperamos ansiosos tu mensaje!
            </p>
          </div>
          <div className="flex gap-1 py-4 text-center">
            <FaWhatsapp className="text-xl" />
            +54 3564 575274
          </div>
        </div>
        <div className="flex items-center justify-center w-full max-h-[400px] overflow-hidden">
          <MapContainer
            center={position}
            style={{ width: "100%", height: "40vh", zIndex: 0 }}
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
    </section>
  );
};
