export const Navbar = ({
  headerRef,
  aboutRef,
  galleryRef,
  scheduleRef,
  trainersRef,
  pricesRef,
  contactRef,
}) => {
  const navStyle =
    "text-xl font-medium text-gray-300 cursor-pointer hover:text-white hover:underline";

  const scrollToRef = (ref) => {
    return ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 z-20 flex items-center w-full h-16 px-6 sm:px-16">
      <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
        <span
          onClick={() => scrollToRef(headerRef)}
          className="flex gap-1 text-xl font-bold text-white cursor-pointer"
        >
          GYM LOGO
        </span>
        <ul className="flex-row hidden gap-10 list-none sm:flex">
          <li>
            <span className={navStyle} onClick={() => scrollToRef(headerRef)}>
              Inicio
            </span>
          </li>
          <li>
            <span className={navStyle} onClick={() => scrollToRef(aboutRef)}>
              Nosotros
            </span>
          </li>
          <li>
            <span className={navStyle} onClick={() => scrollToRef(galleryRef)}>
              Galeria
            </span>
          </li>
          <li>
            <span className={navStyle} onClick={() => scrollToRef(scheduleRef)}>
              Horarios
            </span>
          </li>
          <li>
            <span className={navStyle} onClick={() => scrollToRef(trainersRef)}>
              Profesores
            </span>
          </li>
          <li>
            <span className={navStyle} onClick={() => scrollToRef(pricesRef)}>
              Precios
            </span>
          </li>
          <li>
            <span className={navStyle} onClick={() => scrollToRef(contactRef)}>
              Contacto
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
