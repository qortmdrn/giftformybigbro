"use client";

import Link from "next/link";
import styled, { keyframes } from "styled-components";
import useMobileChecker from "../hooks/useMobileChecker";

export default function Footer() {
  const { isMobile } = useMobileChecker();
  return (
    <StyledFooter $isMobile={isMobile}>
      <div className="inner">
        <div className="contact">
          🤑If you need an event page <span>emergently</span>, feel free to
          contact me.🤑
          <br />( cc. @안지훈 과장님 )
        </div>
        <br />
        <div className="copyright">
          © Made by{" "}
          <Link
            className="linkto"
            href={
              "https://www.linkedin.com/in/%EC%8A%B9%EC%9A%B0-%EB%B0%B1-14944b25b"
            }
            target="_blank"
            rel="noreferrer"
          >
            Seungwoo BAEK.
          </Link>{" "}
          Some rights reserved.
        </div>
        {!isMobile && (
          <div className="thanksfor">
            <p>만든 사람 및 도움을 주신 분들</p>
            <br />
            기획, 디자인, 개발 : 백승우
            <br />
            개발 모듈 제공 : 이철환(main), 신용준
            <br />
            디자인 영감 및 피드백 제공 : 송봄(main), 정혜원, 강주현
          </div>
        )}
      </div>
    </StyledFooter>
  );
}

const shine = keyframes`
  0% {
    color: #14f078;
  }
  50% {
    color: #767574;
  }
  100% {
    color: #14f078;
  }
`;

const StyledFooter = styled.footer<{ $isMobile: boolean }>`
  overflow: hidden;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "100px" : "120px")};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  background: #000;
  color: #fff;
  position: relative;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .contact {
      text-align: center;
      font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};
      span {
        color: red;
      }
    }
    .copyright {
      font-size: ${({ $isMobile }) => ($isMobile ? "10px" : "14px")};
      line-height: 1.5;
      color: #767574;
      .linkto {
        color: #14f078;
        animation: ${shine} 1s 0s ease-in-out infinite;
      }
    }
  }
  .thanksfor {
    position: absolute;
    right: 50px;
    font-size: 13px;
    font-weight: 100;
    color: #666;
    p {
      font-weight: 700;
      font-size: 16px;
    }
  }
`;
