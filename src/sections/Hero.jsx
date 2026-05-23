import styled from "styled-components";
import { weddingData } from "../data/weddingData";

export default function Hero() {
  const { saveTheDate } = weddingData;

  return (
    <Container>
      <Headline>{saveTheDate.headline}</Headline>

      <ImageSlot>
        {saveTheDate.heroImage ? (
          <img src={saveTheDate.heroImage} alt="" />
        ) : (
          <PlaceholderText>이미지 자리</PlaceholderText>
        )}
      </ImageSlot>

      <DateLine>{saveTheDate.dateLine}</DateLine>
      <VenueLine>{saveTheDate.venueLine}</VenueLine>
    </Container>
  );
}

const Container = styled.section`
  padding: 80px 28px 90px;
  background-color: #f5efe5;
  text-align: center;
  color: #3d2e23;
`;

const Headline = styled.h1`
  font-family: "Caveat Brush", "Caveat", "Homemade Apple", cursive;
  font-weight: 400;
  font-size: 5.6rem;
  margin: 0 0 60px;
  color: #3d2e23;
  letter-spacing: 1px;
  line-height: 1;
`;

const ImageSlot = styled.div`
  width: 100%;
  max-width: 420px;
  aspect-ratio: 5 / 3;
  margin: 0 auto 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #d4c4a8;
  background-color: rgba(255, 255, 255, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const PlaceholderText = styled.span`
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.2rem;
  color: #b8a88e;
  letter-spacing: 1px;
`;

const DateLine = styled.p`
  font-family: "Nanum Pen Script", "East Sea Dokdo", "Gaegu", cursive;
  font-size: 3.2rem;
  color: #3d2e23;
  margin: 0 0 14px;
  letter-spacing: 1px;
  line-height: 1.2;
`;

const VenueLine = styled.p`
  font-family: "Nanum Pen Script", "East Sea Dokdo", "Gaegu", cursive;
  font-size: 2.8rem;
  color: #3d2e23;
  margin: 0;
  line-height: 1.2;
`;
