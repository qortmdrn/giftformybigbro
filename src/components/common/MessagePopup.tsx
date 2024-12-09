import styled from "styled-components";
import useMobileChecker from "../hooks/useMobileChecker";

type MessagePopupProps = {
  closeModal: () => void;
  messageContent: string;
  name: string;
};

export default function MessagePopup({
  closeModal,
  messageContent,
  name,
}: MessagePopupProps) {
  const { isMobile } = useMobileChecker();
  return (
    <StyledMessagePopup $isMobile={isMobile}>
      <div className="name">From. {name}</div>
      <div
        className="message"
        dangerouslySetInnerHTML={{ __html: messageContent }}
      ></div>
      <button className="close" onClick={closeModal}>
        닫기
      </button>
    </StyledMessagePopup>
  );
}

const StyledMessagePopup = styled.div<{
  $isMobile: boolean;
}>`
  width: ${({ $isMobile }) => ($isMobile ? "320px" : "460px")};
  height: auto;
  padding: ${({ $isMobile }) =>
    $isMobile ? "10px 10px 20px" : "20px 20px 40px"};
  border-radius: ${({ $isMobile }) => ($isMobile ? "5px" : "10px")};
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: ${({ $isMobile }) => ($isMobile ? "9px" : "15px")};
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  .name {
    text-align: left;
    font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "24px")};
    color: #14f078;
    font-weight: 900;
  }
  .message {
    text-align: left;
    line-height: 1.5;
    font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "18px")};
    font-weight: 400;
    color: #444;
    word-break: keep-all;
    .bold {
      color: #000;
      font-weight: 900;
    }
    .imageimage {
      width: ${({ $isMobile }) => ($isMobile ? "260px" : "400px")};
    }
  }
  .close {
    position: absolute;
    top: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
    right: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
    width: ${({ $isMobile }) => ($isMobile ? "15px" : "20px")};
    height: ${({ $isMobile }) => ($isMobile ? "15px" : "20px")};
    background-size: cover;
    background-image: url(.././images/close.svg);
    font-size: 0;
  }
`;
