import styled from "styled-components";

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
  return (
    <StyledMessagePopup>
      <div className="name">{name}</div>
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

const StyledMessagePopup = styled.div`
  width: 460px;
  height: auto;
  padding: 20px 20px 40px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  .name {
    text-align: left;
    font-size: 24px;
    color: #14f078;
    font-weight: 900;
  }
  .message {
    text-align: left;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 400;
    color: #444;
    word-break: keep-all;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    background-size: cover;
    background-image: url(.././images/close.svg);
    font-size: 0;
  }
`;
