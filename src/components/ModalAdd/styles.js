import styled from "styled-components";

export const Container = styled.div`
  z-index: ${(props) => (props.visibility ? "1" : "-1")};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;

  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier();
  animation-duration: 0.3s;

  > div {
    background-color: #fff;
    width: 35%;
    height: 60%;
    background-color: rgb(43, 49, 54);
    border-radius: 10px;
    flex-direction: column;
    padding: 20px;
    & > div {
      margin: 20px;
    }
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

export const Dialog = styled.div`
  position: relative;
  width: 30%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(43, 49, 54);
  opacity: 1 !important;

  & > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    & > h2 {
      font-weight: bold;
    }
    & > h3 {
      font-weight: 400;
    }
  }
  & > span > div {
    width: 80px;
    height: 80px;
    background-color: rgb(64, 69, 73);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      color: #de2d2d;
      font-size: 45px;
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: -15px;
  top: -15px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  border-radius: 50%;
  height: 40px;
  background-color: rgb(64, 69, 73);
  color: #fff;
  :hover {
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #13b441;
  transition: 0.3s;
  color: #fff;

  :hover {
    cursor: pointer;
    background-color: #119336;
  }
`;
