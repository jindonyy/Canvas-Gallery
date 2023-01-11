import { createGlobalStyle } from 'styled-components';

import reset from 'styles/reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: ${({ theme }) => theme.palette.black};
    font-size: ${({ theme }) => theme.fonts.size.base};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    font-family: ${({ theme }) => theme.fonts.family.base};
    font-style: normal;
    line-height: ${({ theme }) => theme.fonts.lineHeight.base};
    letter-spacing: ${({ theme }) => theme.fonts.letterSpacing.base};
  }

  button {
    margin: 0;
    padding: 0;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }

  input {
    margin: 0;
    padding: 0;
    border: none;
    border-radius: inherit;
    :focus-visible {
      outline: none;
    }
  }

  textarea {
    max-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
    background-color: inherit;
    border-radius: inherit;
    color: inherit;
    :focus-visible {
      outline: none;
    }
  }

  img {
    max-width: 100%;
  }

  svg {
    display: block;
  }
`;

export default GlobalStyle;
