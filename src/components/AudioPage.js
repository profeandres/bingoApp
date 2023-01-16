import React from "react";
import sound from "../assets/bingo-background.mp3";
import "../styles/audio.css";

export const AudioPage = () => {
  const audio = new Audio(sound)
  const handleVolume = () =>{

  }
  const handleMuted = () =>{
    if(audio.muted){
      audio.muted=false
    }else{
      audio.muted=true
    }
  }
  return (
    <div className="audio">
      <input
        type="range"
        name="volume"
        id=""
        defaultValue={0.1}
        onChange={handleVolume}
        step={0.01}
        min={0}
        max={1}
      />

      <button onClick={handleMuted}>mute</button>
    </div>
  );
};
