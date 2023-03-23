import React from "react";
import { Sliderdata } from "../asset/data/slider";
import slide1 from "../asset/image/ui-ux.png";
import Carousel from "react-bootstrap/Carousel";
import "../css/Heroslider.css";
function HeroSlider() {
  return (
    <div className="scontainer">
      <Carousel variant="dark">
        {Sliderdata.map((item) => (
          <Carousel.Item>
            <img
              className="d-block "
              src={item.imgUrl}
              alt="First slide"
              style={{ height: "60vh", width: "100vh" }}
            />
            <Carousel.Caption>
              <h3>{item.titel}</h3>
              <p style={{ color: "#990000", fontWeight: "100" }}>{item.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
export default HeroSlider;
