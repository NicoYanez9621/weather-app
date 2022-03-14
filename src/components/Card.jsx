import React from "react";
import style from "./Card.module.css";

export default function Card({ name, max, min, img, onClose }) {
  // acá va tu código
  return (
    <div className={style.contenedor}>
      <button className={style.boton} onClick={onClose}>
        X
      </button>
      <h4 className={style.h4Name}>{name}</h4>

      <div className={style.infoContenedor}>
        <div className={style.temp}>
          <h6>Max: </h6>
          <p>{max}°</p>
        </div>
        <div className={style.temp}>
          <h6>Min: </h6>
          <p>{min}°</p>
        </div>
        <img
          className={style.img}
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="img not found"
        />
      </div>
    </div>
  );
}
