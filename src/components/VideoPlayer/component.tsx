import React from 'react';
import Video, { VideoProperties } from 'react-native-video';

interface IVideoPlayer {
  renderSize: {
    width: number;
    height: number;
  };
  source: VideoProperties['source'];
}

const VideoPlayer = ({ renderSize, source }: IVideoPlayer) => {
  return (
    <Video
      source={source}
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
