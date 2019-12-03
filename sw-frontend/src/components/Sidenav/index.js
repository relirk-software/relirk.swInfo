/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import peopleLogo from "../../assets/icones/people-menu-icon.svg";
import movieLogo from "../../assets/icones/movie-menu-icon.svg";
import starshipLogo from "../../assets/icones/starship-menu-icon.svg";
import vehiclesLogo from "../../assets/icones/vehicles-menu-icon.svg";
import speciesLogo from "../../assets/icones/species-menu-icon.svg";
import planetsLogo from "../../assets/icones/planets-menu-icon.svg";

export default function Sidenav() {
  async function selectItem(category, color) {
    localStorage.setItem("currentColor", color);
    localStorage.setItem("selectedCategoryName", category);
    const resource = localStorage.getItem(category);
    if (resource) {
      localStorage.setItem("selectedCategory", resource);
    }
  }

  return (
    <nav className="sidenav">
      <ul>
        <li>
          <a href="#" onClick={() => selectItem("people", "#9e4f60")}>
            <img src={peopleLogo} alt="People" />
            <div>People</div>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => selectItem("films", "rgba(75, 213, 238, 0.8)")}
          >
            <img src={movieLogo} alt="Films" />
            <div>Films</div>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => selectItem("starships", "#419a5a")}>
            <img src={starshipLogo} alt="Starships" />
            <div>Starships</div>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => selectItem("vehicles", "#edec51")}>
            <img src={vehiclesLogo} alt="Vehicles" />
            <div>Vehicles</div>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => selectItem("species", "#e15021")}>
            <img src={speciesLogo} alt="Species" />
            <div>Species</div>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => selectItem("planets", "#3273c5")}>
            <img src={planetsLogo} alt="Planets" />
            <div>Planets</div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
