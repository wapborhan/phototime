import React from "react";
import design1 from "../../assets/images/design-mobile.png";

const Design = () => {
  return (
    <section id="design">
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slider-iteam">
                <div className="slider-img">
                  <img className="w-100" src={design1} alt="First slide" />
                </div>
                <div className="carousel-captions">
                  <h5>Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  </p>
                  <p>sed do eiusmod tempor incididunt ut labore et dolore </p>
                  <p>
                    magna aliqua. Ut <b>enim ad minim</b> veniam, quis
                  </p>
                  <p>nostrud exercitation ullamco laboris nisi </p>
                  <p>ut aliquip ex ea commodo consequat.</p>
                  <button className="slider">Learn More</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="slider-iteam">
                <div className="slider-img">
                  <img className="w-100" src={design1} alt="First slide" />
                </div>
                <div className="carousel-captions">
                  <h5>Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  </p>
                  <p>sed do eiusmod tempor incididunt ut labore et dolore </p>
                  <p>
                    magna aliqua. Ut <b>enim ad minim</b> veniam, quis
                  </p>
                  <p>nostrud exercitation ullamco laboris nisi </p>
                  <p>ut aliquip ex ea commodo consequat.</p>
                  <button className="slider">Learn More</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="slider-iteam">
                <div className="slider-img">
                  <img className="w-100" src={design1} alt="First slide" />
                </div>
                <div className="carousel-captions">
                  <h5>Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  </p>
                  <p>sed do eiusmod tempor incididunt ut labore et dolore </p>
                  <p>
                    magna aliqua. Ut <b>enim ad minim</b> veniam, quis
                  </p>
                  <p>nostrud exercitation ullamco laboris nisi </p>
                  <p>ut aliquip ex ea commodo consequat.</p>
                  <button className="slider">Learn More</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="slider-iteam">
                <div className="slider-img">
                  <img
                    className="w-100"
                    src="assets/images/design-mobile.png"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-captions">
                  <h5>Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  </p>
                  <p>sed do eiusmod tempor incididunt ut labore et dolore </p>
                  <p>
                    magna aliqua. Ut <b>enim ad minim</b> veniam, quis
                  </p>
                  <p>nostrud exercitation ullamco laboris nisi </p>
                  <p>ut aliquip ex ea commodo consequat.</p>
                  <button className="slider">Learn More</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="slider-iteam">
                <div className="slider-img">
                  <img
                    className="w-100"
                    src="assets/images/design-mobile.png"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-captions">
                  <h5>Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  </p>
                  <p>sed do eiusmod tempor incididunt ut labore et dolore </p>
                  <p>
                    magna aliqua. Ut <b>enim ad minim</b> veniam, quis
                  </p>
                  <p>nostrud exercitation ullamco laboris nisi </p>
                  <p>ut aliquip ex ea commodo consequat.</p>
                  <button className="slider">Learn More</button>
                </div>
              </div>
            </div>

            <div className="controlsBlock">
              <div className="controls">
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
