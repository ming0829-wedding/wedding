import { useState } from "react";
import styled from "styled-components";
import { weddingData } from "../data/weddingData";

function PersonRow({ role, name, phone }) {
  const hasPhone = Boolean(phone);
  return (
    <Row>
      <RoleCol>{role}</RoleCol>
      <NameCol>{name}</NameCol>
      <PhoneCol>
        {hasPhone ? (
          <PhoneLink href={`tel:${phone}`}>{phone}</PhoneLink>
        ) : (
          <PhoneMuted>-</PhoneMuted>
        )}
      </PhoneCol>
    </Row>
  );
}

export default function Contact() {
  const [open, setOpen] = useState(false);
  const { groom, bride } = weddingData;

  return (
    <Container>
      <Toggle onClick={() => setOpen(prev => !prev)}>
        연락처 보기
        <Arrow $open={open}>{open ? "˄" : "˅"}</Arrow>
      </Toggle>

      {open && (
        <List>
          <PersonRow role="신랑" name={groom.name} phone={groom.phone} />
          <PersonRow role="신랑 아버지" name={groom.father.name} phone={groom.father.phone} />
          <PersonRow role="신랑 어머니" name={groom.mother.name} phone={groom.mother.phone} />
          <PersonRow role="신부" name={bride.name} phone={bride.phone} />
          <PersonRow role="신부 아버지" name={bride.father.name} phone={bride.father.phone} />
          <PersonRow role="신부 어머니" name={bride.mother.name} phone={bride.mother.phone} />
        </List>
      )}
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5efe5;
  padding: 16px 28px 32px;
  color: #3d2e23;
`;

const Toggle = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  border: 1px solid #d4c4a8;
  border-radius: 2px;
  background-color: #faf5ec;
  color: #3d2e23;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.4rem;
  cursor: pointer;
`;

const Arrow = styled.span`
  font-size: 1.3rem;
  color: #b48a7b;
`;

const List = styled.div`
  margin-top: 14px;
  border-top: 1px solid #e0d4bf;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 92px 60px 1fr;
  align-items: center;
  padding: 14px 4px;
  border-bottom: 1px solid #e0d4bf;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.3rem;
`;

const RoleCol = styled.span`
  color: #8a7a6a;
`;

const NameCol = styled.span`
  color: #3d2e23;
  font-weight: 700;
`;

const PhoneCol = styled.span`
  text-align: right;
`;

const PhoneLink = styled.a`
  color: #a06a52;
  text-decoration: none;
`;

const PhoneMuted = styled.span`
  color: #c4b59c;
`;
