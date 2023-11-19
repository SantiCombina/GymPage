import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Trainers = () => {
  const { trainersRef } = useContext(GlobalContext);
  return (
    <section
      ref={trainersRef}
      className="flex flex-col items-center justify-center min-h-screen bg-secondary w-full px-6 py-20"
    >
      <div className="flex flex-col items-center max-w-notebook">
        <h3 className="text-center text-primary">3 AÑOS DE EXPERIENCIA MÍNIMO</h3>
        <h2 className="text-3xl">PROFESORES</h2>
      </div>
    </section>
  );
};
