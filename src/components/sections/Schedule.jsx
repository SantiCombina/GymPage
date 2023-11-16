import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Schedule = () => {
  const { scheduleRef } = useContext(GlobalContext);
  return (
    <section
      ref={scheduleRef}
      className="flex flex-col items-center justify-center min-h-screen max-w-notebook w-full px-6 py-20"
    >
      <h3 className="text-primary">ACÉRCATE</h3>
      <h2 className="text-3xl">HORARIO</h2>
    </section>
  );
};
