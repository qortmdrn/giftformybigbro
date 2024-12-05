"use client";

import { Modal } from "@lani.ground/react-modal";
import { useState } from "react";
import styled from "styled-components";
import MessagePopup from "../common/MessagePopup";
import {
  armyMessages,
  devTeamMessages,
  otherTeamMessages,
} from "../constants/messages";
import useMobileChecker from "../hooks/useMobileChecker";

interface IVisualProps {
  beforeIndex?: number;
  activeIndex?: number;
  setActiveIndex?: () => void;
}

export default function Visual({
  beforeIndex,
  activeIndex,
  setActiveIndex,
}: IVisualProps) {
  const { isMobile } = useMobileChecker();
  const [isMessagePopupOpen, setIsMessagePopupOpen] = useState<boolean>(false);
  const messages = [...devTeamMessages, ...otherTeamMessages, ...armyMessages];
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [currentName, setCurrentName] = useState<string>("");
  const clickCard = (str: string, name: string) => {
    setCurrentMessage(str);
    setCurrentName(name);
    setIsMessagePopupOpen(true);
  };
  return (
    <StyledVisual $isMobile={isMobile}>
      <div className="wrapper">
        <div className="supreme">
          <img src="../images/logo.png" alt="WEMADE" height={86} />
          <p className="title">동료들의 편지</p>
        </div>

        <p className="subtitle">성실한 복무 완료 및 전역을 축하합니다.</p>
        <div className="inner">
          {messages.map((e, i) => {
            return (
              <button
                className="card"
                onClick={() => clickCard(e.message, e.name)}
              >
                <p className="team">{e.team}</p>
                <p className="name">{e.name}</p>
              </button>
            );
          })}
          <Modal
            name="copied-popup"
            isOpen={isMessagePopupOpen}
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
        </div>
      </div>
    </StyledVisual>
  );
}

const StyledVisual = styled.section<{
  $isMobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: #fff;
  .supreme {
    display: flex;
  }
  .title,
  .subtitle {
    color: #666;
  }
  .title {
    font-size: 52px;
    margin-bottom: 10px;
  }
  .subtitle {
    font-size: 28px;
    margin-bottom: 20px;
    padding-left: 25px;
  }
  .inner {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-content: center;
    gap: 10px;
    .card {
      width: 250px;
      height: 130px;
      border: 2px solid #14f078;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      &:hover {
        background-color: #14f078;
      }
      .team {
        font-size: 16px;
        font-weight: 500;
        color: #666;
      }
      .name {
        font-size: 20px;
        color: #000;
      }
    }
  }
`;
