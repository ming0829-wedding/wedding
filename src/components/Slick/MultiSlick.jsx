import React from "react";
import Slider from "react-slick";

export default function MultiSlick({ children }) {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    arrows: false,
    dots: true,
    slidesPerRow: 2,
  };
  return <Slider {...settings}>{children}</Slider>;
}
