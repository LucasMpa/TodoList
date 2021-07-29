import styled from "styled-components";
import { colors, Dimensions } from "../../utils/constants";

export const Container = styled.div`
  display: flex;
  width: 30vw;
  height: 100vh;
  background-color: #22262a;
  align-items: center;
  flex-direction: column;
  background-color: #22262a;
  color: white;

  @media (max-width: ${Dimensions.maxWidth}) {
    display: ${(props) => (props.visibility ? "flex" : "none")};
    height: 100vh;
    width: 80%;
    position: fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
    overflow-x: hidden;
    transition: all 0.5s ease 0s;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  width: 100%;
  border-left: 19px solid ${colors.primary};
  align-items: center;
  justify-content: space-between;

  & > svg {
    cursor: pointer;
    transform: ${(props) =>
      props.active ? "rotate (0deg)" : "rotate(180deg)"};
    margin-right: 20px;
    font-size: 20px;
  }
  & > h1 {
    font-size: 20px;
    padding: 15px;
  }
`;

export const ListTasks = styled.div`
  display: ${(props) => (props.active ? "none" : "flex")};
  flex-direction: column;
  color: #abb1ba;
  width: 100%;
  height: 41vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #4d5259;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #1f2326;
    border-radius: 4px;
  }
`;

export const CloseBlock = styled.div`
  @media (max-width: ${Dimensions.maxWidth}) {
    display: ${(props) => (props.visibility ? "block" : "none")};
    position: absolute;
    right: 0;
    height: 100vh;
    width: 20%;
    z-index: 1;
    background-color: #000;
    opacity: 0.5;
  }
`;

export const TaskUnit = styled.div`
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
  flex-direction: row;
  display: flex;
  align-items: center;
  background-color: #1f2326;
  flex-direction: row;

  & > svg {
    transition: 0.5s;
    opacity: ${(props) => (props.isConclued ? "1.0" : "0.3")};
    font-size: 30px;
    color: ${(props) => (props.isConclued ? colors.primary : "#FFF")};
  }

  :hover {
    background-color: ${colors.primary};
    color: white;
    padding: 25px;
    & > svg {
      color: #fff;
    }
  }

  & > div {
    margin-left: 20px;
    & > h2 {
      font-size: 12px;
    }
    & > h3 {
      font-size: 10px;
    }
  }
`;
