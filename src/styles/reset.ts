import { css } from 'styled-components';

const reset = css`
  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  select,
  table,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }

  body,
  button,
  input,
  select,
  table,
  textarea {
    font: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font: inherit;
  }

  textarea {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: transparent;
    border: 0;
    word-break: keep-all;
    word-wrap: break-word;
  }

  button,
  input {
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
  }

  button {
    border-radius: inherit;
    background-color: transparent;
  }

  fieldset,
  img {
    border: 0;
  }

  img {
    vertical-align: top;
  }

  ol,
  ul {
    list-style: none;
  }

  address,
  em {
    font-style: normal;
  }

  a {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }

  i {
    font-style: normal;
  }
`;

export default reset;
