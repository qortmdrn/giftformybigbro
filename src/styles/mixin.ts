import { css } from 'styled-components';
import config from './config';

export const reset = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  vertical-align: top;
  text-underline-position: under;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
`;

export const hoverDown = css`
  transition: translate 200ms;
  &:hover {
    translate: 0 2px;
  }
`;

export const hidden = css`
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: -1;
  visibility: hidden;
`;

export const hiddenText = css`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  background-color: transparent;
  clip: rect(0px, 0px, 0px, 0px);
  white-space: nowrap;
`;

export const ellipsis = (line: number) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${line};
`;

export const contentOuterMixin = ({
  height,
  bgSrc,
  bgColor,
}: {
  height: {
    pc: string;
    mo: string;
  };
  bgSrc?: {
    pc: string;
    mo: string;
  };
  bgColor?: string;
}) => css`
  .is-mobile & {
    scroll-margin-top: 30px;
    min-width: ${config.$mobileMinWidth};
    max-width: ${config.$mobileMaxWidth};
    height: ${height.mo};

    ${bgSrc &&
    css`
      background-image: url(${bgSrc?.mo});
    `}
    margin: 0 auto;
  }
  scroll-margin-top: 60px;
  height: ${height.pc};
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: auto 100%;
  ${bgSrc &&
  css`
    background-image: url(${bgSrc?.pc});
  `}
  ${bgColor &&
  css`
    background-color: ${bgColor};
  `}
`;

export const contentInnerMixin = css`
  .is-mobile & {
    min-width: ${config.$mobileMinWidth};
    max-width: ${config.$mobileMaxWidth};
    width: 100%;
    padding: 54px 0 53px;
  }

  position: relative;
  width: ${config.$desktopMinWidth};
  height: 100%;
  margin: 0 auto;
  padding: 71px 20px;
`;

export const visibleTransitionMixin = css`
  .visible-transition-enter {
    opacity: 0;
    filter: blur(1rem);
  }
  .visible-transition-enter-active {
    opacity: 1;
    filter: blur(0px);
    transition: all 300ms;
  }
  .visible-transition-exit {
    opacity: 1;
    filter: blur(0px);
  }
  .visible-transition-exit-active {
    opacity: 0;
    filter: blur(1rem);
    transition: all 300ms;
  }
`;