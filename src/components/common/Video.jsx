import React, { Component } from "react";
import { connect } from "react-redux";
import VideoPlayer from "react-video-js-player";

class Video extends Component {
  player = {};
  state = {
    src: "",
    poster: ""
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

  shouldComponentUpdate(nextProps, nextState) {
    this.props.url !== nextProps.url && this.forceUpdate();

    return this.props.url !== nextProps.url;
  }

  componentDidMount() {
    return this.handleVido();
  }

  componentDidUpdate() {
    return this.handleVido();
  }

  handleVido = () => {
    return (
      <VideoPlayer
        controls={true}
        src={this.props.url}
        poster={this.state.poster}
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
    );
  };

  render() {
    console.log("pppp", this.props.url);
    return (
      <div>
        {this.props.url ? (
          <React.Fragment>
            <VideoPlayer
              controls={true}
              src={this.props.url}
              poster={this.state.poster}
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
          </React.Fragment>
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     // vidoOpen: state.lesson.vidoOpen
//   };
// };

// export default connect(mapStateToProps)(Video);

export default Video;
