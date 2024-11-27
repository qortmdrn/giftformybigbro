'use client';

import styled from 'styled-components';
import useMobileChecker from '../hooks/useMobileChecker';

export default function BaseTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile } = useMobileChecker();

  return (
    <BaseTemplateContainer className={`${isMobile ? 'is-mobile' : ''}`}>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </BaseTemplateContainer>
  );
}

const BaseTemplateContainer = styled.div`
  background: #fff;
`;