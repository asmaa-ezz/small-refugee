import React, { Component } from "react";
import VideoPlayer from "react-video-js-player";

class Video extends Component {
  player = {};
  state = {
    video: {
      src:
        "https://small-refugee.herokuapp.com/media/videos/CGI_Animated_Short_Film-_Watermelon_A_Cautionary_Tale_by_Kefei_Li__Connie_Qin_He__ttE1AUh.mp4",
      poster: ""
    }
  };

  onPlayerReady(player) {
    console.log("Player is ready: ", player);
    this.player = player;
  }

  onVideoPlay(duration) {
    console.log("Video played at: ", duration);
  }

  onVideoPause(duration) {
    console.log("Video paused at: ", duration);
  }

  onVideoTimeUpdate(duration) {
    console.log("Time updated: ", duration);
  }

  onVideoSeeking(duration) {
    console.log("Video seeking: ", duration);
  }

  onVideoSeeked(from, to) {
    console.log(`Video seeked from ${from} to ${to}`);
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
          width="663.75"
          height="285"
          onReady={this.onPlayerReady.bind(this)}
          onPlay={this.onVideoPlay.bind(this)}
          onPause={this.onVideoPause.bind(this)}
          onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
          onSeeking={this.onVideoSeeking.bind(this)}
          onSeeked={this.onVideoSeeked.bind(this)}
          onEnd={this.onVideoEnd.bind(this)}
        />
      </div>
    );
  }
}

export default Video;
