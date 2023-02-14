import { Typography } from "@mui/material";
import { motion } from "framer-motion";

import { HeaderProps } from "types/main";

import styles from "./styles.module.css";

export default function SectionHeading({ text }: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
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
        {text}
      </Typography>
    </motion.div>
  );
}
