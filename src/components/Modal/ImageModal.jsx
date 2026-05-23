import { forwardRef, useState, useEffect } from "react";
import styled from "styled-components";
import ReactDom from "react-dom";

import IconButton from "../Button/IconButton";
import CloseSvg from "../Icons/close";

import { weddingData } from "../../data/weddingData";

import Slider from "react-slick";

const ImageModal = forwardRef(({ isModalOpen, handleCloseModal }, ref) => {
  const { gallery } = weddingData;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [element, setElement] = useState(null);

  useEffect(() => {
    setElement(document.getElementById("modal"));
  }, []);

  if (!element) return <></>;

  return ReactDom.createPortal(
    <>
      <Container className={isModalOpen ? "" : "disable"}>
        <Header>
          <IconButtonWrapper>
            <IconButton onClick={handleCloseModal}>
              <CloseSvg />
            </IconButton>
          </IconButtonWrapper>
        </Header>
        <Wrapper>
          <Slider {...settings} ref={ref}>
            {gallery.images.map(src => (
              <Image src={`${gallery.path}/${src}`} key={src} />
            ))}
          </Slider>
        </Wrapper>
      </Container>
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>,
    element,
  );
});

const Dimed = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.9;
  &.disable {
    display: none;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 48px;
  position: absolute;
  z-index: 999;
  top: 0;
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  width: 100%;
  max-width: 435px;
  margin: 0 auto;
  z-index: 999;
  opacity: 1;
  &.disable {
    opacity: 0;
    z-index: -999;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const IconButtonWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export default ImageModal;
