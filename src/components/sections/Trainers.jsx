import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Trainers = () => {
  const { trainersRef } = useContext(GlobalContext);
  
  const trainersData = [
    {
      id: 1,
      name: "Carlos Mendoza",
      specialty: "Entrenamiento Funcional",
      experience: "5 años",
      description: "Especialista en entrenamiento funcional y crossfit. Ayuda a mejorar la fuerza y resistencia.",
      certifications: ["Crossfit Level 2", "Entrenamiento Funcional"]
    },
    {
      id: 2,
      name: "Ana García",
      specialty: "Yoga & Pilates",
      experience: "4 años", 
      description: "Instructora certificada en yoga y pilates. Se enfoca en flexibilidad y bienestar mental.",
      certifications: ["Yoga Alliance", "Pilates Mat"]
    },
    {
      id: 3,
      name: "Miguel Torres",
      specialty: "Musculación",
      experience: "6 años",
      description: "Entrenador personal especializado en hipertrofia y fuerza. Planes personalizados.",
      certifications: ["Personal Trainer", "Nutrición Deportiva"]
    }
  ];

  return (
    <section
      ref={trainersRef}
      className="w-full flex justify-center items-center min-h-[100dvh] px-6 py-20 bg-secondary"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-notebook">
        <div className="flex flex-col items-center mb-12">
          <h2 className="mb-2 text-lg tracking-widest text-center text-primary">
            3 AÑOS DE EXPERIENCIA MÍNIMO
          </h2>
          <h3 className="mb-4 text-4xl font-bold">PROFESORES</h3>
          <p className="max-w-md text-center text-gray-400">
            Nuestro equipo de entrenadores certificados está aquí para ayudarte a alcanzar tus objetivos
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainersData.map((trainer) => (
            <div 
              key={trainer.id}
              className="bg-primary p-6 rounded-lg border border-gray-700 hover:border-[#06C8D6] transition-all duration-300 hover:shadow-lg hover:shadow-[#06C8D6]/20 group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#06C8D6] to-[#04A5B8] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {trainer.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h4 className="text-xl font-semibold text-center mb-2 group-hover:text-[#06C8D6] transition-colors">
                {trainer.name}
              </h4>
              
              <div className="mb-4 text-center">
                <span className="text-[#06C8D6] font-medium">{trainer.specialty}</span>
                <p className="mt-1 text-sm text-gray-400">{trainer.experience} de experiencia</p>
              </div>
              
              <p className="mb-4 text-sm leading-relaxed text-center text-gray-300">
                {trainer.description}
              </p>
              
              <div className="space-y-2">
                <h5 className="text-sm font-semibold text-[#06C8D6]">Certificaciones:</h5>
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs text-gray-300 bg-gray-700 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
