import { createContext, useRef } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const scheduleRef = useRef(null);
  const trainersRef = useRef(null);
  const pricesRef = useRef(null);
  const contactRef = useRef(null);
  const values = {
    headerRef,
    aboutRef,
    galleryRef,
    scheduleRef,
    trainersRef,
    pricesRef,
    contactRef,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}
