import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 20px;
  color: white;
  width: 100%;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;

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
        color: ${(props) => (props.isConclued ? "#6841db" : "#FFF")};
        opacity: ${(props) => (props.isConclued ? "1" : "0.3")};
        font-size: 70px;
        margin-bottom: 10px;
      }
    }
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
`;

export const Actions = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > span {
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

  & > textarea {
    display: ${(props) => (props.editDescription ? "block" : "none")};
  }
  & > p,
  h2 {
    display: ${(props) => (props.editDescription ? "none" : "block")};
  }
`;

export const NewTask = styled.div`
  width: 100%;
  height: 80px;
  & > span {
    transition: 0.3s;
    cursor: pointer;
    position: absolute;
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
    background-color: #6841db;
  }

  & > span:hover {
    background-color: #562ada;
  }
`;
