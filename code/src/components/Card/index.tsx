import { Paper, Typography } from "@mui/material";

import { CardProps } from "types/main"

export default function CardItem({ amount, icon, name }: CardProps) {
  return (
    <Paper
      sx={{
        position: "relative",
        top: "-4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#a79a2d",
        boxShadow: "1rem 1rem 1rem #000",
        m: { xs: "5rem", md: 0 },
        p: "4rem",
        textAlign: "center",
        transform: "rotateY(20deg) skewX(-2deg)",
        transition: "all 0.3s ease-in-out",
        width: "30rem",

        "&::after": {
          position: "absolute",
          top: "-1rem",
          left: 0,
          backgroundColor: "#8f8317",
          boxShadow: "-0.1rem -0.1rem 0.1rem #000",
          content: '""',
          height: "1rem",
          transform: "skewX(45deg)",
          transformOrigin: "bottom",
          width: "100%",
        },

        "&::before": {
          position: "absolute",
          top: 0,
          left: "-1rem",
          backgroundColor: "#817824",
          boxShadow: "-0.1rem -0.1rem 0.1rem #000",
          content: '""',
          height: "100%",
          transform: "skewY(45deg)",
          transformOrigin: "right",
          width: "1rem",
        },

        "&:hover": {
          boxShadow: "2rem 2rem 2rem #000",
          transform: "rotateY(20deg) skewX(-2deg) translateY(-3rem)",
        },
      }}
    >
      {icon}
      <Typography
        variant="h3"
        component="h3"
        sx={{
          color: "#111",
          fontSize: "3rem",
          fontWeight: 900,
          letterSpacing: "0.5rem",
          my: "2rem",
          textShadow: "0.15rem 0.15rem 0.15rem #000",
          textTransform: "uppercase",
        }}
      >
        {amount} {name}
      </Typography>
    </Paper>
  );
}
