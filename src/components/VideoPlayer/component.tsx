import React from 'react';
import Video from 'react-native-video';

interface IVideoPlayer {
  renderSize: {
    width: number;
    height: number;
  };
  uri: string;
}

const VideoPlayer = ({ renderSize, uri }: IVideoPlayer) => {
  return (
    <Video
      source={{ uri }}
      playInBackground={false}
      playWhenInactive
      controls={false}
      repeat
      fullscreen={false}
      paused={false}
      muted
      resizeMode="cover"
      style={{
        ...renderSize,
      }}
    />
  );
};

export default VideoPlayer;
