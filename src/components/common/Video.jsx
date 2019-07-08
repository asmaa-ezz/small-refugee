import React, { Component } from "react";
import VideoPlayer from "react-video-js-player";

class Video extends Component {
  player = {};
  state = {
    video: {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster:
        "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  };

  onPlayerReady(player) {
    console.log("Player is ready: ", player);
    this.player = player;
  }

  onVideoEnd() {
    console.log("Video ended");
  }

  render() {
    return (
      <div>
        <VideoPlayer
          controls={true}
          src={this.state.video.src}
          poster={this.state.video.poster}
          width="720"
          height="420"
          onReady={this.onPlayerReady.bind(this)}
          onEnd={this.onVideoEnd.bind(this)}
        />
      </div>
    );
  }
}

export default Video;
