import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Prices = () => {
  const { pricesRef } = useContext(GlobalContext);

  const cardStyle =
    "sm:w-[350px] w-[320px] rounded-lg h-[550px] p-6 flex bg-[#191919] items-center flex-col justify-center gap-4 shadow-[inset_0_0_2px_0_rgb(209,213,219)] hover:border-2 hover:border-[#00C8FA]";
  const buttonStyle = "border-2 text-lg rounded-md cursor-pointer border-[#00C8FA]/60 py-2 px-10 bg-transparent hover:bg-gray-700/50"

  return (
    <section
      ref={pricesRef}
      className="flex flex-col items-center justify-center w-full min-h-screen gap-4 px-6 py-20 max-w-notebook"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-primary">PRIMER CLASE GRATIS</h3>
        <h2 className="text-3xl">PRECIOS</h2>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row">
          <div className={cardStyle}>
            <h5>BÁSICO</h5>
            <span className="text-3xl font-bold">$4500</span>
            <li>2 horas de ejercicio</li>
            <li>Libre consulta a profesores</li>
            <li>Acceso a la comunidad</li>
            <button className={buttonStyle}>COMPRAR AHORA</button>
          </div>
          <div className={cardStyle}>
            <h5>PLUS</h5>
            <span className="text-3xl font-bold">$5500</span>
            <li>5 horas de ejercicio</li>
            <li>Libre consulta a profesores</li>
            <li>Acceso al minibar</li>
            <button className={buttonStyle}>COMPRAR AHORA</button>
          </div>
          <div className={cardStyle}>
            <h5>VIP</h5>
            <span className="text-3xl font-bold">$6500</span>
            <li>8 horas de ejercicio</li>
            <li>Consulta a profesores privados</li>
            <li>Indumentaria gratis</li>
            <button className={buttonStyle}>COMPRAR AHORA</button>
          </div>
        </div>
      </div>
    </section>
  );
};
