import React from "react";
import "../Styles/styles.module.css";
import PhotoSvg from "./PhotoSvg";
import VideoSvg from "./VideoSvg";
import EmojiSvg from "./EmojiSvg";
function MiniComp() {
  return (
    <div className="container">
      <div className="share-options">
        <VideoSvg /> <p>Live Video</p>
      </div>
      <div className="share-options">
        <PhotoSvg /> <p>Photo/Video</p>
      </div>

      <div className="share-options">
        <EmojiSvg /> <p>Feeling/Activity</p>
      </div>
    </div>
  );
}

export default MiniComp;
