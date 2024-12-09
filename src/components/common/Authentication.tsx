import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import useMobileChecker from "../hooks/useMobileChecker";

interface AuthenticationProps {
  closeModal: () => void;
  setIsMessagePopupOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Authentication({
  closeModal,
  setIsMessagePopupOpen,
}: AuthenticationProps) {
  const { isMobile } = useMobileChecker();
  return (
    <StyledAuthentication $isMobile={isMobile}>
      <p className="authorize">비밀번호를 입력해주세요.</p>
    </StyledAuthentication>
  );
}

const StyledAuthentication = styled.div<{ $isMobile: boolean }>`
  width: 511px;
  height: 298px;
`;
