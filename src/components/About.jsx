export const About = ({ aboutRef }) => {
  return (
    <div
      ref={aboutRef}
      className="flex flex-col items-center justify-center h-screen gap-8 text-white bg-black md:flex-row"
    >
      <div className="max-w-2xl">
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
        className="select-none h-80"
      />
    </div>
  );
};
