export const Header = ({ headerRef }) => {
  return (
    <div
      ref={headerRef}
      className="h-screen bg-center bg-no-repeat bg-cover bg-hero-main"
    >
      <h1 className="flex items-center justify-center h-full text-6xl font-extrabold text-white">
        EMPIEZA HOY
      </h1>
    </div>
  );
};
