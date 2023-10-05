import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const About = () => {
  const { aboutRef } = useContext(GlobalContext);
  return (
    <section
      ref={aboutRef}
      className="flex flex-col items-center justify-between w-full min-h-screen gap-8 py-20 lg:flex-row"
    >
      <div className="flex flex-col flex-1 w-full">
        <h3 className="text-primary">DESCUBRE MÁS</h3>
        <h2 className="text-3xl">SOBRE NOSOTROS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus alias,
          qui suscipit natus veniam illum sit adipisci, ut et numquam quos id
          rerum, in odit saepe aperiam? Nulla, commodi sapiente. Facilis,
          pariatur. Impedit pariatur eaque quas reprehenderit in. Necessitatibus
          autem nam suscipit illum, at nisi minima enim quidem laborum eaque?
          Esse atque inventore, maxime neque eius corrupti sint incidunt enim!
          Recusandae, nihil! Perspiciatis optio rem adipisci nostrum quibusdam.
          Ipsum maiores quo quam eaque perspiciatis necessitatibus, ea
          perferendis. Error inventore sunt, necessitatibus excepturi saepe
          officia? Laboriosam harum quae quo. Ex, deleniti!
        </p>
      </div>
      <img
        src="./assets/aboutSection.png"
        alt="imagen"
        className="flex flex-1 object-contain h-auto select-none max-h-80"
      />
    </section>
  );
};
