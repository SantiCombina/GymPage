import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Trainers = () => {
  const { trainersRef } = useContext(GlobalContext);
  return (
    <section
      ref={trainersRef}
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-20 bg-secondary"
    >
      <div className="flex flex-col items-center max-w-notebook">
        <h2 className="text-center text-primary">3 AÑOS DE EXPERIENCIA MÍNIMO</h2>
        <h3 className="text-3xl">PROFESORES</h3>
      </div>
    </section>
  );
};
