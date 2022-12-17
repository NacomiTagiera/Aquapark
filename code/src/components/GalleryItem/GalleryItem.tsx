import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./GalleryItem.module.css";

export interface Props {
  source: string;
  title: string;
  description: string;
}

export default function GalleryItem({ source, title, description }: Props) {
  return (
    <motion.div
      className={styles.galleryItem}
      initial={{ x: 300, y: 300 }}
      whileInView={{ x: 0, y: 0 }}
      transition={{ type: "spring", duration: 0.7 }}
      viewport={{ once: true }}
    >
      <img src={source} alt={title} className={styles.galleryImg} />
      <Typography
        variant="h3"
        component="h3"
        className={styles.galleryName}
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
        className={styles.galleryDescription}
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
