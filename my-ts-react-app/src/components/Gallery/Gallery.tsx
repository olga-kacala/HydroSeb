import classes from "./Gallery.module.css";

export function Gallery() {
  return (
    <div className={classes.gallery}>
      <img title="1" alt="1" src={"../../IMG/1.jpg"} />
      <img title="2" alt="2" src={"../../IMG/2.jpg"} />
      <img title="3" alt="3" src={"../../IMG/3.jpg"} />
      <img title="4" alt="4" src={"../../IMG/4.jpg"} />
      <img title="5" alt="5" src={"../../IMG/5.jpg"} />
      <img title="6" alt="6" src={"../../IMG/6.jpg"} />
    </div>
  );
}
