import { Typography } from "@mui/material";

import styles from "./GalleryItem.module.css";

export interface Props {
  source: string;
  title: string;
  description: string;
}

export default function GalleryItem({ source, title, description }: Props) {
  return (
    <div className={styles.galleryItem}>
      <img src={source} alt="" className={styles.galleryImg} />
      <Typography
        variant="h3"
        component="h3"
        className={styles.galleryName}
        sx={{
          position: "absolute",
          top: "3rem",
          left: "3rem",
          fontSize: "2rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: ".1rem",
          color: "white",
          width: 0,
          overflow: "hidden",
          transition: "width .3s",
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
          width: "70%",
          fontSize: "1.5rem",
          fontWeight: 300,
          letterSpacing: ".1rem",
          textTransform: "uppercase",
          color: "white",
          opacity: 0,
          visibility: "hidden",
          transition: "opacity .3s",
        }}
      >
        {description}
      </Typography>
    </div>
  );
}
