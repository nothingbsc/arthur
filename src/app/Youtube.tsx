'use client'
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Youtube() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '300',
    width: '300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      loop: 1
    },
  };

  return <YouTube videoId="j40YC5d6RzA" opts={opts} onReady={onPlayerReady} />;
}