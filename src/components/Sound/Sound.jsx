import { useState, useRef } from "react";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import styled from "styled-components";

export default function Sound() {
  const [isPlaying, setIsPlaying] = useState(true);

  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <StyledAudio autoPlay ref={audioRef} loop id="audio">
        <source src="background-music.mp3" />
      </StyledAudio>
      <SoundWrapper onClick={togglePlay}>{isPlaying ? <GiSoundOff size={30} /> : <GiSoundOn size={30} />}</SoundWrapper>
    </>
  );
}

const StyledAudio = styled.audio`
  display: none;
`;
const SoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 36px;
  height: 36px;
  bottom: 10px;
  right: 10px;
  z-index: 99;
  border-radius: 50px;
  background-color: #ffffff;
  box-shadow: 2px 2px 0.3em #47464628;
`;
