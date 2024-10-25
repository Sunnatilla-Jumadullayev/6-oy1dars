import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav container">
      <ul className="nav__list">
        <li className="nav__item">Nature</li>
        <li className="nav__item">Photografy</li>
        <li className="nav__item">Relaxion</li>
        <li className="nav__item">Vocations</li>
        <li className="nav__item">Travel</li>
        <li className="nav__item">Advanture</li>
      </ul>
    </nav>
  );
};

export default Nav;
