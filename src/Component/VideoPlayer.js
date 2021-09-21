import React, { Component } from "react";
import YouTube from "react-youtube";

class VideoPlayer extends Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { videoId } = this.props;
    return (
      <div className="Youtube_Player">
        <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
      </div>
    );
  }
}

export default VideoPlayer;
