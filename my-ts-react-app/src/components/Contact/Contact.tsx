import classes from "./Contact.module.css";

export function Contact() {
  return (
    <div>
      <div className={classes.homeContainer}>
        <img
          className={classes.homePic}
          title="HydroSeb cars"
          alt="HydroSeb cars"
          src={"../../IMG/kontakt.jpg"}
        />

        <div className={classes.homeText}>
          <div className={classes.bodyTitle}>
            POGOTOWIE KANALIZACYJNE 24H/7DNI
          </div>
          <div className={classes.bodyTitle}>tel. 502 220 475</div>
          <div className={classes.smallbodyTitle}>
            CZĘSTOCHOWA I OKOLICE DO 60KM - DOJAZD GRATIS
          </div>
          <div className={classes.bodyTitle}>
            Dojazd hydraulika nawet w 15 minut*
          </div>
        </div>
      </div>
      <div className={classes.mainFeedContainer}>
        <div className={classes.textContainer}>
          F.U. HYDRO SEB - CZYSZCZENIE, UDRAŻNIANIE INSPEKCJA KANALIZACJI.
          SROCKO 64 42-244 MSTÓW
        </div>

        <div className={classes.ContactContainer}>
          Zapchała Ci się rura kanalizacyjna? Często powstają zatory w rurach?
          Nie zwlekaj. Dzwoń po hydraulika. Już podczas rozmowy jesteśmy w
          stanie wycenić usługę.
        </div>
      </div>
    </div>
  );
}
