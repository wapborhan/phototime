import React from "react";
// Import Image
import headBG from "../../assets/images/head-bg.jpg";
import logo from "../../assets/images/logo.png";
// Import Icon
import { FaTwitterSquare, FaFacebookSquare, FaFlickr } from "react-icons/fa";

const Header = () => {
  return (
    <section
      id="header"
      style={{
        backgroundImage: `url(${headBG})`,
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
                    <img src={logo} alt="" />
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
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFlickr />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
