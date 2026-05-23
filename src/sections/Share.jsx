import styled from "styled-components";
import { toast } from "react-toastify";
import useCopyClipboard from "../hooks/useCopyClipboard";
import { weddingData } from "../data/weddingData";

export default function Share() {
  const { share, outro } = weddingData;
  const { copyToClipboard } = useCopyClipboard();

  const handleKakao = () => {
    if (typeof window === "undefined" || !window.Kakao) return;
    document.getElementById("kakaotalk-sharing-btn")?.click();
  };

  const handleCopyLink = () => {
    copyToClipboard(share.siteUrl);
    toast("초대장 링크가 복사되었습니다.");
  };

  return (
    <Container>
      <Outro>{outro}</Outro>

      <Buttons>
        <KakaoButton onClick={handleKakao}>카카오톡으로 공유하기</KakaoButton>
        <CopyButton onClick={handleCopyLink}>링크 복사하기</CopyButton>
      </Buttons>
    </Container>
  );
}

const Container = styled.section`
  padding: 60px 28px 80px;
  background-color: #f5efe5;
  text-align: center;
  color: #3d2e23;
`;

const Outro = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 2.4rem;
  color: #3d2e23;
  margin: 0 0 30px;
  letter-spacing: 1px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 320px;
  margin: 0 auto;
`;

const KakaoButton = styled.button`
  padding: 14px 16px;
  border: none;
  border-radius: 2px;
  background-color: #fee500;
  color: #3c1e1e;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.35rem;
  cursor: pointer;
`;

const CopyButton = styled.button`
  padding: 14px 16px;
  border: 1px solid #d4c4a8;
  border-radius: 2px;
  background-color: #faf5ec;
  color: #3d2e23;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.35rem;
  cursor: pointer;
`;
