import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.header`
  display: block;
  width: 100%;
  position: absolute;
  padding: 10px 6px;
  color: #fff;
  background: ${Props => Props.color};
  z-index: 9;
`;

export const Conteudo = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  position: fixed;
  z-index: 6;
`;

export const Messenger = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 6px;

  div {
    display: flex;
    align-items: center;
    flex-direction: ${Props => Props.reverse ? 'row-reverse' : 'row'};
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.2s;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 5px;
    margin-left: 5px;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Text = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${Props => Props.reverse ? Props.color : '#fff'};
  color: ${Props => Props.reverse ? '#fff' : '#000'};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: ${Props => Props.reverse ? '15px' : '7px'};
  border-bottom-right-radius: ${Props => Props.reverse ? '7px' : '15px'};
  width: auto;
  padding: 12px;
  position: relative;

  p {
    font-size: ${Props => Props.fontSize};
  }

  ul {
    display: block;
    margin-top: 12px;
    list-style: none;

    li {
      width: 100%;

      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        min-width: 240px;
        flex: 1;
        border: none;
        border-radius: 4px;
        color: #fff;
        padding: 4px 6px;
        background: ${Props => Props.color};

        &:hover {
          background: ${Props => darken(0.06, Props.color)};
        }
      }
    }

    li + li {
      margin-top: 4px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 98%;
  height: 55px;
  background: ${Props => Props.color};
  position: absolute;
  bottom: 5px;
  left: 1%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 9;

  form {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  .anexar {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    width: 35px;
    height: 35px;
  }

  .send {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    width: 58px;
    height: 35px;
  }

  input {
    width: 100%;
    height: 32px;
    padding-left: 4px;
    padding-right: 4px;
    border: none;
    background: #0457A9;
    border-radius: 4px;
    color: #fff;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
