import React from "react";
import subBG from "../../assets/images/subs-bg.jpg";

const Subscription = () => {
  return (
    <section
      id="subscribe"
      style={{
        backgroundImage: `url(${subBG})`,
      }}
    >
      <div className="subs-overly"></div>
      <div className="container">
        <div className="row text-center ">
          <div className="col-lg-12 main-subs text-light">
            <h2>subscribe to us community</h2>

            <div className="input-box">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="YOUR MAIL"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append sub-ic btn btn-success">
                  <span id="basic-addon2">
                    <i className="fas fa-check">Submit</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
