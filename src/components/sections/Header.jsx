import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Header = () => {
  const { headerRef } = useContext(GlobalContext);
  return (
    <section
      ref={headerRef}
      className="w-full h-screen bg-center bg-no-repeat bg-cover bg-hero-main"
    >
      <h1 className="flex items-center justify-center h-full text-6xl font-extrabold">
        EMPIEZA HOY
      </h1>
    </section>
  );
};
