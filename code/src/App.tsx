import "./App.css";

import HomeSection from "./sections/HomeSection/HomeSection";
import CardsSection from "./sections/CardsSection/CardsSection";
import Gallery from "./sections/Gallery/Gallery";
import FAQSection from "./sections/FAQSection/FAQSection";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className="App">
      <HomeSection />
      <CardsSection />
      <Gallery />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
