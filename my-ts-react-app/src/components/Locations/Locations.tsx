import classes from "./Locations.module.css";

export function Locations() {
  return (
    <div>
      <div className={classes.homeContainer}>
        <img
          className={classes.homePic}
          title="map"
          alt="map"
          src={"../../IMG/maps.jpeg"}
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

      <div className={classes.textContainer}>
        Wszystkie zlecenia wykonujemy w tym samym dniu, nawet te których miejsce
        realizacji jest bardzo oddalone. Nie doliczamy dodatkowych kosztów za
        dojazd do klienta niezależnie od miejsca zamieszkania. Usługi wykonujemy
        m.in. na terenie Częstochowy oraz okolic m.in.: Blachownia, Kłobuck,
        Olsztyn. Mstów, Radomsko, Rędziny, Boronów wnawet w promieniu 60km od
        miasta Częstochowy. Mamy wieloletnie doświadczenie w branży
        hydraulicznej. Specjalizujemy się w usługach kanalizacyjnych i tego
        rodzaju usługi wykonujemy najczęściej. Co przyczynia się do niemal 100%
        skuteczności w usuwaniu awarii.
      </div>

      <div className={classes.ContactContainer}>
        Zapchała Ci się rura kanalizacyjna? Często powstają zatory w rurach? Nie
        zwlekaj. Dzwoń po hydraulika. Dzwoń Hydraulik tel. 502-220-475 -
        Konkurencyjne ceny.
      </div>

      <div className={classes.textContainer}>
        Dojazd GRATIS! Wycena usługi może być ustalona już podczas rozmowy
        telefonicznej. Jeżeli instalacja nie jest uszkodzona, a nie uda nam się
        wykonać usługi nie pobieramy żadnych opłat.
      </div>
    </div>
  );
}
