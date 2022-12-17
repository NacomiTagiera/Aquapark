import CardsSection from "./sections/CardsSection/CardsSection";
import FAQSection from "./sections/FAQSection/FAQSection";
import Footer from "./sections/Footer/Footer";
import Gallery from "./sections/Gallery/Gallery";
import HomeSection from "./sections/HomeSection/HomeSection";
import Navbar from "./components/Sidebar/Sidebar";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <CardsSection />
      <Gallery />
      <FAQSection />
      <Footer />
    </>
  );
}
