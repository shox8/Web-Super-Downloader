import React, { useState } from "react";
import { Block } from "./style";
import get from "./utils";
import Video from "../video";

function Tiktok() {
  const [state, setstate] = useState({
    link: "",
    loader: false,
    valid: "",
    video: "",
    audio: "",
  });

  function getMedia(e) {
    e.preventDefault();
    if (state.link) get(state.link, setstate);
  }

  function change(e) {
    setstate((p) => ({ ...p, valid: false }));
    setstate((p) => ({ ...p, link: e.target.value }));
  }

  return (
    <Block>
      <div className="title">
        <img src={require("../assets/tiktok-logo.png")} draggable={false} />
        Tiktok
      </div>
      <form onSubmit={(e) => getMedia(e)}>
        <input
          type="text"
          value={state.link}
          name="link"
          placeholder="Paste Tiktok Video Url"
          onChange={(e) => change(e)}
          className={state.valid ? "warrning" : ""}
          required
        />
        <button onClick={getMedia} type="submit" disabled={state.valid}>
          <div className={state.loader ? "loader" : ""}></div> Get Video
        </button>
      </form>
      <div className="medias">
        {state.video !== "" ? (
          <div className="video">
            <Video file={state.video} />
          </div>
        ) : (
          <div className="videoPl">
            <h1>Video not avilable</h1>
          </div>
        )}
      </div>
    </Block>
  );
}

export default Tiktok;
