import { Layout } from "./components/ui/Layout";
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
}

export default App;
