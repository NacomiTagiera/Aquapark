import { motion } from "framer-motion";
import { FoodBank, HotTub, Pool } from "@mui/icons-material";

import CardItem from "components/Card";
import SectionHeading from "components/SectionHeading";

import { CardProps } from "types/main";

import styles from "./styles.module.css";

const iconStyles = { fontSize: "15rem" };

const cardsData: CardProps[] = [
  {
    amount: 30,
    icon: <Pool sx={iconStyles} />,
    name: "Basenów",
  },
  {
    amount: 10,
    icon: <HotTub sx={iconStyles} />,
    name: "Jacuzzi",
  },
  {
    amount: 5,
    icon: <FoodBank sx={iconStyles} />,
    name: "Restauracji",
  },
];

export default function CardsSection() {
  return (
    <section className={styles["cards-section"]} id="Oferta">
      <SectionHeading text="Oferta" />
      <motion.div className={styles["cards-container"]}>
        {cardsData.map((cardData) => (
          <CardItem
            amount={cardData.amount}
            icon={cardData.icon}
            key={cardData.name}
            name={cardData.name}
          />
        ))}
      </motion.div>
    </section>
  );
}
