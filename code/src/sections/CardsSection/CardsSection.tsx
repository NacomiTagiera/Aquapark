import CardItem from "../../components/Card/Card";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Props } from "../../components/Card/Card";

import { FoodBank, HotTub, Pool } from "@mui/icons-material";

import styles from "./CardsSection.module.css";

const cardsData: Props[] = [
  {
    icon: <Pool sx={{ fontSize: "15rem" }} />,
    amount: 30,
    name: "Basenów",
  },
  {
    icon: <HotTub sx={{ fontSize: "15rem" }} />,
    amount: 10,
    name: "Jacuzzi",
  },
  {
    icon: <FoodBank sx={{ fontSize: "15rem" }} />,
    amount: 5,
    name: "Restauracji",
  },
];

export default function CardsSection() {
  return (
    <section className={styles.cardsSection} id="Oferta">
      <SectionHeading headerText="Oferta" />
      <div className={styles.cardsContainer}>
        {cardsData.map((cardData) => (
          <CardItem
            icon={cardData.icon}
            amount={cardData.amount}
            name={cardData.name}
            key={cardData.name}
          />
        ))}
      </div>
    </section>
  );
}
