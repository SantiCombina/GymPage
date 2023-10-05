import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Gallery } from "../components/sections/Gallery";
import { Header } from "../components/sections/Header";
import { Prices } from "../components/sections/Prices";
import { Schedule } from "../components/sections/Schedule";
import { Trainers } from "../components/sections/Trainers";
import { Layout } from "../components/ui/Layout";

export const Gym = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Gallery />
      <Schedule />
      <Trainers />
      <Prices />
      <Contact />
    </Layout>
  );
};
