import React from "react";
import Card from "./Card.jsx";
import style from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  if (cities) {
    return (
      <div className={style.contenedor}>
        {cities.map((c) => (
          <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            key={c.id}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className={style.contenedor}>
        <h1>Sin ciudades</h1>
      </div>
    );
  }
}
