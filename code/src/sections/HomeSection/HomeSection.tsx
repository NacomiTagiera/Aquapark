import Wave from "react-wavify";

import SectionHeading from "../../components/SectionHeading/SectionHeading";

import styles from "./HomeSection.module.css";
import palma from "../../img/palma.png";

export default function HomeSection() {
  return (
    <section className={styles.homeSection} id="Home">
      <SectionHeading headerText='Aquapark "Na Fali"' />
      <img src={palma} alt="Palma" />
      <Wave
        fill="#00d4ff"
        paused={false}
        options={{
          amplitude: 20,
          speed: 0.3,
          points: 4,
        }}
      />
    </section>
  );
}
