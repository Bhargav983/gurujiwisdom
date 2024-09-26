import React from "react";
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = () => {
  return (
    <div>
      <ReactAudioPlayer
        src={`${process.env.PUBLIC_URL}/audio/ssy/ssy-english/Day 01A Purpose.mp3`}
        autoPlay={false}
        controls
      />
    </div>
  );
};

export default AudioPlayer;
