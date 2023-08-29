import styled from "styled-components";

export const Style = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 5px;
  width: 50%;
  video.effect {
    width: calc(90% + 80px);
    height: calc(90% + 80px);
    filter: blur(35px);
    position: absolute;
    outline: none;
    border-radius: 5px;
  }
  video.video {
    width: 98%;
    height: 98%;
    z-index: 1;
    outline: none;
    border-radius: 5px;
  }
  @media (max-width: 700px) {
    width: 95%;
    video.effect {
      width: 100%;
    }
    video.video {
      width: 100%;
    }
  }
`;
