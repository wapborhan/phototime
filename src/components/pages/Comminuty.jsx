import React from "react";

// Image Import
import commimg1 from "../../assets/images/comm-1.jpg";
import commimg2 from "../../assets/images/comm-2.jpg";
//
import Carosol from "./Carosol";

export const Comminuty = () => {
  return (
    <section id="comminuty">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 text-center">
            <div className="comm-content">
              <img src="assets/images/logo-green.png" alt="" />
              <h2>Our Comminuty</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="comm-slider">
              <Carosol />
              <div className="main-about-image owl-carousel owl-theme"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
