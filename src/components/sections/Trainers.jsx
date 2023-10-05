import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Trainers = () => {
  const { trainersRef } = useContext(GlobalContext);
  return (
    <section
      ref={trainersRef}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h3 className="text-center text-primary">3 AÑOS DE EXPERIENCIA MÍNIMO</h3>
      <h2 className="text-3xl">PROFESORES</h2>
    </section>
  );
};
