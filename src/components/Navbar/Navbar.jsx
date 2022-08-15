import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  let [showNavList, setShowNavList] = useState(false);

  return (
    <header className="header">
      <figure className="logo-container">
        <img src={logo} alt="" className="logo" />
      </figure>
      <span
        className="ham-icon"
        onClick={() => {
          showNavList ? setShowNavList(false) : setShowNavList(true);
        }}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </span>
      <nav className={`nav-section ${showNavList ? " active " : " "}`}>
        <ul className="nav-ul">
          <li className="nav-links">Home</li>
          <li className="nav-links">About Us</li>
          <li className="nav-links">View Items</li>
          <li className="nav-links">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
