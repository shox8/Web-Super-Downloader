import React from "react";
import { Block } from "./style";
import { useNavigate } from "react-router-dom";

function Web() {
  const navigate = useNavigate();

  return (
    <Block>
      <div className="brand">
        <img src={require("../assets/logo.png")} draggable={false} />
        <h1>Super Downloader</h1>
      </div>
      <p>
        Download Videos from Multiple Social Media Platforms.Tips and Methods
        for Preserving MP4 Videos in High Definition HD Quality.t is very easy
        with Super Downlaoder, any video or image, download twitter, download
        facebook, download instagram etc. to your mobile, PC or Mac easily in
        less than a minute.
      </p>
      <div className="socials">
        <div className="box" onClick={() => navigate("/instagram")}>
          <div className="logo">
            <img
              src={require("../assets/instagram-logo.png")}
              draggable={false}
            />
          </div>
          <div className="title">Instagram</div>
        </div>
        <div className="box" onClick={() => navigate("/youtube")}>
          <div className="logo">
            <img
              src={require("../assets/youtube-logo.png")}
              draggable={false}
            />
          </div>
          <div className="title">Youtube</div>
        </div>
        <div className="box" onClick={() => navigate("/tiktok")}>
          <div className="logo">
            <img src={require("../assets/tiktok-logo.png")} draggable={false} />
          </div>
          <div className="title">Tiktok</div>
        </div>
        <div className="box" onClick={() => navigate("/facebook")}>
          <div className="logo">
            <img
              src={require("../assets/facebook-logo.png")}
              draggable={false}
            />
          </div>
          <div className="title">Facebook</div>
        </div>
      </div>
    </Block>
  );
}

export default Web;
