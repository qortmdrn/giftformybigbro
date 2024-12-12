"use client";

import config from "@/styles/config";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../common/Footer";
import useMobileChecker from "../hooks/useMobileChecker";
import BaseTemplate from "../template/BaseTemplate";
import RollingPaper from "./RollingPaper";
import SectionWiki from "./Wiki";

export default function MainWrapper() {
  const [beforeIndex, setBeforeIndex] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { isMobile } = useMobileChecker();
  return (
    <BaseTemplate>
      <StyledMainWrapper>
        {isMobile ? (
          <>
            <SectionWiki />
            {/* <Achievements /> */}
            <RollingPaper />
            <Footer />
          </>
        ) : (
          <FullpageContainer
            transitionDuration={700}
            onBeforeChange={setBeforeIndex}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <FullpageSection>
              <SectionWiki />
            </FullpageSection>
            {/* <FullpageSection>
              <Achievements />
            </FullpageSection> */}
            <FullpageSection>
              <RollingPaper />
            </FullpageSection>
            <FullpageSection isAutoHeight={true}>
              <Footer />
            </FullpageSection>
          </FullpageContainer>
        )}
      </StyledMainWrapper>
    </BaseTemplate>
  );
}

const StyledMainWrapper = styled.main`
  .is-mobile & {
    min-width: 360px;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    .mobile {
      padding: 76px 0 0;
      width: 100%;
      overflow: hidden;
      margin: 0 auto;
    }
  }
  min-width: ${config.$desktopMaxWidth};
  background: #000;
  .has_footer {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
