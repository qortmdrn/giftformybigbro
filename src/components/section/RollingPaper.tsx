"use client";

import { Modal } from "@lani.ground/react-modal";
import { useState } from "react";
import styled from "styled-components";
import Authentication from "../common/Authentication";
import MessagePopup from "../common/MessagePopup";
import {
  armyMessages,
  devTeamMessages,
  otherTeamMessages,
} from "../constants/messages";
import useMobileChecker from "../hooks/useMobileChecker";

interface IRollingPaperProps {
  beforeIndex?: number;
  activeIndex?: number;
  setActiveIndex?: () => void;
}

export default function RollingPaper({
  beforeIndex,
  activeIndex,
  setActiveIndex,
}: IRollingPaperProps) {
  const { isMobile } = useMobileChecker();
  const [isMessagePopupOpen, setIsMessagePopupOpen] = useState<boolean>(false);
  const messages = [...devTeamMessages, ...otherTeamMessages, ...armyMessages];
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [currentName, setCurrentName] = useState<string>("");
  const [isAuthenticationOpen, setIsAuthenticationOpen] =
    useState<boolean>(false);
  const [isDonggeun, setIsDonggeun] = useState<boolean>(false);
  const [isRead, setIsRead] = useState<boolean[]>(Array(40).fill(false));
  const updateElement = (index: number, newValue: boolean) => {
    setIsRead((prevArr) => {
      // 배열 복사 및 변경
      const newArr = [...prevArr];
      newArr[index] = newValue;
      return newArr; // 새로운 배열로 상태 갱신
    });
  };
  const clickCard = (str: string, name: string, idx: number) => {
    setCurrentMessage(str);
    setCurrentName(name);
    if (isDonggeun) {
      setIsMessagePopupOpen(true);
      updateElement(idx, true);
    } else {
      setIsAuthenticationOpen(true);
    }
  };
  return (
    <StyledRollingPaper $isMobile={isMobile} id="rolling">
      <div className="wrapper">
        <div className="supreme">
          {!isMobile && (
            <img src="../images/logo.png" alt="WEMADE" height={86} />
          )}
          <p className="title">동료들의 편지</p>
        </div>

        <p className="subtitle">
          서동근님의 성실한 복무에 감사드리며 전역을 진심으로 축하합니다.
        </p>
        <div className="inner">
          {messages.map((e, i) => {
            return (
              <button
                className="card"
                onClick={() => clickCard(e.message, e.name, i)}
              >
                <p className="team">{e.team}</p>
                <p className="name">{e.name}</p>
                {isRead[i] && (
                  <div className="read">
                    <img
                      src="../images/check.png"
                      alt="read"
                      height={isMobile ? 10 : 20}
                    />
                  </div>
                )}
              </button>
            );
          })}
          <Modal
            name="copied-popup"
            isOpen={isMessagePopupOpen && isDonggeun}
            onClose={() => setIsMessagePopupOpen(false)}
            component={(closeModal) => (
              <MessagePopup
                closeModal={closeModal}
                messageContent={currentMessage}
                name={currentName}
              />
            )}
            dim="rgba(0, 0, 0, 0.7)"
            centerMode
          />
          {!isDonggeun && (
            <>
              <Modal
                name="copied-popup"
                isOpen={isAuthenticationOpen}
                onClose={() => setIsAuthenticationOpen(false)}
                component={(closeModal) => (
                  <Authentication
                    closeModal={closeModal}
                    setIsMessagePopupOpen={setIsMessagePopupOpen}
                    setIsDonggeun={setIsDonggeun}
                  />
                )}
                dim="rgba(0, 0, 0, 0.7)"
                centerMode
              />
            </>
          )}
        </div>
      </div>
    </StyledRollingPaper>
  );
}

const StyledRollingPaper = styled.section<{
  $isMobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "100%" : "auto")};
  position: relative;
  background: #f1f1f1;
  ${({ $isMobile }) =>
    $isMobile ? "padding: 20px 10px;" : "min-height: 100vh; overflow: auto;"};
  .supreme {
    display: flex;
    img {
      margin-left: -25px;
      margin-top: -10px;
    }
  }
  .title,
  .subtitle {
    color: #666;
  }
  .title {
    font-size: ${({ $isMobile }) => ($isMobile ? "30px" : "40px")};
    margin-bottom: ${({ $isMobile }) => ($isMobile ? "5px" : "10px")};
    font-weight: 900;
  }
  .subtitle {
    font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "24px")};
    margin-bottom: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
  }
  .inner {
    display: grid;
    grid-template-columns: ${({ $isMobile }) =>
      $isMobile ? "repeat(3, 1fr)" : "repeat(5, 1fr)"};
    align-items: center;
    justify-content: center;
    gap: ${({ $isMobile }) => ($isMobile ? "5px" : "10px")};
    margin: 0 auto;
    .card {
      width: ${({ $isMobile }) => ($isMobile ? "110px" : "250px")};
      height: ${({ $isMobile }) => ($isMobile ? "64px" : "130px")};
      border: 1px solid #14f078;
      border-radius: ${({ $isMobile }) => ($isMobile ? "4px" : "6px")};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: ${({ $isMobile }) => ($isMobile ? "3px" : "5px")};
      position: relative;
      &:hover {
        background-color: #14f078;
      }
      .team {
        font-size: ${({ $isMobile }) => ($isMobile ? "10px" : "16px")};
        font-weight: 500;
        color: #666;
      }
      .name {
        font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "20px")};
        color: #000;
      }
      .read {
        position: absolute;
        font-size: 0;
        right: ${({ $isMobile }) => ($isMobile ? "5px" : "15px")};
        top: ${({ $isMobile }) => ($isMobile ? "5px" : "15px")};
        /* width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 5px; */
      }
    }
  }
`;
