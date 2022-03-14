import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="nav">
      <h4 className="h4">Weather App By Nicolas Yañez</h4>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
