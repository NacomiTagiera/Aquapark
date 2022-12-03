import { ReactNode } from "react";
import { Paper, Typography } from "@mui/material";

export interface Props {
  icon: ReactNode;
  amount: number;
  name: string;
}

export default function CardItem({ icon, amount, name }: Props) {
  return (
    <Paper
      sx={{
        backgroundColor: "#a79a2d",
        boxShadow: "1rem 1rem 1rem #000",
        width: "30rem",
        m: { xs: "5rem", md: 0 },
        p: "4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        transform: "rotateY(20deg) skewX(-2deg)",
        transition: "all 0.3s ease-in-out",
        top: "-4rem",

        "&:hover": {
          boxShadow: "2rem 2rem 2rem #000",
          transform: "rotateY(20deg) skewX(-2deg) translateY(-3rem)",
        },

        "&::after": {
          content: '""',
          boxShadow: "-0.1rem -0.1rem 0.1rem #000",
          height: "1rem",
          width: "100%",
          backgroundColor: "#8f8317",
          position: "absolute",
          top: "-1rem",
          left: 0,
          transform: "skewX(45deg)",
          transformOrigin: "bottom",
        },

        "&::before": {
          content: '""',
          boxShadow: "-.1rem -.1rem .1rem #000",
          height: "100%",
          width: "1rem",
          backgroundColor: "#817824",
          position: "absolute",
          top: 0,
          left: "-1rem",
          transform: "skewY(45deg)",
          transformOrigin: "right",
        },
      }}
    >
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
          textShadow: "0.15rem 0.15rem 0.15rem #000",
        }}
      >
        {amount} {name}
      </Typography>
    </Paper>
  );
}
