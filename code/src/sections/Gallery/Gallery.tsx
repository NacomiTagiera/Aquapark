import GalleryItem from "../../components/GalleryItem/GalleryItem";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Props } from "../../components/GalleryItem/GalleryItem";

import styles from "./Gallery.module.css";

import basen from "../../img/basen.jpg";
import impreza from "../../img/impreza.jpg";
import jacuzzi from "../../img/jacuzzi.jpg";
import jedzenie from "../../img/jedzenie.jpg";
import sauna from "../../img/sauna.jpg";
import zjeżdżalnie from "../../img/zjeżdżalnie.jpg";

const imagesData: Props[] = [
  {
    source: basen,
    title: "Baseny",
    description:
      "Na terenie aquaparku znajduje się 30 basenów - 15 wewnętrznych oraz 15 zewnętrznych, w tym baseny płytkie dla dzieci, basen sportowy o długości 50 metrów.",
  },
  {
    source: impreza,
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
    source: jedzenie,
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
    source: zjeżdżalnie,
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
            source={imageData.source}
            title={imageData.title}
            description={imageData.description}
            key={imageData.title}
          />
        ))}
      </div>
    </section>
  );
}