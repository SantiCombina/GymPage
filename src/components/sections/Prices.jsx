import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Prices = () => {
  const { pricesRef } = useContext(GlobalContext);
  const cardStyle =
    "sm:w-[350px] w-[320px] rounded-lg h-[550px] p-6 flex bg-[#191919] items-center flex-col justify-center gap-4 hover:border-2 border-[#00C8FA] cursor-pointer";

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
          </div>
          <div className={cardStyle}>
            <h5>PLUS</h5>
            <span className="text-3xl font-bold">$5500</span>
            <li>5 horas de ejercicio</li>
            <li>Libre consulta a profesores</li>
            <li>Acceso al minibar</li>
          </div>
          <div className={cardStyle}>
            <h5>VIP</h5>
            <span className="text-3xl font-bold">$6500</span>
            <li>8 horas de ejercicio</li>
            <li>Consulta a profesores privados</li>
            <li>Indumentaria gratis</li>
          </div>
        </div>
      </div>
    </section>
  );
};
