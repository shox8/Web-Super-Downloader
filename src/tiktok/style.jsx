import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  height: 100vh;
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
  .title {
    font-size: 50px;
    text-align: center;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 10px;
      height: 50px;
      width: 50px;
    }
  }
  form {
    width: 50%;
    height: 60px;
    background: #222222;
    border-radius: 5px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    input,
    button {
      border-radius: 5px;
      background: #3d3d3d;
      border: 1px solid #303030;
      height: 100%;
      color: #fff;
      font-size: 18px;
      padding: 0 10px;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      .loader {
        margin-right: 5px;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid #585858;
        border-bottom: 4px solid #585858;
        animation: loader 1s infinite linear;
        @keyframes loader {
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
    .warrning {
      border: 1px solid orange;
    }
    input {
      width: calc(100% - 155px);
      &:focus {
        border: 1px solid #585858;
      }
    }
    button {
      margin-left: 10px;
      width: 150px;
      &:active {
        background: #4e4e4e;
      }
      &:disabled {
        background: #222222;
      }
    }
  }
  .medias {
    padding-top: 20px;
    padding-bottom: 50px;
    .videoPl {
      width: 50%;
      background: #242424;
      min-height: 55vh;
      border-radius: 5px;
      margin: auto;
      display: grid;
      place-items: center;
      padding: 10px;
    }
  }
  @media (max-width: 700px) {
    form {
      width: 95%;
    }
    .medias {
      .videoPl {
        width: 95%;
      }
    }
  }
`;
