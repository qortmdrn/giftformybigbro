'use client';

import config from "@/styles/config"
import styled from "styled-components"
import {FullpageContainer, FullpageSection} from '@shinyongjun/react-fullpage';
import { useState } from "react";
import useMobileChecker from "../hooks/useMobileChecker";
import React from "react";
import Visual from "./Visual";
import BaseTemplate from "../template/BaseTemplate";

export default function MainWrapper() {

    const [beforeIndex, setBeforeIndex] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const { isMobile } = useMobileChecker();
        return (<BaseTemplate>
          <StyledMainWrapper>
              {isMobile ? (<><Visual /></>) : (<FullpageContainer transitionDuration={1300}
              onBeforeChange={setBeforeIndex}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
                  <FullpageSection>
                      <Visual />
                      </FullpageSection>
                      </FullpageContainer>)}
              </StyledMainWrapper>
          </BaseTemplate>)
        
        
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
  .has_footer {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`