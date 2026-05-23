import styled from "styled-components";
import { useState, useRef } from "react";
import ImageModal from "../components/Modal/ImageModal";
import { weddingData } from "../data/weddingData";

export default function Gallery() {
  const { gallery } = weddingData;
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const slideRef = useRef(null);

  const handleOpen = index => {
    setTab(index);
    setIsOpen(true);
    slideRef.current?.slickGoTo(index);
  };

  return (
    <Container>
      <Label>gallery</Label>

      <Photos>
        {gallery.images.map((file, index) => (
          <Photo
            key={file}
            src={`${gallery.path}/${file}`}
            onClick={() => handleOpen(index)}
            loading="lazy"
            decoding="async"
            alt=""
          />
        ))}
      </Photos>

      <ImageModal
        ref={slideRef}
        isModalOpen={isOpen}
        src={`${gallery.path}/${gallery.images[tab]}`}
        handleCloseModal={() => setIsOpen(false)}
        tab={tab}
      />
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5efe5;
  padding: 60px 0 30px;
  text-align: center;
`;

const Label = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 2.4rem;
  color: #b48a7b;
  margin: 0 0 28px;
  letter-spacing: 2px;
`;

const Photos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
`;
