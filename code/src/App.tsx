import CardsSection from "./sections/Offer";
import FAQSection from "./sections/FAQ";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import HomeSection from "./sections/Home";
import Sidebar from "./components/Sidebar";

import "./App.css";

export default function App() {
  return (
    <>
      <Sidebar />
      <HomeSection />
      <CardsSection />
      <Gallery />
      <FAQSection />
      <Footer />
    </>
  );
}
