import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Header = () => {
  const { headerRef } = useContext(GlobalContext);
  return (
    <section
      ref={headerRef}
      className="h-screen bg-center bg-no-repeat bg-cover -mx-28 bg-hero-main"
    >
      <h1 className="flex items-center justify-center h-full text-6xl font-extrabold">
        EMPIEZA HOY
      </h1>
    </section>
  );
};
