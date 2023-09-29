import { useRef } from "react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Prices } from "../components/Prices";
import { Schedule } from "../components/Schedule";
import { Trainers } from "../components/Trainers";

export const Gym = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const scheduleRef = useRef(null);
  const trainersRef = useRef(null);
  const pricesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="font-montserrat">
      <Navbar
        headerRef={headerRef}
        aboutRef={aboutRef}
        galleryRef={galleryRef}
        scheduleRef={scheduleRef}
        trainersRef={trainersRef}
        pricesRef={pricesRef}
        contactRef={contactRef}
      />
      <Header headerRef={headerRef} />
      <About aboutRef={aboutRef} />
      <Gallery galleryRef={galleryRef} />
      <Schedule scheduleRef={scheduleRef} />
      <Trainers trainersRef={trainersRef} />
      <Prices pricesRef={pricesRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};
