import React, { useRef } from "react";
import { Style } from "./style";

const Video = ({ file }) => {
  const effect = useRef();

  const playing = () => {
    effect.current.play();
  };

  const pause = () => {
    effect.current.pause();
  };

  const timeupdate = (e) => {
    effect.current.currentTime = e.target.currentTime;
  };

  return (
    <Style>
      <video src={file} className="effect" ref={effect} muted></video>
      <video
        src={file}
        className="video"
        onPlaying={playing}
        onPause={pause}
        onTimeUpdate={(e) => timeupdate(e)}
        controls
        autoPlay
      ></video>
    </Style>
  );
};

export default Video;
