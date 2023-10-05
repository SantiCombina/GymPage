import { Navbar } from "./Navbar";

export function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col text-white bg-black px-28 max-w-screen font-montserrat">
        {children}
      </div>
    </div>
  );
}
