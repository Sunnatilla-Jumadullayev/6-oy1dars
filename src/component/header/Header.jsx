import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__nav">
          <h2 className="header__nav-title">Escape</h2>
          <ul className="header__nav-item">
            <li className="header__nav-list">Home</li>
            <li className="header__nav-list">Categories</li>
            <li className="header__nav-list">About</li>
            <li className="header__nav-list">Contact</li>
          </ul>
        </div>
        <div className="header__main">
          <h1 className="header__title">Let's do it together.</h1>
          <p className="header__text">
            We travel the world in search of stories. Come along for the ride.
          </p>
          <button className="header__btn">View Latest Posts</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
