/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import peopleLogo from "../../assets/icones/people-menu-icon.svg";
import movieLogo from "../../assets/icones/movie-menu-icon.svg";
import starshipLogo from "../../assets/icones/starship-menu-icon.svg";
import vehiclesLogo from "../../assets/icones/vehicles-menu-icon.svg";
import speciesLogo from "../../assets/icones/species-menu-icon.svg";
import planetsLogo from "../../assets/icones/planets-menu-icon.svg";

export default function Sidenav() {
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <a href="#">
            <img src={peopleLogo} alt="People" />
            <div>People</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={movieLogo} alt="Films" />
            <div>Films</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={starshipLogo} alt="Starships" />
            <div>Starships</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={vehiclesLogo} alt="Vehicles" />
            <div>Vehicles</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={speciesLogo} alt="Species" />
            <div>Species</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={planetsLogo} alt="Planets" />
            <div>Planets</div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
