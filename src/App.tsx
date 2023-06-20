import { Body } from "./layout/Body/index";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header/index";
import { Info } from "./layout/Info";

export function App() {
  return (
    <main>
      <Header />
      <Body />
      <Info />
      <Footer />
    </main>
  )
}