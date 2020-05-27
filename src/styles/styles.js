import styled, { keyframes } from 'styled-components';

export const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const menuRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(80deg);
  }
`;

export const Carregando = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  position: fixed;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  img {
    width: 60px;
    animation: ${rotate} 1s linear infinite;
  }
`;

export const Topo = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 12px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: flex-end;

  div {
    margin-left: 8px;
  }

  img {
    height: 22px;
  }

  img:hover {
    animation: ${menuRotate} 0.6s linear;
  }

  input {
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    color: #000;
    padding-left: 8px;
    padding-right: 8px;
    background: #ededea;
  }
`;
