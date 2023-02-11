import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Raul.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   document.body.addEventListener("scroll", () => {
  //     if (window.scrollY > 10) {
  //       setScroll(true);
  //       console.log("scroll greater than 10");
  //     } else console.log(document.body.offsetTop);
  //   });
  // }, []);

  return (
    <div>
      <nav className={!scroll ? "raulNav" : "navScroll"}>
        <ul className="topNav">
          <div className="topDivs">
            <li className="link" id="phoneIcon">
              phone
            </li>
            <li className="link" id="locationIcon">
              location
            </li>
          </div>
          <div>
            <li className="link" id="logo">
              raul
            </li>
          </div>
          <div className="topDivs">
            <Link to="/Home" className="link" id="homeIcon">
              Home
            </Link>
            <li className="link" id="registerIcon">
              Login
            </li>
            <Link to="/cart" className="link" id="cartIcon">
              Cart
            </Link>
          </div>
        </ul>
        <ul className={!scroll ? "hide" : "bottomNav"}>
          <Link to="Decorative-accessories" className="link">
            decorative accessories
          </Link>
          <Link to="/Furniture" className="link">
            furniture
          </Link>
          <Link to="/Floral" className="link">
            floral
          </Link>
          <Link to="/Sale" className="link">
            sale
          </Link>
          <Link to="/Venue" className="link">
            venue bookings
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
