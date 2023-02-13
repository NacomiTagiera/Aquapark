import { Typography } from "@mui/material";

import { HeaderProps } from "types/main";

import styles from "./styles.module.css"

export default function SectionHeading({ text }: HeaderProps) {
  return (
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
  );
}
