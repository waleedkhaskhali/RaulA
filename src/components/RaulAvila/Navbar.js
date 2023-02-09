import React from "react";
import { Link } from "react-router-dom";
import "./RaulAvila.css";

const Navbar = () => {
  return (
    <nav className="raulAvilaNav">
      <h1 className="raulAvilaHeader">RAÚL ÀVILA INC.</h1>
      <ul className="raUl">
        <Link to="/Raul_Inc/Home" className="raLink">
          HOME
        </Link>
        <Link to="/bio" className="raLink">
          BIO
        </Link>
        <Link to="/press" className="raLink">
          PRESS
        </Link>
        <Link to="/clientlist" className="raLink">
          CLIENT LIST
        </Link>
        <Link to="/gallery" className="raLink">
          GALLERY
        </Link>
        <Link to="/contact" className="raLink">
          CONTACT
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
