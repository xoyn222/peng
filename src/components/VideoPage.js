import React from "react";
import "./VideoPage.css";
import {assets} from "../assets/assets";

const VideoPage = () => {
    return (
        <div className="video-page">
            <video
                className="background-video"
                src={assets.test2}
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    );
};

export default VideoPage;