import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const About = () => {
  const { aboutRef } = useContext(GlobalContext);
  return (
    <section
      ref={aboutRef}
      className="w-full flex justify-center items-center min-h-[100dvh] px-6 py-20"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-notebook lg:flex-row">
        <div className="flex flex-col flex-1 w-full lg:pr-12">
        <h2 className="mb-2 text-lg tracking-widest text-primary">DESCUBRE MÁS</h2>
        <h3 className="mb-6 text-4xl font-bold">SOBRE NOSOTROS</h3>
        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          ¡Bienvenido a nuestro gimnasio, donde la transformación personal se
          encuentra con la pasión por el bienestar! En nuestro espacio dedicado
          al fitness, nos esforzamos por inspirar y motivar a cada miembro a
          alcanzar sus metas de salud y a descubrir su mejor versión.
        </p>
        <p className="mb-8 leading-relaxed text-gray-400">
          Con un equipo de entrenadores apasionados y una variedad de clases
          innovadoras, ofrecemos un ambiente acogedor y motivador para que
          puedas disfrutar del viaje hacia una vida más saludable. En nuestro
          gimnasio, no solo es sobre el ejercicio, sino también sobre la
          comunidad y el apoyo mutuo.
        </p>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="p-4 text-center transition-all duration-300 border border-gray-700 rounded-lg bg-secondary hover:border-primary">
            <h4 className="mb-2 text-2xl font-bold text-primary">500m²</h4>
            <p className="text-sm text-gray-400">Espacio Total</p>
          </div>
          <div className="p-4 text-center transition-all duration-300 border border-gray-700 rounded-lg bg-secondary hover:border-primary">
            <h4 className="mb-2 text-2xl font-bold text-primary">50+</h4>
            <p className="text-sm text-gray-400">Equipos Modernos</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 text-sm border rounded-full bg-primary/20 text-primary border-primary/30">
            Musculación
          </span>
          <span className="px-3 py-1 text-sm border rounded-full bg-primary/20 text-primary border-primary/30">
            Cardio
          </span>
          <span className="px-3 py-1 text-sm border rounded-full bg-primary/20 text-primary border-primary/30">
            Crossfit
          </span>
          <span className="px-3 py-1 text-sm border rounded-full bg-primary/20 text-primary border-primary/30">
            Yoga
          </span>
        </div>
      </div>
      
      <div className="flex justify-center flex-1 mt-8 lg:justify-end lg:mt-0">
        <div className="relative group">
          <img
            src="./assets/aboutSection.webp"
            alt="Nuestro gimnasio - Ambiente moderno y equipamiento profesional"
            className="object-cover w-full transition-all duration-500 rounded-lg shadow-2xl select-none max-h-96 group-hover:shadow-primary/20 group-hover:scale-105"
          />
          <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:opacity-100"></div>
        </div>
      </div>
      </div>
    </section>
  );
};
