import CardItem, { Props } from "../../components/Card/Card";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { FoodBank, HotTub, Pool } from "@mui/icons-material";
import { motion } from "framer-motion";
import styles from "./CardsSection.module.css";

const iconStyles = { fontSize: "15rem" };

const cardsData: Props[] = [
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
    <section className={styles.cardsSection} id="Oferta">
      <SectionHeading headerText="Oferta" />
      <motion.div className={styles.cardsContainer}>
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
