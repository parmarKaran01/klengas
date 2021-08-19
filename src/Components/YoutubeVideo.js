import React from 'react';
import YouTube from 'react-youtube';
// import './HeroSection.css'
class YoutubeVideo extends React.Component {

  _onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '237',
      width: '390',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const {videoId} = this.props; 
    return <YouTube className='video' videoId={videoId} opts={opts} onReady={this._onReady} />;
  }

}
export default YoutubeVideo