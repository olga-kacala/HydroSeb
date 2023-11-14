import React from "react";
import classes from "./Gallery.module.css";

export function Gallery() {
  return (
    <div className={classes.gallery}>
      <div className={classes["gallery-item"]} title="Profesjonalna usługa usuwania wszelkiego zła">
        <img alt="1" src={"../../IMG/1.jpg"} />
        <div className={classes.overlay}></div>
      </div>

      <div className={classes["gallery-item"]} title="Zamykanie wrota piekieł">
        <img alt="2" src={"../../IMG/2.jpg"} />
        <div className={classes.overlay}></div>
      </div>

      <div className={classes["gallery-item"]} title="Profesjonalna usługa usuwania wszelkiego zła. Zamykanie wrota piekieł">
        <img alt="3" src={"../../IMG/3.jpg"} />
        <div className={classes.overlay}></div>
      </div>

      <div className={classes["gallery-item"]} title="Profesjonalna usługa usuwania wszelkiego zła. Zamykanie wrota piekieł">
        <img alt="4" src={"../../IMG/4.jpg"} />
        <div className={classes.overlay}></div>
      </div>

      <div className={classes["gallery-item"]} title="Profesjonalna usługa usuwania wszelkiego zła. Zamykanie wrota piekieł">
        <img alt="5" src={"../../IMG/5.jpg"} />
        <div className={classes.overlay}></div>
      </div>

      <div className={classes["gallery-item"]} title="Profesjonalna usługa usuwania wszelkiego zła. Zamykanie wrota piekieł">
        <img alt="6" src={"../../IMG/6.jpg"} />
        <div className={classes.overlay}></div>
      </div>
    </div>
  );
}
