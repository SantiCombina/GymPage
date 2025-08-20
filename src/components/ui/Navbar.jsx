import { Squash as Hamburger } from "hamburger-react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useScroll } from "../../hooks/useScroll";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    headerRef,
    aboutRef,
    galleryRef,
    scheduleRef,
    trainersRef,
    pricesRef,
    contactRef,
  } = useContext(GlobalContext);

  const { isVisible } = useScroll({ scrollSize: 56 });

  const breakpoint = useBreakpoint();
  const isMobile = breakpoint.is.sm || breakpoint.is.md;

  const navStyle = isMobile 
    ? "text-lg font-medium text-white hover:text-primary transition-colors duration-300" 
    : "text-lg text-gray-300 cursor-pointer hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#06C8D6] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"

  const scrollToRef = (ref) => {
    return ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const menuLink = (ref) => {
    scrollToRef(ref);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <nav
      className={`${
        menuOpen ? "bg-primary/95 backdrop-blur-sm" : ""
      } fixed top-0 z-20 flex items-center justify-center w-full h-16 transition-all duration-300`}
      style={{
        background:
          isVisible && !menuOpen
            ? "linear-gradient(to bottom, rgba(17,17,17,0.95), rgba(17,17,17,0.8))"
            : "",
        backdropFilter: isVisible && !menuOpen ? "blur(10px)" : "",
      }}
    >
      <div className="flex items-center justify-between w-full max-w-notebook">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#04A5B8] rounded-lg flex items-center justify-center">
            <img src="/gym-logo.png" alt="gym logo" className="w-6 h-6" />
          </div>
          <span
            onClick={() => scrollToRef(headerRef)}
            className="flex gap-1 text-xl font-bold text-white transition-colors duration-300 cursor-pointer hover:text-primary"
          >
            FITNESS CENTER
          </span>
        </div>
        <div>
          {isMobile ? (
            <div className="relative z-30">
              <Hamburger
                color="white"
                toggled={menuOpen}
                onToggle={() => setMenuOpen(!menuOpen)}
                size={24}
              />
            </div>
          ) : (
            <ul className="flex-row hidden gap-8 list-none lg:flex">
              <li
                className={navStyle}
                onClick={() => scrollToRef(headerRef)}
              >
                Inicio
              </li>
              <li
                className={navStyle}
                onClick={() => scrollToRef(aboutRef)}
              >
                Nosotros
              </li>
              <li
                className={navStyle}
                onClick={() => scrollToRef(galleryRef)}
              >
                Galería
              </li>
              <li
                className={navStyle}
                onClick={() => scrollToRef(scheduleRef)}
              >
                Horarios
              </li>
              <li
                className={navStyle}
                onClick={() => scrollToRef(trainersRef)}
              >
                Profesores
              </li>
              <li
                className={navStyle}
                onClick={() => scrollToRef(pricesRef)}
              >
                Precios
              </li>
              <li
                className={navStyle}
                onClick={() => scrollToRef(contactRef)}
              >
                Contacto
              </li>
            </ul>
          )}
        </div>
        {isMobile && (
          <ul
            className={`${
              menuOpen ? "h-screen pt-32 opacity-100" : "h-0 opacity-0"
            } transition-all duration-500 absolute left-0 top-16 w-screen bg-primary/95 overflow-hidden flex flex-col items-center justify-start gap-6 backdrop-blur-md`}
          >
            <li className={navStyle} onClick={() => menuLink(headerRef)}>
              Inicio
            </li>
            <li className={navStyle} onClick={() => menuLink(aboutRef)}>
              Nosotros
            </li>
            <li className={navStyle} onClick={() => menuLink(galleryRef)}>
              Galería
            </li>
            <li
              className={navStyle}
              onClick={() => menuLink(scheduleRef)}
            >
              Horarios
            </li>
            <li
              className={navStyle}
              onClick={() => menuLink(trainersRef)}
            >
              Profesores
            </li>
            <li className={navStyle} onClick={() => menuLink(pricesRef)}>
              Precios
            </li>
            <li className={navStyle} onClick={() => menuLink(contactRef)}>
              Contacto
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
