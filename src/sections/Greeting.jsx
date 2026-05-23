import styled from "styled-components";
import { weddingData } from "../data/weddingData";

export default function Greeting() {
  const { greeting, groom, bride, wedding, venue } = weddingData;

  return (
    <Container>
      <Label>invitation</Label>

      <Lines>
        {greeting.map((line, idx) => (
          <Line key={idx}>{line}</Line>
        ))}
      </Lines>

      <Meta>
        <MetaLine>
          {wedding.dateText} {wedding.dayLabel} {wedding.timeLabel}
        </MetaLine>
        <MetaLine>
          {venue.name} {venue.hall}
        </MetaLine>
      </Meta>

      <Family>
        <FamilyRow>
          <Parents>
            {groom.father.name} · {groom.mother.name}
          </Parents>
          <Relation>의 아들</Relation>
          <Child>{groom.name.slice(1)}</Child>
        </FamilyRow>
        <FamilyRow>
          <Parents>
            {bride.father.name} · {bride.mother.name}
          </Parents>
          <Relation>의 딸</Relation>
          <Child>{bride.name.slice(1)}</Child>
        </FamilyRow>
      </Family>
    </Container>
  );
}

const Container = styled.section`
  padding: 60px 28px;
  background-color: #f5efe5;
  text-align: center;
  color: #3d2e23;
`;

const Label = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 2rem;
  color: #b48a7b;
  margin: 0 0 28px;
  letter-spacing: 2px;
`;

const Lines = styled.div`
  margin-bottom: 36px;
`;

const Line = styled.p`
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.5rem;
  color: #4a3a2a;
  line-height: 2.2;
  margin: 0;
`;

const Meta = styled.div`
  margin-bottom: 32px;
  padding: 14px 0;
  border-top: 1px solid #e0d4bf;
  border-bottom: 1px solid #e0d4bf;
`;

const MetaLine = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 2rem;
  color: #3d2e23;
  line-height: 1.6;
  margin: 0;
`;

const Family = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FamilyRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.4rem;
  color: #4a3a2a;
`;

const Parents = styled.span``;
const Relation = styled.span`
  color: #8a7a6a;
  margin: 0 6px;
`;
const Child = styled.span`
  font-weight: 700;
  color: #3d2e23;
`;
