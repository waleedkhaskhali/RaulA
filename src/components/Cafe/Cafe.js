import React, { useState } from "react";
import CafeFlor from "../../assets/cafelogo.png";
import WinePic from "../../assets/WinePic-min.jpg";
import CafeMenu from "../../assets/cafemenu-min.jpg";
import FullCafeMenu from "../../assets/CafeMenu1024_1.jpg";
import WineMenu from "../../assets/winemenu1024_1.jpg";
import Cafe3 from "../../assets/cafe3-min.jpg";
import "./Cafe.css";

const Cafe = () => {
  const [showCafeMenu, setShowCafeMenu] = useState(false);
  const [showWineMenu, setShowWineMenu] = useState(false);

  function showCafeMenuHandler() {
    if (!showCafeMenu) {
      setShowCafeMenu(true);
      setShowWineMenu(false);
    }
  }

  function showWineMenuHandler() {
    if (!showWineMenu) {
      setShowCafeMenu(false);
      setShowWineMenu(true);
    }
  }

  return (
    <div className="cafepage">
      <section className="cafeBackground">
        <img id="dogCafe"></img>
        <div className="logo-parent">
          <img src={CafeFlor} id="cafe-logo"></img>
          <div>
            <button className="cafe-button">Order Now</button>
            <button className="cafe-button">See Our Menu</button>
          </div>
        </div>
      </section>
      <div id={showCafeMenu || showWineMenu ? "menuDiv" : ""}>
        <a
          id={showCafeMenu || showWineMenu ? "XBtn" : ""}
          onClick={() => {
            setShowCafeMenu(false) && setShowWineMenu(false);
          }}
        >
          X
        </a>
        <img
          className={showCafeMenu ? "show" : "hide"}
          src={FullCafeMenu}
        ></img>
        <img className={showWineMenu ? "show" : "hide"} src={WineMenu}></img>
      </div>
      <section className="menuSection">
        <h1>Menu</h1>
        <div className="menuCards">
          <div>
            <a
              onClick={() => {
                showCafeMenuHandler();
              }}
            >
              Cafe Menu
            </a>
            <img src={CafeMenu}></img>
          </div>
          <div>
            <a
              onClick={() => {
                showWineMenuHandler();
              }}
            >
              Wine Menu
            </a>
            <img src={WinePic}></img>
          </div>
        </div>
      </section>
      <section className="cafe3">
        <img src={Cafe3} className="cafe3img"></img>
      </section>
      <footer>
        <div class="hoursOfOperation">
          <h1>
            Sunday - Thursday 8:00AM to 9:00PM
            <br />
            Friday - Saturday 8:00AM to 11:00PM
            <br />
          </h1>
          <h1>Phone: 1 (347)-990-2100</h1>
          <h1>Address: 218 8th Avenue, New York, NY 10011</h1>
        </div>
      </footer>
    </div>
  );
};

export default Cafe;
