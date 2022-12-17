import GalleryItem, { Props } from "../../components/GalleryItem/GalleryItem";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import styles from "./Gallery.module.css";

import jacuzzi from "../../assets/jacuzzi.jpg";
import party from "../../assets/party.jpg";
import pool from "../../assets/pool.jpg";
import restaurant from "../../assets/restaurant.jpg";
import sauna from "../../assets/sauna.jpg";
import waterSlide from "../../assets/waterslide.jpg";

const imagesData: Props[] = [
  {
    source: pool,
    title: "Baseny",
    description:
      "Na terenie aquaparku znajduje się 30 basenów - 15 wewnętrznych oraz 15 zewnętrznych, w tym baseny płytkie dla dzieci, basen sportowy o długości 50 metrów.",
  },
  {
    source: party,
    title: "Imprezy",
    description:
      "Organizujemy od wielu lat urodziny, wieczory kawalerskie i panieńskie. Zagwarantujemy wam dobrą zabawę, smaczne jedzenie i orzeżwiające napoje oraz bezpieczeństwo.",
  },
  {
    source: jacuzzi,
    title: "Jacuzzi",
    description:
      "Wytwarzane w wodzie bąbelki przyspieszają cyrkulację krwi w naszej skórze, co prowadzi do stymulacji usuwania toksyn z organizmu.",
  },
  {
    source: restaurant,
    title: "Restauracje",
    description:
      "Kebab, frytki, lody, dania obiadowe - to wszystko znajdziecie u nas w strefie restauracyjnej. Prosimy o niewchodzenie z jedzeniem do wody!",
  },
  {
    source: sauna,
    title: "Sauny",
    description:
      "W strefie relaksu czeka na was sauna sucha, mokra, parowa i kamienna oraz masaże. Profesjonalni masażyści zadbają o to, abyście się czuli zrelaksowani i odstresowani.",
  },
  {
    source: waterSlide,
    title: "Zjeżdżalnie",
    description:
      "W naszym aquaparku jest aż 40 zjeżdżalni wodnych, w tym 3 zjeżdżalnie obrotowe, o łącznej długości ponad 1000 (tysiąc) metrów! Na pewno każdy znajdzie coś dla siebie.",
  },
];

export default function Gallery() {
  return (
    <section className={styles.gallerySection} id="Galeria">
      <SectionHeading headerText="Galeria" />

      <div className={styles.gallery}>
        {imagesData.map((imageData) => (
          <GalleryItem
            description={imageData.description}
            key={imageData.title}
            source={imageData.source}
            title={imageData.title}
          />
        ))}
      </div>
    </section>
  );
}
