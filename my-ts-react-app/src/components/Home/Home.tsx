import classes from "./Home.module.css";

export function Home() {
  return (
    <div>
      <div className={classes.homeContainer}>
        <img
          className={classes.homePic}
          title="HydroSeb cars"
          alt="HydroSeb cars"
          src={"../../IMG/czyszczenie.jpg"}
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
          Udrażniamy rury kanalizacyjne wewnątrz budynków, czyścimy rurociągi
          znajdujące się na terenach posesji, w ciągach ulicznych, wykonujemy
          również monitoring instalacji kanalizacyjnych dodatkowo, usuwamy inne
          awarie kanalizacyjne, naprawiamy instalcje kanalizacyjne. Usługi
          wykonujemy m.in. na terenie Częstochowy oraz okolic m.in.: Blachownia,
          Kłobuck, Olsztyn. Mstów, Radomsko, Rędziny, Boronów wnawet w promieniu
          60km od miasta Częstochowy. Mamy wieloletnie doświadczenie w branży
          hydraulicznej. Specjalizujemy się w usługach kanalizacyjnych i tego
          rodzaju usługi wykonujemy najczęściej. Co przyczynia się do niemal
          100% skuteczności w usuwaniu awarii. Posiadamy urządzenia oraz pojazdy
          specjalnie przeznaczone do tego typu działalności, dzięki czemu
          określone czynności możemy wykonać znacznie szybciej oraz dokładniej.
          Nasi zleceniodawcy to m.in. klienci indywidualni, instytucje oraz
          przedsiębiorstwa.
        </div>
        <div className={classes.ContactContainer}>
          Zapchała Ci się rura kanalizacyjna? Często powstają zatory w rurach?
          Nie zwlekaj. Dzwoń po hydraulika. Dzwoń Hydraulik tel. 502-220-475 -
          Konkurencyjne ceny.
        </div>

        <div className={classes.textContainer}>
          Wykonujemy następujące prace: czyszczenie kanalizacji metodą
          ciśnieniową - posiadamy tzw. duże WUKO oba dwufunkcyjne, "małe WUKO".
          Służą one do czyszczenia kanalizacji m.in.: przepompowni, główne
          rurociągi, przepusty pod drogą, wpusty uliczne, do czyszczenia
          mniejszych średnic rur na zewnątrz, itp. udrażnianie wszystkich
          instalacji kanalizacyjnych: piony, szamba, poziomy, studzienki, zlewy,
          umywalki, wc, itp. metodą ciśieniową lub mechaniczną monitoring
          kanalizacji zewnętrznych, wewnętrznych, dla różnych średnic rur
          wewnątrz budynków i na zewnątrz awarie kanalizacyjne, naprawa
          kanalizacji, lokalizacja studni Dojazd GRATIS! Wycena usługi może być
          ustalona już podczas rozmowy telefonicznej. Jeżeli instalacja nie jest
          uszkodzona, a nie uda nam się wykonać usługi nie pobieramy żadnych
          opłat.
        </div>

        <div className={classes.ContactContainer}>
          Zadzwoń po hydraulika. Tel. alarmowy 502-220-475
        </div>
      </div>
    </div>
  );
}
