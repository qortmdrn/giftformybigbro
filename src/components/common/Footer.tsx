"use client";

import styled from "styled-components";
import useMobileChecker from "../hooks/useMobileChecker";

export default function Footer() {
  const { isMobile } = useMobileChecker();
  return (
    <StyledFooter $isMobile={isMobile}>
      <div className="inner">
        <div className="copyright">
          © Made by Seungwoo BAEK. Some rights reserved.
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer<{ $isMobile: boolean }>`
  overflow: hidden;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "75px" : "120px")};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  background: #000;
  color: #fff;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .copyright {
      font-size: ${({ $isMobile }) => ($isMobile ? "10px" : "14px")};
      line-height: 1.5;
      color: #767574;
    }
  }
`;
