import { createGlobalStyle } from 'styled-components';

import bg from '~/assets/bg-chat.png';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  a {
  text-decoration: none;
  transition-duration: 0.5s;
}

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #eee;
    -webkit-font-smoothing: antialiased !important;
    font-family: Roboto, sans-serif;
    height: 100%;
    background: url(${bg}) repeat;
  }

  button, input {
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  }

  .conteudo {
    display: block;
    width: 100%;
    max-width: 600px;
  position: relative;
  top: 0;
  left: 0;
  transform: translateX(0) translateY(0);
  -moz-transform: translateX(0) translateY(0);
  -ms-transform: translateX(0) translateY(0);
  -o-transform: translateX(0) translateY(0);
  -webkit-transform: translateX(0) translateY(0);
  z-index: 999;

  p {
    font-size: 12px;
  }
  }

@media only screen and (min-width: 481px) {
  .conteudo {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    transform: translateX(0) translateY(0);
  -moz-transform: translateX(0) translateY(0);
  -ms-transform: translateX(0) translateY(0);
  -o-transform: translateX(0) translateY(0);
  -webkit-transform: translateX(0) translateY(0);
    z-index: 999;
  }
}

@media only screen and (min-width: 1024px) {
  .conteudo {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    z-index: 999;
  }
}

@media only screen and (min-width: 1280px) {
  .conteudo {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    z-index: 999;
  }
}

  table {
    border-collapse: collapse;
    flex: 1;
  }

  select option {
    font-size: 16px;
  }

  table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
    font-size: 12px;
    width: 100%;
  }

  thead {
    font-weight: bold;
    color: #0085B2;
    font-size: 14px;
  }

  thead tr td {
    padding: 10px;
  }

  tbody tr td {
    padding: 10px;
  }

  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .table-hover tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }
`;
