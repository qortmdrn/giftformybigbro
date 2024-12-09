import styled from "styled-components";
import useMobileChecker from "../hooks/useMobileChecker";

export default function SectionWiki() {
  const { isMobile } = useMobileChecker();
  return (
    <StyledSectionWiki $isMobile={isMobile} id="wiki">
      wiki
    </StyledSectionWiki>
  );
}

const StyledSectionWiki = styled.section<{
  $isMobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "100%" : "100vh")};
  position: relative;
  background: blue;
  ${({ $isMobile }) => $isMobile && "padding: 20px 10px;"};
`;
