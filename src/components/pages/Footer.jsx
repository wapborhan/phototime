import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-left">
            <div class="foot-menu">
              <ul>
                <li>
                  <a href="#">Credits</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Our terms</a>
                </li>
              </ul>
            </div>
            <div class="foot-credit">
              <p>Copyright by phototime - all right reserved</p>
            </div>
          </div>
          <div class="col-lg-6 text-end">
            <div class="foot-logo">
              <img src="assets/images/foot-logo.png" alt="" />
              <div class="design-by">
                design By <a href="http://srdreamlab.com">SR Dream Lab</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
