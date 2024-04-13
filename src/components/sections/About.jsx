import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const About = () => {
  const { aboutRef } = useContext(GlobalContext);
  return (
    <section
      ref={aboutRef}
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-20 lg:flex-row max-w-notebook"
    >
      <div className="flex flex-col flex-1 w-full">
        <h2 className="text-primary">DESCUBRE MÁS</h2>
        <h3 className="text-3xl">SOBRE NOSOTROS</h3>
        <p>
          ¡Bienvenido a nuestro gimnasio, donde la transformación personal se
          encuentra con la pasión por el bienestar! En nuestro espacio dedicado
          al fitness, nos esforzamos por inspirar y motivar a cada miembro a
          alcanzar sus metas de salud y a descubrir su mejor versión. Con un
          equipo de entrenadores apasionados y una variedad de clases
          innovadoras, ofrecemos un ambiente acogedor y motivador para que
          puedas disfrutar del viaje hacia una vida más saludable. En nuestro
          gimnasio, no solo es sobre el ejercicio, sino también sobre la
          comunidad y el apoyo mutuo. Únete a nosotros en este emocionante viaje
          hacia el bienestar total. ¡Tu éxito es nuestro compromiso!
        </p>
      </div>
      <img
        src="./assets/aboutSection.webp"
        alt="imagen"
        className="flex flex-1 object-contain select-none max-h-80"
      />
    </section>
  );
};
