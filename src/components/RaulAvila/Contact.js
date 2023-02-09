import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <main>
      <Navbar></Navbar>
      <div className="contactContainer">
        <div className="contactSub">
          <address className="contactAddress">
            <h1>New York</h1>
            <p>
              216 8th Avenue
              <br />
              New York, NY 10011
              <br />
              212-242-7673
              <br />
              <a href="mailto:raul@raulavilainc.com?subject=Inquiry from website">
                raul@raulavilainc.com
              </a>
            </p>
          </address>
        </div>
        <address className="contactAddress">
          <h1>Paris</h1>
          <p>
            7 Rue De La Paix
            <br />
            Paris, France 75002
            <br />
            O +33 1 79 98 11 53
            <br />
            <a href="mailto:raul@raulavilainc.com?subject=Inquiry from website">
              raul@raulavilainc.com
            </a>
          </p>
        </address>
      </div>
    </main>
  );
};

export default Contact;
