import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import "./Raul.css";

export const Raul = () => {
  const ref = useRef();
  const handleScroll = () => {
    const scrollPosition = document.body.scrollTop; // => scroll position
    console.log(scrollPosition);
  };
  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    console.log(document.body.scrollTop);
  }, []);
  return (
    <div style={{ height: "150vh" }} ref={ref}>
      <h4>Hello</h4>
    </div>
  );
};
