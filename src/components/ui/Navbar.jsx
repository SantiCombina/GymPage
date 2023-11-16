import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Navbar = () => {
  const {
    headerRef,
    aboutRef,
    galleryRef,
    scheduleRef,
    trainersRef,
    pricesRef,
    contactRef,
  } = useContext(GlobalContext);

  const navStyle =
    "text-xl font-medium text-gray-300 cursor-pointer hover:text-white hover:underline";

  const scrollToRef = (ref) => {
    return ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 z-20 flex items-center justify-center w-full h-16">
      <div className="flex justify-between items-center w-full max-w-notebook px-6">
        <div className="flex gap-2 items-center">
          <img src="/gym-logo.png" alt="gym logo" className="w-10" />
          <span
            onClick={() => scrollToRef(headerRef)}
            className="flex gap-1 text-xl font-bold text-white cursor-pointer"
          >
            FITNESS CENTER
          </span>
        </div>
        <ul className="flex-row hidden gap-8 list-none sm:flex">
          <li className={navStyle} onClick={() => scrollToRef(headerRef)}>
            Inicio
          </li>
          <li className={navStyle} onClick={() => scrollToRef(aboutRef)}>
            Nosotros
          </li>
          <li className={navStyle} onClick={() => scrollToRef(galleryRef)}>
            Galeria
          </li>
          <li className={navStyle} onClick={() => scrollToRef(scheduleRef)}>
            Horarios
          </li>
          <li className={navStyle} onClick={() => scrollToRef(trainersRef)}>
            Profesores
          </li>
          <li className={navStyle} onClick={() => scrollToRef(pricesRef)}>
            Precios
          </li>
          <li className={navStyle} onClick={() => scrollToRef(contactRef)}>
            Contacto
          </li>
        </ul>
      </div>
    </nav>
  );
};
