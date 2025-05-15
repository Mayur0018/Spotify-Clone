import { createContext, useEffect, useState } from "react";
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

  const play = () => {
    audioRef.current.play();
    setPlaystatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlaystatus(false);
  };
  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlaystatus(true);
  };
  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlaystatus(true);
    }
  };
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlaystatus(true);
    }
  };

  const seekSong = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekbg.current.offsetWidth) *
      audioRef.current.duration;
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        if (audioRef.current && audioRef.current.duration) {
          seekbar.current.style.width =
            Math.floor(
              (audioRef.current.currentTime / audioRef.current.duration) * 100
            ) + "%";
          setTime({
            currentTime: {
              second: Math.floor(audioRef.current.currentTime % 60),
              minutes: Math.floor(audioRef.current.currentTime / 60),
            },
            totalTime: {
              second: Math.floor(audioRef.current.duration % 60),
              minutes: Math.floor(audioRef.current.duration / 60),
            },
          });
        }
      };
    }, 1000);
  
    return () => {
      clearTimeout(interval);
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null;
      }
    };
  }, [audioRef]);
  
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
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
