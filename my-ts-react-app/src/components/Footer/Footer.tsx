import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <p>
          <a href="http://www.hydroseb.pl">
            Copyright &#169; 2017 www.hydroseb.pl. All Rights Reserved. Design
            by Hydro Seb
          </a>
        </p>
      </div>
    </footer>
  );
}
