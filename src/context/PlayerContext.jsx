import { createContext, useState } from "react";
import { useRef } from "react";
import { songsData } from "../assets/assets";
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekbg = useRef();
  const seekbar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playstatus, setPlaystatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minutes: 0,
    },
    totalTime: {
      second: 0,
      minutes: 0,
    },
  });
  const contextValue = {
    audioRef,
    seekbar,
    seekbg,
    track,
    setTrack,
    playstatus,
    setPlaystatus,
    time,
    setTime,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
