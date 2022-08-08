import React from "react";

const Subscription = () => {
  return (
    <section
      id="subscribe"
      style={{
        backgroundImage: `url("assets/images/subs-bg.jpg")`,
      }}
    >
      <div class="subs-overly"></div>
      <div class="container">
        <div class="row text-center ">
          <div class="col-lg-12 main-subs">
            <h2>subscribe to us community</h2>

            <div class="input-box">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="YOUR MAIL"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append sub-ic">
                  <span class="input-group-text" id="basic-addon2">
                    <i class="fas fa-check"></i>
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
