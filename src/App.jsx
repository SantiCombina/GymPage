import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import {
  About,
  Gallery,
  Header,
  Prices,
  Schedule,
  Trainers,
  Contact,
} from "./components/sections";

function App() {
  return (
    <div className="min-h-[100dvh] font-inter">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white bg-primary">
        <Header />
        <About />
        <Gallery />
        <Schedule />
        <Trainers />
        <Prices />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
