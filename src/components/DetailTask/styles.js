import styled from "styled-components";
import { colors, Dimensions } from "../../utils/constants";

export const Container = styled.div`
  position: relative;
  margin: 20px;
  color: white;
  width: 100%;
  @media (max-width: ${Dimensions.maxWidth}) {
    height: 90%;
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: ${Dimensions.maxWidth}) {
      flex-direction: column-reverse;
    }
    & > span {
      display: flex;

      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-weight: bold;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      & > svg {
        cursor: pointer;
        color: ${(props) => (props.isConclued ? colors.primary : "#FFF")};
        opacity: ${(props) => (props.isConclued ? "1" : "0.3")};
        font-size: 70px;
        margin-bottom: 10px;

        @media (max-width: ${Dimensions.maxWidth}) {
          font-size: 50px;
        }
      }
    }
  }
`;

export const NoDataHamburguer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  align-items: center;
  height: 40px;
  padding-top: 20px;
  padding-left: 20px;
  & > svg {
    color: #fff;
    font-size: 33px;
  }
  @media (max-width: ${Dimensions.maxWidth}) {
    display: flex;
  }
`;

export const NoDataContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  > img {
    width: 150px;
  }

  > h3 {
    font-weight: 800;
    color: #e2e2e2;
  }

  @media (max-width: ${Dimensions.maxWidth}) {
    height: 100vw;
  }
`;

export const Actions = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${Dimensions.maxWidth}) {
    justify-content: space-between;
  }

  & > span {
    display: none;
    @media (max-width: ${Dimensions.maxWidth}) {
      display: block;
    }
  }

  & > span > svg {
    font-size: 35px;
  }

  & > div {
    display: flex;
  }
  & > div > span {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-left: 20px;
    border-radius: 50%;
    background-color: #3e454a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
`;

export const Details = styled.div`
  width: 100%;
  padding: 60px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  & > h2,
  h4 {
    margin: 0;
  }

  & > h4 {
    opacity: 0.4;
  }

  & > p,
  h2 {
    text-align: justify;
    word-break: break-word;
    margin: 13px 0px 0px 0px;
  }

  @media (max-width: ${Dimensions.maxWidth}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px;
    margin: 20px 0;
  }
`;

export const NewTask = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  & > span {
    transition: 0.3s;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    font-weight: bold;
    font-size: 15px;
    width: 180px;
    height: 40px;
    background-color: ${colors.primary};
  }

  & > span:hover {
    background-color: #562ada;
  }
`;
