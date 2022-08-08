import React from "react";

const Header = () => {
  return (
    <section
      id="header"
      style={{
        backgroundImage: `url("assets/images/head-bg.jpg")`,
      }}
    >
      <div className="container">
        <div className="header-menu">
          <nav className="navbar navbar-expand-lg">
            <div className="main-menu m-auto">
              <ul className="navbar-nav menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Photoapp</a>
                </li>
                <li>
                  <a className="logo" href="#">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Download</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="head-content text-center">
          <h2>your life , a photo</h2>
          <h3>print your life in a simple photo</h3>
          <button className="head">get started</button>
        </div>
        <div className="head-social text-center">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-flickr"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
