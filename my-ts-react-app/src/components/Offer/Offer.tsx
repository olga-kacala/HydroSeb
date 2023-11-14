import classes from "./Offer.module.css";

export function Offer() {
  return (
    <>
      <div className={classes.homeContainer}>
        <img
          className={classes.homePic}
          title="offer"
          alt="offer"
          src={"../../IMG/offer.jpg"}
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
        Wszystkie zlecenia wykonujemy w tym samym dniu, nawet te których miejsce realizacji jest bardzo oddalone. Zakres usług które wykonujemy:

 

<br/>CZYSZCZENIE KANALIZACJI METODĄ CIŚNIENIOWĄ - posiadamy tzw. duże WUKO oba dwufunkcyjne. Służą one do czyszczenia kanalizacji m.in.: przepompowni, główne rurociągi, przepusty pod drogą, wpusty uliczne, do czyszczenia mniejszych średnic rur na zewnątrz, itp.
<br/>- udrażnianie kanalizacji metodą ciśnieniową 
<br/>- posiadamy tzw. małe WUKO Używanie jest w celu usuwania awarii kanalizacyjnych dla rur kanalizacyjnych zlokalizowanych na zewnątrz budynku, posesji, ale o mniejszych średnicach rur.
<br/>UDRAŻNIANIE WSZYSTKICH INSTALACJI KANALIZACYJNYCH: piony, szamba, poziomy, studzienki, zlewy, umywalki, wc, itp. metodą ciśieniową lub mechaniczną
<br/>- monitoring kanalizacji zewnętrznych kamerą rejestrującą spadki dla średnic rur od DN160-DN1200
<br/>INSPEKCJA TV KANALIZACJI dla rur znajdujących się wewnątrz budynków 
<br/>- pozwala stwierdzić ewentualne wady uszkodzenia instalacji kanalizacyjnej
<br/>- zadymianie kanalizacji 
<br/>- metoda ta pozwala znaleźć nieszczelności rur kanalizacyjnych
<br/>- awarie kanalizacyjne, naprawa kanalizacji, lokalizacja studni
        </div>
      </div>
    </>
  );
}
