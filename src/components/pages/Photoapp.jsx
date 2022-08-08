import React from "react";

const Photoapp = () => {
  return (
    <section id="photoapp">
      <div className="container">
        <div className="row photoapp-iteam">
          <div className="col-lg-6 sr-captions">
            <h5>
              Rappresent your life with a<span>simple photo</span>
            </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            <p>sed do eiusmod tempor incididunt ut labore et dolore </p>
            <p>
              magna aliqua. Ut <b>enim ad minim</b> veniam, quis
            </p>
            <p>nostrud exercitation ullamco laboris nisi </p>
            <p>ut aliquip ex ea commodo consequat.</p>
            <button className="slider">get started</button>
          </div>
          <div className="col-lg-6 photoapp-img">
            <div className="imgd">
              <img src="assets/images/slider.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photoapp;
