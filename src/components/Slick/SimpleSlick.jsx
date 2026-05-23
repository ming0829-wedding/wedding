import React from "react";
import Slider from "react-slick";
import { forwardRef } from "react";

const SimpleSlick = forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} ref={ref} {...props}>
      {props.children}
    </Slider>
  );
});

export default SimpleSlick;
