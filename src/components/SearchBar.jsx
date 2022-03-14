import React, { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
      className={style.form}
    >
      <input
        className={style.input}
        type="text"
        placeholder="Enter a city..."
        value={city}
        onChange={(e) => {
          return setCity(e.target.value);
        }}
      />

      <input type="submit" className={style.boton} value="Add" />
    </form>
  );
}
