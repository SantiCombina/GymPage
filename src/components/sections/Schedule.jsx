import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Schedule = () => {
  const { scheduleRef } = useContext(GlobalContext);
  return (
    <section
      ref={scheduleRef}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h3 className="text-primary">TEXTNASI</h3>
      <h2 className="text-3xl">HORARIARDO</h2>
    </section>
  );
};
