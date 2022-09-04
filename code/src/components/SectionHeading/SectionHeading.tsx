import { Typography } from "@mui/material";

import styles from "./SectionHeading.module.css";

interface Props {
  headerText: string;
}

export default function SectionHeading({ headerText }: Props) {
  return (
    <Typography
      variant="h1"
      component="h2"
      className={styles.sectionHeading}
      sx={{
        fontSize: "12rem",
        fontWeight: 900,
        fontFamily: "Nunito",
        color: "#fff",
        textAlign: "center",
        textTransform: "capitalize",
        letterSpacing: "0.5rem",
        textShadow: "0.3rem 0.3rem 0.3rem #000",
      }}
    >
      {headerText}
    </Typography>
  );
}
