import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import useMobileChecker from "../hooks/useMobileChecker";

interface AuthenticationProps {
  closeModal: () => void;
  setIsMessagePopupOpen: Dispatch<SetStateAction<boolean>>;
  setIsDonggeun: Dispatch<SetStateAction<boolean>>;
}

export default function Authentication({
  closeModal,
  setIsMessagePopupOpen,
  setIsDonggeun,
}: AuthenticationProps) {
  const { isMobile } = useMobileChecker();
  const [inputValue, setInputValue] = useState<string>("");
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const targetString = "tjehdrms";
  const handleChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.toString().toLowerCase() === targetString) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  };
  const submitPassword = () => {
    if (isMatch) {
      setIsDonggeun(true);
      setIsMessagePopupOpen(true);
    } else {
      setIsMessagePopupOpen(false);
      alert("동근이형이 아니군요!");
    }
  };
  return (
    <StyledAuthentication $isMobile={isMobile}>
      <label htmlFor="match-input">
        동근이형이라면 비밀번호를 입력해주세요.
      </label>
      <input
        id="match-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="동근 인증"
      />
      <button className="submit" onClick={() => submitPassword()}>
        동근 확인
      </button>
      {!isMobile && (
        <button className="close" onClick={closeModal}>
          닫기
        </button>
      )}
    </StyledAuthentication>
  );
}

const StyledAuthentication = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
  width: ${({ $isMobile }) => ($isMobile ? "255px" : "511px")};
  height: ${({ $isMobile }) => ($isMobile ? "149px" : "298px")};
  background: #fff;
  border-radius: ${({ $isMobile }) => ($isMobile ? "5px" : "10px")};
  padding: ${({ $isMobile }) => ($isMobile ? "10px" : "15px 0 25px")};
  position: relative;
  label {
    font-size: ${({ $isMobile }) => ($isMobile ? "13px" : "20px")};
    color: #444;
  }
  input {
    height: ${({ $isMobile }) => ($isMobile ? "30px" : "50px")};
    width: ${({ $isMobile }) => ($isMobile ? "115px" : "225px")};
    &::placeholder {
      font-size: ${({ $isMobile }) =>
        $isMobile ? "12px !important" : "16px !important"};
    }
  }
  .submit {
    background-color: #fff;
    color: #444;
    font-size: ${({ $isMobile }) => ($isMobile ? "8px" : "16px")};
    border: 1px solid #14f078;
    border-radius: ${({ $isMobile }) => ($isMobile ? "3px" : "6px")};
    padding: ${({ $isMobile }) => ($isMobile ? "5px 30px" : "10px 70px")};
    &:hover {
      background-color: #14f078;
      color: #000;
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
