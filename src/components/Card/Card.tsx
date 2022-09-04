import { ReactNode } from "react";
import { Typography } from "@mui/material";

import styles from "./Card.module.css";

export interface Props {
  icon: ReactNode;
  amount: number;
  name: string;
}

export default function CardItem({ icon, amount, name }: Props) {
  return (
    <div className={styles.card}>
      {icon}
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontSize: "3rem",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.5rem",
          color: "#111",
          my: "2rem",
          textShadow: ".15rem .15rem .15rem #000",
        }}
      >
        {amount} {name}
      </Typography>
    </div>
  );
}
