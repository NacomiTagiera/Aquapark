import { motion } from "framer-motion";
import { Typography } from "@mui/material";

import { GalleryItemProps } from "types/main";

import styles from "./styles.module.css";

export default function GalleryItem({
  source,
  title,
  description,
}: GalleryItemProps) {
  return (
    <motion.div
      className={styles["gallery-item"]}
      initial={{ x: 300, y: 300 }}
      whileInView={{ x: 0, y: 0 }}
      transition={{ type: "spring", duration: 0.7 }}
      viewport={{ once: true }}
    >
      <img src={source} alt={title} className={styles["gallery-img"]} />
      <Typography
        variant="h3"
        component="h3"
        className={styles["gallery-name"]}
        sx={{
          position: "absolute",
          top: "3rem",
          left: "3rem",
          color: "white",
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "0.1rem",
          overflow: "hidden",
          textTransform: "uppercase",
          width: 0,
          transition: "width 0.3s",
        }}
      >
        {title}
      </Typography>
      <Typography
        className={styles["gallery-description"]}
        sx={{
          position: "absolute",
          top: "34%",
          left: "2rem",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: 300,
          letterSpacing: "0.1rem",
          opacity: 0,
          textTransform: "uppercase",
          visibility: "hidden",
          width: "70%",
          transition: "opacity 0.3s",
        }}
      >
        {description}
      </Typography>
    </motion.div>
  );
}
