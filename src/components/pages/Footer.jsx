import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-left">
            <div className="foot-menu">
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
            <div className="foot-credit">
              <p>Copyright by phototime - all right reserved</p>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="foot-logo">
              <img src="assets/images/foot-logo.png" alt="" />
              <div className="design-by">
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
