import styled from "styled-components"

type MessagePopupProps = {
  closeModal: () => void;
};

export default function MessagePopup({ closeModal } : MessagePopupProps){
  return <StyledMessagePopup>
    <div className="message"></div>
  </StyledMessagePopup>
}

const StyledMessagePopup = styled.div`
  width: 460px;
  height: 200px;
  background: #fff;
  border: 1px solid pink;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .message {
    line-height: 1.4;
    font-size: 30px;
    font-weight: 400;
    color: #000;
  }
`