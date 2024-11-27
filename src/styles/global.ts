import '@lani.ground/react-modal/css';
import { createGlobalStyle } from 'styled-components';
import config from './config';
import { reset } from './mixin';


const GlobalStyle = createGlobalStyle`
  *,
  :before,
  :after {
    ${reset};
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-weight: 900 !important;
    font-size: 16px;
    line-height: 1.5;
    color: #000;
    background: #000;
    -webkit-text-size-adjust: 100%;
    min-width: ${config.$mobileMinWidth};
    &.is-mobile {
      font-size: 12px;
    }
    &.is-scroll-lock {
      overflow: hidden;
    }
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    width: 100%;
    border-spacing: 0;
    table-layout: fixed;
  }
  th,
  td {
    text-align: center;
    vertical-align: middle;
  }
  a {
    text-decoration: none;
  }
  button,
  input[type='file'],
  input[type='image'],
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {
    border: none;
    border-radius: 0;
    background: none;
    appearance: none;
    cursor: pointer;
  }
  input:not([type]),
  input[type='date'],
  input[type='datetime-local'],
  input[type='email'],
  input[type='month'],
  input[type='number'],
  input[type='password'],
  input[type='search'],
  input[type='tel'],
  input[type='text'],
  input[type='time'],
  input[type='url'],
  input[type='week'],
  textarea,
  select {
    display: inline-block;
    width: 100%;
    height: 40px;
    font-size: 16px;
    line-height: 38px;
    color: #000;
    padding: 0 10px;
    border: 1px solid #ccc;
    background: #fff;
    box-shadow: none;

    &:disabled {
      background: #f7f7f7;
    }
    &::placeholder {
      color: #999;
    }
  }
  textarea {
    height: 300px;
    padding: 10px;
    line-height: 1.5;
  }
  input[type='number'] {
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      appearance: none;
    }
  }

  img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
  /* @lani.ground/react-modal */
  .react-modal__container__enter.mobile-lnb .mobile-lnb-container {
    opacity: 1;
    transform: translateX(0);
    transition: all .3s;
  }
  .react-modal__container__exit.mobile-lnb .mobile-lnb-container {
    opacity: 0;
    transform: translateX(100%);
    transition: all .3s;
  }

  /* transition-group */
  .dropdown-enter {
    opacity: 0;
    transform: translate(0, -20px);
  }
  .dropdown-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition:
      transform 300ms,
      opacity 300ms;
  }
  .dropdown-exit {
    opacity: 1;
  }
  .dropdown-exit-active {
    opacity: 0;
    transform: translate(0, -20px);
    transition:
      transform 300ms,
      opacity 300ms;
  }
`;

export default GlobalStyle;