import styled from "styled-components";

export const Block = styled.div`
  height: 100vh;
  width: 100%;
  text-align: center;
  background: #181818;
  color: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background: #222222;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #585858;
  }
  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    margin-top: 20px;
    flex-wrap: wrap;
    img {
      height: 100px;
      width: 100px;
    }
    h1 {
      margin-left: 10px;
    }
  }
  p {
    max-width: 650px;
    margin: 20px auto;
  }
  .socials {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    .box {
      margin: 10px;
      height: 250px;
      width: 250px;
      background: #222222;
      cursor: pointer;
      border-radius: 10px;
      transition: 0.2s;
      padding: 30px;
      img {
        height: 150px;
        width: 150px;
        margin: auto;
      }
      .title {
        text-align: center;
        font-size: 35px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
