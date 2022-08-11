import React from "react";

const Download = () => {
  return (
    <section id="download">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 download-head">
            <h2>Download It</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="dlod-btn">
            <a className="app-btn" href="#">
              APPLE STORE{" "}
              <span className="ico">
                <i className="fab fa-apple"></i>
              </span>
            </a>
            <a className="app-btn" href="#">
              PLAY STORE{" "}
              <span className="ico">
                <i className="fab fa-apple"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
