import React from "react";
import Carousel from "better-react-carousel";

import commimg1 from "../../assets/images/comm-1.jpg";
import commimg2 from "../../assets/images/comm-2.jpg";
const MyDot = ({ isActive }) => (
  <span
    style={{
      display: "inline-block",
      height: isActive ? "8px" : "5px",
      width: isActive ? "8px" : "5px",
      background: "#1890ff",
    }}
  ></span>
);
const Carosol = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} dot={MyDot} loop autoplay={1000}>
      <Carousel.Item>
        <img width="100%" src={commimg1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={commimg2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={commimg1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={commimg2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={commimg1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={commimg2} />
      </Carousel.Item>
    </Carousel>
  );
};
export default Carosol;
