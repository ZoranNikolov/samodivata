import React, { useRef, useEffect, useState } from 'react';
import backgroundMusic from '../../assets/audio/song.mp3'; // Adjust the path if necessary

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Failed to play audio automatically due to browser policies.", error);
        setIsPlaying(false);
      }
    };

    playAudio();

    // Clean up and stop the audio when the component unmounts
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const handlePlayButtonClick = async () => {
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Failed to play audio.", error);
    }
  };

  return (
    <div>
      {!isPlaying && (
        <button onClick={handlePlayButtonClick} style={{ position: 'absolute', top: 10, right: 10 }}>
          Play Background Music
        </button>
      )}
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusic;
