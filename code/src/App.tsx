import Navbar from "./components/Sidebar/Sidebar";
import HomeSection from "./sections/HomeSection/HomeSection";
import CardsSection from "./sections/CardsSection/CardsSection";
import Gallery from "./sections/Gallery/Gallery";
import FAQSection from "./sections/FAQSection/FAQSection";
import Footer from "./sections/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <CardsSection />
      <Gallery />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
