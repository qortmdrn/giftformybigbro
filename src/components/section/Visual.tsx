"use client";

import { Modal } from "@lani.ground/react-modal";
import { useState } from "react";
import styled from "styled-components";
import MessagePopup from "../common/CutePopup";
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
  const [isCutePopupOpen, setIsCutePopupOpen] = useState<boolean>(false);
  return (
    <StyledVisual $isMobile={isMobile}>
      <div className="inner">
        <button className="" onClick={() => setIsCutePopupOpen(true)}>
          전역 축하 메시지 보기
        </button>
        <Modal
          name="copied-popup"
          isOpen={isCutePopupOpen}
          onClose={() => setIsCutePopupOpen(false)}
          component={(closeModal) => <MessagePopup closeModal={closeModal} />}
          dim="rgba(0, 0, 0, 0.5)"
          centerMode
        />
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
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 80px;
      font-weight: 700;
      line-height: 1.4;
      letter-spacing: -3px;
      background: whitesmoke;
      &:hover {
        background: gray;
      }
    }
  }
`;
