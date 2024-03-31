import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Header = () => {
  const { headerRef } = useContext(GlobalContext);
  return (
    <section
      ref={headerRef}
      className="w-full h-screen px-6 bg-center bg-no-repeat bg-cover bg-hero-main"
    >
      <h1 className="flex items-center justify-center w-full h-full text-4xl font-extrabold md:text-6xl">
        EMPIEZA HOY
      </h1>
    </section>
  );
};
