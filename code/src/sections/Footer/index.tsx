import { Typography } from "@mui/material";

import styles from "./styles.module.css";

export default function Footer() {
  const commonStyles = {
    color: "#a79a2d",
    fontSize: "4rem",
    fontWeight: 900,
    textTransform: "uppercase",
  };

  return (
    <footer className={styles.footer} id="Kontakt">
      <div className={styles.contact}>
        <div className={styles.phone}>
          <Typography variant="h5" component="h6" sx={commonStyles}>
            Kontakt
          </Typography>
          <Typography
            sx={{
              color: "#888",
              fontSize: "2rem",
            }}
          >
            E-mail: na@fali.com <br />
            Telefon: 000-111-222
          </Typography>
        </div>
        <div className={styles.address}>
          <Typography variant="h5" component="h6" sx={commonStyles}>
            Na fali
          </Typography>
          <Typography
            sx={{
              color: "#888",
              fontSize: "2rem",
            }}
          >
            ul. Wymyślna 123 <br />
            15-000 Białystok
          </Typography>
        </div>
      </div>
      <div className={styles.copyright}>
        <Typography
          sx={{
            color: "#888",
            fontSize: "2.5rem",
            fontWeight: 500,
            my: "auto",
            textAlign: "center",
          }}
        >
          Jakub Pawlak 2023 &copy; Wszelkie prawa zastrzeżone
        </Typography>
      </div>
    </footer>
  );
}
