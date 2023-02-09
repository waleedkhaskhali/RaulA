import React from "react";
import Navbar from "./Navbar.js";
import "./RaulAvila.css";
import RaulHead from "../../assets/RaulHead.jpg";

const Bio = () => {
  return (
    <main>
      <Navbar></Navbar>
      <img id="bgimg" src={RaulHead}></img>
      <section id="bio">
        <p>
          Raul Àvila has been the president of Raul Àvila Inc., since founding
          the company in February 2005.
        </p>
        <p>
          Driven to become a success in New York City, Mr. Àvila left his
          hometown of Bogota, Colombia in 1984. Captivated by such elaborate set
          designs when attending designer presentations at New York Fashion
          Week, he soon recognized that event production was his calling.
        </p>
        <p>
          In 1990, Mr. Àvila began his career in events in NYC working as
          assistant to the legendary event planner, Robert Isabell. He thrived
          during his tenure at Robert Isabell Inc., with a promotion to Creative
          Director in 1998. After spending 14 years working by Mr. Isabell’s
          side, Mr. Àvila was compelled to take creative reign and venture out
          on his own.
        </p>
        <p>
          With the same tenacity and drive that originally brought him to this
          country, Mr. Àvila saw rapid success upon starting his business. A
          solid foundation of clients that had the utmost faith in him, among
          them Anna Wintour, Aerin Lauder, Oscar DeLa Renta, Marc Jacobs,
          Costume Institute Gala, CFDA, Cartier, Town & Country, Condé Nast were
          integral in establishing him as a fixture in the fashion industry.
          Known for his impeccable taste and talent, he quickly garnered an
          impressive roster of clients that remain faithful to his work today.
        </p>
        <p>
          Specializing in floral design and sophisticated décor, Mr. Àvila
          produces special events ranging from benefits and weddings to fashion
          shows and photo shoots. Most notably he has been responsible for
          overseeing the décor design for the Metropolitan Museum of Art’s
          Annual Costume Institute Gala since 2007. Still bestowed this honor at
          present, Mr. Àvila has the unique opportunity to transform the MET
          into an exquisite venue for this important benefit each year.
        </p>
        <p>
          As his business matures, Mr. Àvila has his sights set on expanding his
          international presence in the events industry as well as introducing
          his own product line. In addition, Mr. Àvila is evolving his
          philanthropic efforts, becoming more involved with the causes he
          supports.
        </p>
      </section>
    </main>
  );
};

export default Bio;
