import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Schedule = () => {
  const { scheduleRef } = useContext(GlobalContext);
  return (
    <section
      ref={scheduleRef}
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-20 max-w-notebook"
    >
      <h2 className="text-primary">ACÉRCATE</h2>
      <h3 className="text-3xl">HORARIO</h3>
    </section>
  );
};
