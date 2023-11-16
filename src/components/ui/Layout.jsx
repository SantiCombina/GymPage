import { Navbar } from "./Navbar";

export function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-white bg-primary max-w-screen font-montserrat">
        {children}
      </div>
    </div>
  );
}
