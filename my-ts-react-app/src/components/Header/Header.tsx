import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className={classes.header}>
      <Link className={classes.link} to="*">
        <img
        className={classes.HSlogo}
          title="HydroSeb logo"
          alt="HydroSeb logo"
          src={"../../IMG/hydroseb-logo.jpg"}
        />
      </Link>
      <Link className={classes.link} to="/Offer">OFERTA</Link>
      <Link className={classes.link} to="/Locations">GDZIE PRACUJEMY</Link>
      <Link className={classes.link} to="/Gallery">GALERIA</Link>
      <Link className={classes.link} to="/Contact">KONTAKT</Link>
    </nav>
  );
}
