import Wave from "react-wavify";

import SectionHeading from "components/SectionHeading";

import palm from "assets/palm.png";
import styles from "./styles.module.css";

export default function HomeSection() {
  return (
    <section className={styles.home} id="Start">
      <SectionHeading text="Na Fali" />
      <img src={palm} alt="Palma" />
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
