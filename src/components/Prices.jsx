export const Prices = ({ pricesRef }) => {
  const cardStyle =
    "w-[350px] rounded-lg h-[550px] p-6 flex bg-[#101010] items-center flex-col justify-center gap-4";

  return (
    <div
      ref={pricesRef}
      className="flex flex-col items-center justify-center h-screen text-white bg-black"
    >
      <h3 className="text-primary">PRIMER CLASE GRATIS</h3>
      <h2 className="text-3xl">PRECIOS</h2>

      <div className="flex gap-8 p-6">
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
  );
};
