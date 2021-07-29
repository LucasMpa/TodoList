import styled from "styled-components";
import { Dimensions } from "../../utils/constants";

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
    width: 30%;
    max-width: 420px;
    height: 30%;

    @media (max-width: ${Dimensions.maxWidth}) {
      width: 60%;
      height: 270px;
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
  height: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: rgb(43, 49, 54);
  opacity: 1;

  & > div {
    > section {
      margin-top: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      & > span {
        display: flex;
        flex-direction: column;
      }
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
  right: 0px;
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
