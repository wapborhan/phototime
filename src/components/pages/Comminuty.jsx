import React from "react";

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
              <div className="main-about-image owl-carousel owl-theme">
                <div className="item about-img">
                  <div className="about-img-iteam">
                    <img src="assets/images/comm-1.jpg" alt="" />
                  </div>

                  {/* <div className="about-overley">
                                    <div className="overly-content">
                                        <img src="assets/images/icon.png" alt="">
                                        <h2>Body Treatment</h2>
                                    </div>
                                </div> */}
                </div>
                <div className="item about-img">
                  <div className="about-img-iteam">
                    <img src="assets/images/comm-2.jpg" alt="" />
                  </div>
                  {/* <!--
                                <div className="about-overley">
                                    <div className="overly-content">
                                        <img src="assets/images/icon.png" alt="">
                                        <h2>Body Treatment</h2>
                                    </div>
                                </div>
--> */}
                </div>
                <div className="item about-img">
                  <div className="about-img-iteam">
                    <img src="assets/images/comm-1.jpg" alt="" />
                  </div>
                  {/* <!--
                                <div className="about-overley">
                                    <div className="overly-content">
                                        <img src="assets/images/icon.png" alt="">
                                        <h2>Body Treatment</h2>
                                    </div>
                                </div>
--> */}
                </div>
                <div className="item about-img">
                  <div className="about-img-iteam">
                    <img src="assets/images/comm-2.jpg" alt="" />
                  </div>
                  {/* <!--
                                <div className="about-overley">
                                    <div className="overly-content">
                                        <img src="assets/images/icon.png" alt="">
                                        <h2>Body Treatment</h2>
                                    </div>
                                </div>
--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
