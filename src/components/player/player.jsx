import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import backgroundSong from "../../assets/audio/song.mp3";

const Player = () => (
  <AudioPlayer
    autoPlay
    src={backgroundSong}
    // onPlay={e => console.log("onPlay")}
    // other props here
    showJumpControls={false}
    showFilledProgress={false}
    layout={'horizontal-reverse'}
  />
);

export default Player;