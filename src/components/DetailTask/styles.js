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

      & > svg {
        color: #6841db;
        font-size: 70px;
        margin-bottom: 10px;
      }
    }
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
  & > h2,
  h4 {
    margin: 0;
  }

  & > h4 {
    opacity: 0.4;
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
