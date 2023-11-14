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
            F.U. HYDRO SEB - CZYSZCZENIE, UDRAŻNIANIE INSPEKCJA KANALIZACJI
            <br />
            SROCKO 64
            <br />
            42-244 MSTÓW
          </div>
        </div>
      </div>
      <div className={classes.mainFeedContainer}>
        <div className={classes.textContainer}>
          <h2>
            Dzięki dobrej lokalizacji siedziby firmy jesteśmy w stanie
            błyskawicznie przyjechać do klienta omijając korki.
          </h2>

          <div className={classes.mapContainer}>
              <img
                title="map"
                alt="map"
                src={"../../IMG/map.jpg"}
                className={classes.mapImage}
              />
             
              <div className={`${classes.marker} ${classes.marker1}`} />
              <div className={`${classes.marker} ${classes.marker2}`} />
              <div className={`${classes.marker} ${classes.marker3}`} />
              <div className={`${classes.marker} ${classes.marker4}`} />
            </div>


        
        </div>
      </div>
    </div>
  );
}
