import { BsFillTelephoneFill } from "react-icons/bs";

export const Contact = ({ contactRef }) => {
  return (
    <div
      ref={contactRef}
      className="flex items-center justify-center h-screen p-40 text-white bg-black"
    >
      <div className="bg-[#101010] h-full w-full rounded-lg p-6 flex justify-between">
        <div className="w-full">
          <h3 className="text-primary">CONTACTO</h3>
          <h2 className="text-3xl">ESTAMOS ANSIOSIOS POR VERTE</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos ratione excepturi molestiae nesciunt et repudiandae
            similique quo doloribus aut placeat architecto, tempora quos nisi ea
            veniam. Modi, sed necessitatibus? Ea?
          </p>
          <BsFillTelephoneFill />
          <span>+54 3564 575274</span>
        </div>

        <div className="flex items-center justify-center w-full">MAPA</div>
      </div>
    </div>
  );
};
