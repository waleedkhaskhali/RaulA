import React from "react";
import Navbar from "./Navbar";
import NYT from "../../assets/TheNYT-Logo.png";
import TheCut from "../../assets/thecut.png";
import Coveteur from "../../assets/Coveteur.png";
import Vogue from "../../assets/vogue.png";
import VogueMagazine from "../../assets/voguemagazine-logo.png";
import WWD from "../../assets/wwd.png";
import TheWorldsBest from "../../assets/The-Worldsbestevents.png";
import MTV from "../../assets/MTV.png";
import TheMet from "../../assets/themet.png";
import LookToTheStars from "../../assets/looktothestars.png";
import Trendencias from "../../assets/trendencias.png";
import Jetset from "../../assets/jetset.png";
import PretAReporter from "../../assets/pretareporter.png";
import NewYorkPost from "../../assets/newyorkpost.png";
import FirstMonday from "../../assets/firstmonday.png";
import TheDaily from "../../assets/daily.png";

const Press = () => {
  return (
    <main style={{ height: "150vh" }}>
      <Navbar></Navbar>
      <div className="rowsContainer">
        <div className="rows">
          <a href="press-NYTimes.html">
            <img src={NYT} alt="" className="pressImg"></img>
          </a>
          <a href="2019-pressvoguecom.html">
            <img src={TheCut} alt="" className="pressImg"></img>
          </a>
          <a>
            <img src={Coveteur} alt="" className="pressImg"></img>
          </a>
          <a>
            <img src={Vogue} alt="" className="pressImg"></img>
          </a>
        </div>
        <div className="rows">
          <a href="press-NYTimes.html">
            <img src={MTV} alt="" className="pressImg"></img>
          </a>
          <a href="2019-pressvoguecom.html">
            <img src={TheWorldsBest} alt="" className="pressImg"></img>
          </a>
          <a>
            <img src={VogueMagazine} alt="" className="pressImg"></img>
          </a>
          <a>
            <img src={WWD} alt="" className="pressImg"></img>
          </a>
        </div>
        <div className="rows">
          <a href="press-NYTimes.html">
            <img src={Jetset} alt="" className="pressImg"></img>
          </a>
          <a href="2019-pressvoguecom.html">
            <img src={LookToTheStars} alt="" className="pressImg"></img>
          </a>
          <a>
            <img src={Trendencias} alt="" className="pressImg"></img>
          </a>
          <a>
            <img src={TheMet} alt="" className="pressImg"></img>
          </a>
        </div>
        <div className="rows">
          <a href="press-NYTimes.html">
            <img src={PretAReporter} alt="" className="pressImg"></img>
          </a>
          <a href="2019-pressvoguecom.html">
            <img src={NewYorkPost} alt="" className="pressImg"></img>
          </a>
          <a>
            <img src={FirstMonday} alt="" className="pressImg"></img>
          </a>
          <a>
            <img src={TheDaily} alt="" className="pressImg"></img>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Press;
