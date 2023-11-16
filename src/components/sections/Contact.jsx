import { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GlobalContext } from "../../context/GlobalContext";

export const Contact = () => {
  const { contactRef } = useContext(GlobalContext);
  return (
    <section
      ref={contactRef}
      className="flex items-center justify-center w-full min-h-screen bg-secondary"
    >
      <div className="flex justify-between w-full p-6 rounded-lg bg-primary max-w-notebook">
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col">
            <h3 className="text-primary">CONTACTO</h3>
            <h2 className="text-3xl">ESTAMOS ANSIOSIOS POR VERTE</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos ratione excepturi molestiae nesciunt et repudiandae
              similique quo doloribus aut placeat architecto, tempora quos nisi
              ea veniam. Modi, sed necessitatibus? Ea?
            </p>
          </div>
          <div className="flex items-center gap-1">
            <BsFillTelephoneFill />
            +54 3564 575274
          </div>
        </div>
        <div className="flex items-center justify-center w-full">MAPA</div>
      </div>
    </section>
  );
};
