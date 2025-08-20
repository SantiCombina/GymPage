import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Schedule = () => {
  const { scheduleRef } = useContext(GlobalContext);
  
  const scheduleData = [
    { day: "Lunes", morning: "06:00 - 12:00", afternoon: "16:00 - 22:00" },
    { day: "Martes", morning: "06:00 - 12:00", afternoon: "16:00 - 22:00" },
    { day: "Miércoles", morning: "06:00 - 12:00", afternoon: "16:00 - 22:00" },
    { day: "Jueves", morning: "06:00 - 12:00", afternoon: "16:00 - 22:00" },
    { day: "Viernes", morning: "06:00 - 12:00", afternoon: "16:00 - 22:00" },
    { day: "Sábado", morning: "08:00 - 14:00", afternoon: "16:00 - 20:00" },
    { day: "Domingo", morning: "09:00 - 13:00", afternoon: "Cerrado" },
  ];

  return (
    <section
      ref={scheduleRef}
      className="w-full flex justify-center items-center min-h-[100dvh] px-6 py-20"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-notebook">
      <div className="flex flex-col items-center mb-12">
        <h2 className="mb-2 text-lg tracking-widest text-primary">ACÉRCATE</h2>
        <h3 className="mb-4 text-4xl font-bold">HORARIO</h3>
        <p className="max-w-md text-center text-gray-400">
          Estamos abiertos todos los días con horarios flexibles para adaptarnos a tu rutina
        </p>
      </div>
      
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scheduleData.map((schedule, index) => (
            <div 
              key={index}
              className="p-6 transition-all duration-300 border border-gray-700 rounded-lg bg-secondary hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            >
              <h4 className="mb-4 text-xl font-semibold text-center text-primary">
                {schedule.day}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Mañana:</span>
                  <span className="font-medium">{schedule.morning}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Tarde:</span>
                  <span className="font-medium">{schedule.afternoon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
