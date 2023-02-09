import React from "react";
import Navbar from "./Navbar";
import "./RaulAvila.css";
import Video from "../../assets/Timelapse.mp4";

const RaulAvila = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="fullscreen-bg">
        <video className="video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default RaulAvila;
