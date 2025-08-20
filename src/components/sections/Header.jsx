import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Header = () => {
  const { headerRef } = useContext(GlobalContext);
  return (
    <section
      ref={headerRef}
      className="flex items-center justify-center w-full min-h-[100dvh] px-6 bg-center bg-no-repeat bg-cover bg-hero-main relative"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          EMPIEZA HOY
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
          Transforma tu cuerpo, fortalece tu mente y descubre tu mejor versión en nuestro gimnasio
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#F0160F] hover:bg-[#C01409] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            PRIMERA CLASE GRATIS
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
            VER HORARIOS
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-[#F0160F] mb-2">500+</h3>
            <p className="text-gray-200">Miembros Activos</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-[#F0160F] mb-2">24/7</h3>
            <p className="text-gray-200">Acceso Disponible</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-[#F0160F] mb-2">3+</h3>
            <p className="text-gray-200">Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
};
