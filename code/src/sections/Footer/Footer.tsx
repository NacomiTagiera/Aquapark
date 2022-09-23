import { Typography } from "@mui/material";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="Kontakt">
      <div className={styles.contact}>
        <div className={styles.phone}>
          <Typography
            variant="h5"
            component="h6"
            sx={{
              fontSize: "4rem",
              fontWeight: 900,
              color: "#a79a2d",
              textTransform: "uppercase",
            }}
          >
            Kontakt
          </Typography>
          <Typography
            sx={{
              color: "#888",
              fontSize: "2rem",
            }}
          >
            E-mail: kubapawlak1051@wp.pl <br />
            Telefon: 000-111-222
          </Typography>
        </div>
        <div className={styles.address}>
          <Typography
            variant="h5"
            component="h6"
            sx={{
              fontSize: "4rem",
              fontWeight: 900,
              color: "#a79a2d",
              textTransform: "uppercase",
            }}
          >
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
          }}
        >
          Jakub Pawlak 2022 &copy; Wszelkie prawa zastrzeżone
        </Typography>
      </div>
    </footer>
  );
}
