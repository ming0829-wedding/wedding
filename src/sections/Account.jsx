import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import useCopyClipboard from "../hooks/useCopyClipboard";
import { weddingData } from "../data/weddingData";

function AccountLine({ name, bank, number, role }) {
  const { copyToClipboard } = useCopyClipboard();
  const hasAccount = Boolean(number);

  if (!hasAccount) {
    return (
      <Line>
        <Bank>-</Bank>
        <Holder>({role} {name})</Holder>
      </Line>
    );
  }

  const handleCopy = () => {
    copyToClipboard(number);
    toast("계좌번호가 복사되었습니다.");
  };

  return (
    <Line onClick={handleCopy}>
      <Bank>{bank}</Bank>
      <Holder>({role} {name})</Holder>
      <Number>{number}</Number>
    </Line>
  );
}

function Group({ title, side }) {
  const [open, setOpen] = useState(false);
  const { groom, bride } = weddingData;
  const target = side === "groom" ? groom : bride;
  const childRole = side === "groom" ? "신랑" : "신부";

  return (
    <GroupBox>
      <GroupToggle onClick={() => setOpen(prev => !prev)}>
        {title}
        <Arrow $open={open}>{open ? "˄" : "˅"}</Arrow>
      </GroupToggle>
      {open && (
        <GroupBody>
          <AccountLine
            role={childRole}
            name={target.name}
            bank={target.account.bank}
            number={target.account.number}
          />
          <AccountLine
            role="아버지"
            name={target.father.name}
            bank={target.fatherAccount.bank}
            number={target.fatherAccount.number}
          />
          <AccountLine
            role="어머니"
            name={target.mother.name}
            bank={target.motherAccount.bank}
            number={target.motherAccount.number}
          />
        </GroupBody>
      )}
    </GroupBox>
  );
}

export default function Account() {
  return (
    <Container>
      <Label>account</Label>
      <Heading>마음 전하실 곳</Heading>
      <SubText>축하의 마음을 전하고자 하시는 분들을 위해 기재하였습니다.</SubText>

      <Groups>
        <Group title="신랑측 마음 전하는 곳" side="groom" />
        <Group title="신부측 마음 전하는 곳" side="bride" />
      </Groups>
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
  margin: 0 0 16px;
  letter-spacing: 2px;
  text-align: center;
`;

const Heading = styled.h2`
  font-family: "Nanum Pen Script", cursive;
  font-size: 2.6rem;
  color: #3d2e23;
  text-align: center;
  margin: 0 0 8px;
  font-weight: 400;
`;

const SubText = styled.p`
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.25rem;
  color: #8a7a6a;
  text-align: center;
  line-height: 1.7;
  margin: 0 0 28px;
`;

const Groups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GroupBox = styled.div`
  border: 1px solid #d4c4a8;
  border-radius: 2px;
  overflow: hidden;
  background-color: #faf5ec;
`;

const GroupToggle = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  background-color: #faf5ec;
  border: none;
  cursor: pointer;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.4rem;
  color: #3d2e23;
  font-weight: 700;
`;

const Arrow = styled.span`
  color: #b48a7b;
`;

const GroupBody = styled.div`
  border-top: 1px solid #e0d4bf;
  padding: 8px 18px 14px;
`;

const Line = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #ede2cf;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.3rem;
  color: #3d2e23;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  &:last-child {
    border-bottom: none;
  }
`;

const Bank = styled.span`
  color: #3d2e23;
`;

const Holder = styled.span`
  color: #8a7a6a;
`;

const Number = styled.span`
  color: #a06a52;
  flex-basis: 100%;
  font-variant-numeric: tabular-nums;
`;
