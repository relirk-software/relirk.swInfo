/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import logo from "../../assets/logo-purple.svg";

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img
          src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz-04368052e188.png"
          alt="SW Info"
        />
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">SW API</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
