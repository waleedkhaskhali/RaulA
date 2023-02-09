import React, { useState } from "react";
import { Link } from "react-router-dom";
import Default from "../assets/initialBack.jpeg";
import Raul_Inc from "../assets/Raul_Inc_Landing.jpg";
import RetailLanding from "../assets/Retail_Landing.jpg";
import CafeFlor from "../assets/RaulCafe_2566.jpg";
import "./Home.css";

export const Home = () => {
  const [img, setImg] = useState(Default);

  return (
    <div>
      <nav className="nav">
        <div
          className="initialBack"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div>
          <Link
            to="/Raul_Inc/Home"
            className="raul1"
            onMouseOver={() => {
              setImg(Default);
            }}
          >
            RAÚL ÀVILA INC.
          </Link>
        </div>
        <div className="raul2" id="raulBanner">
          <Link
            to="/Home"
            className="links"
            id=""
            onMouseOver={() => {
              setImg(RetailLanding);
            }}
          >
            raúl
          </Link>
          <Link
            to="/Cafe"
            className="links"
            id=""
            onMouseOver={() => {
              setImg(CafeFlor);
            }}
          >
            café-flor
          </Link>
        </div>
        <div className="raul2" id="venueBanner">
          <Link
            to="/Venue"
            className="links"
            id=""
            onMouseOver={() => {
              setImg(Raul_Inc);
            }}
          >
            venue bookings
          </Link>
        </div>
      </nav>
    </div>
  );
};
