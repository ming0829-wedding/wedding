import styled from "styled-components";
import { toast } from "react-toastify";
import useCopyClipboard from "../hooks/useCopyClipboard";
import { weddingData } from "../data/weddingData";

export default function Location() {
  const { venue, gallery } = weddingData;
  const { copyToClipboard } = useCopyClipboard();
  const notify = label => toast(`${label} 주소가 복사되었습니다.`);

  return (
    <Container>
      <Label>location</Label>

      <VenueName>{venue.name}</VenueName>
      <VenueSub>{venue.hall}</VenueSub>

      <VenueImage src={gallery.venueImage} alt="venue" />

      <AddressRow
        onClick={() => {
          copyToClipboard(venue.roadAddress);
          notify("도로명");
        }}
      >
        <AddrLabel>도로명</AddrLabel>
        <AddrValue>{venue.roadAddress}</AddrValue>
      </AddressRow>
      <AddressRow
        onClick={() => {
          copyToClipboard(venue.lotAddress);
          notify("지번");
        }}
      >
        <AddrLabel>지번</AddrLabel>
        <AddrValue>{venue.lotAddress}</AddrValue>
      </AddressRow>
      <AddressRow as="a" href={`tel:${venue.phone}`}>
        <AddrLabel>전화</AddrLabel>
        <AddrValue>{venue.phone}</AddrValue>
      </AddressRow>

      <MapLinks>
        <MapLink href={venue.mapLinks.kakao}>카카오맵</MapLink>
        <MapLink href={venue.mapLinks.naver}>네이버맵</MapLink>
        <MapLink href={venue.mapLinks.tmap}>티맵</MapLink>
        <MapLink href={venue.mapLinks.google}>구글맵</MapLink>
      </MapLinks>

      <Notes>
        {venue.transport.map((line, idx) => (
          <NoteLine key={idx}>· {line}</NoteLine>
        ))}
        <NoteLine>· 주차 — {venue.parking}</NoteLine>
      </Notes>
    </Container>
  );
}

const Container = styled.section`
  padding: 60px 28px;
  background-color: #f5efe5;
  color: #3d2e23;
`;

const Label = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 2rem;
  color: #b48a7b;
  margin: 0 0 24px;
  letter-spacing: 2px;
  text-align: center;
`;

const VenueName = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 2.6rem;
  color: #3d2e23;
  text-align: center;
  margin: 0 0 4px;
`;

const VenueSub = styled.p`
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.3rem;
  color: #8a7a6a;
  text-align: center;
  margin: 0 0 22px;
`;

const VenueImage = styled.img`
  width: 100%;
  display: block;
  margin-bottom: 24px;
  border-radius: 2px;
`;

const AddressRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  padding: 14px 0;
  border-bottom: 1px solid #e0d4bf;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.35rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const AddrLabel = styled.span`
  color: #b48a7b;
`;

const AddrValue = styled.span`
  color: #3d2e23;
`;

const MapLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin: 22px 0;
`;

const MapLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 6px;
  border: 1px solid #d4c4a8;
  border-radius: 2px;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.2rem;
  color: #4a3a2a;
  text-decoration: none;
  background-color: #faf5ec;
`;

const Notes = styled.div`
  margin-top: 12px;
`;

const NoteLine = styled.p`
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.25rem;
  color: #5a4a3a;
  margin: 6px 0;
  line-height: 1.8;
`;
