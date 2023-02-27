import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Video from "../../assets/Raul_Movie_Fast.mp4";
import AbstractPlate from "../../assets/Abstract_Dinner_Plate.jpg";
import MorningGlass from "../../assets/Morning_Drinking_Glass.jpg";
import Dram from "../../assets/DRAM.jpg";
import DrinkingGlass from "../../assets/Drinking_Glass.jpg";
import Dendur from "../../assets/Dendur_Urn.jpg";
import layout from "../../assets/Layout.jpg";
import furniturecategory from "../../assets/FurnitureCategory.jpg";
import Collection1 from "../../assets/Collection1.jpg";
import Collection2 from "../../assets/Collection2.jpg";
import "./Raul.css";

export const Raul = () => {
  const [furniture, setFurniture] = useState(false);
  const [floral, setFloral] = useState(false);
  const [wallart, setWallart] = useState(false);
  const [tabletop, setTabletop] = useState(false);
  const [decorative, setDecorative] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categoryHandler = (category) => {
    if (category === "furniture") {
      setFurniture(true);
      setFloral(false);
      setWallart(false);
      setTabletop(false);
      setDecorative(false);
      console.log(category);
      console.log(furniture);
    } else if (category === "decorative accessories") {
      setDecorative(true);
      setFurniture(false);
      setFloral(false);
      setWallart(false);
      setTabletop(false);
      console.log(category);
      console.log(decorative);
    } else if (category === "wall art") {
      setWallart(true);
      setFurniture(false);
      setFloral(false);
      setDecorative(false);
      setTabletop(false);
      console.log(category);
      console.log(wallart);
    } else if (category === "floral") {
      setFloral(true);
      setFurniture(false);
      setWallart(false);
      setDecorative(false);
      setTabletop(false);
      console.log(category);
      console.log(floral);
    } else if (category === "table top") {
      setTabletop(true);
      setFurniture(false);
      setFloral(false);
      setWallart(false);
      setDecorative(false);
      console.log(category);
      console.log(tabletop);
    }
  };
  return (
    <div className="body">
      <Navbar scrollPosition={scrollPosition} />
      <div className="vidPar">
        <div className="fullscreen-bigs">
          <video className="raulVideo" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
      <section className="wheelContainer">
        <div className="featureProductsHeading">featured products</div>
        <div className="marquee">
          <div className="marquee__inner">
            <div className="marqueediv">
              <img className="marquee__img" src={AbstractPlate} alt=""></img>
              <div className="marqueetext">amber dinner plate</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={DrinkingGlass} alt=""></img>
              <div className="marqueetext"> amber stemless glass </div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={Dram} alt=""></img>
              <div className="marqueetext">beige triangle tealight</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={MorningGlass} alt=""></img>
              <div className="marqueetext"> amber goblet</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={Dendur} alt=""></img>
              <div className="marqueetext">dendur urn</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={AbstractPlate} alt=""></img>
              <div className="marqueetext">amber dinner plate</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={DrinkingGlass} alt=""></img>
              <div className="marqueetext"> amber stemless glass </div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={Dram} alt=""></img>
              <div className="marqueetext">beige triangle tealight</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={MorningGlass} alt=""></img>
              <div className="marqueetext"> amber goblet</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={Dendur} alt=""></img>
              <div className="marqueetext">dendur urn</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={AbstractPlate} alt=""></img>
              <div className="marqueetext">amber dinner plate</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={DrinkingGlass} alt=""></img>
              <div className="marqueetext"> amber stemless glass </div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={Dram} alt=""></img>
              <div className="marqueetext">beige triangle tealight</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={MorningGlass} alt=""></img>
              <div className="marqueetext"> amber goblet</div>
            </div>
            <div className="marqueediv">
              <img className="marquee__img" src={Dendur} alt=""></img>
              <div className="marqueetext">dendur urn</div>
            </div>
          </div>
        </div>
      </section>
      <section className="categorySection">
        <div>
          <div className="categoryHeading">
            <h1>shop by category</h1>
          </div>
          <div>
            <ul className="tagBanner">
              <a
                className="liBanner"
                onClick={(e) => {
                  categoryHandler(e.target.innerText);
                }}
              >
                furniture
              </a>
              <a
                className="liBanner"
                onClick={(e) => {
                  categoryHandler(e.target.innerText);
                }}
              >
                floral
              </a>
              <a
                className="liBanner"
                onClick={(e) => {
                  categoryHandler(e.target.innerText);
                }}
              >
                wall art
              </a>
              <a
                className="liBanner"
                onClick={(e) => {
                  categoryHandler(e.target.innerText);
                }}
              >
                table top
              </a>
              <a
                className="liBanner"
                onClick={(e) => {
                  categoryHandler(e.target.innerText);
                }}
              >
                decorative accessories
              </a>
            </ul>
          </div>
          <div className="imgPar">
            <div className="tagNbtn">
              <div>
                <h2 className="">furniture</h2>
              </div>
              <div className="shopBtn">
                <button>shop now</button>
              </div>
            </div>
            <div className="categoryImg">
              <img src={furniture ? furniturecategory : ""}></img>
            </div>
          </div>
        </div>
      </section>
      <section className="layout">
        <div>
          <h1>shop by layout</h1>
        </div>
        <div className="layoutImg">
          <img src={layout}></img>
        </div>
      </section>
      <section className="collection">
        <div>
          <h1>shop by collection</h1>
        </div>
        <div className="collectionImg">
          <img src={Collection1}></img>
          <img src={Collection2}></img>
        </div>
      </section>
    </div>
  );
};
