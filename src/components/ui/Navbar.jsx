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

  const navStyle =
    "text-xl font-medium text-gray-300 cursor-pointer hover:text-white hover:underline";
  const navMobileStyle = "text-lg font-medium text-white";

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
        menuOpen ? "bg-primary backdrop-blur-sm" : ""
      } fixed top-0 z-20 flex items-center justify-center w-full h-14`}
      style={{
        background:
          isVisible && !menuOpen
            ? "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.3))"
            : "",
      }}
    >
      <div className="flex items-center justify-between w-full px-6 max-w-notebook">
        <div className="flex items-center gap-2">
          <img src="/gym-logo.png" alt="gym logo" className="w-10" />
          <span
            onClick={() => scrollToRef(headerRef)}
            className="flex gap-1 text-xl font-bold text-white cursor-pointer"
          >
            FITNESS CENTER
          </span>
        </div>
        <div>
          {isMobile ? (
            <Hamburger
              color="white"
              toggled={menuOpen}
              onToggle={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <ul className="flex-row hidden gap-8 list-none sm:flex">
              <li
                className={navMobileStyle}
                onClick={() => scrollToRef(headerRef)}
              >
                Inicio
              </li>
              <li
                className={navMobileStyle}
                onClick={() => scrollToRef(aboutRef)}
              >
                Nosotros
              </li>
              <li
                className={navMobileStyle}
                onClick={() => scrollToRef(galleryRef)}
              >
                Galeria
              </li>
              <li
                className={navMobileStyle}
                onClick={() => scrollToRef(scheduleRef)}
              >
                Horarios
              </li>
              <li
                className={navMobileStyle}
                onClick={() => scrollToRef(trainersRef)}
              >
                Profesores
              </li>
              <li
                className={navMobileStyle}
                onClick={() => scrollToRef(pricesRef)}
              >
                Precios
              </li>
              <li
                className={navMobileStyle}
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
              menuOpen ? "h-screen pt-40" : "h-0"
            } transition-all absolute left-0 top-14 w-screen bg-primary/95 overflow-hidden flex flex-col items-center justify-start gap-3 backdrop-blur-sm text-2xl`}
          >
            <li className={navMobileStyle} onClick={() => menuLink(headerRef)}>
              Inicio
            </li>
            <li className={navMobileStyle} onClick={() => menuLink(aboutRef)}>
              Nosotros
            </li>
            <li className={navMobileStyle} onClick={() => menuLink(galleryRef)}>
              Galeria
            </li>
            <li
              className={navMobileStyle}
              onClick={() => menuLink(scheduleRef)}
            >
              Horarios
            </li>
            <li
              className={navMobileStyle}
              onClick={() => menuLink(trainersRef)}
            >
              Profesores
            </li>
            <li className={navMobileStyle} onClick={() => menuLink(pricesRef)}>
              Precios
            </li>
            <li className={navMobileStyle} onClick={() => menuLink(contactRef)}>
              Contacto
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
