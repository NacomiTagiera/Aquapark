import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./SectionHeading.module.css";

interface Props {
  headerText: string;
}

export default function SectionHeading({ headerText }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Typography
        variant="h1"
        className={styles.sectionHeading}
        sx={{
          color: "#fff",
          fontFamily: "Nunito",
          fontSize: "12rem",
          fontWeight: 900,
          letterSpacing: "0.5rem",
          textAlign: "center",
          textShadow: "0.3rem 0.3rem 0.3rem #000",
          textTransform: "capitalize",
        }}
      >
        {headerText}
      </Typography>
    </motion.div>
  );
}
