import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalContext";

export const Contact = () => {
  const { contactRef } = useContext(GlobalContext);

  return (
    <section
      ref={contactRef}
      className="flex items-center justify-center w-full min-h-screen px-6 py-20 bg-secondary"
    >
      <div className="flex justify-between w-full p-6 rounded-lg bg-primary max-w-notebook">
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col">
            <h3 className="text-primary">CONTACTO</h3>
            <h2 className="text-3xl">ESTAMOS ANSIOSIOS POR VERTE</h2>
            <p>
              ¡Nos encantaría saber de ti! Si tienes preguntas, sugerencias o
              simplemente deseas conocernos mejor, no dudes en ponerte en
              contacto. Estamos aquí para ayudarte en cada paso de tu viaje
              fitness. ¡Esperamos ansiosos tu mensaje!
            </p>
          </div>
          <div className="flex gap-1 text-center">
            <FaWhatsapp className="text-xl" />
            +54 3564 575274
          </div>
        </div>
        <div className="flex items-center justify-center w-full">MAPA</div>
      </div>
    </section>
  );
};
